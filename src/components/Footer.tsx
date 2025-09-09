import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Phone, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">ش</span>
              </div>
              <span className="font-bold text-xl text-accent">شال زیبا</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              فروشگاه آنلاین شال و روسری با بهترین کیفیت و قیمت مناسب
            </p>
            <div className="flex space-x-reverse space-x-2 md:space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-accent/20 hover:text-accent p-2">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-accent/20 hover:text-accent p-2">
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-accent/20 hover:text-accent p-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 9v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9l-9-8zM12 3.69L18 9v11H6V9l6-5.31z"/>
                  <path d="M8 11h8v2H8v-2zm0 4h8v2H8v-2z"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="font-semibold text-base md:text-lg text-accent">دسترسی سریع</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                خانه
              </Link>
              <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">
                محصولات
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                درباره ما
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                تماس با ما
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="font-semibold text-base md:text-lg text-accent">دسته‌بندی</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/category/scarves" className="text-primary-foreground/80 hover:text-accent transition-colors">
                شال
              </Link>
              <Link to="/category/hijabs" className="text-primary-foreground/80 hover:text-accent transition-colors">
                روسری
              </Link>
              <Link to="/category/mantuas" className="text-primary-foreground/80 hover:text-accent transition-colors">
                مانتو
              </Link>
              <Link to="/category/bags" className="text-primary-foreground/80 hover:text-accent transition-colors">
                کیف
              </Link>
              <Link to="/category/accessories" className="text-primary-foreground/80 hover:text-accent transition-colors">
                لوازم جانبی
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="font-semibold text-base md:text-lg text-accent">تماس با ما</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-reverse space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">021-12345678</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">info@scarf-shop.com</span>
              </div>
              <div className="flex items-start space-x-reverse space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-primary-foreground/80">
                  تهران، خیابان ولیعصر، پلاک 123
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="font-semibold text-base md:text-lg text-accent">خبرنامه</h3>
            <p className="text-primary-foreground/80 text-sm">
              از آخرین محصولات و تخفیف‌ها باخبر شوید
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="ایمیل شما"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button 
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                عضویت
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 شال زیبا. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;