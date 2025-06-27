import { useEffect, useRef, useState } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setDirection(currentY < lastY.current ? 'up' : 'down');
      lastY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return direction;
}
