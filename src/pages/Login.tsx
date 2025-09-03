import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleMode = () => setIsLogin(!isLogin);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-gradient-card border-0 shadow-strong">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-2xl">ش</span>
              </div>
              <CardTitle className="text-2xl font-bold gradient-text">
                {isLogin ? 'ورود به حساب کاربری' : 'ثبت نام'}
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                {isLogin 
                  ? 'برای ادامه، وارد حساب کاربری خود شوید' 
                  : 'حساب کاربری جدید ایجاد کنید'
                }
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <form className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name">نام و نام خانوادگی</Label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="نام کامل خود را وارد کنید"
                        className="pr-10"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@email.com"
                      className="pr-10"
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="phone">شماره موبایل</Label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="09123456789"
                        className="pr-10"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password">رمز عبور</Label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      placeholder="رمز عبور خود را وارد کنید"
                      className="pr-10 pl-10"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute left-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">تکرار رمز عبور</Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="confirmPassword" 
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="رمز عبور را مجدداً وارد کنید"
                        className="pr-10 pl-10"
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute left-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex justify-between items-center">
                    <label className="flex items-center space-x-reverse space-x-2">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm text-muted-foreground">مرا به خاطر بسپار</span>
                    </label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      فراموشی رمز عبور؟
                    </Link>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-primary-foreground shadow-glow"
                  size="lg"
                >
                  {isLogin ? 'ورود' : 'ثبت نام'}
                </Button>
              </form>

              <div className="space-y-4">
                <div className="relative">
                  <Separator />
                  <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-background px-4 text-muted-foreground text-sm mx-auto w-fit">
                    یا
                  </span>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  size="lg"
                >
                  ورود با گوگل
                </Button>

                <div className="text-center">
                  <span className="text-muted-foreground">
                    {isLogin ? 'حساب کاربری ندارید؟' : 'قبلاً ثبت نام کرده‌اید؟'}
                  </span>
                  <button
                    onClick={toggleMode}
                    className="text-primary hover:underline mr-2 font-medium"
                  >
                    {isLogin ? 'ثبت نام کنید' : 'وارد شوید'}
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;