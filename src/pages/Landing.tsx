import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, MapPin, Package, Users, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-delivery.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  TravelDrop
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Connect travelers with people who need parcels delivered. 
                  Turn your journeys into earnings while helping others send packages efficiently.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate("/auth?type=driver")}
                  className="flex items-center gap-2"
                >
                  <Truck className="w-5 h-5" />
                  I'm a Traveler
                </Button>
                <Button 
                  variant="customer" 
                  size="lg"
                  onClick={() => navigate("/auth?type=customer")}
                  className="flex items-center gap-2"
                >
                  <Package className="w-5 h-5" />
                  Send a Parcel
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Delivery Hero" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How TravelDrop Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform connects people traveling with those who need parcels delivered, 
              creating a community-driven delivery network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Post Your Route</h3>
                <p className="text-muted-foreground">
                  Travelers share their journey details and available space for parcels.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Match & Connect</h3>
                <p className="text-muted-foreground">
                  Our system matches parcels with travelers going the same direction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold">Safe Delivery</h3>
                <p className="text-muted-foreground">
                  Track your parcel in real-time with verified travelers and secure payments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">50K+</div>
              <div className="text-muted-foreground">Parcels Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">99%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">24h</div>
              <div className="text-muted-foreground">Avg. Delivery Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;