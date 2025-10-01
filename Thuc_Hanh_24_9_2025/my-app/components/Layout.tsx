"use client";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <div className="logo">
          <Link href="/">
            <span className="orange">Good news</span>
            <span className="blue"> of the day</span>
          </Link>
        </div>

        <nav>
          <ul>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/categories">Thể loại</Link></li>
            <li><Link href="/about">Về blog này</Link></li>
            <li><Link href="/login">Đăng Nhập</Link></li>
          </ul>
        </nav>

        <form className="search" action="/search" method="get">
          <input name="q" type="text" placeholder="Tìm kiếm..." aria-label="Tìm kiếm" />
          <button className="search-btn" type="submit" aria-label="Tìm kiếm">
            {/* icon kính lúp */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="32">
              <path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                style={{ fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 32 }} />
              <line x1="338.29" y1="338.29" x2="448" y2="448"
                style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 100 }} />
            </svg>
          </button>
        </form>
      </header>

      <main className="wrap">{children}</main>
    </>
  );
}
