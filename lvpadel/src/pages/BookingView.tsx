import { useState } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, MapPin, User, Sunrise, Sun, Sunset } from "lucide-react"

export function BookingView() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const timeslots = [
    { time: "09:00", available: true, price: "1500 ₽" },
    { time: "10:30", available: false, price: "1500 ₽" },
    { time: "12:00", available: true, price: "1800 ₽" },
    { time: "13:30", available: true, price: "1800 ₽" },
    { time: "15:00", available: true, price: "2000 ₽", popular: true },
    { time: "16:30", available: false, price: "2000 ₽" },
    { time: "18:00", available: true, price: "2500 ₽", popular: true },
    { time: "19:30", available: true, price: "2500 ₽", popular: true },
    { time: "21:00", available: true, price: "2000 ₽" },
  ]

  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i)
    return d
  })

  return (
    <div className="flex flex-col flex-1 pb-20">
      
      {/* Date Selector */}
      <div className="bg-slate-900 text-white p-4">
        <div className="flex justify-between items-center mb-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-slate-800 hover:text-white">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="font-medium flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-lime-500" />
            {selectedDate.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-slate-800 hover:text-white">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {dates.map((d, i) => {
            const isSelected = i === 0
            const dayName = d.toLocaleDateString('ru-RU', { weekday: 'short' })
            return (
              <button
                key={i}
                className={`snap-center shrink-0 flex flex-col items-center justify-center w-14 h-16 rounded-xl transition-colors ${
                  isSelected ? 'bg-lime-500 text-slate-900' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <div className="text-xs uppercase font-medium">{dayName}</div>
                <div className="text-lg font-bold">{d.getDate()}</div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-4 flex-1 bg-slate-50">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-gray-500" />
          <h2 className="font-semibold text-slate-900">PadelPro Club (Центр)</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {timeslots.map((slot, i) => (
            <Card key={i} className={`border ${slot.available ? 'border-gray-200' : 'border-dashed border-gray-200 bg-gray-50'}`}>
              <CardContent className="p-3 text-center flex flex-col items-center">
                <div className={`text-lg font-bold ${slot.available ? 'text-slate-900' : 'text-gray-400 line-through'}`}>
                  {slot.time}
                </div>
                {slot.available ? (
                  <>
                    <div className="text-sm font-medium text-lime-600 mt-1">{slot.price}</div>
                    {slot.popular && <div className="text-[10px] uppercase font-bold text-orange-500 mt-1">Остался 1 корт</div>}
                  </>
                ) : (
                  <div className="text-sm text-gray-400 mt-1">Занято</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="fixed bottom-16 left-0 w-full p-4 bg-white border-t border-gray-200 safe-area-bottom">
         <Button className="w-full text-base py-6 bg-slate-900 text-white hover:bg-slate-800">
           Выбрать время
         </Button>
      </div>
    </div>
  )
}
