"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, TextAlignJustify } from "lucide-react";

// import { useIsMobile } from "@/hooks/useIsMobile";
import { itemListNavbar, itemListNavbarMobile } from "@/data/navbar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { SidebarGroup, SidebarGroupLabel } from "./ui/sidebar";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Input } from "./ui/input";
import Logo from "./ui/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="w-full border-b border-border text-bg-primary">
      <nav className="flex items-center justify-between w-full px-4 py-2 text-accent-foreground lg:py-4 lg:px-25 container mx-auto lg:max-w-[82rem]">
        <Link href="/">
          <Logo className="w-16 sm:w-20 lg:w-30" />
        </Link>

        <div className="flex-1 mx-4">
          <Input
            placeholder="Search..."
            className="w-full focus:shadow-none focus:outline-none text-accent-foreground placeholder:text-accent-foreground "
          />
        </div>

        <NavigationMenu className="hidden sm:inline-block">
          <NavigationMenuList>
            {itemListNavbar.map((item, i) => (
              <NavigationMenuItem key={i}>
                {item.child == null || item.child.length === 0 ? (
                  <NavigationMenuLink>{item.trigger}</NavigationMenuLink>
                ) : item.trigger === "About" ? (
                  <>
                    <NavigationMenuTrigger className="bg-primary text-sm hover:bg-primary">
                      {item.trigger}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-4 bg-background hover:text-accent md:pb-6"
                              href={item.link}
                            >
                              <div className="mb-2 text-base font-semibold sm:mt-2 ">
                                {item.trigger}
                              </div>
                              <p className="text-accent/70 lg:font-medium text-sm leading-tight">
                                Beautifully designed components built with
                                Tailwind CSS.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>

                        {item.child.map((child, i) => (
                          <NavigationMenuLink asChild key={i}>
                            <Link
                              className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-4 bg-background hover:text-accent"
                              href={child.link}
                            >
                              <div className="mb-2 text-base font-semibold sm:mt-2 ">
                                {child.title}
                              </div>
                              <p className="text-accent/70 lg:font-medium text-sm leading-tight">
                                Beautifully designed components built with
                                Tailwind CSS.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <>
                    <NavigationMenuTrigger className="bg-primary text-sm hover:bg-primary">
                      {item.trigger}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.child.map((child, i) => (
                          <NavigationMenuLink asChild key={i}>
                            <Link
                              className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-4 bg-background hover:text-accent"
                              href={child.link}
                            >
                              <div className="mb-2 text-base font-semibold sm:mt-2 ">
                                {child.title}
                              </div>
                              <p className="text-accent/70 lg:font-medium text-sm leading-tight">
                                Beautifully designed components built with
                                Tailwind CSS.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open Menu"
              className="sm:hidden p-2 rounded-md cursor-pointer"
            >
              <TextAlignJustify className="w-5 h-5" />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-64 p-0 transition-colors">
            <SheetHeader className="px-4 py-3 border-b border-border bg-primary text-accent-foreground">
              <Logo className="w-16" />
            </SheetHeader>

            <div className="px-4 space-y-4">
              {itemListNavbarMobile.map((item, index) => (
                <div key={index}>
                  {item.link ? (
                    <Link
                      href={item.link}
                      onClick={() => setOpen(false)} // 👈 nutup sheet
                      className="flex items-center gap-3 text-sm text-accent cursor-pointer"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.trigger}
                    </Link>
                  ) : (
                    <Collapsible defaultOpen={false} className="group/collapse">
                      <SidebarGroup className="p-0 space-y-1">
                        <SidebarGroupLabel asChild className="p-0">
                          <CollapsibleTrigger className="mb-0 pb-0">
                            <p className="text-accent font-normal flex items-center w-full text-sm cursor-pointer">
                              <item.icon className="w-4 h-4 mr-2" />
                              {item.trigger}
                              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapse:rotate-180 size-4" />
                            </p>
                          </CollapsibleTrigger>
                        </SidebarGroupLabel>

                        <CollapsibleContent className="pl-6 space-y-2 text-sm text-accent/80">
                          {item.child?.map((childItem, i) => (
                            <Link
                              key={i}
                              href={childItem.link}
                              onClick={() => setOpen(false)} // 👈 juga nutup sheet
                              className="block cursor-pointer"
                            >
                              {childItem.title}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </SidebarGroup>
                    </Collapsible>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
