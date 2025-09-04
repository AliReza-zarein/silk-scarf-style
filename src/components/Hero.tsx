import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-scarf.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="مجموعه شال و روسری زیبا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            شال و روسری
            <span className="block gradient-text bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              زیبا و باکیفیت
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-up">
            مجموعه‌ای منحصر به فرد از بهترین شال‌ها و روسری‌های ایرانی با طراحی‌های مدرن و سنتی
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 shadow-glow group"
              >
                مشاهده محصولات
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                درباره ما
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-white/80">محصول</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">1000+</div>
              <div className="text-white/80">مشتری راضی</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-white/80">پشتیبانی</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;