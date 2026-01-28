import { useState } from "react";
import { Phone, Clock, CheckCircle, Search, Play } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";

interface CallLog {
  id: number;
  phoneNumber: string;
  date: string;
  time: string;
  duration: string;
  outcome: string;
  issueType: string;
  status: "resolved" | "transfer" | "dropped" | "appointment";
}

const callLogs: CallLog[] = [
  { id: 1, phoneNumber: "+1 (555) 345-6789", date: "2025-12-16", time: "09:42 AM", duration: "5:23", outcome: "Quote Provided", issueType: "Screen", status: "resolved" },
  { id: 2, phoneNumber: "+1 (555) 345-6789", date: "2025-12-16", time: "09:42 AM", duration: "5:23", outcome: "Escalated to technician", issueType: "Software", status: "transfer" },
  { id: 3, phoneNumber: "+1 (555) 345-6789", date: "2025-12-16", time: "09:42 AM", duration: "5:23", outcome: "Appointment Booked", issueType: "Battery", status: "appointment" },
  { id: 4, phoneNumber: "+1 (555) 345-6789", date: "2025-12-16", time: "09:42 AM", duration: "0:20", outcome: "Call Dropped", issueType: "Unknown", status: "dropped" },
  { id: 5, phoneNumber: "+1 (555) 345-6789", date: "2025-12-16", time: "09:42 AM", duration: "5:23", outcome: "Quote Provided", issueType: "Screen", status: "resolved" },
];

const transcript = [
  { speaker: "AI Assistant", message: "Thank you for calling UBreakiFix! How can I help you today?" },
  { speaker: "Customer", message: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?" },
  { speaker: "AI Assistant", message: "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?" },
  { speaker: "Customer", message: "Yes, please! When are you available?" },
  { speaker: "AI Assistant", message: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?" },
];

const CallLogs = () => {
  const [selectedCall, setSelectedCall] = useState<CallLog>(callLogs[0]);

  const getStatusBadge = (status: CallLog["status"]) => {
    switch (status) {
      case "resolved":
        return <span className="badge-resolved">AI Resolved</span>;
      case "transfer":
        return <span className="badge-transfer">Warm Transfer</span>;
      case "dropped":
        return <span className="badge-dropped">Dropped</span>;
      case "appointment":
        return <span className="badge-appointment">Appointment</span>;
    }
  };

  return (
    <DashboardLayout>
      <Header title="Call Logs & History" />
      
      <div className="px-8 pb-8 space-y-6">
        {/* Search and Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by phone number, issue type..."
                className="w-full bg-card border border-border rounded-xl py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="bg-secondary text-foreground px-4 py-3 rounded-xl text-sm flex items-center gap-2">
              All Type
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="bg-secondary text-foreground px-4 py-3 rounded-xl text-sm flex items-center gap-2">
              All Issues
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="bg-secondary text-foreground px-4 py-3 rounded-xl text-sm flex items-center gap-2">
              Today
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Call List */}
          <div className="stat-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Call List</h3>
            
            <div className="space-y-3">
              {callLogs.map((call) => (
                <div
                  key={call.id}
                  onClick={() => setSelectedCall(call)}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    selectedCall.id === call.id
                      ? "bg-secondary border border-primary/30"
                      : "bg-secondary/50 hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">{call.phoneNumber}</p>
                        <p className="text-muted-foreground text-sm">{call.date} • {call.time}</p>
                      </div>
                    </div>
                    {getStatusBadge(call.status)}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {call.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      {call.outcome}
                    </span>
                    <span className="bg-secondary px-2 py-1 rounded text-xs">{call.issueType}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call Details */}
          <div className="stat-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Call Details</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Phone Number</p>
                <p className="text-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Duration</p>
                <p className="text-foreground">4:32</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Date & Time</p>
                <p className="text-foreground">2025-12-16 10:45 AM</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Issue Type</p>
                <p className="text-foreground">Screen</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-muted-foreground text-sm mb-1">Call Type</p>
              <span className="badge-resolved">AI Resolved</span>
            </div>

            <div className="mb-6">
              <p className="text-muted-foreground text-sm mb-1">Outcome</p>
              <p className="text-foreground">Quote provided</p>
            </div>

            <button className="w-full bg-primary/10 border border-primary/30 text-primary py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors">
              <Play className="w-5 h-5" />
              Play Audio Recording
            </button>

            {/* Transcript */}
            <div className="mt-6">
              <h4 className="text-foreground font-medium mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Conversation Transcript
              </h4>
              
              <div className="transcript-box space-y-4 max-h-64 overflow-y-auto">
                {transcript.map((item, index) => (
                  <div key={index}>
                    <p className={`text-sm font-medium mb-1 ${
                      item.speaker === "AI Assistant" ? "text-destructive" : "text-primary"
                    }`}>
                      {item.speaker}:
                    </p>
                    <p className="text-foreground text-sm">{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CallLogs;
