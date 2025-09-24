import Head from "next/head";
import Link from "next/link";
import Post from "./Post";

const posts = [
  {
    title: "Nhiều người trẻ theo đuổi trào lưu sống tích cực trong năm mới",
    author: "Lâm Thảo",
    date: "October 9, 2025",
    image:
      "https://i1-giadinh.vnecdn.net/2022/01/11/1-6103-1641901844.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=upAo4PNU1ujgH5xSXPoteg",
    excerpt:
      'Trong bối cảnh nhiều người trẻ chuyển đổi về tư duy nhận thức, thương hiệu Trung Nguyên Legend đã đưa ra thông điệp "Lối sống Cà phê - Lối sống Thành công - Lối sống Tỉnh thức", tạo ấn tượng trong cộng đồng...',
    href: "#",
  },
  {
    title:
      "Ấm lòng nhóm học sinh Cần Thơ dùng 100.000 đồng quà 2/9 nấu ăn cho người nghèo",
    author: "Lâm Thảo",
    date: "October 9, 2025",
    image:
      "https://cdn-i.vtcnews.vn/upload/2025/09/05/5a182cb5-4751-4844-84c1-49adcbe37480-16303265.jpeg",
    excerpt:
      "Trong khi nhiều bạn trẻ háo hức dùng số tiền 100 nghìn đồng quà Tết Độc lập của Chính phủ để mua sắm, ăn uống hay vui chơi, một nhóm học sinh lớp 12 ở Cần Thơ lại gây sốt mạng xã hội vì hành động nhỏ mà ấm áp...",
    href: "#",
  },
];

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>Good News</title>
      </Head>

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="32">
              <path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                style={{ fill: "none", stroke: "currentColor", strokeMiterlimit: 10, strokeWidth: 32 }} />
              <line x1="338.29" y1="338.29" x2="448" y2="448"
                style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 100 }} />
            </svg>
          </button>
        </form>
      </header>

      <main className="wrap">
        {posts.map(p => (
          <Post key={p.title} {...p} />
        ))}
      </main>
    </>
  );
}
