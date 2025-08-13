"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem } from "./cart" // Re-use the same type

interface WishlistStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  isInWishlist: (id: number) => boolean
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)
          if (existingItem) {
            // If already in wishlist, remove it
            return { items: state.items.filter((i) => i.id !== item.id) }
          }
          // Otherwise, add it
          return { items: [...state.items, item] }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      isInWishlist: (id) => {
        const { items } = get()
        return items.some((item) => item.id === id)
      },
    }),
    {
      name: "wishlist-storage",
    },
  ),
) 