import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  Package, 
  Clock, 
  Plus,
  User,
  LogOut,
  Truck,
  Phone,
  MessageCircle,
  Eye
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import mapInterface from "@/assets/map-interface.jpg";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("track");

  const activeDeliveries = [
    {
      id: 1,
      package: "MacBook Pro",
      from: "New York, NY",
      to: "Philadelphia, PA",
      driver: "Mike Johnson",
      driverPhone: "+1 (555) 123-4567",
      driverRating: 4.8,
      status: "in-transit",
      estimatedArrival: "Today, 3:30 PM",
      trackingCode: "TD123456"
    }
  ];

  const myPackages = [
    {
      id: 2,
      package: "Birthday Gift",
      from: "Boston, MA",
      to: "New Haven, CT",
      weight: "2 lbs",
      status: "looking-for-driver",
      postedDate: "2024-01-15",
      reward: "$20"
    },
    {
      id: 3,
      package: "Important Documents",
      from: "Washington, DC",
      to: "Baltimore, MD",
      weight: "0.5 lbs",
      status: "delivered",
      deliveredDate: "2024-01-10",
      reward: "$15"
    }
  ];

  const nearbyDrivers = [
    {
      id: 1,
      name: "Sarah Wilson",
      rating: 4.9,
      route: "NYC → Philadelphia",
      eta: "2 hours",
      capacity: "Available",
      location: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 2,
      name: "David Chen",
      rating: 4.7,
      route: "Boston → NYC",
      eta: "4 hours",
      capacity: "Limited",
      location: { lat: 42.3601, lng: -71.0589 }
    },
    {
      id: 3,
      name: "Maria Garcia",
      rating: 5.0,
      route: "DC → Baltimore",
      eta: "1 hour",
      capacity: "Available",
      location: { lat: 38.9072, lng: -77.0369 }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold">Welcome back, Alice!</h1>
                <p className="text-muted-foreground">Customer • 15 packages sent</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Sent</p>
                  <p className="text-2xl font-bold">15</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-success/10 rounded-full">
                  <Package className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Delivered</p>
                  <p className="text-2xl font-bold">14</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-warning/10 rounded-full">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">In Transit</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Time</p>
                  <p className="text-2xl font-bold">22h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="track">Live Tracking</TabsTrigger>
              <TabsTrigger value="packages">My Packages</TabsTrigger>
              <TabsTrigger value="drivers">Find Drivers</TabsTrigger>
            </TabsList>
            <Button variant="customer">
              <Plus className="w-4 h-4 mr-2" />
              Send Package
            </Button>
          </div>

          <TabsContent value="track" className="space-y-6">
            {/* Live Map */}
            <Card>
              <CardHeader>
                <CardTitle>Live Package Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg overflow-hidden">
                  <img 
                    src={mapInterface} 
                    alt="Live Map" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-medium">Package Location</p>
                    <p className="text-xs text-muted-foreground">Last updated: 2 min ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Deliveries */}
            <Card>
              <CardHeader>
                <CardTitle>Active Deliveries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeDeliveries.map((delivery) => (
                  <div key={delivery.id} className="border rounded-lg p-4 bg-accent/5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-full">
                          <Package className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{delivery.package}</h3>
                          <Badge className="bg-warning">In Transit</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Tracking: {delivery.trackingCode}</p>
                        <p className="font-medium">ETA: {delivery.estimatedArrival}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="text-sm">{delivery.from}</span>
                      </div>
                      <div className="text-muted-foreground">→</div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-success" />
                        <span className="text-sm">{delivery.to}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{delivery.driver}</p>
                          <p className="text-xs text-muted-foreground">⭐ {delivery.driverRating}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="packages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Packages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {myPackages.map((pkg) => (
                  <div key={pkg.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Package className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{pkg.package}</h3>
                          <Badge variant={pkg.status === "delivered" ? "default" : "outline"}>
                            {pkg.status === "looking-for-driver" ? "Looking for Driver" : 
                             pkg.status === "delivered" ? "Delivered" : pkg.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-accent">{pkg.reward}</p>
                        <p className="text-xs text-muted-foreground">{pkg.weight}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="text-sm">{pkg.from}</span>
                      </div>
                      <div className="text-muted-foreground">→</div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-success" />
                        <span className="text-sm">{pkg.to}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        {pkg.status === "delivered" ? `Delivered: ${pkg.deliveredDate}` : `Posted: ${pkg.postedDate}`}
                      </p>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drivers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Available Drivers Near You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {nearbyDrivers.map((driver) => (
                  <div key={driver.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>{driver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{driver.name}</h3>
                          <p className="text-sm text-muted-foreground">⭐ {driver.rating} • {driver.capacity}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">ETA: {driver.eta}</p>
                        <Badge variant="outline">{driver.capacity}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-primary" />
                        <span className="text-sm">{driver.route}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Route matches your delivery</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                        <Button variant="customer" size="sm">
                          Request Delivery
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomerDashboard;