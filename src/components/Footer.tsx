import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="flex space-x-reverse space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent">دسترسی سریع</h3>
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent">تماس با ما</h3>
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
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent">خبرنامه</h3>
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