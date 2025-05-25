import { type StaticImageData } from 'next/image'

export interface Service {
  id: number
  title: string
  description: string
  price: number
  image: string | StaticImageData
  slug: string
}
