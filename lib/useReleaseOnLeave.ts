import { useEffect, useRef, type RefObject } from 'react';
import { releaseWithin } from './webglGuard';

export function useReleaseOnLeave(active: boolean, ref: RefObject<HTMLElement | null>) {
  const prev = useRef(active);
  useEffect(() => {
    const leaving = prev.current && !active; // só na transição true -> false
    prev.current = active;
    if (!leaving) return;
    console.log('[gl] saindo da seção');
    const id = requestAnimationFrame(() => releaseWithin(ref.current));
    return () => cancelAnimationFrame(id);
  }, [active, ref]);
}