import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wallet, 
  TrendingUp, 
  MapPin, 
  Leaf, 
  ShoppingCart, 
  Download,
  Eye,
  Timer,
  CheckCircle2
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const UserDashboard = () => {
  // Sample data
  const walletData = {
    balance: 1.24,
    carbonTokens: 45.7,
    totalOffset: 127.3
  };

  const portfolioData = [
    { month: 'Jan', offset: 20 },
    { month: 'Feb', offset: 35 },
    { month: 'Mar', offset: 28 },
    { month: 'Apr', offset: 45 },
    { month: 'May', offset: 67 },
    { month: 'Jun', offset: 127 }
  ];

  const credits = [
    {
      id: 1,
      project: "Mangrove Restoration - Philippines",
      location: "Palawan, Philippines", 
      co2Volume: 12.5,
      price: 0.045,
      image: "/api/placeholder/300/200",
      status: "verified",
      type: "Mangrove"
    },
    {
      id: 2,
      project: "Seagrass Conservation - Australia",
      location: "Queensland, Australia",
      co2Volume: 8.2,
      price: 0.052,
      image: "/api/placeholder/300/200", 
      status: "verified",
      type: "Seagrass"
    },
    {
      id: 3,
      project: "Coastal Wetland Protection - USA",
      location: "Louisiana, USA",
      co2Volume: 15.8,
      price: 0.038,
      image: "/api/placeholder/300/200",
      status: "pending",
      type: "Wetland"
    }
  ];

  const transactions = [
    { id: 1, credit: "Mangrove-001", date: "2024-01-15", status: "retired", co2: 5.2 },
    { id: 2, credit: "Seagrass-005", date: "2024-01-12", status: "active", co2: 8.1 },
    { id: 3, credit: "Wetland-003", date: "2024-01-08", status: "active", co2: 12.3 }
  ];

  return (
    <div className="space-y-6">
      {/* Wallet Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-primary/20 shadow-card hover:shadow-ocean transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
            <Wallet className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{walletData.balance} ETH</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-accent/20 shadow-card hover:shadow-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carbon Tokens</CardTitle>
            <Leaf className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{walletData.carbonTokens}</div>
            <p className="text-xs text-muted-foreground">Active credits owned</p>
          </CardContent>
        </Card>

        <Card className="border-success/20 shadow-card hover:shadow-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CO₂ Offset</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{walletData.totalOffset}t</div>
            <p className="text-xs text-muted-foreground">Total CO₂ retired</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="marketplace" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="marketplace" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                Available Carbon Credits
              </CardTitle>
              <CardDescription>
                Discover and purchase verified blue carbon credits from coastal ecosystem projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {credits.map((credit) => (
                  <Card key={credit.id} className="border hover:shadow-ocean transition-all duration-300 group">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-gradient-subtle">
                      <div className="flex h-full items-center justify-center text-muted-foreground">
                        <Leaf className="h-12 w-12" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-sm line-clamp-2">{credit.project}</h3>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {credit.location}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Badge variant={credit.status === "verified" ? "default" : "secondary"} className="text-xs">
                            {credit.status === "verified" ? "Verified" : "Pending"}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {credit.type}
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">CO₂ Volume:</span>
                            <span className="font-medium">{credit.co2Volume}t</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Price:</span>
                            <span className="font-bold text-primary">{credit.price} ETH</span>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="h-3 w-3" />
                            View
                          </Button>
                          <Button variant="hero" size="sm" className="flex-1" disabled={credit.status !== "verified"}>
                            Buy Credit
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>CO₂ Offset Trend</CardTitle>
                <CardDescription>Your carbon offset progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={portfolioData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="offset" stroke="hsl(var(--primary))" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Portfolio Summary</CardTitle>
                <CardDescription>Your current carbon credit holdings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Active Credits</span>
                    <span className="font-medium">45.7 tokens</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Retired Credits</span>
                    <span className="font-medium">127.3t CO₂</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                
                <div className="pt-4 space-y-2">
                  <Button variant="success" size="sm" className="w-full">
                    <Timer className="h-4 w-4" />
                    Retire Credits
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4" />
                    Download Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Your recent carbon credit transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${tx.status === 'retired' ? 'bg-success' : 'bg-primary'}`} />
                      <div>
                        <p className="font-medium text-sm">{tx.credit}</p>
                        <p className="text-xs text-muted-foreground">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">{tx.co2}t CO₂</p>
                      <Badge variant={tx.status === 'retired' ? 'default' : 'secondary'} className="text-xs">
                        {tx.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserDashboard;