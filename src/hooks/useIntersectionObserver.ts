import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  onVisible?: () => void;
  onHidden?: () => void;
}


export const useIntersectionObserver = <T extends HTMLElement>(
  options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, onVisible, onHidden, ...observerOptions } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        onVisible?.();
      } else {
        setIsVisible(false);
        onHidden?.();
      }
    }, { threshold, ...observerOptions });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, onVisible, onHidden, observerOptions]);

  return { ref, isVisible };
};

/**
 * Custom hook for lazy loading images
 */
export const useLazyImage = (imageSrc: string) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = imageSrc;
        img.onload = () => setIsLoaded(true);
        img.onerror = () => setError('Failed to load image');
        observer.unobserve(img);
      }
    }, { threshold: 0.1 });

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, [imageSrc]);

  return { imageRef, isLoaded, error };
};

/**
 * Custom hook for tracking element visibility
 */
export const useVisibility = <T extends HTMLElement>(
  callback?: (isVisible: boolean) => void
) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      callback?.(entry.isIntersecting);
    }, { threshold: 0.5 });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  return { ref, isVisible };
};
