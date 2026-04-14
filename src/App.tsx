import { useState, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { BrandProvider } from "@/components/brand-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import AppSidebar from "./components/AppSidebar";
import { useIsMobile } from "./hooks/use-mobile";
import ColoresPage from "./pages/ColoresPage";
import TipografiaPage from "./pages/TipografiaPage";
import BotonesPage from "./pages/BotonesPage";
import FormulariosPage from "./pages/FormulariosPage";
import ComponentesUIPage from "./pages/ComponentesUIPage";
import TablasPage from "./pages/TablasPage";
import LayoutsPage from "./pages/LayoutsPage";
import LandingPagesPage from "./pages/LandingPagesPage";
import TodosComponentesPage from "./pages/TodosComponentesPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/** Persistent shell — renders once, never unmounts on route changes */
function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  const location = useLocation();

  const handleToggle = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  // Close on mobile when route changes
  useCallback(() => {
    if (isMobile && isSidebarOpen) setIsSidebarOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex">
      {/* AppSidebar lives here — persistent across all routes */}
      <AppSidebar isOpen={isSidebarOpen} onToggle={handleToggle} />

      {/* Mobile overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main
        className={`flex-1 w-full transition-all duration-300 ${
          isSidebarOpen && !isMobile ? "ml-60" : "ml-0"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}

const App = () => (
  <BrandProvider>
    <ThemeProvider defaultTheme="light" storageKey="design-system-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<ColoresPage />} />
                <Route path="/tipografia" element={<TipografiaPage />} />
                <Route path="/botones" element={<BotonesPage />} />
                <Route path="/formularios" element={<FormulariosPage />} />
                <Route path="/componentes-ui" element={<ComponentesUIPage />} />
                <Route path="/tablas" element={<TablasPage />} />
                <Route path="/layouts" element={<LayoutsPage />} />
                <Route path="/landing-pages" element={<LandingPagesPage />} />
                <Route path="/todos-los-componentes" element={<TodosComponentesPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </BrandProvider>
);

export default App;
