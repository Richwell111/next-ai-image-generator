"use client";

import { authClient } from "~/lib/auth-client";
import { Button } from "../ui/button";
import { Crown, Sparkles } from "lucide-react";

export default function Upgrade() {
  const upgrade = async () => {
    // TODO: Enable this when billing plugin is configured
    await authClient.checkout({
        
      products: [
        "1abe9287-6989-4203-a36d-0ac1b62caa50",
        "8b80fb8a-9ce8-4f1f-a17a-6c187e2f0571",
        "e63b831e-76a9-4a65-9aae-ce415b2961cc",
      ],
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="group relative ml-2 overflow-hidden border-orange-400/50 bg-linear-to-r from-orange-400/10 to-pink-500/10 text-orange-400 transition-all duration-300 hover:border-orange-500/70 hover:bg-linear-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-orange-500/25"
      onClick={upgrade}
    >
      <div className="flex items-center gap-2">
        <Crown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        <span className="font-medium">Upgrade</span>
        <Sparkles className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-md bg-linear-to-r from-orange-400/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Button>
  );
}