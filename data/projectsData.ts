interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Thần Số Học',
    description: `Một ứng dụng dự đoán - tra cứu về cuộc đời bạn bằng tên khai sinh và ngày sinh của bạn, giúp bạn hiểu rõ hơn về bản thân và cuộc đời của mình.`,
    imgSrc: '/static/images/thansohoc.webp',
    href: 'https://frontend.gnhteam.com/',
  },
  {
    title: 'Gen Bio',
    description: `Một ứng dụng tạo trang cá nhân và doanh nghiệp để chia sẻ, giới thiệu đến mọi người như một chiếc Card Visit - Business Card, hỗ trợ bạn mở rộng các mối quan hệ cũng như rút ngắn được khoảng cách giữa doanh nghiệp của bạn và đối tác.`,
    imgSrc: '/static/images/biopage.webp',
    href: 'https://biopage.gnhteam.com/',
  },
]

export default projectsData
