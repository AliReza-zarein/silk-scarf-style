import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import scarf1 from '@/assets/scarf1.jpg';
import scarf2 from '@/assets/scarf2.jpg';
import hijab1 from '@/assets/hijab1.jpg';

const categoryData = {
  scarves: {
    title: 'شال‌ها',
    description: 'مجموعه‌ای از زیباترین شال‌های حریری و نخی',
    products: [
      {
        id: 1,
        name: 'شال حریری کلاسیک',
        price: '۲۵۰,۰۰۰',
        originalPrice: '۳۰۰,۰۰۰',
        image: scarf1
      },
      {
        id: 3,
        name: 'شال طرح‌دار',
        price: '۳۰۰,۰۰۰',
        originalPrice: '۳۵۰,۰۰۰',
        image: scarf2
      }
    ]
  },
  hijabs: {
    title: 'روسری‌ها',
    description: 'روسری‌های شیک و مناسب برای هر مناسبت',
    products: [
      {
        id: 2,
        name: 'روسری ساده',
        price: '۱۵۰,۰۰۰',
        originalPrice: '۲۰۰,۰۰۰',
        image: hijab1
      }
    ]
  },
  mantuas: {
    title: 'مانتوها',
    description: 'مانتوهای مدرن و باکیفیت',
    products: []
  },
  bags: {
    title: 'کیف‌ها',
    description: 'کیف‌های زیبا و کاربردی',
    products: []
  },
  accessories: {
    title: 'لوازم جانبی',
    description: 'لوازم جانبی مکمل استایل شما',
    products: []
  }
};

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const categoryInfo = categoryData[category as keyof typeof categoryData];

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-destructive mb-4">دسته‌بندی یافت نشد</h1>
            <p className="text-muted-foreground">دسته‌بندی مورد نظر شما وجود ندارد.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">{categoryInfo.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {categoryInfo.description}
          </p>
        </div>

        {categoryInfo.products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryInfo.products.map((product) => (
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
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛍️</div>
            <h2 className="text-2xl font-bold mb-4">به زودی...</h2>
            <p className="text-muted-foreground">
              محصولات این دسته‌بندی به زودی اضافه خواهند شد.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Category;