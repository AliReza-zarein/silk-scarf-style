import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  isNew = false, 
  isSale = false 
}: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, price, image });
    }
  };
  return (
    <Card className="group overflow-hidden hover-lift bg-gradient-card border-0 shadow-soft">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
              جدید
            </span>
          )}
          {isSale && (
            <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
              حراجی
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={handleWishlistToggle}
          className="absolute top-3 left-3 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Heart className={`w-4 h-4 ${isInWishlist(id) ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>

        {/* Quick Actions */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-2">
            <Link to={`/product/${id}`} className="flex-1">
              <Button variant="secondary" size="sm" className="w-full text-xs">
                مشاهده جزئیات
              </Button>
            </Link>
            <Button variant="default" size="sm" onClick={handleAddToCart}>
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary">{price} تومان</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice} تومان
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;