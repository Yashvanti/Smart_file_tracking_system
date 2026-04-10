import React, { useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Layout() {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  const isLoginPage = location.pathname === '/login';

  if (!isAuthenticated && !isLoginPage) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {!isLoginPage && (
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          onLogout={logout} 
        />
      )}
      
      <div className={cn(
        "flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out",
        !isLoginPage && (isSidebarOpen ? "lg:pl-64" : "lg:pl-20")
      )}>
        {!isLoginPage && (
          <Topbar 
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            user={user} 
          />
        )}
        
        <main className={cn(
          "flex-1 overflow-y-auto",
          !isLoginPage && "p-4 lg:p-8"
        )}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
          
          {/* Bottom padding to ensure content isn't cut off */}
          <div className="h-8" />
        </main>
      </div>
    </div>
  );
}
