import { BASIC_SCROLL_TIMER } from 'libs/utils/constants';
import React from 'react';

// 스크롤 감지에 사용되는 setTimeout 타입
type Timeout = ReturnType<typeof setTimeout> | undefined;

export default function useHideScroll(isScrollNeedsDisplay?: boolean) {
  // 스크롤 발생 여부를 감지하는 state - 스크롤이 가능하다는 것을 알리기 위해 기본값을 true로 설정
  // isScrollCaptured state는 스크롤바 display에 사용 - true에 표시
  const [isScrollCaptured, setIsScrollCaptured] = React.useState<boolean>(true);
  // 스크롤에 사용되는 setTimeout 타이머를 저장하는 Ref
  const timer = React.useRef<Timeout | null>(null);

  // 리스트 아이템 목록이 드러나면 일정 시간 후 스크롤 바를 숨김 - 스크롤이 가능하다는 것을 알리기 위함
  React.useEffect(() => {
    let scrollTimer: Timeout;
    if (isScrollNeedsDisplay) {
      scrollTimer = setTimeout(
        () => setIsScrollCaptured(false),
        BASIC_SCROLL_TIMER,
      );
    }
    return () => clearTimeout(scrollTimer);
  }, [isScrollNeedsDisplay]);

  // 스크롤 발생 여부를 체크해 스크롤바를 보이게 만드는 핸들러 - onScrollCapture에 사용
  const onScrollCapture = React.useCallback(() => {
    setIsScrollCaptured(true);
  }, []);

  // 스크롤을 마친 뒤 일정 시간 후에 스크롤 바를 숨기기 위한 핸들러 - onScroll에 사용
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
