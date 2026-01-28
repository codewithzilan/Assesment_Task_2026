const requests = [
  { name: "Screen Repair", count: 156, percentage: 100 },
  { name: "Battery Replacement", count: 89, percentage: 57 },
  { name: "Back Glass Repair", count: 67, percentage: 43 },
  { name: "Software Issues", count: 45, percentage: 29 },
];

export const TopRepairRequests = () => {
  return (
    <div className="stat-card animate-fade-in">
      <h3 className="text-lg font-semibold text-foreground mb-6">Top Repair Requests</h3>
      
      <div className="space-y-4">
        {requests.map((request, index) => (
          <div key={request.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground text-sm">{request.name}</span>
              <span className="text-muted-foreground text-sm">{request.count} requests</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${request.percentage}%`,
                  background: index === 0 ? "hsl(174 100% 42%)" : "hsl(199 89% 48%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
