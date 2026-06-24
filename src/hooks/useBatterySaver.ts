import { useState, useEffect } from 'react';
import { useKitchenStore } from '../store/useKitchenStore';

interface BatteryManager extends EventTarget {
  level: number;
  charging: boolean;
  addEventListener(type: 'levelchange' | 'chargingchange', listener: EventListener): void;
  removeEventListener(type: 'levelchange' | 'chargingchange', listener: EventListener): void;
}

declare global {
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }
}

export const useBatterySaver = () => {
  const manualLowPowerMode = useKitchenStore((state) => state.lowPowerMode);
  const [autoLowPower, setAutoLowPower] = useState(false);

  useEffect(() => {
    let batteryManager: BatteryManager | null = null;

    const updateBatteryStatus = () => {
      if (batteryManager) {
        const isLowAndDischarging = batteryManager.level <= 0.2 && !batteryManager.charging;
        setAutoLowPower(isLowAndDischarging);
      }
    };

    if ('getBattery' in navigator && navigator.getBattery) {
      navigator.getBattery().then((battery) => {
        batteryManager = battery;
        updateBatteryStatus();
        
        battery.addEventListener('levelchange', updateBatteryStatus);
        battery.addEventListener('chargingchange', updateBatteryStatus);
      }).catch(console.error);
    }

    return () => {
      if (batteryManager) {
        batteryManager.removeEventListener('levelchange', updateBatteryStatus);
        batteryManager.removeEventListener('chargingchange', updateBatteryStatus);
      }
    };
  }, []);

  return manualLowPowerMode || autoLowPower;
};
