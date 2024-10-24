import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  HelpCircleIcon,
  Map,
  PieChart,
  Settings2,
  SettingsIcon,
  SquareTerminal,
} from "lucide-react"

import { SidebarLogo } from "@/components/Layout/Sidebar/SidebarLogo"
import { SidebarNavMain } from "@/components/Layout/Sidebar/SidebarNavMain"
import { SidebarNavUser } from "@/components/Layout/Sidebar/SidebarNavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "wouter"
import { Separator } from "@/components/ui/separator"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "History",
          url: "/mi-cuenta",
        },
        {
          title: "Starred",
          url: "~/",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function SidebarMain({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarNavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="space-y-1">
          <Link to="/Ayuda" asChild>
            <SidebarMenuButton tooltip='Ayuda'>
              <HelpCircleIcon />
              <span>Ayuda</span>
            </SidebarMenuButton>
          </Link>
          <Link to="/ajustes" asChild>
            <SidebarMenuButton tooltip='Ajustes'>
              <SettingsIcon />
              <span>Ajustes</span>
            </SidebarMenuButton>
          </Link>
        </div>
        <Separator />
        <SidebarNavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
