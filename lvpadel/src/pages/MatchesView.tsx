import { useState } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { MapPin, Trophy, Users, Star, Plus } from "lucide-react"

export function MatchesView() {
  const [tab, setTab] = useState<'matches' | 'tournaments'>('matches')

  return (
    <div className="flex flex-col flex-1 pb-20 bg-slate-50">
      <div className="bg-white p-2 border-b border-gray-200">
        <div className="flex p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setTab('matches')}
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${
              tab === 'matches' ? 'bg-white text-slate-900 shadow-sm' : 'text-gray-500 hover:text-slate-900'
            }`}
          >
            Открытые матчи
          </button>
          <button
            onClick={() => setTab('tournaments')}
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${
              tab === 'tournaments' ? 'bg-white text-slate-900 shadow-sm' : 'text-gray-500 hover:text-slate-900'
            }`}
          >
            Турниры
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {tab === 'matches' && (
          <>
            <Button className="w-full bg-slate-900 text-white" size="lg">
              <Plus className="w-4 h-4 mr-2" />
              Создать свой матч
            </Button>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">Завтра, 18:00</span>
                    <span className="text-sm text-gray-500 flex items-center mt-1"><MapPin className="w-3 h-3 mr-1"/> ПСА Padel Club</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Тренировка</Badge>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex -space-x-2">
                    <img src="https://ui-avatars.com/api/?name=Anton+P&background=0D8ABC&color=fff" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://ui-avatars.com/api/?name=Max+R&background=3F51B5&color=fff" className="w-10 h-10 rounded-full border-2 border-white" />
                    <div className="w-10 h-10 rounded-full border-2 border-white border-dashed bg-slate-50 flex items-center justify-center text-gray-400">
                      <Plus className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white border-dashed bg-slate-50 flex items-center justify-center text-gray-400">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium text-slate-900">Уровень: 3.5 - 4.5</span>
                    <Button size="sm" className="mt-2 bg-lime-500 text-slate-900 hover:bg-lime-600">Присоединиться</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">18 Июня, 20:30</span>
                    <span className="text-sm text-gray-500 flex items-center mt-1"><MapPin className="w-3 h-3 mr-1"/> PadelPro (Север)</span>
                  </div>
                  <Badge variant="outline" className="border-orange-500 text-orange-600">Соревновательный</Badge>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex -space-x-2">
                    <img src="https://ui-avatars.com/api/?name=Sergey+M&background=4CAF50&color=fff" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://ui-avatars.com/api/?name=Ivan+K&background=FF9800&color=fff" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://ui-avatars.com/api/?name=Oleg+T&background=F44336&color=fff" className="w-10 h-10 rounded-full border-2 border-white" />
                    <div className="w-10 h-10 rounded-full border-2 border-white border-dashed bg-slate-50 flex items-center justify-center text-gray-400">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium text-slate-900">Уровень: 4.5+</span>
                    <Button size="sm" className="mt-2 text-slate-900 bg-white border border-gray-200">Подробнее</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {tab === 'tournaments' && (
          <>
            <Card className="overflow-hidden border-orange-200 shadow-sm shadow-orange-100">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-white/20 text-white border-none hover:bg-white/30 mb-2">Открыта регистрация</Badge>
                    <h3 className="font-bold text-lg">PadelPro Summer Cup</h3>
                  </div>
                  <Trophy className="w-8 h-8 opacity-80" />
                </div>
              </div>
              <CardContent className="p-4 bg-white">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Даты</div>
                    <div className="font-medium text-slate-900">24-25 Августа</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Категории</div>
                    <div className="font-medium text-slate-900">A, B, C</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Призовой фонд</div>
                    <div className="font-medium text-slate-900 text-lime-600">100 000 ₽</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Свободно</div>
                    <div className="font-medium text-slate-900">12 мест</div>
                  </div>
                </div>
                <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">Регистрация</Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
