import { useEffect, useRef } from 'react';
import { useKitchenStore } from '../store/useKitchenStore';

export const useWakeLock = () => {
  const isActive = useKitchenStore((state) => state.isActive);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    let isMounted = true;

    const requestWakeLock = async () => {
      if ('wakeLock' in navigator && isMounted && isActive) {
        try {
          wakeLockRef.current = await navigator.wakeLock.request('screen');
          console.log('Wake Lock ativo');
          
          wakeLockRef.current.addEventListener('release', () => {
            console.log('Wake Lock liberado pelo SO');
          });
        } catch (err) {
          console.error(`Erro ao solicitar Wake Lock: ${err}`);
        }
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isActive && wakeLockRef.current?.released) {
        requestWakeLock();
      }
    };

    if (isActive) {
      requestWakeLock();
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    return () => {
      isMounted = false;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(console.error);
        wakeLockRef.current = null;
        console.log('Wake Lock liberado no unmount/inativo');
      }
    };
  }, [isActive]);
};
