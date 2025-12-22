//12/22 小倉作成

"use client";

import { useEffect, useState } from "react";

interface HamburgerMenuEffectProps {
  open: boolean;               // メニューの開閉状態
  children: React.ReactNode;   // メニューの中身
  delay?: number;              // 表示遅延（任意）
}

export function HamburgerMenuEffect({
  open,
  children,
  delay = 0,
}: HamburgerMenuEffectProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (open) {
      // 開くとき：delay後に表示
      timer = setTimeout(() => setVisible(true), delay);
    } else {
      // 閉じるとき：アニメーション後に非表示
      timer = setTimeout(() => setVisible(false), 700); // ← 上下スライドに合わせて遅く
    }

    return () => clearTimeout(timer);
  }, [open, delay]);

  return (
    <div
      className={`
        fixed top-20 left-0 w-full bg-white p-6 z-[1002]

        /* ✅ スライド（上下）はゆっくり */
        transition-transform duration-700 ease-in-out

        /* ✅ フェードも同じ速度に統一 */
        transition-opacity duration-700 ease-in-out

        ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}

        ${visible ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      {children}
    </div>
  );
}
