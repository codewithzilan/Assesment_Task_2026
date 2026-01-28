const repairData = [
  { name: "Screen Repair", requests: 156, percentage: 100 },
  { name: "Battery Replacement", requests: 89, percentage: 57 },
  { name: "Back Glass Repair", requests: 67, percentage: 43 },
  { name: "Software Issues", requests: 45, percentage: 29 },
];

const TopRepairRequests = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-6 text-lg font-semibold text-foreground">Top Repair Requests</h3>
      
      <div className="space-y-4">
        {repairData.map((item, index) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-foreground">{item.name}</span>
              <span className="text-sm text-muted-foreground">{item.requests} requests</span>
            </div>
            <div className="h-2 w-full rounded-full bg-secondary">
              <div 
                className="h-2 rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRepairRequests;
