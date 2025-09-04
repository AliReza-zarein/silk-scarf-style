import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

interface WishlistItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  getTotalItems: () => number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const addToWishlist = (newItem: WishlistItem) => {
    setItems(prevItems => {
      const exists = prevItems.find(item => item.id === newItem.id);
      if (exists) {
        toast.info('این محصول قبلاً به علاقه‌مندی‌ها اضافه شده');
        return prevItems;
      }
      toast.success('محصول به علاقه‌مندی‌ها اضافه شد');
      return [...prevItems, newItem];
    });
  };

  const removeFromWishlist = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    toast.success('محصول از علاقه‌مندی‌ها حذف شد');
  };

  const isInWishlist = (id: string) => {
    return items.some(item => item.id === id);
  };

  const getTotalItems = () => {
    return items.length;
  };

  return (
    <WishlistContext.Provider value={{
      items,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      getTotalItems
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};