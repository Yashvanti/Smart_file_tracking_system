import React, { useState, useMemo } from 'react';
import { 
  Files, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Timer, 
  QrCode 
} from 'lucide-react';
import { useFiles } from '../hooks/useFiles';
import DashboardCharts from '../components/DashboardCharts';
import FileStatusList from '../components/FileStatusList';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { cn } from '../lib/utils';

export default function Dashboard() {
  const { files } = useFiles();
  const [activeFilter, setActiveFilter] = useState('Total Files');

  const today = new Date().toISOString().split('T')[0];

  const stats = [
    { 
      label: 'Total Files', 
      value: files.length, 
      icon: Files, 
      color: 'bg-black text-white',
      filterFn: (f: any) => true 
    },
    { 
      label: 'Pending Files', 
      value: files.filter(f => f.status === 'In Review' || f.status === 'Created').length, 
      icon: Clock, 
      color: 'bg-blue-500 text-white',
      filterFn: (f: any) => f.status === 'In Review' || f.status === 'Created'
    },
    { 
      label: 'In Progress', 
      value: files.filter(f => f.status === 'Sent' || f.status === 'Received').length, 
      icon: Timer, 
      color: 'bg-yellow-400 text-black',
      filterFn: (f: any) => f.status === 'Sent' || f.status === 'Received'
    },
    { 
      label: 'Completed Files', 
      value: files.filter(f => f.status === 'Approved').length, 
      icon: CheckCircle2, 
      color: 'bg-green-500 text-white',
      filterFn: (f: any) => f.status === 'Approved'
    },
    { 
      label: 'Delayed Files', 
      value: files.filter(f => f.status === 'Rejected').length, 
      icon: AlertCircle, 
      color: 'bg-red-500 text-white',
      filterFn: (f: any) => f.status === 'Rejected'
    },
    { 
      label: 'Scanned Today', 
      value: files.filter(f => f.updatedAt.startsWith(today)).length, 
      icon: QrCode, 
      color: 'bg-purple-500 text-white',
      filterFn: (f: any) => f.updatedAt.startsWith(today)
    },
  ];

  const filteredFiles = useMemo(() => {
    const stat = stats.find(s => s.label === activeFilter);
    return stat ? files.filter(stat.filterFn) : files;
  }, [files, activeFilter]);

  return (
    <div className="space-y-8">
      <SEO 
        title="Dashboard"
        description="Overview of file movements, statistics, and departmental analytics."
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-gray-500 font-medium">Real-time monitoring of file movements across departments.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setActiveFilter(stat.label)}
            className={cn(
              "p-6 rounded-3xl shadow-sm border flex flex-col gap-4 group cursor-pointer transition-all",
              activeFilter === stat.label 
                ? "bg-white border-yellow-400 ring-2 ring-yellow-400/20 shadow-lg" 
                : "bg-white border-gray-100 hover:shadow-md"
            )}
          >
            <div className={`${stat.color} w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-current/10 group-hover:scale-110 transition-transform`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-gray-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <DashboardCharts files={files} />

      {/* Recent File Status Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <FileStatusList 
          files={filteredFiles} 
          title={`File Inventory: ${activeFilter}`}
        />
      </motion.div>
    </div>
  );
}
