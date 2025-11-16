/**
 * Performance Optimization Utilities
 * Includes lazy image loading, intersection observer helpers, and more
 */

/**
 * Create an intersection observer for lazy loading images
 * @param imageSrc - Source URL of the image
 * @param imageElement - The image DOM element
 * @param options - Optional IntersectionObserver options
 */
export const setupLazyImageLoading = (
  imageSrc: string,
  imageElement: HTMLImageElement,
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = imageSrc;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, options);

    observer.observe(imageElement);
  } else {
    // Fallback for browsers without IntersectionObserver
    imageElement.src = imageSrc;
  }
};

/**
 * Prefetch resources for better performance
 * @param url - URL to prefetch
 * @param rel - Relationship type ('prefetch', 'preload', 'preconnect')
 */
export const prefetchResource = (url: string, rel: 'prefetch' | 'preload' | 'preconnect' = 'prefetch') => {
  const link = document.createElement('link');
  link.rel = rel;
  link.href = url;
  if (rel === 'preload') {
    link.as = url.includes('.js') ? 'script' : url.includes('.css') ? 'style' : 'fetch';
  }
  document.head.appendChild(link);
};

/**
 * Debounce function for scroll/resize events
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for frequent events
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Memory-efficient scroll event listener
 */
export const onScroll = (callback: () => void, delay: number = 100) => {
  const throttledCallback = throttle(callback, delay);
  window.addEventListener('scroll', throttledCallback);

  return () => {
    window.removeEventListener('scroll', throttledCallback);
  };
};

/**
 * Optimize animations based on user preferences and device capabilities
 */
export const shouldReduceAnimations = (): boolean => {
  return prefersReducedMotion() || !('requestAnimationFrame' in window);
};

/**
 * Get optimized image URL with size and quality parameters
 * Useful for external image services
 */
export const getOptimizedImageUrl = (
  url: string,
  width?: number,
  quality: number = 80
): string => {
  // This is a template for services like Cloudinary, Imgix, etc.
  // Adjust based on your image service
  if (width) {
    return `${url}?w=${width}&q=${quality}`;
  }
  return url;
};

/**
 * Report Web Vitals for performance monitoring
 */
export const reportWebVitals = () => {
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        // console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Browser doesn't support LCP
    }

    // Cumulative Layout Shift
    try {
      let clsScore = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsScore += (entry as any).value;
          }
        }
        console.log('CLS:', clsScore);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Browser doesn't support CLS
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', (entry as any).processingDuration);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // Browser doesn't support FID
    }
  }
};
