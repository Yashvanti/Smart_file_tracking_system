import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon,
  LayoutDashboard, 
  PlusCircle, 
  Search, 
  QrCode, 
  History, 
  LogOut, 
  X,
  Menu,
  FileText,
  User,
  Bell
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onLogout: () => void;
}

const menuItems = [
  { icon: HomeIcon, label: 'Home', path: '/' },
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: PlusCircle, label: 'Add File', path: '/add-file' },
  { icon: Search, label: 'Track File', path: '/track-file' },
  { icon: QrCode, label: 'Scan QR', path: '/scan-qr' },
  { icon: History, label: 'File History', path: '/history' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
];

export default function Sidebar({ isOpen, setIsOpen, onLogout }: SidebarProps) {
  const location = useLocation();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          x: (isMobile && !isOpen) ? -300 : 0,
          width: (!isMobile) ? (isOpen ? 256 : 80) : 256
        }}
        className={cn(
          "fixed top-0 left-0 h-full bg-black text-white z-50 transition-all duration-300 ease-in-out",
          !isMobile && !isOpen ? "w-20" : "w-64"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 p-2 rounded-lg shrink-0">
                <FileText className="text-black w-6 h-6" />
              </div>
              <motion.span 
                initial={false}
                animate={{ 
                  opacity: (isOpen || isMobile) ? 1 : 0,
                  width: (isOpen || isMobile) ? 'auto' : 0 
                }}
                className="font-bold text-lg tracking-tight overflow-hidden whitespace-nowrap"
              >
                SMART TRACK
              </motion.span>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-yellow-400"
            >
              <X />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => isMobile && setIsOpen(false)}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all group relative",
                  location.pathname === item.path 
                    ? "bg-yellow-400 text-black font-semibold shadow-lg shadow-yellow-400/20" 
                    : "hover:bg-white/10 text-gray-400 hover:text-white"
                )}
              >
                <item.icon className={cn("w-5 h-5 shrink-0", location.pathname === item.path ? "text-black" : "group-hover:text-yellow-400")} />
                <span className={cn(
                  "transition-all duration-300 overflow-hidden whitespace-nowrap",
                  !isOpen && "lg:opacity-0 lg:w-0",
                  isOpen && "opacity-100 w-auto"
                )}>
                  {item.label}
                </span>
                
                {!isOpen && (
                  <div className="absolute left-full ml-6 px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity hidden lg:block z-50">
                    {item.label}
                  </div>
                )}
              </Link>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={onLogout}
              className="flex items-center gap-4 px-4 py-3 w-full rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-all group relative"
            >
              <LogOut className="w-5 h-5 shrink-0" />
              <span className={cn(
                "transition-all duration-300 overflow-hidden whitespace-nowrap",
                !isOpen && "lg:opacity-0 lg:w-0",
                isOpen && "opacity-100 w-auto"
              )}>
                Logout
              </span>
              {!isOpen && (
                <div className="absolute left-full ml-6 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity hidden lg:block z-50">
                  Logout
                </div>
              )}
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
