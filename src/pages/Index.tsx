import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import UserDashboard from "@/components/UserDashboard";
import AdminDashboard from "@/components/AdminDashboard";
import heroImage from "@/assets/hero-mangrove.jpg";

const Index = () => {
  const [userRole, setUserRole] = useState<"user" | "admin">("user");

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-bounce-gentle"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-accent/30 rounded-full blur-lg animate-float"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-secondary/25 rounded-full blur-2xl animate-pulse-glow"></div>
          <div className="absolute top-1/4 left-2/3 w-20 h-20 bg-warning/40 rounded-full blur-md animate-bounce-gentle"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">🌊 Blockchain Verified • Live Network</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-tight">
              <span className="text-gradient-neon">Veriflow</span>
            </h1>
            
            <p className="text-xl md:text-3xl font-semibold text-gradient mb-4">
              Next-Gen Carbon Credit Verification
            </p>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary blockchain platform for verifying and trading authentic blue carbon credits from coastal ecosystems. 
              <span className="text-accent font-semibold"> Transparent, secure, and impactful.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <button className="px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl shadow-glow-blue hover:shadow-glow transition-all duration-300 hover:scale-105 neon-border">
                🚀 Launch Platform
              </button>
              <button className="px-8 py-4 glass-card-light text-white font-semibold rounded-xl hover:glass-card transition-all duration-300 hover:scale-105">
                📊 View Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-8 text-white/80 text-sm">
          <div className="glass-card-light px-4 py-2 rounded-lg animate-fade-in">
            <div className="font-bold text-accent">12.5K+</div>
            <div>Credits Verified</div>
          </div>
          <div className="glass-card-light px-4 py-2 rounded-lg animate-fade-in">
            <div className="font-bold text-secondary">99.9%</div>
            <div>Uptime</div>
          </div>
          <div className="glass-card-light px-4 py-2 rounded-lg animate-fade-in">
            <div className="font-bold text-warning">156</div>
            <div>Active Projects</div>
          </div>
        </div>
      </div>

      {/* Dashboard Header */}
      <div className="relative z-20">
        <DashboardHeader userRole={userRole} onRoleChange={setUserRole} />
      </div>

      {/* Main Dashboard Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="glass-card rounded-2xl p-8 animate-scale-in">
          {userRole === "user" ? <UserDashboard /> : <AdminDashboard />}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 glass-card-light backdrop-blur-md mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-white/70">
            <p className="text-gradient">© 2024 Veriflow. Powered by blockchain technology.</p>
            <p className="mt-2 text-white/60">🌊 Protecting coastal ecosystems • ✅ Verified transparency • 🌍 Global impact</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
