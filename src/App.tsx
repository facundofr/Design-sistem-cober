import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="design-system-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
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
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
