/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react"
import { MobileNav } from "./components/layout/MobileNav"
import { DashboardView } from "./pages/DashboardView"
import { BookingView } from "./pages/BookingView"
import { MatchesView } from "./pages/MatchesView"
import { ProfileView } from "./pages/ProfileView"
import { Button } from "./components/ui/button"

import { initFirebase, googleProvider } from "./lib/firebase"
import { signInWithPopup, User, signOut, getAuth } from "firebase/auth"

export default function App() {
  const [currentTab, setCurrentTab] = useState("home")
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function setup() {
      const fb = await initFirebase();
      if (fb?.auth) {
        fb.auth.onAuthStateChanged((u) => {
          setUser(u);
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    }
    setup();
  }, [])

  const handleLogin = async () => {
    try {
      const fb = await initFirebase();
      if (fb?.auth) {
        await signInWithPopup(fb.auth, googleProvider);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  const handleLogout = async () => {
    try {
      const fb = await initFirebase();
      if (fb?.auth) {
        await signOut(fb.auth);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lime-500"></div></div>
  }

  if (!user) {
    const isIframe = window.self !== window.top;

    return (
      <div className="flex flex-col min-h-screen bg-slate-900 text-white max-w-lg mx-auto shadow-2xl items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-sm">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-500 mb-2">
            LVPadel
          </h1>
          <p className="text-slate-400 text-lg">
            Ваш идеальный матч уже ждет. Бронируйте корты, находите партнеров и участвуйте в турнирах.
          </p>
          
          <div className="pt-8">
            {isIframe && (
              <div className="mb-4 p-3 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700">
                <p>Если кнопка входа не работает (особенно в Safari), пожалуйста, <strong>откройте приложение в новой вкладке</strong>.</p>
                <Button 
                  variant="outline" 
                  className="w-full mt-3 bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                  onClick={() => window.open(window.location.href, '_blank')}
                >
                  Открыть в новой вкладке
                </Button>
              </div>
            )}
            <Button 
              size="lg" 
              className="w-full bg-white text-slate-900 hover:bg-slate-100 flex items-center justify-center gap-3 text-lg py-6"
              onClick={handleLogin}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Войти через Google
            </Button>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Продолжая, вы соглашаетесь с правилами сервиса
            </p>
          </div>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    switch (currentTab) {
      case "home": return <DashboardView />;
      case "booking": return <BookingView />;
      case "matches": 
      case "tournaments":
        return <MatchesView />;
      case "profile": return <ProfileView user={user} onLogout={handleLogout} />;
      default: return <DashboardView />;
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 max-w-lg mx-auto shadow-2xl relative overflow-hidden">
      {currentTab !== 'profile' && currentTab !== 'booking' && (
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-green-600">
              LVPadel
            </h1>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center relative overflow-hidden">
              {user.photoURL ? (
                <img src={user.photoURL} alt="User avatar" className="w-full h-full object-cover" />
              ) : (
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              )}
            </div>
          </div>
        </header>
      )}
      
      <main className="flex-1 overflow-y-auto no-scrollbar relative z-10">
        {renderContent()}
      </main>

      <MobileNav currentTab={currentTab} setTab={setCurrentTab} />
    </div>
  )
}

