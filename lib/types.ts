// Shared type definitions for the application
export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating?: number
  reviews?: number
  isNew?: boolean
  category?: string
  subcategory?: string
  stock?: number
  status?: string
  description?: string
}

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity?: number
}

export interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
}

export interface Order {
  id: string
  customer: string
  amount: number
  status: string
  date: string
  items: number
}

export interface User {
  name: string
  email: string
  gender?: string
  memberSince?: string
  orders?: number
  wishlistItems?: number
}
