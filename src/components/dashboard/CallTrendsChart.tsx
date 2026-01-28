import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", calls: 45 },
  { day: "Tue", calls: 52 },
  { day: "Wed", calls: 48 },
  { day: "Thu", calls: 65 },
  { day: "Fri", calls: 82 },
  { day: "Sat", calls: 95 },
  { day: "Sun", calls: 85 },
];

const CallTrendsChart = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Call Trends - This Week</h3>
          <div className="mt-2 inline-block rounded bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
            Total: 472 calls
          </div>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80">
          This Week
          <span className="text-muted-foreground">▾</span>
        </button>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="callGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(188, 100%, 50%)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="hsl(160, 100%, 45%)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 47%, 18%)" vertical={false} />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 12 }}
              ticks={[0, 25, 50, 75, 100]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(222, 47%, 11%)', 
                border: '1px solid hsl(222, 47%, 18%)',
                borderRadius: '8px',
                color: 'hsl(210, 40%, 98%)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="calls" 
              stroke="hsl(188, 100%, 50%)" 
              strokeWidth={2}
              fill="url(#callGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallTrendsChart;
