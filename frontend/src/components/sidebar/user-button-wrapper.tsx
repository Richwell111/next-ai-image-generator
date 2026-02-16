"use client";

import { UserButton } from "@daveyplate/better-auth-ui";
import { User, Settings } from "lucide-react";

export default function UserButtonWrapper() {
  return (
    <UserButton
      variant="outline"
      className="border-muted-foreground/20 hover:border-primary/50 w-full transition-colors"
      disableDefaultLinks={true}
      additionalLinks={[
        {
          label: "Customer Portal",
          href: "/dashboard/customer-portal",
          icon: <User className="h-4 w-4" />,
        },
        {
          label: "Settings",
          href: "/dashboard/settings",
          icon: <Settings className="h-4 w-4" />,
        },
      ]}
    />
  );
}
