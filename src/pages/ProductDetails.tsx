import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ShoppingCart, Minus, Plus, Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import scarf1 from '@/assets/scarf1.jpg';
import hijab1 from '@/assets/hijab1.jpg';
import scarf2 from '@/assets/scarf2.jpg';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('متوسط');
  const [activeImage, setActiveImage] = useState(0);

  // Mock product data - در حالت واقعی از API دریافت می‌شود
  const product = {
    id: id || '1',
    name: 'شال ابریشمی بنفش طرح سنتی',
    price: '299,000',
    originalPrice: '399,000',
    images: [scarf1, hijab1, scarf2],
    description: 'شال زیبا و باکیفیت از جنس ابریشم طبیعی با طرح‌های سنتی ایرانی. این محصول با دقت تمام بافته شده و برای استفاده روزانه و مجالس مناسب است.',
    features: [
      'جنس: ابریشم طبیعی 100%',
      'ابعاد: 180x70 سانتی‌متر',
      'قابل شستشو',
      'مقاوم در برابر رنگ پس دادن',
      'ساخت ایران'
    ],
    sizes: ['کوچک', 'متوسط', 'بزرگ'],
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    isNew: true,
    isSale: true
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'روسری گلدار کرم',
      price: '189,000',
      image: hijab1
    },
    {
      id: '3',
      name: 'شال طلایی لوکس',
      price: '450,000',
      image: scarf2
    }
  ];

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-reverse space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">خانه</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">محصولات</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-gradient-card">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {product.isSale && (
                <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                  25% تخفیف
                </Badge>
              )}
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  جدید
                </Badge>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                    activeImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground">({product.reviewCount} نظر)</span>
                </div>
                {product.inStock && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    موجود در انبار
                  </Badge>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">{product.price} تومان</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice} تومان
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">ویژگی‌ها:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">سایز:</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">تعداد:</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button variant="ghost" size="sm" onClick={decreaseQuantity}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={increaseQuantity}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1 bg-gradient-primary text-primary-foreground">
                <ShoppingCart className="w-5 h-5 ml-2" />
                افزودن به سبد خرید
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Shipping Info */}
            <Card className="bg-gradient-card border-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Truck className="w-5 h-5 text-accent" />
                  <span className="font-medium">ارسال رایگان برای خریدهای بالای 200 هزار تومان</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="font-medium">ضمانت 7 روزه تعویض</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">محصولات مشابه</h2>
            <Link to="/products">
              <Button variant="outline" className="group">
                مشاهده همه
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover-lift bg-gradient-card border-0 shadow-soft">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                  </Link>
                  <span className="font-bold text-primary">{product.price} تومان</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;