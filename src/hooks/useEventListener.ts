import { useEffect, useRef } from 'react';

const useEventListener = (
  eventType: string,
  target: any = window,
  listener: any
) => {
  const savedEventListener = useRef<any>(null);

  useEffect(() => {
    savedEventListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target.addEventListener) {
      return;
    }
    const eventListener = (e: any) => savedEventListener.current(e);
    target.addEventListener(eventType, eventListener);
    return () => target.removeEventListener(eventType, eventListener);
  }, [eventType, target]);
};

export default useEventListener;
