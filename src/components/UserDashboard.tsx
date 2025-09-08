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
import projectMangrove from "@/assets/project-mangrove.jpg";
import projectSeagrass from "@/assets/project-seagrass.jpg";
import projectSaltmarsh from "@/assets/project-saltmarsh.jpg";
import projectKelp from "@/assets/project-kelp.jpg";

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
      image: projectMangrove,
      status: "verified",
      type: "Mangrove",
      description: "Coastal mangrove restoration protecting biodiversity"
    },
    {
      id: 2,
      project: "Seagrass Conservation - Australia",
      location: "Queensland, Australia",
      co2Volume: 8.2,
      price: 0.052,
      image: projectSeagrass,
      status: "verified",
      type: "Seagrass",
      description: "Marine seagrass meadow preservation"
    },
    {
      id: 3,
      project: "Coastal Wetland Protection - USA",
      location: "Louisiana, USA",
      co2Volume: 15.8,
      price: 0.038,
      image: projectSaltmarsh,
      status: "pending",
      type: "Wetland",
      description: "Salt marsh conservation for carbon sequestration"
    },
    {
      id: 4,
      project: "Kelp Forest Restoration - California",
      location: "Monterey Bay, CA",
      co2Volume: 22.1,
      price: 0.049,
      image: projectKelp,
      status: "verified", 
      type: "Kelp Forest",
      description: "Giant kelp forest ecosystem restoration"
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
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="card-modern hover:shadow-glow-blue p-6 rounded-2xl border-primary/20">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-white/70">Wallet Balance</h3>
            <Wallet className="h-5 w-5 text-primary animate-bounce-gentle" />
          </div>
          <div className="text-3xl font-bold text-gradient font-heading">{walletData.balance} ETH</div>
          <p className="text-xs text-green-400 font-medium">+12% from last month</p>
        </div>

        <div className="card-modern hover:shadow-glow-green p-6 rounded-2xl border-accent/20">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-white/70">Carbon Tokens</h3>
            <Leaf className="h-5 w-5 text-secondary animate-pulse" />
          </div>
          <div className="text-3xl font-bold text-accent font-heading">{walletData.carbonTokens}</div>
          <p className="text-xs text-white/60">Active credits owned</p>
        </div>

        <div className="card-modern hover:shadow-glow p-6 rounded-2xl border-success/20">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium text-white/70">CO₂ Offset</h3>
            <TrendingUp className="h-5 w-5 text-success animate-float" />
          </div>
          <div className="text-3xl font-bold text-success font-heading">{walletData.totalOffset}t</div>
          <p className="text-xs text-white/60">Total CO₂ retired</p>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="marketplace" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="marketplace" className="space-y-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gradient font-heading">Carbon Credit Marketplace</h2>
                <p className="text-white/60">Discover and purchase verified blue carbon credits from coastal ecosystem projects</p>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {credits.map((credit) => (
                <div key={credit.id} className="group card-modern hover:shadow-glow rounded-2xl overflow-hidden border neon-border">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={credit.image} 
                      alt={credit.project}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        credit.status === "verified" 
                          ? "bg-success/20 text-success border border-success/30" 
                          : "bg-warning/20 text-warning border border-warning/30"
                      }`}>
                        {credit.status === "verified" ? "✅ Verified" : "⏳ Pending"}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{credit.project}</h3>
                      <p className="text-white/80 text-sm">{credit.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <MapPin className="h-4 w-4" />
                        {credit.location}
                      </div>
                      <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                        {credit.type}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-white/60">CO₂ Volume:</span>
                        <span className="font-semibold text-white">{credit.co2Volume}t</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Price:</span>
                        <span className="font-bold text-primary text-lg">{credit.price} ETH</span>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button className="flex-1 glass-card-light text-white/80 hover:text-white border-white/20 hover:border-white/40">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button 
                        className={`flex-1 font-semibold transition-all duration-300 ${
                          credit.status === "verified" 
                            ? "bg-primary hover:bg-primary-light shadow-glow-blue hover:scale-105" 
                            : "bg-muted text-white/50 cursor-not-allowed"
                        }`}
                        disabled={credit.status !== "verified"}
                      >
                        {credit.status === "verified" ? "🚀 Buy Credit" : "⏳ Pending"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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