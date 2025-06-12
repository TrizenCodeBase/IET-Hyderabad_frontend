
import React from 'react';
import { Star, Users, Trophy, CreditCard, Tag } from 'lucide-react';

interface EventCardProps {
  name: string;
  description: string;
  teamSize: string;
  prize: string;
  fee: string;
  status: 'open' | 'coming-soon';
  category: string;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  description,
  teamSize,
  prize,
  fee,
  status,
  category
}) => {
  return (
    <div className="modern-card rounded-2xl p-5 h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-primary leading-tight">{name}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          status === 'open' 
            ? 'bg-gradient-to-r from-green-100 to-green-50 text-green-800 border border-green-200 shadow-soft' 
            : 'bg-brand-surface-secondary text-brand-text-muted border border-brand-border-primary'
        }`}>
          {status === 'open' ? '🟢 Open' : '⏳ Coming Soon'}
        </span>
      </div>
      
      <p className="text-brand-text-secondary mb-5 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-3 mb-5">
        <div className="flex items-center justify-between p-3 bg-brand-surface-accent rounded-lg">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-brand-secondary" />
            <span className="text-xs font-medium text-brand-text-muted">Team Size:</span>
          </div>
          <span className="text-xs font-bold text-primary">{teamSize}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-brand-surface-accent rounded-lg">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-xs font-medium text-brand-text-muted">Prize:</span>
          </div>
          <span className="text-xs font-bold text-primary">{prize}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-brand-surface-accent rounded-lg">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-brand-secondary" />
            <span className="text-xs font-medium text-brand-text-muted">Fee:</span>
          </div>
          <span className="text-xs font-bold text-primary">{fee}</span>
        </div>
      </div>
      
      <div className="mb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-brand-light to-brand-surface-tertiary rounded-lg border border-brand-border-soft">
          <Tag className="w-3 h-3 text-primary" />
          <span className="text-xs font-semibold text-primary">{category}</span>
        </div>
      </div>
      
      {status === 'open' && (
        <button className="w-full btn-premium text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 shadow-medium">
          <span className="flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            Register Now
          </span>
        </button>
      )}
    </div>
  );
};

export default EventCard;
