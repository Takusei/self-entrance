"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import * as React from "react"

// Placeholder components for your content
function WorkingExperienceContent() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Working Experience</h1>
      <p className="mt-4">Details about your working experience...</p>
    </div>
  )
}

function RealEstatePlatformContent() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Real Estate Platform</h1>
      <p className="mt-4">Details about your real estate project...</p>
    </div>
  )
}

export default function Page() {
  const [activeContent, setActiveContent] = React.useState("Working experience")

  return (
    <SidebarProvider>
      <AppSidebar onActiveItemChange={setActiveContent} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#avbbs">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex">
          <main className="flex-1 p-6">
            {activeContent === "Working experience" && <WorkingExperienceContent />}
            {activeContent === "Real estate platform" && (
              <RealEstatePlatformContent />
            )}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
