import { Phone, Bot, ArrowLeftRight, Calendar, XCircle, Clock } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { CallTrendsChart } from "@/components/dashboard/CallTrendsChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TopRepairRequests } from "@/components/dashboard/TopRepairRequests";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Header title="Dashboard Overview" />
      
      <div className="px-8 pb-8 space-y-6">
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard
            title="Total Calls Today"
            value={127}
            change="+12%"
            changeType="positive"
            icon={Phone}
            iconBgClass="bg-info"
            iconColorClass="text-info-foreground"
          />
          <StatCard
            title="AI-Handled Calls"
            value={98}
            change="+77%"
            changeType="positive"
            icon={Bot}
            iconBgClass="bg-warning"
            iconColorClass="text-warning-foreground"
          />
          <StatCard
            title="Warm Transfer"
            value={23}
            change="+18%"
            changeType="positive"
            icon={ArrowLeftRight}
            iconBgClass="bg-destructive"
            iconColorClass="text-destructive-foreground"
          />
        </div>

        {/* Second Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard
            title="Appointments Booked"
            value={34}
            change="+8%"
            changeType="positive"
            icon={Calendar}
            iconBgClass="bg-primary"
            iconColorClass="text-primary-foreground"
          />
          <StatCard
            title="Missed/Failed Calls"
            value={6}
            change="-3%"
            changeType="negative"
            icon={XCircle}
            iconBgClass="bg-destructive"
            iconColorClass="text-destructive-foreground"
          />
          <StatCard
            title="Avg Call Duration"
            value="3:42"
            change="+15%"
            changeType="positive"
            icon={Clock}
            iconBgClass="bg-info"
            iconColorClass="text-info-foreground"
          />
        </div>

        {/* Chart */}
        <CallTrendsChart />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <TopRepairRequests />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
