import { lazy, Suspense, useEffect, useState, type ComponentType, type CSSProperties } from 'react';

interface SplineProps {
  scene: string;
  className?: string;
  style?: CSSProperties;
  onLoad?: () => void;
}

const SPLINE_SCENE_URL = 'https://prod.spline.design/JitMjgVujA4EwFnQ/scene.splinecode';
const SPLINE_REACT_PACKAGE_URL = 'https://esm.sh/@splinetool/react-spline@4.1.0?external=react';

const Spline = lazy(async () => {
  const splineModule = await import(/* @vite-ignore */ SPLINE_REACT_PACKAGE_URL) as { default: ComponentType<SplineProps> };
  return { default: splineModule.default };
});

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
    <div
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`absolute inset-0 h-full w-full scale-110 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Suspense fallback={null}>
          <Spline
            scene={SPLINE_SCENE_URL}
            onLoad={() => setIsLoaded(true)}
            className="h-full w-full"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Suspense>
      </div>
    </div>
  );
}
