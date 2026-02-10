"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// 1. Context 타입 정의 (리모컨 규격)
interface ToastContextType {
  showToast: (message: string) => void;
}

// 2. Context 생성 (빈 파이프)
const ToastContext = createContext<ToastContextType | null>(null);

// 3. Provider (방송국)
export default function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setMessage(msg);
    // 간단한 디바운싱 처리는 생략 (3초 뒤 무조건 꺼짐)
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* 전역 토스트 UI 위치 */}
      {message && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 rounded bg-gray-800 px-4 py-2 text-white shadow-lg transition-opacity">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

// 4. Hook (수신기)
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
