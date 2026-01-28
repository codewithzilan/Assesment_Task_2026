const activities = [
  { 
    text: "AI booked appointment for iPhone 13 screen repair", 
    time: "2 min ago", 
    type: "success" 
  },
  { 
    text: "Warm transfer to technician - Software issue", 
    time: "5 min ago", 
    type: "warning" 
  },
  { 
    text: "Quote provided for iPad battery replacement", 
    time: "8 min ago", 
    type: "success" 
  },
  { 
    text: "Call dropped after 12 seconds", 
    time: "15 min ago", 
    type: "error" 
  },
];

const RecentActivity = () => {
  const getIndicatorColor = (type: string) => {
    switch (type) {
      case "success": return "bg-success";
      case "warning": return "bg-warning";
      case "error": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-6 text-lg font-semibold text-foreground">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`mt-2 h-2 w-2 rounded-full ${getIndicatorColor(activity.type)}`} />
            <div className="flex-1">
              <p className="text-sm text-foreground">{activity.text}</p>
              <p className="mt-1 text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
