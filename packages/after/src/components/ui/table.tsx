import * as React from 'react';

import { cn } from '@/lib/utils';

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div
      data-slot="table-container"
      className={cn('relative w-full overflow-x-auto', 'border-border bg-card rounded-md border')}>
      <table
        data-slot="table"
        className={cn(
          'w-full table-auto caption-bottom border-collapse text-left align-middle text-sm',
          'bg-background text-foreground',
          className,
        )}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn('bg-muted/40', '[&>tr]:border-border/60 [&>tr]:border-b', className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        '[&>tr:last-child>td]:border-b-0',
        '[&>tr:nth-child(odd)]:bg-background',
        '[&>tr:nth-child(even)]:bg-muted/30',
        className,
      )}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        'bg-muted/50 border-border border-t font-medium [&>tr]:last:border-b-0',
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'border-border/60 border-b transition-colors',
        'hover:bg-muted/20 data-[state=selected]:bg-muted',
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'px-4 py-4 text-left align-middle text-[0.75rem] font-medium whitespace-nowrap',
        'text-muted-foreground tracking-[0.03em] uppercase',
        'border-border border-b-2',
        "[&:has([role='checkbox'])]:pr-0 [&>[role='checkbox']]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'text-foreground px-4 py-4 align-middle text-sm whitespace-nowrap',
        'border-border/40 border-b',
        "[&:has([role='checkbox'])]:pr-0 [&>[role='checkbox']]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  );
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
