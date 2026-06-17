import { Home, Calendar, Users, User, Trophy } from "lucide-react"
import { cn } from "@/src/lib/utils"

interface MobileNavProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export function MobileNav({ currentTab, setTab }: MobileNavProps) {
  const tabs = [
    { id: "home", label: "Главная", icon: Home },
    { id: "booking", label: "Корты", icon: Calendar },
    { id: "matches", label: "Матчи", icon: Users },
    { id: "tournaments", label: "Турниры", icon: Trophy },
    { id: "profile", label: "Профиль", icon: User },
  ]

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 safe-area-bottom">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setTab(tab.id)}
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
            >
              <Icon
                className={cn(
                  "w-6 h-6 mb-1",
                  isActive ? "text-lime-600" : "text-gray-500 group-hover:text-lime-600"
                )}
              />
              <span
                className={cn(
                  "text-xs",
                  isActive ? "text-lime-600" : "text-gray-500 group-hover:text-lime-600"
                )}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
