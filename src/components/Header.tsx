import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Search, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-effect shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center lg:justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ش</span>
            </div>
            <span className="font-bold text-xl gradient-text">شال زیبا</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors duration-300">
              خانه
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors duration-300">
              محصولات
            </Link>
            
            {/* Categories Dropdown */}
            <div 
              className="relative group"
            >
              <button className="flex items-center space-x-reverse space-x-1 text-foreground hover:text-primary transition-colors duration-300 py-2">
                <span>دسته‌بندی</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full right-0 mt-0 w-48 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-right">
                <div className="py-2">
                  <Link 
                    to="/category/scarves" 
                    className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    شال
                  </Link>
                  <Link 
                    to="/category/hijabs" 
                    className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    روسری
                  </Link>
                  <Link 
                    to="/category/mantuas" 
                    className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    مانتو
                  </Link>
                  <Link 
                    to="/category/bags" 
                    className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    کیف
                  </Link>
                  <Link 
                    to="/category/accessories" 
                    className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    لوازم جانبی
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-300">
              درباره ما
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors duration-300">
              تماس با ما
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="جستجو..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48"
                  autoFocus
                />
                <Button type="submit" size="sm">
                  <Search className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="w-5 h-5" />
              </Button>
            )}
            <Link to="/login">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Cart />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                خانه
              </Link>
              <Link 
                to="/products" 
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                محصولات
              </Link>
              
              {/* Mobile Categories */}
              <div className="space-y-2 pr-4 border-r-2 border-muted">
                <div className="text-sm font-medium text-muted-foreground">دسته‌بندی:</div>
                <Link 
                  to="/category/scarves" 
                  className="block text-sm text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  شال
                </Link>
                <Link 
                  to="/category/hijabs" 
                  className="block text-sm text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  روسری
                </Link>
                <Link 
                  to="/category/mantuas" 
                  className="block text-sm text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  مانتو
                </Link>
                <Link 
                  to="/category/bags" 
                  className="block text-sm text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  کیف
                </Link>
                <Link 
                  to="/category/accessories" 
                  className="block text-sm text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  لوازم جانبی
                </Link>
              </div>
              
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                درباره ما
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                تماس با ما
              </Link>
              <div className="flex items-center space-x-reverse space-x-4 pt-4 border-t border-border">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm">
                    ورود / ثبت نام
                  </Button>
                </Link>
                <Cart />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;