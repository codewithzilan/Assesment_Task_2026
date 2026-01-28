const activities = [
  {
    id: 1,
    message: "AI booked appointment for iPhone 13 screen repair",
    time: "2 min ago",
    type: "success",
  },
  {
    id: 2,
    message: "Warm transfer to technician - Software issue",
    time: "5 min ago",
    type: "warning",
  },
  {
    id: 3,
    message: "Quote provided for iPad battery replacement",
    time: "8 min ago",
    type: "success",
  },
  {
    id: 4,
    message: "Call dropped after 12 seconds",
    time: "15 min ago",
    type: "error",
  },
];

export const RecentActivity = () => {
  return (
    <div className="stat-card animate-fade-in">
      <h3 className="text-lg font-semibold text-foreground mb-6">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div
              className={`w-2 h-2 rounded-full mt-2 ${
                activity.type === "success"
                  ? "bg-success"
                  : activity.type === "warning"
                  ? "bg-warning"
                  : "bg-destructive"
              }`}
            />
            <div>
              <p className="text-foreground text-sm">{activity.message}</p>
              <p className="text-muted-foreground text-xs mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
