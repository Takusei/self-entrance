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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const initialActiveItem =
    data.navMain
      .flatMap((group) => group.items)
      .find((item) => item.isActive)?.title || ""
  const [activeItem, setActiveItem] = React.useState(initialActiveItem)

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
                      onClick={() => setActiveItem(subItem.title)}
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
