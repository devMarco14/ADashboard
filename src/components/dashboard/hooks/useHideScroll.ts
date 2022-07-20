import { BASIC_SCROLL_TIMER } from 'libs/utils/constants';
import React from 'react';

type Timeout = ReturnType<typeof setTimeout> | undefined;

export default function useHideScroll(isScrollNeedsDisplay?: boolean) {
  const [isScrollCaptured, setIsScrollCaptured] = React.useState<boolean>(true);
  const timer = React.useRef<Timeout | null>(null);

  React.useEffect(() => {
    let scrollTimer: Timeout;
    if (isScrollNeedsDisplay) {
      if (!isScrollCaptured) setIsScrollCaptured(true);
      scrollTimer = setTimeout(
        () => setIsScrollCaptured(false),
        BASIC_SCROLL_TIMER,
      );
    }
    return () => clearTimeout(scrollTimer);
  }, [isScrollNeedsDisplay]);

  const onScrollCapture = React.useCallback(() => {
    setIsScrollCaptured(true);
  }, []);

  const onScroll = React.useCallback(handleScroll, []);

  function handleScroll(): void {
    if (timer.current !== null) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setIsScrollCaptured(false);
    }, BASIC_SCROLL_TIMER);
  }

  return { isScrollCaptured, onScrollCapture, onScroll };
}
