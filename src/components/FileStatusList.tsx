import React, { useState } from 'react';
import { FileRecord } from '../types';
import { formatDate, formatTime, cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ChevronRight, Search, User, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FileStatusListProps {
  files: FileRecord[];
  title?: string;
}

export default function FileStatusList({ files, title = "File Inventory" }: FileStatusListProps) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-700';
      case 'Rejected': return 'bg-red-100 text-red-700';
      case 'In Review': return 'bg-blue-100 text-blue-700';
      case 'Sent': return 'bg-yellow-100 text-yellow-700';
      case 'Received': return 'bg-purple-100 text-purple-700';
      case 'Archived': return 'bg-gray-100 text-gray-700';
      case 'Created': return 'bg-teal-100 text-teal-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredFiles = files.filter(file => 
    file.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    file.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    file.officerName.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-gray-900 tracking-tight">{title}</h2>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Complete System Records</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-yellow-400 outline-none transition-all w-full sm:w-64"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">File Details</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Department & Officer</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Remarks</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Last Update</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <AnimatePresence mode="popLayout">
              {filteredFiles.map((file, idx) => (
                <motion.tr 
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  key={file.id} 
                  onClick={() => navigate(`/track-file?id=${file.id}`)}
                  className="hover:bg-gray-50/50 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                        <FileText className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">{file.fileName}</span>
                        <span className="text-[10px] font-mono text-gray-400">{file.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider",
                      getStatusColor(file.status)
                    )}>
                      {file.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-gray-600">{file.department}</span>
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold">
                        <User className="w-3 h-3" /> {file.officerName}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-3 h-3 text-gray-300 mt-1 flex-shrink-0" />
                      <span className="text-xs text-gray-500 line-clamp-2 italic">
                        {file.remarks || 'No remarks'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-900">{formatDate(file.updatedAt)}</span>
                      <span className="text-[10px] font-mono text-gray-400">{formatTime(file.updatedAt)}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
            {filteredFiles.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <p className="text-sm font-medium text-gray-400">No matching files found.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
