"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineChevronRight, HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { HamburgerMenuEffect } from "./HamburgerMenuEffect"; 

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*メニューボタン */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="md:hidden text-[#8E7D73] p-2"
        aria-label="メニュー"
      >
        {open ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
      </button>

      {/* オーバーレイ */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ✅ 上から下にスライドするメニュー */}

        <HamburgerMenuEffect open={open}>
          <div className="flex flex-col gap-6">
            <Link
              href="#about"
              onClick={() => setOpen(false)}
              className="text-lg font-medium flex items-center justify-between"
            >
              自己紹介 <HiOutlineChevronRight />
            </Link>

            <Link
              href="/records"
              onClick={() => setOpen(false)}
              className="text-lg font-medium flex items-center justify-between"
            >
              活動記録 <HiOutlineChevronRight />
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-lg font-medium flex items-center justify-between"
            >
              お問い合わせ <HiOutlineChevronRight />
            </Link>
          </div>
        </HamburgerMenuEffect>



    </>
  );
}
