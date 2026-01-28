import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", calls: 52 },
  { day: "Tue", calls: 58 },
  { day: "Wed", calls: 65 },
  { day: "Thu", calls: 72 },
  { day: "Fri", calls: 95 },
  { day: "Sat", calls: 78 },
  { day: "Sun", calls: 52 },
];

export const CallTrendsChart = () => {
  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Call Trends - This Week</h3>
          <p className="text-muted-foreground text-sm">Total: 472 calls</p>
        </div>
        <button className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm flex items-center gap-2">
          This Week
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="callGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(199 89% 48%)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="hsl(199 89% 48%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222 47% 14%)",
                border: "1px solid hsl(217 33% 22%)",
                borderRadius: "8px",
                color: "hsl(210 40% 98%)",
              }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="hsl(199 89% 48%)"
              strokeWidth={2}
              fill="url(#callGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
