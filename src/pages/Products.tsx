import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, ChevronLeft, ChevronRight, Grid, List, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import scarf1 from '@/assets/scarf1.jpg';
import scarf2 from '@/assets/scarf2.jpg';
import hijab1 from '@/assets/hijab1.jpg';

const products = [
  {
    id: 1,
    name: 'شال حریری کلاسیک',
    price: '۲۵۰,۰۰۰',
    originalPrice: '۳۰۰,۰۰۰',
    image: scarf1,
    category: 'scarves',
    features: ['جنس: ابریشم طبیعی', 'ابعاد: 180x70 سانتی‌متر', 'قابل شستشو']
  },
  {
    id: 2,
    name: 'روسری ساده',
    price: '۱۵۰,۰۰۰',
    originalPrice: '۲۰۰,۰۰۰',
    image: hijab1,
    category: 'hijabs',
    features: ['جنس: نخ', 'ابعاد: 110x110 سانتی‌متر', 'ضدحساسیت']
  },
  {
    id: 3,
    name: 'شال طرح‌دار',
    price: '۳۰۰,۰۰۰',
    originalPrice: '۳۵۰,۰۰۰',
    image: scarf2,
    category: 'scarves',
    features: ['جنس: کشمیر', 'ابعاد: 200x80 سانتی‌متر', 'گرم و نرم']
  },
  // Add more products...
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid');
  const { addToCart, items } = useCart();
  const itemsPerPage = 8;

  // اسکرول به بالای صفحه
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">محصولات ما</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            مجموعه‌ای از بهترین شال‌ها و روسری‌های باکیفیت
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
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
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 text-right">
                <SelectValue placeholder="دسته‌بندی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه محصولات</SelectItem>
                <SelectItem value="scarves">شال</SelectItem>
                <SelectItem value="hijabs">روسری</SelectItem>
                <SelectItem value="mantuas">مانتو</SelectItem>
                <SelectItem value="bags">کیف</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 text-right">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">جدیدترین</SelectItem>
                <SelectItem value="price-low">قیمت (کم به زیاد)</SelectItem>
                <SelectItem value="price-high">قیمت (زیاد به کم)</SelectItem>
                <SelectItem value="popular">محبوب‌ترین</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id.toString()}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4 text-right">
            {currentProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="bg-gradient-card border-0 shadow-soft hover-lift cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6 text-right">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 text-right">
                        <h3 className="font-semibold text-lg mb-2 text-right">{product.name}</h3>
                        <div className="hidden md:block mb-3">
                          <div className="flex flex-wrap gap-2 justify-end">
                            {product.features.map((feature, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart({
                                id: product.id.toString(),
                                name: product.name,
                                price: product.price,
                                image: product.image
                              });
                            }}
                            className="relative"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            <span className="hidden sm:inline ml-2">افزودن به سبد</span>
                            {(() => {
                              const cartQuantity = items.find(item => item.id === product.id.toString())?.quantity || 0;
                              return cartQuantity > 0 ? (
                                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                  {cartQuantity}
                                </span>
                              ) : null;
                            })()}
                          </Button>
                          <div className="flex items-center gap-2">
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                {product.originalPrice} تومان
                              </span>
                            )}
                            <span className="font-bold text-primary text-lg">{product.price} تومان</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronRight className="w-4 h-4" />
              قبلی
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(page)}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              بعدی
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;