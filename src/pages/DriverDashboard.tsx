import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  Package, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  XCircle,
  Plus,
  Route,
  User,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import driverAvatar from "@/assets/driver-avatar.jpg";

const DriverDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("available");

  const availableDeliveries = [
    {
      id: 1,
      from: "New York, NY",
      to: "Philadelphia, PA",
      package: "Electronics",
      weight: "2.5 lbs",
      payment: "$25",
      pickup: "2024-01-15",
      delivery: "2024-01-16",
      distance: "95 miles"
    },
    {
      id: 2,
      from: "Boston, MA",
      to: "New Haven, CT",
      package: "Documents",
      weight: "0.5 lbs",
      payment: "$15",
      pickup: "2024-01-16",
      delivery: "2024-01-16",
      distance: "135 miles"
    },
    {
      id: 3,
      from: "Washington, DC",
      to: "Baltimore, MD",
      package: "Clothing",
      weight: "3 lbs",
      payment: "$18",
      pickup: "2024-01-17",
      delivery: "2024-01-17",
      distance: "40 miles"
    }
  ];

  const myDeliveries = [
    {
      id: 4,
      from: "Chicago, IL",
      to: "Milwaukee, WI",
      package: "Books",
      weight: "5 lbs",
      payment: "$30",
      status: "in-progress",
      pickup: "2024-01-14",
      delivery: "2024-01-15"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-success/5">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={driverAvatar} alt="Driver" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold">Welcome back, John!</h1>
                <p className="text-muted-foreground">Driver • 4.9 ⭐ • 127 deliveries</p>
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
                <div className="p-3 bg-success/10 rounded-full">
                  <DollarSign className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Earnings</p>
                  <p className="text-2xl font-bold">$1,247</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">127</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Route className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Routes</p>
                  <p className="text-2xl font-bold">1</p>
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
                  <p className="text-sm text-muted-foreground">Avg. Time</p>
                  <p className="text-2xl font-bold">18h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="available">Available Deliveries</TabsTrigger>
              <TabsTrigger value="my-routes">My Deliveries</TabsTrigger>
              <TabsTrigger value="routes">My Routes</TabsTrigger>
            </TabsList>
            <Button variant="driver">
              <Plus className="w-4 h-4 mr-2" />
              Add Route
            </Button>
          </div>

          <TabsContent value="available" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Available Delivery Requests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {availableDeliveries.map((delivery) => (
                  <div key={delivery.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Package className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{delivery.package}</h3>
                          <p className="text-sm text-muted-foreground">{delivery.weight}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-success text-xl">{delivery.payment}</p>
                        <p className="text-xs text-muted-foreground">{delivery.distance}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3">
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
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge variant="outline">Pickup: {delivery.pickup}</Badge>
                        <Badge variant="outline">Delivery: {delivery.delivery}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <XCircle className="w-4 h-4 mr-1" />
                          Decline
                        </Button>
                        <Button variant="driver" size="sm">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Accept
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-routes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Active Deliveries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {myDeliveries.map((delivery) => (
                  <div key={delivery.id} className="border rounded-lg p-4 bg-success/5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-success/10 rounded-full">
                          <Package className="w-5 h-5 text-success" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{delivery.package}</h3>
                          <Badge className="bg-success">In Progress</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-success text-xl">{delivery.payment}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3">
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
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge variant="outline">Weight: {delivery.weight}</Badge>
                      </div>
                      <Button variant="driver" size="sm">
                        Mark as Delivered
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="routes">
            <Card>
              <CardHeader>
                <CardTitle>My Posted Routes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Route className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No routes posted yet. Add your travel plans to start earning!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DriverDashboard;