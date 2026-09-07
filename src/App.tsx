import { Suspense, lazy, useEffect, useMemo } from "react";
import { StaticBackdrop } from "./components/ui/StaticBackdrop";
import { Grain } from "./components/ui/Grain";
import { ScrollProgressRail } from "./components/ui/ScrollProgressRail";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Manifesto } from "./components/sections/Manifesto";
import { Work } from "./components/sections/Work";
import { Services } from "./components/sections/Services";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { isWebGLAvailable } from "./lib/webgl";
import { initSmoothScroll, destroySmoothScroll } from "./lib/smoothScroll";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { usePointerNormalized } from "./hooks/usePointerNormalized";
import {
  usePrefersReducedMotion,
  useIsMobileViewport,
} from "./hooks/useMediaQuery";

// The whole 3D stage (canvas + loaders) is deferred until idle time so the
// DOM shell paints first. WebGL check stays synchronous for the fallback.
const StageCanvas = lazy(() =>
  import("./three/StageCanvas").then((m) => ({ default: m.StageCanvas }))
);

export default function App() {
  const webgl = useMemo(() => isWebGLAvailable(), []);
  const reducedMotion = usePrefersReducedMotion();
  const mobile = useIsMobileViewport();
  const scroll = useScrollProgress();
  const pointer = usePointerNormalized();

  useEffect(() => {
    if (reducedMotion) return;
    initSmoothScroll();
    return () => destroySmoothScroll();
  }, [reducedMotion]);

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-noir-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-noir-bg"
      >
        Skip to content
      </a>

      {/* Experience layer: real WebGL scene, static fallback when unavailable */}
      {webgl ? (
        <Suspense fallback={<StaticBackdrop />}>
          <StageCanvas scroll={scroll} pointer={pointer} reducedMotion={reducedMotion} mobile={mobile} />
        </Suspense>
      ) : (
        <StaticBackdrop />
      )}

      <Grain />
      <CustomCursor />
      <ScrollProgressRail />
      <Navbar />

      {/* Information layer: DOM */}
      <main className="relative z-20 w-full">
        <Hero />
        <Manifesto />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
