import React from 'react';
import Post from '../components/Post';

export default function Page(){
  const posts = [
    {
      title: 'Nhiều người trẻ theo đuổi trào lưu sống tích cực trong năm mới',
      meta: 'Published October 9 , 2025 · by Lâm Thảo',
      image: 'https://i1-giadinh.vnecdn.net/2022/01/11/1-6103-1641901844.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=upAo4PNU1ujgH5xSXPoteg',
      excerpt: `Trong bối cảnh nhiều người trẻ chuyển đổi về tư duy nhận thức, thương hiệu Trung Nguyên Legend đã đưa ra thông điệp "Lối sống Cà phê - Lối sống Thành công - Lối sống Tỉnh thức", tạo ấn tượng trong cộng đồng. Đại diện Trung Nguyên Legend cho rằng thông điệp này sẽ tiếp tục khơi gợi sự thay đổi, hướng đến lối sống mới tỉnh thức, giúp người trẻ nhìn lại bản thân để sống có trách nhiệm hơn, yêu thương hơn với chính mình, gia đình và xã hội...`,
    },
    {
      title: 'Ấm lòng nhóm học sinh Cần Thơ dùng 100.000 đồng quà 2/9 nấu ăn cho người nghèo',
      meta: 'Published October 9 , 2025 · by Lâm Thảo',
      image: 'https://cdn-i.vtcnews.vn/upload/2025/09/05/5a182cb5-4751-4844-84c1-49adcbe37480-16303265.jpeg',
      excerpt: `Trong khi nhiều bạn trẻ háo hức dùng số tiền 100 nghìn đồng quà Tết Độc lập của Chính phủ để mua sắm, ăn uống hay vui chơi, một nhóm học sinh lớp 12 ở Cần Thơ lại gây sốt mạng xã hội vì hành động nhỏ mà ấm áp: Cùng nhau gom số tiền ấy nấu những suất ăn nóng hổi trao tận tay người lao động nghèo ngoài đường....`,
    }
  ];

  return (
    <main className="wrap">
      {posts.map((p, i) => (
        <Post key={i} title={p.title} meta={p.meta} image={p.image} excerpt={p.excerpt} />
      ))}
    </main>
  );
}