import React from 'react';
import { FileRecord } from '../types';
import { formatDate, formatTime, cn } from '../lib/utils';
import { motion } from 'motion/react';
import { FileText, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FileStatusListProps {
  files: FileRecord[];
}

export default function FileStatusList({ files }: FileStatusListProps) {
  const navigate = useNavigate();

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

  // Sort by updatedAt descending
  const sortedFiles = [...files].sort((a, b) => 
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  ).slice(0, 5); // Show top 5 recent

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-50 flex items-center justify-between">
        <h2 className="text-xl font-black text-gray-900 tracking-tight">Recent File Status</h2>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Updates</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">File Details</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Current Status</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Department</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Last Update</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {sortedFiles.map((file, idx) => (
              <motion.tr 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
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
                  <span className="text-sm font-medium text-gray-600">{file.department}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-900">{formatDate(file.updatedAt)}</span>
                    <span className="text-[10px] font-mono text-gray-400">{formatTime(file.updatedAt)}</span>
                  </div>
                </td>
              </motion.tr>
            ))}
            {sortedFiles.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center">
                  <p className="text-sm font-medium text-gray-400">No files found in the system.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {files.length > 5 && (
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-50">
          <button 
            onClick={() => navigate('/history')}
            className="text-[10px] font-black text-yellow-600 uppercase tracking-widest hover:text-yellow-700 transition-colors flex items-center gap-1"
          >
            View All Files <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}
