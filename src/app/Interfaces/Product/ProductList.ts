export type ProductList = Products[]

export interface Products {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
  }
  
  export interface Rating {
    rate: number
    count: number
  }
  export interface CreateProduct {
    id:number
    title: string
    price: number
    description: string
    image: string
    category: string
  }