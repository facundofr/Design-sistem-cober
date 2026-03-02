import { NavLink, useLocation } from "react-router-dom";
import { Palette, Type, MousePointerClick, FormInput, Component, Table, Layout, Globe, LogIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect } from "react";

const sections = [
  {
    label: "FUNDAMENTOS",
    items: [
      { to: "/", icon: Palette, label: "Colores" },
      { to: "/tipografia", icon: Type, label: "Tipografía" },
    ],
  },
  {
    label: "BIBLIOTECA",
    items: [
      { to: "/botones", icon: MousePointerClick, label: "Botones" },
      { to: "/formularios", icon: FormInput, label: "Formularios" },
      { to: "/componentes-ui", icon: Component, label: "Componentes UI" },
      { to: "/tablas", icon: Table, label: "Tablas" },
      { to: "/layouts", icon: Layout, label: "Layouts" },
      { to: "/landing-pages", icon: Globe, label: "Landing Pages" },
    ],
  },
];

interface AppSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function AppSidebar({ isOpen, onToggle }: AppSidebarProps) {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Cerrar el sidebar cuando cambia la ruta en mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      onToggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <aside
        className={`fixed left-0 top-0 bottom-0 w-60 bg-sidebar flex flex-col border-r border-sidebar-border z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo y botón hamburguesa */}
        <div className="p-5 flex items-center gap-3 justify-between border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sidebar-accent flex items-center justify-center">
              <div className="w-4 h-4 rounded-sm bg-sidebar-primary" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-sidebar-primary leading-none">Design System</h1>
              <p className="text-xs text-sidebar-muted mt-0.5">Guía Oficial</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            aria-label="Cerrar menú"
            className="hover:bg-sidebar-accent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-2">
        {sections.map((section) => (
          <div key={section.label} className="mb-4">
            <p className="text-[10px] font-semibold tracking-widest text-sidebar-muted px-3 mb-2">
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-sidebar-border space-y-2">
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-xs text-sidebar-muted">Tema</span>
          <ModeToggle />
        </div>
        <NavLink
          to="/admin"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
        >
          <LogIn className="w-4 h-4" />
          Acceso Admin
        </NavLink>
      </div>
    </aside>

      {/* Botón flotante para abrir cuando está cerrado */}
      {!isOpen && (
        <Button
          variant="default"
          size="icon"
          onClick={onToggle}
          className="fixed left-4 top-4 z-40 shadow-lg"
          aria-label="Abrir menú"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </>
  );
}
