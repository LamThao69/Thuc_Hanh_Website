import Link from "next/link";
import Image from "next/image";

type PostProps = {
  title: string;
  author: string;
  date: string;
  image: string;  
  excerpt: string;
  href?: string;  
};

export default function Post({
  title,
  author,
  date,
  image,
  excerpt,
  href = "#",
}: PostProps) {
  return (
    <article className="post">
      <h1 className="post__title">
        <Link href={href}>{title}</Link>
      </h1>

      <div className="post__meta">
        Published {date} · by {author}
      </div>

      <Image
        className="post__cover"
        src={image}
        alt={title}
        width={1020}
        height={500}
        priority={false}
      />

      <p className="post__excerpt">{excerpt}</p>

      <div className="post__actions">
        <Link className="btn btn--primary" href={href}>Đọc toàn bộ bài viết</Link>
        <Link className="btn btn--ghost" href="#comments">Để lại bình luận</Link>
      </div>

      <div className="divider" />
    </article>
  );
}
