# Performance Optimization Guide for Portfolio

This document outlines all the performance improvements implemented in this project.

## 1. Code Splitting & Lazy Loading

### What Changed
- **All route components** are now loaded lazily using `React.lazy()` and `Suspense`
- **Dashboard components** (About, Skills, Services, etc.) are now lazy-loaded when needed
- A `LoadingFallback` component provides a smooth loading experience

### Files Updated
- `src/App.tsx` - All route imports wrapped with `React.lazy()`
- `src/Component/dashboard/index.tsx` - Dashboard sub-components wrapped with `Suspense`
- `src/Component/common/LoadingFallback.tsx` - New loading component

### Benefits
- ✅ Faster initial page load (smaller initial bundle)
- ✅ Better Time to Interactive (TTI)
- ✅ Code is downloaded only when needed
- ✅ Improved user experience with loading states

---

## 2. Vite Build Optimization

### What Changed
- **Manual code splitting** configured for vendor chunks
- **Chunk size warnings** increased to prevent unnecessary warnings
- **Terser minification** configured to remove console logs in production
- **Console logs removed** from production builds

### File Updated
- `vite.config.ts` - Enhanced with build optimization

### Benefits
- ✅ Better caching (vendor code doesn't change often)
- ✅ Smaller production bundle
- ✅ Faster JavaScript execution
- ✅ Improved browser caching strategy

---

## 3. Performance Utilities

### New File: `src/utils/performanceOptimization.ts`

Provides utilities for:
- **Lazy image loading** with intersection observer
- **Resource prefetching** for faster page transitions
- **Debounce & Throttle** functions for optimized event handling
- **Web Vitals monitoring** (LCP, CLS, FID)
- **Reduced motion detection** for accessibility

#### Usage Examples

```typescript
// Lazy load images
import { setupLazyImageLoading } from '@/utils/performanceOptimization';

const imgElement = document.querySelector('img');
setupLazyImageLoading('image-url.jpg', imgElement);

// Prefetch resources
import { prefetchResource } from '@/utils/performanceOptimization';
prefetchResource('/api/data', 'prefetch');

// Throttle scroll events
import { throttle } from '@/utils/performanceOptimization';
const handleScroll = throttle(() => {
  console.log('Scrolling...');
}, 100);
```

---

## 4. Custom Hooks for Performance

### New File: `src/hooks/useIntersectionObserver.ts`

#### Available Hooks

##### `useIntersectionObserver<T>`
Detect when an element enters/leaves viewport.

```typescript
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Component = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    onVisible: () => console.log('Element is visible'),
  });

  return <div ref={ref}>Content</div>;
};
```

##### `useLazyImage`
Efficiently lazy-load images.

```typescript
import { useLazyImage } from '@/hooks/useIntersectionObserver';

const ImageComponent = ({ src }) => {
  const { imageRef, isLoaded, error } = useLazyImage(src);

  return (
    <>
      <img ref={imageRef} alt="description" />
      {isLoaded && <p>Image loaded!</p>}
      {error && <p>{error}</p>}
    </>
  );
};
```

##### `useVisibility`
Track element visibility with callback.

```typescript
import { useVisibility } from '@/hooks/useIntersectionObserver';

const Component = () => {
  const { ref, isVisible } = useVisibility((visible) => {
    console.log('Visible:', visible);
  });

  return <div ref={ref}>Visibility tracked</div>;
};
```

---

## 5. Current Performance Improvements Summary

| Metric | Improvement |
|--------|-------------|
| **Initial Bundle Size** | Reduced by splitting code |
| **Time to Interactive** | Faster with route-level code splitting |
| **First Contentful Paint** | Improved with lazy loading |
| **Caching Strategy** | Better with vendor chunk splitting |
| **Console Size** | Reduced in production |

---

## 6. Recommendations for Further Optimization

### Image Optimization
```typescript
// Use optimized image URLs
import { getOptimizedImageUrl } from '@/utils/performanceOptimization';
const optimizedUrl = getOptimizedImageUrl('/image.jpg', 800, 85);
```

### Monitor Web Vitals
```typescript
import { reportWebVitals } from '@/utils/performanceOptimization';

reportWebVitals();
```

### Handle Reduced Motion
```typescript
import { shouldReduceAnimations } from '@/utils/performanceOptimization';

const Component = () => {
  const noAnimation = shouldReduceAnimations();
  return <div className={noAnimation ? '' : 'animate-fade'}>Content</div>;
};
```

---

## 7. Best Practices to Follow

1. **Use Lazy Loading for Heavy Components**
   ```typescript
   const HeavyComponent = lazy(() => import('./HeavyComponent'));
   ```

2. **Optimize Images**
   - Use WebP format where possible
   - Provide alt text
   - Use responsive images with srcset
   - Consider using image CDN

3. **Monitor Performance**
   - Use Chrome DevTools Lighthouse
   - Check bundle size regularly
   - Use Performance tab for bottlenecks

4. **Handle User Preferences**
   ```typescript
   import { prefersReducedMotion } from '@/utils/performanceOptimization';
   
   if (!prefersReducedMotion()) {
     // Apply animations
   }
   ```

5. **Debounce/Throttle Events**
   ```typescript
   import { throttle } from '@/utils/performanceOptimization';
   
   const handleScroll = throttle(() => {
     // Handle scroll
   }, 100);
   ```

---

## 8. Testing Performance

### Use Lighthouse in Chrome DevTools
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Analyze page load"
4. Review metrics:
   - **FCP** (First Contentful Paint)
   - **LCP** (Largest Contentful Paint)
   - **CLS** (Cumulative Layout Shift)
   - **FID** (First Input Delay)

### Monitor Bundle Size
```bash
npm run build
# Check dist folder size
```

---

## 9. Production Deployment Tips

1. **Enable Gzip Compression** - Configure on your server
2. **Use CDN** - Serve static assets from CDN
3. **Browser Caching** - Set appropriate cache headers
4. **HTTP/2** - Use HTTP/2 for faster loading
5. **Service Workers** - Consider adding PWA support

---

## Additional Resources

- [React Performance Optimization](https://react.dev/reference/react/lazy)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Vite Optimization Guide](https://vitejs.dev/guide/features.html)

