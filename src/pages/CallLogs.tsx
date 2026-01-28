import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Search, Phone, Clock, CheckCircle, Play } from "lucide-react";

const callsData = [
  {
    id: 1,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    outcome: "Quote Provided",
    issue: "Screen"
  },
  {
    id: 2,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Warm Transfer",
    outcome: "Escalated to technician",
    issue: "Software"
  },
  {
    id: 3,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Appointment",
    outcome: "Appointment Booked",
    issue: "Battery"
  },
  {
    id: 4,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "0:20",
    status: "Dropped",
    outcome: "Call Dropped",
    issue: "Unknown"
  },
  {
    id: 5,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    outcome: "Quote Provided",
    issue: "Screen"
  },
];

const transcriptData = [
  { speaker: "AI Assistant", text: "Thank you for calling UBreakiFix! How can I help you today?" },
  { speaker: "Customer", text: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?" },
  { speaker: "AI Assistant", text: "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?" },
  { speaker: "Customer", text: "Yes, please! When are you available?" },
  { speaker: "AI Assistant", text: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?" },
];

const CallLogs = () => {
  const [selectedCall, setSelectedCall] = useState(callsData[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      "AI Resolved": "bg-success/20 text-success border-success/30",
      "Warm Transfer": "bg-warning/20 text-warning border-warning/30",
      "Appointment": "bg-accent/20 text-accent border-accent/30",
      "Dropped": "bg-destructive/20 text-destructive border-destructive/30",
    };
    return styles[status] || "bg-muted text-muted-foreground";
  };

  const getIssueBadge = () => "bg-secondary text-foreground border-border";

  return (
    <DashboardLayout title="Call Logs & History">
      {/* Search and Filters */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-border bg-card py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-medium text-foreground">
            All Type <span className="text-muted-foreground">▾</span>
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-medium text-foreground">
            All Issues <span className="text-muted-foreground">▾</span>
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-medium text-foreground">
            Today <span className="text-muted-foreground">▾</span>
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Call List */}
        <div className="rounded-xl border border-border bg-card p-4 lg:col-span-2">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Call List</h3>

          <div className="space-y-3 max-h-[600px] overflow-y-auto scrollbar-thin">
            {callsData.map((call) => (
              <div
                key={call.id}
                onClick={() => setSelectedCall(call)}
                className={`cursor-pointer rounded-lg border p-4 transition-all duration-200 ${selectedCall.id === call.id
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/50"
                  }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                      <Phone className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{call.phone}</p>
                      <p className="text-xs text-muted-foreground">{call.date} • {call.time}</p>
                    </div>
                  </div>
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${getStatusBadge(call.status)}`}>
                    {call.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {call.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> {call.outcome}
                  </span>
                  <span className={`rounded border px-2 py-0.5 ${getIssueBadge()}`}>
                    {call.issue}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call Details */}
        <div className="rounded-xl border border-border bg-card p-6 lg:col-span-3">
          <h3 className="mb-6 text-lg font-semibold text-foreground">Call Details</h3>

          <div className="grid gap-6 sm:grid-cols-2 mb-6">
            <div>
              <p className="text-sm text-muted-foreground">Phone Number</p>
              <p className="mt-1 font-medium text-foreground">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="mt-1 font-medium text-foreground">4:32</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date & Time</p>
              <p className="mt-1 font-medium text-foreground">2025-12-16 10:45 AM</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Issue Type</p>
              <p className="mt-1 font-medium text-foreground">Screen</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground">Call Type</p>
            <span className={`mt-2 inline-block rounded-full border px-3 py-1 text-xs font-medium ${getStatusBadge(selectedCall.status)}`}>
              {selectedCall.status}
            </span>
          </div>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground">Outcome</p>
            <p className="mt-1 font-medium text-foreground">Quote provided</p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#AD46FF] to-[#F6339A] py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-gradient-to-l from-[#F6339A] to-[#AD46FF]">
            <Play className="h-4 w-4 text-[#C27AFF]" />
            <p className="text-[#C27AFF]">Play Audio Recording</p>
          </button>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="font-semibold text-foreground">Conversation Transcript</h4>
            </div>

            <div className="space-y-4 max-h-64 overflow-y-auto scrollbar-thin">
              {transcriptData.map((item, index) => (
                <div key={index}>
                  <p className={`text-sm font-semibold ${item.speaker === "AI Assistant" ? "text-primary" : "text-accent"}`}>
                    {item.speaker}:
                  </p>
                  <p className="text-sm text-foreground mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CallLogs;
