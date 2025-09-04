import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Truck, Shield, Headphones, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import scarf1 from '@/assets/scarf1.jpg';
import hijab1 from '@/assets/hijab1.jpg';
import scarf2 from '@/assets/scarf2.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    { name: 'روسری‌های ساده', count: 56, color: 'bg-gradient-card' }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className={`${category.color} border-0 hover-lift cursor-pointer group`}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2 text-white drop-shadow-lg">{category.name}</h3>
                  <Badge variant="secondary" className="bg-white/90 text-gray-800 font-medium">
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
            <Link to="/products">
              <Button variant="outline" className="group">
                مشاهده همه
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;