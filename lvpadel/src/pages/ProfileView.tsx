import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Settings, Edit3, ArrowUpRight, ArrowDownRight, Activity, LogOut } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { User } from "firebase/auth";

interface ProfileViewProps {
  user: User;
  onLogout: () => void;
}

export function ProfileView({ user, onLogout }: ProfileViewProps) {
  const mockData = [
    { name: 'Янв', matches: 4 },
    { name: 'Фев', matches: 6 },
    { name: 'Мар', matches: 8 },
    { name: 'Апр', matches: 12 },
    { name: 'Май', matches: 10 },
    { name: 'Июн', matches: 15 },
  ];

  return (
    <div className="flex flex-col flex-1 pb-20 bg-slate-50">
      
      {/* Header Profile */}
      <div className="bg-slate-900 text-white p-6 pb-8 rounded-b-3xl">
        <div className="flex justify-between items-start mb-6">
          <Badge className="bg-lime-500 text-slate-900 border-none px-3 py-1 text-sm bg-opacity-90">Уровень: 4.2</Badge>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={onLogout} className="text-slate-300 hover:text-white hover:bg-slate-800">
              <LogOut className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative">
            <img 
              src={user.photoURL || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80"} 
              className="w-24 h-24 rounded-full border-4 border-slate-800 object-cover"
              alt="User"
            />
            <button className="absolute bottom-0 right-0 p-1.5 bg-lime-500 rounded-full text-slate-900 border-2 border-slate-900">
              <Edit3 className="w-3 h-3" />
            </button>
          </div>
          <h2 className="mt-4 font-bold text-2xl">{user.displayName || "Игрок"}</h2>
          <p className="text-slate-400 text-sm mt-1">{user.email}</p>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 -mt-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm text-gray-500">Победы / Поражения</div>
                <Activity className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900">42 / 18</span>
              </div>
              <div className="text-xs text-lime-600 font-medium flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +12% за месяц
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm text-gray-500">Позиция в рейтинге</div>
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 px-1 py-0 px-2 rounded">Россия</Badge>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900">1,248</span>
              </div>
              <div className="text-xs text-red-500 font-medium flex items-center mt-1">
                <ArrowDownRight className="w-3 h-3 mr-1" />
                -3 позиции
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Chart */}
        <Card className="border-none shadow-md">
          <CardContent className="p-5">
            <h3 className="font-semibold text-slate-900 mb-4">Активность игр (Матчи)</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dx={-10} />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="matches" fill="#84cc16" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full bg-white text-slate-900 border-gray-200">
          История матчей
        </Button>
      </div>
    </div>
  )
}
