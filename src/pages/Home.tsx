import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Truck, Shield, Headphones, ArrowLeft, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';

import scarf1 from '@/assets/scarf1.jpg';
import hijab1 from '@/assets/hijab1.jpg';
import scarf2 from '@/assets/scarf2.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState('grid');

  const featuredProducts = [
    {
      id: '1',
      name: 'شال ابریشمی بنفش',
      price: '299,000',
      originalPrice: '399,000',
      image: scarf1,
      isNew: true,
      isSale: true
    },
    {
      id: '2',
      name: 'روسری گلدار کرم',
      price: '189,000',
      image: hijab1,
      isNew: true
    },
    {
      id: '3',
      name: 'شال طلایی لوکس',
      price: '450,000',
      image: scarf2
    }
  ];

  const categories = [
    { name: 'شال‌های ابریشمی', count: 45, color: 'bg-gradient-primary' },
    { name: 'روسری‌های گلدار', count: 32, color: 'bg-gradient-accent' },
    { name: 'شال‌های کشمیر', count: 28, color: 'bg-gradient-hero' },
    { name: 'روسری‌های ساده', count: 56, color: 'bg-gradient-primary' }
  ];

  const features = [
    {
      icon: Truck,
      title: 'ارسال سریع',
      description: 'ارسال در کمتر از 24 ساعت'
    },
    {
      icon: Shield,
      title: 'ضمانت کیفیت',
      description: '7 روز ضمانت تعویض'
    },
    {
      icon: Headphones,
      title: 'پشتیبانی 24/7',
      description: 'پاسخگویی در تمام ساعات روز'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-soft bg-gradient-card hover-lift">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 gradient-text">دسته‌بندی محصولات</h2>
            <p className="text-xl text-muted-foreground">انتخاب از میان بهترین مجموعه‌ها</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center">
            {categories.map((category, index) => (
              <Card key={index} className={`${category.color} border-0 hover-lift cursor-pointer group`}>
                <CardContent className="p-4 md:p-6 text-center">
                  <h3 className="font-semibold text-sm md:text-lg mb-2 text-white drop-shadow-lg">{category.name}</h3>
                  <Badge variant="secondary" className={`${category.name === 'روسری‌های ساده' ? 'bg-white/40 text-gray-800' : 'bg-white/20 text-white'} font-medium border border-white/30 backdrop-blur-sm text-xs md:text-sm`}>
                    {category.count} محصول
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 gradient-text">محصولات ویژه</h2>
              <p className="text-xl text-muted-foreground">برترین انتخاب‌های هفته</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              <Link to="/products">
                <Button variant="outline" className="group">
                  مشاهده همه
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="text-center">
              <Carousel className="w-full max-w-7xl mx-auto" opts={{ align: "center", loop: true }}>
                <CarouselContent className="text-right">
                  {featuredProducts.map((product, index) => (
                    <CarouselItem key={product.id} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <div className="p-2">
                        <ProductCard {...product} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-auto right-12" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          ) : (
          <div className="space-y-4 text-right">
            {featuredProducts.map((product, index) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="bg-gradient-card border-0 shadow-soft hover-lift cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6 text-right">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 text-right">
                        <div className="flex items-center justify-end gap-2 mb-2">
                          {product.isSale && <Badge className="bg-red-500 text-white">تخفیف</Badge>}
                          {product.isNew && <Badge className="bg-green-500 text-white">جدید</Badge>}
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-right">{product.name}</h3>
                        <div className="hidden md:block mb-3">
                          <div className="flex flex-wrap gap-2 justify-end">
                            <Badge variant="secondary" className="text-xs">جنس: ابریشم طبیعی</Badge>
                            <Badge variant="secondary" className="text-xs">ابعاد: 180x70 سانتی‌متر</Badge>
                            <Badge variant="secondary" className="text-xs">قابل شستشو</Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice} تومان
                            </span>
                          )}
                          <span className="font-bold text-primary text-lg">{product.price} تومان</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          )}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;