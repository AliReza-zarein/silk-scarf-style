import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, Package, Heart, Settings, LogOut, ShoppingBag, Clock, Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    toast.success('با موفقیت خارج شدید');
    navigate('/');
  };

  const mockOrders = [
    {
      id: '1001',
      date: '1403/01/15',
      total: '450,000',
      status: 'تحویل شده',
      items: 2
    },
    {
      id: '1002',
      date: '1403/01/20',
      total: '320,000',
      status: 'در حال پردازش',
      items: 1
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle>پانل کاربری</CardTitle>
                <p className="text-muted-foreground">خوش آمدید</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={activeTab === 'profile' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('profile')}
                >
                  <User className="w-4 h-4 ml-2" />
                  اطلاعات شخصی
                </Button>
                <Button
                  variant={activeTab === 'orders' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('orders')}
                >
                  <Package className="w-4 h-4 ml-2" />
                  سفارش‌های من
                </Button>
                <Button
                  variant={activeTab === 'wishlist' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('wishlist')}
                >
                  <Heart className="w-4 h-4 ml-2" />
                  علاقه‌مندی‌ها
                </Button>
                <Separator />
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600 hover:text-red-700"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 ml-2" />
                  خروج
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    اطلاعات شخصی
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">نام</label>
                      <p className="p-3 bg-secondary/50 rounded-lg">کاربر محترم</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ایمیل</label>
                      <p className="p-3 bg-secondary/50 rounded-lg">user@example.com</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">شماره موبایل</label>
                      <p className="p-3 bg-secondary/50 rounded-lg">09123456789</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">تاریخ عضویت</label>
                      <p className="p-3 bg-secondary/50 rounded-lg">1403/01/01</p>
                    </div>
                  </div>
                  <Button className="bg-gradient-primary text-primary-foreground">
                    ویرایش اطلاعات
                  </Button>
                </CardContent>
              </Card>
            )}

            {activeTab === 'orders' && (
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    سفارش‌های من
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">سفارش #{order.id}</h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {order.date}
                            </p>
                          </div>
                          <Badge variant={order.status === 'تحویل شده' ? 'default' : 'secondary'}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            {order.items} محصول - {order.total} تومان
                          </span>
                          <Button variant="outline" size="sm">
                            جزئیات
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'wishlist' && (
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    علاقه‌مندی‌ها
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">هنوز محصولی به علاقه‌مندی‌ها اضافه نشده</p>
                    <Link to="/products">
                      <Button className="mt-4">
                        مشاهده محصولات
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;