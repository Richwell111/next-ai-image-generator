"use client";

import { UserButton } from "@daveyplate/better-auth-ui";
import { User, Settings } from "lucide-react";
import { useEffect, useState } from "react";

export default function UserButtonWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-10 w-full animate-pulse rounded-md border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800" />
    );
  }

  return (
    <UserButton
      variant="outline"
      className="w-full border-muted-foreground/20 transition-colors hover:border-primary/50"
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
