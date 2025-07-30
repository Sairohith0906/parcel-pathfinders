import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Truck, Package } from "lucide-react";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const userType = searchParams.get("type") || "customer";
  const [isSignUp, setIsSignUp] = useState(true);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to appropriate dashboard based on user type
    if (userType === "driver") {
      navigate("/driver-dashboard");
    } else {
      navigate("/customer-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              {userType === "driver" ? (
                <Truck className="w-8 h-8 text-success" />
              ) : (
                <Package className="w-8 h-8 text-accent" />
              )}
              <CardTitle className="text-2xl">
                {userType === "driver" ? "Traveler Portal" : "Customer Portal"}
              </CardTitle>
            </div>
            <p className="text-muted-foreground">
              {userType === "driver" 
                ? "Start earning by delivering parcels on your route"
                : "Send your parcels with trusted travelers"
              }
            </p>
          </CardHeader>
          
          <CardContent>
            <Tabs value={isSignUp ? "signup" : "login"} onValueChange={(value) => setIsSignUp(value === "signup")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="login">Login</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleAuth} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant={userType === "driver" ? "driver" : "customer"}
                    size="lg"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleAuth} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="loginEmail">Email</Label>
                    <Input id="loginEmail" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="loginPassword">Password</Label>
                    <Input id="loginPassword" type="password" required />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant={userType === "driver" ? "driver" : "customer"}
                    size="lg"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;