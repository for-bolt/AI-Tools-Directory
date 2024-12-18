import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ToolsColumn from './ToolsColumn';
import { latestTools, topTools, selectedTools, freeTools } from '../../data/tools';

export default function ToolsList() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ToolsColumn 
          title="Latest AI" 
          tools={latestTools} 
          accentColor="blue"
          icon="Clock"
        />
        <ToolsColumn 
          title="Top AI" 
          tools={topTools} 
          accentColor="purple"
          icon="Trophy"
        />
        <ToolsColumn 
          title="Our Selection" 
          tools={selectedTools} 
          accentColor="emerald"
          icon="Star"
        />
        <ToolsColumn 
          title="Free AI" 
          tools={freeTools} 
          accentColor="amber"
          icon="Sparkles"
        />
      </div>
      
      <div className="text-center">
        <Link
          to="/full-list"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span>View All AI Tools</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}