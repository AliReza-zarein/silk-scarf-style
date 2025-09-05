import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CreditCard, MapPin, User, Phone, Mail, Truck, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Cart from '@/components/Cart';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingMethod, setShippingMethod] = useState('normal');
  const { items: cartItems } = useCart();

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/,/g, ''));
    return sum + (price * item.quantity);
  }, 0);
  const shippingCost = shippingMethod === 'express' ? 25000 : subtotal > 200000 ? 0 : 15000;
  const discount = 50000; // تخفیف ثابت
  const total = subtotal + shippingCost - discount;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-reverse space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">خانه</Link>
          <span>/</span>
          <Link to="/cart" className="hover:text-primary">سبد خرید</Link>
          <span>/</span>
          <span className="text-foreground">پرداخت</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  آدرس تحویل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">نام</Label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="firstName" placeholder="نام" className="pr-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">نام خانوادگی</Label>
                    <Input id="lastName" placeholder="نام خانوادگی" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">شماره موبایل</Label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" placeholder="09123456789" className="pr-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">ایمیل</Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="example@email.com" className="pr-10" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">آدرس کامل</Label>
                  <textarea
                    id="address"
                    className="w-full min-h-[80px] p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="آدرس کامل خود را وارد کنید..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">شهر</Label>
                    <Input id="city" placeholder="تهران" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">استان</Label>
                    <Input id="state" placeholder="تهران" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">کد پستی</Label>
                    <Input id="postalCode" placeholder="1234567890" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Method */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  روش ارسال
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value="normal"
                        checked={shippingMethod === 'normal'}
                        onChange={(e) => setShippingMethod(e.target.value)}
                        className="text-primary"
                      />
                      <div>
                        <div className="font-medium">ارسال عادی</div>
                        <div className="text-sm text-muted-foreground">3-5 روز کاری</div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold">{subtotal > 200000 ? 'رایگان' : '15,000 تومان'}</div>
                    </div>
                  </label>

                  <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={shippingMethod === 'express'}
                        onChange={(e) => setShippingMethod(e.target.value)}
                        className="text-primary"
                      />
                      <div>
                        <div className="font-medium">ارسال اکسپرس</div>
                        <div className="text-sm text-muted-foreground">1-2 روز کاری</div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold">25,000 تومان</div>
                    </div>
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  روش پرداخت
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-primary"
                    />
                    <div>
                      <div className="font-medium">پرداخت آنلاین</div>
                      <div className="text-sm text-muted-foreground">کارت‌های بانکی و کیف پول</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-primary"
                    />
                    <div>
                      <div className="font-medium">پرداخت در محل</div>
                      <div className="text-sm text-muted-foreground">پرداخت هنگام تحویل</div>
                    </div>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-strong">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  خلاصه سفارش
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">سبد خرید شما خالی است</p>
                    </div>
                  ) : (
                    cartItems.map((item, index) => {
                      const uniqueKey = `${item.id}-${item.size || 'default'}`;
                      const price = parseInt(item.price.replace(/,/g, ''));
                      return (
                        <div key={uniqueKey} className="flex gap-3">
                          <div className="relative">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <Badge className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">
                              {item.quantity}
                            </Badge>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            {item.size && <p className="text-xs text-muted-foreground">سایز: {item.size}</p>}
                            <p className="font-bold text-primary">
                              {(price * item.quantity).toLocaleString()} تومان
                            </p>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>مجموع:</span>
                    <span>{subtotal.toLocaleString()} تومان</span>
                  </div>
                  <div className="flex justify-between">
                    <span>هزینه ارسال:</span>
                    <span>
                      {shippingCost === 0 ? 'رایگان' : `${shippingCost.toLocaleString()} تومان`}
                    </span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>تخفیف:</span>
                    <span>-{discount.toLocaleString()} تومان</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>مبلغ نهایی:</span>
                  <span className="text-primary">{total.toLocaleString()} تومان</span>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary text-primary-foreground shadow-glow"
                >
                  پرداخت و تکمیل سفارش
                </Button>

                <Cart />
              </CardContent>
            </Card>

            {/* Security Info */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">پرداخت امن</h4>
                <p className="text-sm text-muted-foreground">
                  تمامی اطلاعات شما با بالاترین سطح امنیت محافظت می‌شود
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;