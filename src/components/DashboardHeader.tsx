import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, User, Shield, Bell, Settings } from "lucide-react";
import veriflowLogo from "@/assets/veriflow-logo.png";

interface DashboardHeaderProps {
  userRole: "user" | "admin";
  onRoleChange: (role: "user" | "admin") => void;
}

const DashboardHeader = ({ userRole, onRoleChange }: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-card-light backdrop-blur-lg shadow-glow border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 hover-glow rounded-lg p-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-neon p-1 animate-pulse-glow">
              <img 
                src={veriflowLogo} 
                alt="Veriflow Logo" 
                className="h-full w-full object-contain drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-neon rounded-xl opacity-20 blur-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient font-heading">Veriflow</h1>
              <p className="text-xs text-white/60">Carbon Verification</p>
            </div>
          </div>

          {/* Role Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-white/80 font-medium">Blockchain Connected</span>
            </div>
            <div className="flex rounded-xl glass-card p-1">
              <Button
                variant={userRole === "user" ? "default" : "ghost"}
                size="sm"
                onClick={() => onRoleChange("user")}
                className={`text-xs rounded-lg transition-all duration-300 ${
                  userRole === "user" 
                    ? "bg-primary shadow-glow-blue text-white" 
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <User className="h-3 w-3 mr-1" />
                User
              </Button>
              <Button
                variant={userRole === "admin" ? "default" : "ghost"}
                size="sm"
                onClick={() => onRoleChange("admin")}
                className={`text-xs rounded-lg transition-all duration-300 ${
                  userRole === "admin" 
                    ? "bg-accent shadow-glow text-white" 
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Shield className="h-3 w-3 mr-1" />
                Admin
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative text-white/70 hover:text-white hover:bg-white/10 rounded-lg">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent animate-pulse" />
            </Button>
            <Button className="glass-card-light text-white/80 hover:text-white border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <Wallet className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline text-gradient-neon font-mono">0xa1b2...c3d4</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-lg">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;