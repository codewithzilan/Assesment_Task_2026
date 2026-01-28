import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import CallTrendsChart from "@/components/dashboard/CallTrendsChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TopRepairRequests from "@/components/dashboard/TopRepairRequests";
import { Phone, Bot, ArrowRightLeft, Calendar, XCircle, Clock } from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard Overview">
      {/* Stats Grid */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard 
          title="Total Calls Today" 
          value={127} 
          change="+12%"
          changeType="positive"
          icon={<Phone className="h-5 w-5 text-accent-foreground" />}
          iconBgColor="bg-gradient-to-r from-[#00B8DB] to-[#2B7FFF]"
        />
        <StatCard 
          title="AI-Handled Calls" 
          value={98} 
          change="+77%"
          changeType="positive"
          icon={<Bot className="h-5 w-5 text-warning-foreground" />}
          iconBgColor="bg-gradient-to-r from-[#AD46FF] to-[#F6339A]"
        />
        <StatCard 
          title="Warm Transfer" 
          value={23} 
          change="+18%"
          changeType="positive"
          icon={<ArrowRightLeft className="h-5 w-5 text-destructive-foreground" />}
          iconBgColor="bg-gradient-to-r from-[#FB2C36] to-[#FF6900]"
        />
        <StatCard 
          title="Appointments Booked" 
          value={34} 
          change="+8%"
          changeType="positive"
          icon={<Calendar className="h-5 w-5 text-primary-foreground" />}
          iconBgColor="bg-gradient-to-r from-[#00C950] to-[#00BC7D]"
        />
        <StatCard 
          title="Missed/Failed Calls" 
          value={6} 
          change="-3%"
          changeType="negative"
          icon={<XCircle className="h-5 w-5 text-destructive-foreground" />}
          iconBgColor="bg-[#FF2056]"
        />
        <StatCard 
          title="Avg Call Duration" 
          value="3:42" 
          change="+15%"
          changeType="positive"
          icon={<Clock className="h-5 w-5 text-accent-foreground" />}
          iconBgColor="bg-[#615FFF]"
        />
      </div>

      {/* Chart */}
      <div className="mb-6">
        <CallTrendsChart />
      </div>

      {/* Bottom Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RecentActivity />
        <TopRepairRequests />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
