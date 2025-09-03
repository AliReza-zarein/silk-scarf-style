import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter } from 'lucide-react';
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

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

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
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 ml-2" />
              فیلتر
            </Button>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
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
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            نمایش بیشتر
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;