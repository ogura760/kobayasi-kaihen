"use client";

import { ReactNode } from "react";

interface HamburgerMenuEffectProps {
  open: boolean;    // 親コンポーネントから受け取る開閉フラグ
  children: ReactNode; // メニューの中に表示するコンテンツ
}

export function HamburgerMenuEffect({
  open,
  children,
}: HamburgerMenuEffectProps) {
  return (
    <div
      className={`
        /* --- 基本配置 --- */
        fixed top-20 left-0 w-full bg-white p-6 z-[1002] shadow-xl
        
        /* --- アニメーション共通設定 --- */
        /* transition-all: 移動(transform)と透明度(opacity)の両方にアニメーションを適用 */
        /* ease-in-out: 動き始めと終わりを滑らかにする */
        transition-all ease-in-out

        /* --- 開閉時の個別設定 --- */
        ${
          open 
            ? `
              /* 【開くときの動作】 */
              translate-y-0      /* 画面内の定位置に移動 */
              opacity-100        /* くっきり表示 */
              pointer-events-auto /* メニュー内のボタンをクリック可能にする */
              duration-500       /* 0.5秒かけて現れる（少し速めにして快活な印象に） */
              delay-100          /* ボタンを押してから0.1秒後に動き出す（アイコン変化との重なりを防ぐ） */
            `
            : `
              /* 【閉じるときの動作】 */
              -translate-y-full  /* 自分の高さ分だけ上にスライドして隠れる */
              opacity-0          /* 徐々に透明にする（フェードアウト） */
              pointer-events-none /* 閉じている最中・閉じている後はクリックを無効化 */
              duration-700       /* 0.7秒かけて消える（余韻を持たせて丁寧に閉じる） */
              delay-0            /* ボタンを押した瞬間に反応させる（操作へのレスポンスを最優先） */
            `
        }
      `}
    >
      {/* メニューが画面外(-translate-y-full)にある間もDOMには存在し続けますが、
         pointer-events-none によって背面への操作を邪魔しません。
      */}
      {children}
    </div>
  );
}