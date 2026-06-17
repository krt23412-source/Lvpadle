import { Bell } from "lucide-react"
import { Button } from "@/src/components/ui/button"

export function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="flex h-14 items-center px-4 justify-between">
        <div className="font-semibold text-lg">{title}</div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-600 block" />
        </Button>
      </div>
    </header>
  )
}
