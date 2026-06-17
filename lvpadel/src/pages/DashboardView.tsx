import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Calendar, Clock, MapPin, Trophy } from "lucide-react"

export function DashboardView() {
  return (
    <div className="flex flex-col gap-4 p-4 pb-20">
      
      {/* Upcoming match */}
      <section>
        <h2 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Ближайший матч</h2>
        <Card className="bg-slate-900 border-none text-white">
          <CardContent className="p-5">
            <div className="flex justify-between items-start mb-4">
              <Badge className="bg-lime-500 text-slate-900 hover:bg-lime-400">Парный сет</Badge>
              <div className="text-right">
                <div className="font-semibold text-lg text-white">Сегодня</div>
                <div className="text-sm text-slate-300">19:00 - 20:30</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4 text-slate-300">
              <MapPin className="w-4 h-4 text-lime-500" />
              <span className="text-sm">PadelPro Club, Корт #2</span>
            </div>

            <div className="flex items-center justify-between mt-4 p-3 bg-slate-800 rounded-lg">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-800 flex items-center justify-center text-xs font-semibold">ME</div>
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-800 flex items-center justify-center text-xs font-semibold">AB</div>
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-slate-800 flex items-center justify-center text-xs font-semibold">VK</div>
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-slate-800 flex items-center justify-center text-xs font-semibold">IS</div>
              </div>
              <Button size="sm" variant="outline" className="text-slate-900 bg-white hover:bg-slate-100 hover:text-slate-900 border-none">Детали</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Actions */}
      <section className="grid grid-cols-2 gap-3 mt-2">
        <Button className="h-auto py-4 flex flex-col gap-2 items-center justify-center bg-white border border-gray-200 text-slate-900 shadow-sm hover:bg-slate-50">
          <div className="p-2 bg-lime-100 text-lime-700 rounded-full">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="font-semibold">Бронь корта</span>
        </Button>
        <Button className="h-auto py-4 flex flex-col gap-2 items-center justify-center bg-white border border-gray-200 text-slate-900 shadow-sm hover:bg-slate-50">
          <div className="p-2 bg-blue-100 text-blue-700 rounded-full">
            <Trophy className="w-5 h-5" />
          </div>
          <span className="font-semibold">Найти матч</span>
        </Button>
      </section>

      {/* Stats Summary */}
      <section className="mt-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Моя статистика</h2>
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-slate-900">4.2</div>
              <div className="text-xs text-gray-500 mt-1">Рейтинг</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-slate-900">12</div>
              <div className="text-xs text-gray-500 mt-1">Матчей</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">65%</div>
              <div className="text-xs text-gray-500 mt-1">Побед</div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
