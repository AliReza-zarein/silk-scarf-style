import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, updateQuantity, removeFromCart, getTotalItems, clearCart } = useCart();

  const totalPrice = items.reduce((sum, item) => {
    return sum + (parseInt(item.price.replace(/,/g, '')) * item.quantity);
  }, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="w-5 h-5" />
          {getTotalItems() > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs"
            >
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-md flex flex-col" side="right">
        <SheetHeader className="text-right">
          <SheetTitle>سبد خرید</SheetTitle>
          <SheetDescription>
            محصولات انتخاب شده شما
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">سبد خرید شما خالی است</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => {
                const uniqueKey = `${item.id}-${item.size || 'default'}`;
                return (
                <div key={uniqueKey} className="flex items-center space-x-reverse space-x-4 p-4 border rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    {item.size && <p className="text-xs text-muted-foreground">سایز: {item.size}</p>}
                    <p className="font-semibold text-primary">{item.price} تومان</p>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-8 h-8"
                      onClick={() => updateQuantity(uniqueKey, item.quantity - 1)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-medium">{item.quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-8 h-8"
                      onClick={() => updateQuantity(uniqueKey, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-8 h-8 text-destructive"
                      onClick={() => removeFromCart(uniqueKey)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );})}
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <>
            <Separator />
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">جمع کل:</span>
                <span className="font-bold text-lg text-primary">
                  {formatPrice(totalPrice)} تومان
                </span>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={clearCart}
                  className="flex-1"
                >
                  پاک کردن سبد
                </Button>
                <Link to="/payment" onClick={() => setIsOpen(false)} className="flex-1">
                  <Button className="w-full bg-gradient-primary text-primary-foreground">
                    ادامه خرید
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;