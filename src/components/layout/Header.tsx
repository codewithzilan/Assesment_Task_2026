import { Bell } from "lucide-react";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between py-6 px-8">
      <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
      
      <div className="flex items-center gap-6">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-6 h-6" />
        </button>
        
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/30">
          <img
            src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8fDA%3D"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};
