import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        // 기본 팔레트 (토큰 기반)
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",

        // 역할(Role) 전용 배지 – 디자인 토큰 사용
        roleAdmin:
          "border-transparent bg-[var(--badge-role-admin)] text-[var(--badge-role-admin-foreground)]",
        roleModerator:
          "border-transparent bg-[var(--badge-role-moderator)] text-[var(--badge-role-moderator-foreground)]",
        roleUser:
          "border-transparent bg-[var(--badge-role-user)] text-[var(--badge-role-user-foreground)]",

        // 상태(Status) 전용 배지 – 유저/포스트 공통
        statusActive:
          "border-transparent bg-[var(--badge-status-active)] text-[var(--badge-status-active-foreground)]",
        statusInactive:
          "border-transparent bg-[var(--badge-status-inactive)] text-[var(--badge-status-inactive-foreground)]",
        statusSuspended:
          "border-transparent bg-[var(--badge-status-suspended)] text-[var(--badge-status-suspended-foreground)]",

        statusPublished:
          "border-transparent bg-[var(--badge-status-published)] text-[var(--badge-status-published-foreground)]",
        statusDraft:
          "border-transparent bg-[var(--badge-status-draft)] text-[var(--badge-status-draft-foreground)]",
        statusArchived:
          "border-transparent bg-[var(--badge-status-archived)] text-[var(--badge-status-archived-foreground)]",

        // 카테고리(Category) 전용 배지 – 포스트 카테고리
        categoryDevelopment:
          "border-transparent bg-[var(--badge-category-development)] text-[var(--badge-category-development-foreground)]",
        categoryDesign:
          "border-transparent bg-[var(--badge-category-design)] text-[var(--badge-category-design-foreground)]",
        categoryAccessibility:
          "border-transparent bg-[var(--badge-category-accessibility)] text-[var(--badge-category-accessibility-foreground)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
