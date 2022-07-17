import { Product } from '@/models'

export interface HomeProps {
    jeweleryList: Product[]
    mensClothingList: Product[]
    womensClothingList: Product[]
}

export interface HomeViewsProps {
    jewelery: Product
    mensClothing: Product
    womensClothing: Product
}
