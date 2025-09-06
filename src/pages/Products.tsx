import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, ChevronLeft, ChevronRight } from 'lucide-react';
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
    category: 'scarves'
  },
  {
    id: 2,
    name: 'روسری ساده',
    price: '۱۵۰,۰۰۰',
    originalPrice: '۲۰۰,۰۰۰',
    image: hijab1,
    category: 'hijabs'
  },
  {
    id: 3,
    name: 'شال طرح‌دار',
    price: '۳۰۰,۰۰۰',
    originalPrice: '۳۵۰,۰۰۰',
    image: scarf2,
    category: 'scarves'
  },
  // Add more products...
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between text-right">
          <div className="flex items-center gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 text-right">
                <SelectValue placeholder="دسته‌بندی" />
              </SelectTrigger>
              <SelectContent className="text-right" align="end">
                <SelectItem value="all" className="text-right">همه محصولات</SelectItem>
                <SelectItem value="scarves" className="text-right">شال</SelectItem>
                <SelectItem value="hijabs" className="text-right">روسری</SelectItem>
                <SelectItem value="mantuas" className="text-right">مانتو</SelectItem>
                <SelectItem value="bags" className="text-right">کیف</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48 text-right">
              <SelectValue placeholder="مرتب‌سازی" />
            </SelectTrigger>
            <SelectContent className="text-right" align="end">
              <SelectItem value="newest" className="text-right">جدیدترین</SelectItem>
              <SelectItem value="price-low" className="text-right">قیمت (کم به زیاد)</SelectItem>
              <SelectItem value="price-high" className="text-right">قیمت (زیاد به کم)</SelectItem>
              <SelectItem value="popular" className="text-right">محبوب‌ترین</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
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