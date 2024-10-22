import { SmilePlusIcon } from "lucide-react";

export function SidebarLogo() {
  return (
    <div className="flex gap-2">
      <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
        <SmilePlusIcon className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">
          Paylus Estudio
        </span>
        <span className="truncate text-xs">v1.0.0</span>
      </div>
    </div>
  )
}
