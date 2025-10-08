import React from 'react';
import Image from 'next/image';

type PostProps = {
  title: string;
  meta: string;
  image: string;
  excerpt: string;
};

export default function Post({ title, meta, image, excerpt }: PostProps){
  return (
    <article className="post">
      <h1 className="post__title">
        <a href="#">{title}</a>
      </h1>

      <div className="post__meta">{meta}</div>

      {/* Use next/image for optimization */}
      <div style={{ width: '100%', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
        <Image className="post__cover" src={image} alt={title} width={960} height={540} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      <p className="post__excerpt">{excerpt}</p>

      <div className="post__actions">
        <a className="btn btn--primary" href="#">Đọc toàn bộ bài viết</a>
        <a className="btn btn--ghost" href="#comments">Để lại bình luận</a>
      </div>

      <div className="divider" />
    </article>
  );
}
