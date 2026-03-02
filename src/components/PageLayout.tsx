import { ReactNode, useState, useCallback } from "react";
import AppSidebar from "./AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  const handleToggle = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <div className="min-h-screen flex">
      <AppSidebar 
        isOpen={isSidebarOpen} 
        onToggle={handleToggle}
      />
      
      {/* Overlay para mobile */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className={`flex-1 w-full transition-all duration-300 ${
        isSidebarOpen && !isMobile ? 'ml-60' : 'ml-0'
      }`}>
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
          <h1 className="text-3xl font-bold text-foreground mb-1">{title}</h1>
          {description && (
            <p className="text-muted-foreground mb-8">{description}</p>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
