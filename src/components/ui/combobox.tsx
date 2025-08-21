"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export type ComboboxItem = {
  value: string
  label: string
}

interface SimpleComboboxProps {
  id?: string
  items: ComboboxItem[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  buttonClassName?: string
  contentClassName?: string
  commandClassName?: string
  disabled?: boolean
}

export function SimpleCombobox({
  id,
  items,
  value,
  onChange,
  placeholder = "Seleccionar...",
  searchPlaceholder = "Buscar...",
  emptyMessage = "Sin resultados",
  buttonClassName,
  contentClassName,
  commandClassName,
  disabled,
}: SimpleComboboxProps) {
  const [open, setOpen] = React.useState(false)

  const selectedLabel = React.useMemo(
    () => items.find((i) => i.value === value)?.label,
    [items, value]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          className={cn(
            "w-full justify-between px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-700 text-white hover:bg-slate-900/40",
            buttonClassName
          )}
          disabled={disabled}
        >
          <span className={cn(!selectedLabel && "text-slate-400")}>
            {selectedLabel ?? placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-[--radix-popover-trigger-width] p-0", contentClassName)} align="start">
        <Command className={cn("bg-transparent text-white", commandClassName)}>
          <CommandInput placeholder={searchPlaceholder} className="h-9 text-white placeholder:text-slate-400" />
          <CommandList className="bg-transparent">
            <CommandEmpty className="text-slate-400">{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    const nextValue = currentValue === value ? "" : currentValue
                    onChange(nextValue)
                    setOpen(false)
                  }}
                  role="option"
                  aria-selected={value === item.value}
                  className="text-white data-[selected=true]:bg-slate-800/80 data-[selected=true]:text-white"
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

// Demo component kept for reference; can be removed later if not needed
const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command className="bg-transparent text-white">
          <CommandInput placeholder="Search framework..." className="h-9 text-white placeholder:text-slate-400" />
          <CommandList className="bg-transparent">
            <CommandEmpty className="text-slate-400">No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                  className="text-white data-[selected=true]:bg-slate-800/80 data-[selected=true]:text-white"
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
