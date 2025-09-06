import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import UserDashboard from "@/components/UserDashboard";
import AdminDashboard from "@/components/AdminDashboard";
import heroImage from "@/assets/hero-mangrove.jpg";

const Index = () => {
  const [userRole, setUserRole] = useState<"user" | "admin">("user");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60" />
        <div className="relative h-full flex items-center justify-center text-center text-primary-foreground">
          <div className="space-y-4 px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold animate-float">
              Blue Carbon Credit Marketplace
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Trade verified coastal ecosystem carbon credits on blockchain. 
              Protecting mangroves, seagrass, and wetlands for a sustainable future.
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Header */}
      <DashboardHeader userRole={userRole} onRoleChange={setUserRole} />

      {/* Main Dashboard Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userRole === "user" ? <UserDashboard /> : <AdminDashboard />}
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Blue Carbon Credit Marketplace. Powered by blockchain technology.</p>
            <p className="mt-2">Protecting coastal ecosystems • Verified transparency • Global impact</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
