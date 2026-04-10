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

  const isPublicPage = ['/', '/login'].includes(location.pathname);
  const isLoginPage = location.pathname === '/login';

  if (!isAuthenticated && !isPublicPage) {
    return <Navigate to="/login" replace />;
  }

  // If it's the login page, we might want a simpler layout, 
  // but the user asked for "constant for all", so we'll keep the structure 
  // but maybe hide the sidebar specifically for login if it's too much.
  // For now, let's keep it consistent as requested.

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-x-hidden">
      {!isLoginPage && (
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          onLogout={logout} 
        />
      )}
      
      <main className={cn(
        "flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out",
        !isLoginPage && (isSidebarOpen ? "lg:pl-64" : "lg:pl-20")
      )}>
        {!isLoginPage && (
          <Topbar 
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            user={user} 
          />
        )}
        
        <div className={cn(
          "flex-1",
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
        </div>
      </main>
    </div>
  );
}
