import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { NavItem as BaseNavItem, NavGroups, NavLinks } from "@payloadcms/next/navigation";

export const AdminNav = () => {
  const pathname = usePathname();

  // Auto-nav items from Payload collections + globals
  const navItems = useMemo(() => {
    // Default Payload nav items - collections and globals
    // We enhance these with active state highlighting
    return [
      // Collections group
      {
        label: "Collections",
        collapsed: false,
        items: [
          // Will be populated by Payload - we add Pages/Posts manually
          {
            label: "Pages",
            href: "/admin/collections/pages",
            active: pathname === "/admin/collections/pages" || pathname.startsWith("/admin/collections/pages/"),
          },
          {
            label: "Posts",
            href: "/admin/collections/posts",
            active: pathname === "/admin/collections/posts" || pathname.startsWith("/admin/collections/posts/"),
          },
          // Globals would come from config
          // {
          //   label: "Site Settings",
          //   href: "/admin/globals",
          //   active: pathname.startsWith("/admin/globals"),
          // },
        ],
      },
      // Additional groups can be added
      {
        label: "Tools",
        collapsed: false,
        items: [
          {
            label: "Users",
            href: "/admin/collections/users",
            active: pathname.includes("/users"),
          },
        ],
      },
    ];
  }, [pathname]);

  return (
    <nav className="space-y-1 border-y bg-card/50" aria-label="Main navigation">
      <NavGroups items={navItems} />
    </nav>
  );
};