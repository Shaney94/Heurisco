import { Component, lazy, Suspense, useEffect, useState, type ErrorInfo, type ReactNode } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SPLINE_SCENE_URL = 'https://prod.spline.design/JitMjgVujA4EwFnQ/scene.splinecode';

interface SplineErrorBoundaryProps {
  children: ReactNode;
}

interface SplineErrorBoundaryState {
  hasError: boolean;
}

class SplineErrorBoundary extends Component<SplineErrorBoundaryProps, SplineErrorBoundaryState> {
  state: SplineErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): SplineErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('Spline hero background failed to load.', error, info);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

export function SplineHeroBackground() {
  const [useSpline, setUseSpline] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');

    const updateSplinePreference = () => {
      setUseSpline(mediaQuery.matches);
    };

    updateSplinePreference();
    mediaQuery.addEventListener('change', updateSplinePreference);

    return () => {
      mediaQuery.removeEventListener('change', updateSplinePreference);
    };
  }, []);

  if (!useSpline) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" aria-hidden="true">
      <SplineErrorBoundary>
        <Suspense fallback={null}>
          <div
            className={`absolute inset-0 h-full w-full scale-[1.08] transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <Spline
              scene={SPLINE_SCENE_URL}
              onLoad={() => setIsLoaded(true)}
              className="h-full w-full"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </Suspense>
      </SplineErrorBoundary>
    </div>
  );
}
