import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3,
  Users,
  Leaf,
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  Globe,
  FileCheck,
  Satellite
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  // Sample data
  const systemStats = {
    totalProjects: 156,
    totalCredits: 12450,
    totalRetired: 8920,
    pendingVerification: 23
  };

  const monthlyData = [
    { month: 'Jan', issued: 450, retired: 320 },
    { month: 'Feb', issued: 520, retired: 380 },
    { month: 'Mar', issued: 480, retired: 420 },
    { month: 'Apr', issued: 680, retired: 590 },
    { month: 'May', issued: 750, retired: 680 },
    { month: 'Jun', issued: 890, retired: 720 }
  ];

  const projectTypes = [
    { name: 'Mangrove', value: 45, color: 'hsl(var(--primary))' },
    { name: 'Seagrass', value: 30, color: 'hsl(var(--accent))' },
    { name: 'Wetland', value: 20, color: 'hsl(var(--secondary))' },
    { name: 'Salt Marsh', value: 5, color: 'hsl(var(--success))' }
  ];

  const verificationLogs = [
    {
      id: 1,
      project: "Mangrove Restoration - Philippines",
      date: "2024-01-15",
      status: "verified",
      aiScore: 94,
      details: "Satellite imagery confirms 12.5t CO₂ sequestration"
    },
    {
      id: 2,
      project: "Seagrass Beds - Maldives", 
      date: "2024-01-14",
      status: "pending",
      aiScore: 87,
      details: "Awaiting drone imagery validation"
    },
    {
      id: 3,
      project: "Coastal Wetland - Brazil",
      date: "2024-01-13", 
      status: "flagged",
      aiScore: 62,
      details: "Inconsistent vegetation coverage detected"
    }
  ];

  const registrationRequests = [
    {
      id: 1,
      name: "Marine Conservation Inc.",
      type: "Organization",
      project: "Coral Reef Restoration",
      date: "2024-01-15",
      status: "pending"
    },
    {
      id: 2,
      name: "Coastal Solutions Ltd.",
      type: "Company",
      project: "Mangrove Reforestation",
      date: "2024-01-14",
      status: "pending"
    }
  ];

  const complianceAlerts = [
    {
      id: 1,
      type: "double-count",
      severity: "high",
      description: "Potential double counting detected in Project MNG-045",
      project: "Mangrove Restoration - Thailand"
    },
    {
      id: 2,
      type: "data-anomaly", 
      severity: "medium",
      description: "Sudden CO₂ claim increase (+300%) in Project SG-023",
      project: "Seagrass Conservation - Indonesia"
    }
  ];

  return (
    <div className="space-y-6">
      {/* System Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-primary/20 shadow-card hover:shadow-ocean transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <Globe className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{systemStats.totalProjects}</div>
            <p className="text-xs text-muted-foreground">+8 this month</p>
          </CardContent>
        </Card>

        <Card className="border-accent/20 shadow-card hover:shadow-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Issued</CardTitle>
            <Leaf className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{systemStats.totalCredits.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Total CO₂ credits</p>
          </CardContent>
        </Card>

        <Card className="border-success/20 shadow-card hover:shadow-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Retired</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{systemStats.totalRetired.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">71.6% retirement rate</p>
          </CardContent>
        </Card>

        <Card className="border-warning/20 shadow-card hover:shadow-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Verification</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{systemStats.pendingVerification}</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Admin Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
          <TabsTrigger value="registry">Registry</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Monthly Credit Activity</CardTitle>
                <CardDescription>Credits issued vs retired over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="issued" fill="hsl(var(--primary))" name="Issued" />
                    <Bar dataKey="retired" fill="hsl(var(--success))" name="Retired" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Project Distribution</CardTitle>
                <CardDescription>Breakdown of blue carbon project types</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={projectTypes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {projectTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="verification" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Satellite className="h-5 w-5 text-primary" />
                AI Verification Logs
              </CardTitle>
              <CardDescription>
                Recent automated verifications using satellite and drone imagery
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {verificationLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`h-3 w-3 rounded-full ${
                        log.status === 'verified' ? 'bg-success' : 
                        log.status === 'pending' ? 'bg-warning' : 'bg-destructive'
                      }`} />
                      <div>
                        <p className="font-medium text-sm">{log.project}</p>
                        <p className="text-xs text-muted-foreground">{log.details}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">AI Score: {log.aiScore}%</span>
                        <Badge variant={
                          log.status === 'verified' ? 'default' : 
                          log.status === 'pending' ? 'secondary' : 'destructive'
                        }>
                          {log.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{log.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="registry" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Registration Requests
              </CardTitle>
              <CardDescription>
                New project and organization registrations awaiting approval
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {registrationRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium text-sm">{request.name}</p>
                      <p className="text-xs text-muted-foreground">{request.project}</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">{request.type}</Badge>
                        <span className="text-xs text-muted-foreground">{request.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="success" size="sm">
                        <CheckCircle2 className="h-3 w-3" />
                        Approve
                      </Button>
                      <Button variant="destructive" size="sm">
                        <XCircle className="h-3 w-3" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Compliance Alerts
              </CardTitle>
              <CardDescription>
                System-detected anomalies and potential compliance issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceAlerts.map((alert) => (
                  <div key={alert.id} className={`p-4 border rounded-lg ${
                    alert.severity === 'high' ? 'border-destructive/50 bg-destructive/5' : 'border-warning/50 bg-warning/5'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant={alert.severity === 'high' ? 'destructive' : 'secondary'}>
                            {alert.severity} priority
                          </Badge>
                          <Badge variant="outline">{alert.type}</Badge>
                        </div>
                        <p className="font-medium text-sm">{alert.description}</p>
                        <p className="text-xs text-muted-foreground">{alert.project}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Investigate
                        </Button>
                        <Button variant="default" size="sm">
                          Resolve
                        </Button>
                      </div>
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

export default AdminDashboard;