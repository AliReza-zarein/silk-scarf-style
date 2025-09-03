import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Heart, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-6">درباره شال زیبا</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ما در شال زیبا با بیش از ۱۰ سال تجربه در زمینه طراحی و تولید شال و روسری، 
            متعهد به ارائه بهترین کیفیت و طراحی‌های منحصر به فرد هستیم.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">داستان ما</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              شال زیبا در سال ۱۳۹۲ با هدف ارائه محصولات باکیفیت و مناسب برای بانوان ایرانی تأسیس شد. 
              ما همیشه به دنبال ترکیب سنت و مدرنیته در طراحی‌هایمان بوده‌ایم.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              تیم ما متشکل از طراحان مجرب و هنرمندان ماهری است که با عشق و دقت، 
              هر محصول را تولید می‌کنند تا شما بهترین تجربه خرید را داشته باشید.
            </p>
          </div>
          <div className="bg-gradient-card rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">ساخته شده با عشق</h3>
              <p className="text-muted-foreground">هر محصول با دقت و عشق تولید می‌شود</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-2xl bg-card">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">کیفیت برتر</h3>
            <p className="text-muted-foreground">
              استفاده از بهترین مواد اولیه و کنترل کیفیت در تمام مراحل تولید
            </p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-card">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">خدمات مشتری</h3>
            <p className="text-muted-foreground">
              پشتیبانی ۲۴ ساعته و مشاوره تخصصی برای انتخاب بهترین محصول
            </p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-card">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">ارسال سریع</h3>
            <p className="text-muted-foreground">
              ارسال سریع و ایمن در سراسر کشور با بسته‌بندی مناسب
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">۱۰+</div>
              <div className="text-white/80">سال تجربه</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">۵۰۰۰+</div>
              <div className="text-white/80">مشتری راضی</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">۱۰۰+</div>
              <div className="text-white/80">طرح منحصر</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">۹۸٪</div>
              <div className="text-white/80">رضایت مشتری</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;