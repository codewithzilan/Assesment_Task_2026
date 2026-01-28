import { Calendar, CheckCircle, Clock, Copy, ChevronLeft, ChevronRight } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";

const appointments = [
  { id: 1, clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "09:00" },
  { id: 2, clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "10:00" },
  { id: 3, clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "11:00" },
  { id: 4, clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "12:00" },
  { id: 5, clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "02:00" },
  { id: 6, clientName: "Jane.D", clientPhone: "01960685765", clientMail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "03:00" },
];

const Appointments = () => {
  return (
    <DashboardLayout>
      <Header title="Appointments" />
      
      <div className="px-8 pb-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="stat-card">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <Calendar className="w-4 h-4" />
              Total Booked
            </div>
            <p className="text-3xl font-bold text-foreground">34</p>
            <p className="text-success text-sm mt-1">+8 this week</p>
          </div>
          
          <div className="stat-card">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <CheckCircle className="w-4 h-4" />
              AI Booked
            </div>
            <p className="text-3xl font-bold text-foreground">28</p>
            <p className="text-muted-foreground text-sm mt-1">82% of total</p>
          </div>
          
          <div className="stat-card">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <Clock className="w-4 h-4" />
              Pending
            </div>
            <p className="text-3xl font-bold text-foreground">3</p>
            <p className="text-warning text-sm mt-1">Awaiting confirmation</p>
          </div>
        </div>

        {/* Booking Link */}
        <div className="stat-card">
          <p className="text-muted-foreground text-sm mb-3">Booking Link</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-secondary rounded-xl px-4 py-3 border border-border">
              <p className="text-foreground">https://techstore.com/book?id=store123</p>
            </div>
            <button className="bg-primary text-primary-foreground px-4 py-3 rounded-xl flex items-center gap-2 font-medium hover:bg-primary/90 transition-colors">
              <Copy className="w-5 h-5" />
              Copy Link
            </button>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="stat-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-muted-foreground text-sm font-medium py-4 px-4">Client Name</th>
                  <th className="text-left text-muted-foreground text-sm font-medium py-4 px-4">Client Phone</th>
                  <th className="text-left text-muted-foreground text-sm font-medium py-4 px-4">Client mail</th>
                  <th className="text-left text-muted-foreground text-sm font-medium py-4 px-4">Device</th>
                  <th className="text-left text-muted-foreground text-sm font-medium py-4 px-4">Repair Type</th>
                  <th className="text-left text-muted-foreground text-sm font-medium py-4 px-4">Date</th>
                  <th className="text-center text-muted-foreground text-sm font-medium py-4 px-4">Slot no</th>
                  <th className="text-center text-muted-foreground text-sm font-medium py-4 px-4">Start Time</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt) => (
                  <tr key={apt.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-4">
                      <span className="text-primary">{apt.clientName}</span>
                    </td>
                    <td className="py-4 px-4 text-foreground">{apt.clientPhone}</td>
                    <td className="py-4 px-4 text-foreground">{apt.clientMail}</td>
                    <td className="py-4 px-4 text-foreground">{apt.device}</td>
                    <td className="py-4 px-4 text-foreground">{apt.repairType}</td>
                    <td className="py-4 px-4 text-foreground">{apt.date}</td>
                    <td className="py-4 px-4 text-center text-foreground">{apt.slotNo}</td>
                    <td className="py-4 px-4 text-center text-foreground">{apt.startTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg text-muted-foreground hover:bg-secondary transition-colors">1</button>
              <button className="w-8 h-8 rounded-lg bg-primary text-primary-foreground">2</button>
              <button className="w-8 h-8 rounded-lg text-muted-foreground hover:bg-secondary transition-colors">3</button>
              <button className="w-8 h-8 rounded-lg text-muted-foreground hover:bg-secondary transition-colors">4</button>
              <button className="w-8 h-8 rounded-lg text-muted-foreground hover:bg-secondary transition-colors">5</button>
              <span className="text-muted-foreground px-2">...</span>
              <button className="w-8 h-8 rounded-lg text-muted-foreground hover:bg-secondary transition-colors">11</button>
            </div>
            
            <button className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors">
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Appointments;
