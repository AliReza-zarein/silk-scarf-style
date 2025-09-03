import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">تماس با ما</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ما همیشه آماده پاسخگویی به سوالات شما هستیم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>پیام خود را بفرستید</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">نام</label>
                  <Input placeholder="نام شما" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">نام خانوادگی</label>
                  <Input placeholder="نام خانوادگی" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">ایمیل</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">شماره تماس</label>
                <Input placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">موضوع</label>
                <Input placeholder="موضوع پیام شما" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">پیام</label>
                <Textarea 
                  placeholder="پیام خود را اینجا بنویسید..."
                  className="min-h-32"
                />
              </div>
              
              <Button className="w-full">ارسال پیام</Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">آدرس</h3>
                    <p className="text-muted-foreground">
                      تهران، خیابان ولیعصر، نرسیده به چهارراه ولیعصر، 
                      پلاک ۱۲۳، طبقه دوم
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">تلفن</h3>
                    <p className="text-muted-foreground">۰۲۱-۱۲۳۴۵۶۷۸</p>
                    <p className="text-muted-foreground">۰۹۱۲۳۴۵۶۷۸۹</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">ایمیل</h3>
                    <p className="text-muted-foreground">info@shalziba.com</p>
                    <p className="text-muted-foreground">support@shalziba.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">ساعات کاری</h3>
                    <p className="text-muted-foreground">شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر</p>
                    <p className="text-muted-foreground">پنج‌شنبه: ۹ صبح تا ۲ ظهر</p>
                    <p className="text-muted-foreground">جمعه: تعطیل</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;