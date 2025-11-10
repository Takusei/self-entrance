"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "About Me",
      url: "#",
      items: [
        {
          title: "Working experience",
          url: "#",
          isActive: true,
        },
      ],
    },
    {
      title: "Projects",
      url: "#",
      items: [
        {
          title: "Real estate platform",
          url: "#",
          isActive: false,
        },
      ],
    },
  ],
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  onActiveItemChange?: (activeItem: string) => void
}

export function AppSidebar({
  onActiveItemChange,
  ...props
}: AppSidebarProps) {
  const initialActiveItem =
    data.navMain
      .flatMap((group) => group.items)
      .find((item) => item.isActive)?.title || ""
  const [activeItem, setActiveItem] = React.useState(initialActiveItem)

  const handleItemClick = (title: string) => {
    setActiveItem(title)
    onActiveItemChange?.(title)
  }

  return (
    <Sidebar {...props}>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={activeItem === subItem.title}
                      onClick={() => handleItemClick(subItem.title)}
                    >
                      <a href={subItem.url}>{subItem.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}