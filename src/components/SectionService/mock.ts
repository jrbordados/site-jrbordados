import i1 from '@/assets/services/01.jpg'
import i2 from '@/assets/services/02.jpg'
import i3 from '@/assets/services/03.jpg'
import i4 from '@/assets/services/04.jpg'
import i5 from '@/assets/services/05.jpg'
import i6 from '@/assets/services/06.jpg'

export const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'We build websites and web applications that perform well and look great on every device.',
    price: 1.12,
    image: i1
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'We build mobile applications that are fast, reliable, and easy to use.',
    price: 2.1,
    image: i2
  },
  { id: 3, title: 'UI/UX Design', description: 'We design user interfaces that are intuitive and easy to use.', price: 3.2, image: i3 },
  { id: 4, title: 'SEO', description: 'We optimize websites to rank higher in search engines and drive more traffic.', price: 2.5, image: i4 },
  { id: 5, title: 'E-commerce', description: 'We build online stores that are secure, scalable, and easy to manage.', price: 1.5, image: i5 },
  {
    id: 6,
    title: 'Digital Marketing',
    description: 'We create digital marketing campaigns that drive traffic, leads, and sales.',
    price: 3.5,
    image: i6
  }
] as const

export type ServiceType = (typeof services)[number]
