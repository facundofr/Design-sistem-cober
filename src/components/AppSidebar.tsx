import { NavLink } from "react-router-dom";
import { Palette, Type, MousePointerClick, FormInput, Component, Table, Layout, Globe, ChevronLeft, ChevronRight, LayoutGrid, ChevronDown, Check, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useBrand, type Brand } from "./brand-provider";

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
      { to: "/todos-los-componentes", icon: LayoutGrid, label: "Todos los Componentes" },
    ],
  },
];

interface AppSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const brands: { value: Brand; label: string }[] = [
  { value: "cober", label: "Cober" },
  { value: "bristol", label: "Bristol" },
];

function BrandSwitcher() {
  const { brand, setBrand } = useBrand();
  const current = brands.find((b) => b.value === brand)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
          <Building2 className="w-4 h-4 shrink-0" />
          <span className="flex-1 text-left font-medium">{current.label}</span>
          <ChevronDown className="w-3.5 h-3.5 text-sidebar-muted" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {brands.map((b) => (
          <DropdownMenuItem
            key={b.value}
            onClick={() => setBrand(b.value)}
            className="flex items-center justify-between"
          >
            {b.label}
            {brand === b.value && <Check className="w-3.5 h-3.5 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function AppSidebar({ isOpen, onToggle }: AppSidebarProps) {
  const isMobile = useIsMobile();
  const { config } = useBrand();

  // Stable logo: only re-assign when brand actually changes, prevents flicker on navigation
  const [logoSrc, setLogoSrc] = useState(config.logoSrc);
  useEffect(() => {
    setLogoSrc(config.logoSrc);
  }, [config.brand]);  // eslint-disable-line react-hooks/exhaustive-deps

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
            <img
              src={logoSrc}
              alt={config.label}
              className="h-12 w-auto object-contain brightness-0 dark:invert transition-transform duration-200"
            />
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
              {section.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      }`
                    }
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </NavLink>
                </li>
              ))}
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
        <BrandSwitcher />
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
