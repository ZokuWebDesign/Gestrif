import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center py-4 transition-all hover:underline text-[#545353] data-[state=open]:text-[#0E0EAF]",
        className
      )}
      {...props}
    >
      <div className="relative h-4 w-4 shrink-0">
        <svg 
          className="absolute h-full w-full transition-opacity group-data-[state=closed]:opacity-100 group-data-[state=open]:opacity-0"
          width="16" 
          height="17" 
          viewBox="0 0 16 17" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1213_46685)">
            <rect y="7.98047" width="16" height="2" rx="1" fill="#0E0EA2"/>
            <rect x="7" y="0.980469" width="2" height="16" rx="1" fill="#0E0EA2"/>
          </g>
          <defs>
            <clipPath id="clip0_1213_46685">
              <rect width="16" height="16" fill="white" transform="translate(0 0.980469)"/>
            </clipPath>
          </defs>
        </svg>
        <svg 
          className="absolute h-full w-full transition-opacity group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100"
          width="16" 
          height="17" 
          viewBox="0 0 16 17" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7.78027" width="16" height="2" rx="1" fill="#0E0EA2"/>
        </svg>
      </div>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
