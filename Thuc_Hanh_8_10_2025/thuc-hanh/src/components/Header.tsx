import React from 'react';

export default function Header(){
  return (
    <header>
      <div className="logo">
        <a href="#">
          <span className="orange">Good news</span>
          <span className="blue"> of the day</span>
        </a>
      </div>

      <nav>
        <ul>
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#">Thể loại</a></li>
          <li><a href="#">Về blog này</a></li>
          <li><a href="#">Đăng Nhập</a></li>
        </ul>
      </nav>

      <form className="search" action="/search" method="get">
        <input name="q" type="text" placeholder="Tìm kiếm..." aria-label="Tìm kiếm" />
        <button className="search-btn" type="submit" aria-label="Tìm kiếm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={32}>
            <path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" style={{fill:'none',stroke:'currentColor',strokeMiterlimit:10,strokeWidth:'32px'}}/>
            <line x1="338.29" y1="338.29" x2="448" y2="448" style={{fill:'none',stroke:'currentColor',strokeLinecap:'round',strokeMiterlimit:10,strokeWidth:'100px'}}/>
          </svg>
        </button>
      </form>
    </header>
  );
}
