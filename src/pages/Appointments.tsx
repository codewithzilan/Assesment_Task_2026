import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { Calendar, CheckCircle, Clock, Copy, ChevronLeft, ChevronRight } from "lucide-react";

const appointmentsData = [
  { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", type: "Screen", date: "02/06/2026", slot: 1, time: "09:00" },
  { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", type: "Screen", date: "02/06/2026", slot: 1, time: "10:00" },
  { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", type: "Screen", date: "02/06/2026", slot: 1, time: "11:00" },
  { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", type: "Screen", date: "02/06/2026", slot: 1, time: "12:00" },
  { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", type: "Screen", date: "02/06/2026", slot: 1, time: "02:00" },
  { name: "Jane.D", phone: "01960685765", email: "admin@gmail.com", device: "Apple/Iphone 13pro", type: "Screen", date: "02/06/2026", slot: 1, time: "03:00" },
];

const Appointments = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 11;

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://techstore.com/book?id=store123");
  };

  return (
    <DashboardLayout title="Appointments">
      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <StatCard 
          title="Total Booked" 
          value={34} 
          change="+8 this week"
          changeType="positive"
          icon={<Calendar className="h-5 w-5 text-primary-foreground" />}
          iconBgColor="bg-primary"
        />
        <StatCard 
          title="AI Booked" 
          value={28} 
          subtitle="82% of total"
          icon={<CheckCircle className="h-5 w-5 text-success-foreground" />}
          iconBgColor="bg-success"
        />
        <StatCard 
          title="Pending" 
          value={3} 
          subtitle="Awaiting confirmation"
          icon={<Clock className="h-5 w-5 text-warning-foreground" />}
          iconBgColor="bg-warning"
        />
      </div>

      {/* Booking Link */}
      <div className="mb-6 rounded-xl border border-border bg-card p-6">
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">Booking Link</h3>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value="https://techstore.com/book?id=store123"
            readOnly
            className="flex-1 rounded-lg border border-border bg-background py-3 px-4 text-foreground"
          />
          <button 
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80"
          >
            <Copy className="h-4 w-4" /> Copy Link
          </button>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Client Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Client Phone</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Client mail</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Device</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Repair Type</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Slot no</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Start Time</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((appointment, index) => (
                <tr key={index} className="border-b border-border last:border-0 hover:bg-secondary/10 transition-colors">
                  <td className="px-6 py-4 text-sm text-accent font-medium">{appointment.name}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{appointment.phone}</td>
                  <td className="px-6 py-4 text-sm text-accent">{appointment.email}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{appointment.device}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{appointment.type}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{appointment.date}</td>
                  <td className="px-6 py-4 text-sm text-foreground text-center">{appointment.slot}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{appointment.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 py-4 border-t border-border">
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex h-8 w-8 items-center justify-center rounded text-sm font-medium transition-colors ${
                currentPage === page 
                  ? "bg-secondary text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {page}
            </button>
          ))}
          
          <span className="text-muted-foreground">...</span>
          <button className="flex h-8 w-8 items-center justify-center rounded text-sm text-muted-foreground hover:text-foreground">
            {totalPages}
          </button>
          
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-accent hover:text-accent/80 transition-colors">
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Appointments;
