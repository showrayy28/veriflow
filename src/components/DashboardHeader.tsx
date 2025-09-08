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
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm shadow-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-ocean shadow-ocean p-1">
              <img 
                src={veriflowLogo} 
                alt="Veriflow Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Veriflow</h1>
              <p className="text-xs text-muted-foreground">Carbon Credit Verification</p>
            </div>
          </div>

          {/* Role Toggle */}
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden sm:flex">
              Blockchain Connected
            </Badge>
            <div className="flex rounded-lg bg-muted p-1">
              <Button
                variant={userRole === "user" ? "default" : "ghost"}
                size="sm"
                onClick={() => onRoleChange("user")}
                className="text-xs"
              >
                <User className="h-3 w-3" />
                User
              </Button>
              <Button
                variant={userRole === "admin" ? "default" : "ghost"}
                size="sm"
                onClick={() => onRoleChange("admin")}
                className="text-xs"
              >
                <Shield className="h-3 w-3" />
                Admin
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-destructive animate-pulse-glow" />
            </Button>
            <Button variant="outline" size="sm">
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">0xa1b2...c3d4</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;