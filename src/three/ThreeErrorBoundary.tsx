import { Component, type ReactNode } from "react";

/**
 * 3D layer guard: if anything in the WebGL pipeline throws at runtime
 * (decoder failure, context loss, driver quirks), the site keeps working
 * on the static backdrop — the DOM never depends on the 3D layer.
 */
export class ThreeErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    // Intentionally silent: the fallback layer takes over visually.
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
