import { createContext, useContext, useEffect, useState } from "react";

export type Brand = "cober" | "bristol";

export type BrandConfig = {
  /** Internal id */
  brand: Brand;
  /** Display label */
  label: string;
  /** Font family name (matches Google Fonts name) */
  fontFamily: string;
  /** CSS font-family string */
  fontFamilyCss: string;
  /** Short font description for Tipografía page */
  fontDescription: string;
  /** Hex of the brand's signature primary colour */
  primaryColorHex: string;
  /** Human name of the primary colour swatch */
  primaryColorName: string;
  /** Path to the brand logo SVG in /public */
  logoSrc: string;
  /** Hero background image URL (relative to /public or import) */
  heroBgImage: string;
  /** Path prefix for prestadores webp files (import.meta.url base) */
  prestadoresBase: string;
  /** List of file names in the prestadores folder */
  prestadoresFiles: string[];
  /** Plans on the landing page */
  plans: { name: string; subtitle: string; price: string; featured: boolean; badge?: string; features: string[] }[];
  /** Browser tab title suffix */
  titleSuffix: string;
  /** Path to the favicon in /public */
  faviconHref: string;
  /** Value for <meta name="theme-color"> */
  themeColor: string;
};

// ─── Cober prestadores ───────────────────────────────────────────────────────
const coberPrestadores = [
  "anchorena.webp","argus.webp","bazterrica.webp","britanico.webp","cemic.webp",
  "clinicaimaa.webp","colegiales.webp","delaprovidencia.webp","delbuenpastor.webp",
  "delsol.webp","deragopyan.webp","diagnosticoparque.webp","gallego.webp","helguera.webp",
  "hospital sirio libanes.webp","iama.webp","investigacionesmedicas.webp","itoiz.webp",
  "maipu.webp","modelo.webp","moron.webp","ninoquilmes.webp","policlinicolomas.webp",
  "preventus.webp","privadafatima.webp","rossi.webp","sanjuandedios.webp","sanpablo.webp",
  "santaclarazarate.webp","santaisabel.webp","torcuato.webp","trinidad.webp","trovato.webp",
  "urquiza.webp","vilella.webp",
];

// ─── Bristol prestadores — swappable when real assets are added ───────────────
// For now mirrors Cober; replace with Bristol-specific files when available.
const bristolPrestadores = [...coberPrestadores];

const coberPlans = [
  {
    name: "Classic X", subtitle: "Un plan superador.", price: "$121.456", featured: false,
    features: ["Guardia y emergencias las 24hs","Consultas online","20 sesiones de psicología","40% OFF en farmacias","50% OFF en gimnasios","Cobertura nacional"],
  },
  {
    name: "Taylored", subtitle: "Cartilla superadora a tu disposición.", price: "$157.893", featured: true, badge: "MÁS VENDIDO",
    features: ["Guardia y emergencias las 24hs","Consultas online","20 sesiones de psicología","Un par de anteojos por año","40% OFF en farmacias","50% OFF en gimnasios","Cobertura nacional e internacional"],
  },
  {
    name: "Wagon", subtitle: "Cartilla médica premium 24/7.", price: "$205.262", featured: false,
    features: ["Guardia y emergencias las 24hs","Consultas online","20 sesiones de psicología","Un par de anteojos por año","40% OFF en farmacias","50% OFF en gimnasios","Cobertura nacional e internacional"],
  },
];

const bristolPlans = [
  {
    name: "PLANMD180", subtitle: "Cobertura esencial.", price: "$98.500", featured: false,
    features: ["Guardia y emergencias las 24hs","Consultas online","15 sesiones de psicología","30% OFF en farmacias","Cobertura nacional"],
  },
  {
    name: "PLANMD200", subtitle: "Cobertura completa.", price: "$145.000", featured: true, badge: "RECOMENDADO",
    features: ["Guardia y emergencias las 24hs","Consultas online","20 sesiones de psicología","Un par de anteojos por año","40% OFF en farmacias","50% OFF en gimnasios","Cobertura nacional"],
  },
  {
    name: "PLANMD500", subtitle: "Cobertura total 24/7.", price: "$195.000", featured: false,
    features: ["Guardia y emergencias las 24hs","Consultas online","20 sesiones de psicología","Un par de anteojos por año","40% OFF en farmacias","50% OFF en gimnasios","Cobertura nacional e internacional"],
  },
];

export const BRAND_CONFIGS: Record<Brand, BrandConfig> = {
  cober: {
    brand: "cober",
    label: "Cober",
    fontFamily: "Montserrat",
    fontFamilyCss: "'Montserrat', sans-serif",
    fontDescription: "Sans-serif moderna, diseñada para pantallas. Ofrece excelente legibilidad en tamaños pequeños.",
    primaryColorHex: "#660E80",
    primaryColorName: "color cober",
    logoSrc: "/logo-cober.svg",
    heroBgImage: "/pareja2.webp",
    prestadoresBase: "../prestadoreswebp/",
    prestadoresFiles: coberPrestadores,
    plans: coberPlans,
    titleSuffix: "Cober Design System",
    faviconHref: "/favicon.ico",
    themeColor: "#333333",
  },
  bristol: {
    brand: "bristol",
    label: "Bristol",
    fontFamily: "Inter",
    fontFamilyCss: "'Inter', sans-serif",
    fontDescription: "Variable sans-serif de alto rendimiento. Optimizada para interfaces digitales con máxima legibilidad.",
    primaryColorHex: "#07682f",
    primaryColorName: "color bristol",
    logoSrc: "/logo-bristol.svg",
    heroBgImage: "/pareja2-bristol.webp",
    prestadoresBase: "../prestadoreswebp/",
    prestadoresFiles: bristolPrestadores,
    plans: bristolPlans,
    titleSuffix: "Bristol Design System",
    faviconHref: "/faviconbristol.ico",
    themeColor: "#07682f",
  },
};

type BrandCtx = {
  brand: Brand;
  config: BrandConfig;
  setBrand: (b: Brand) => void;
};

const BrandContext = createContext<BrandCtx>({
  brand: "cober",
  config: BRAND_CONFIGS.cober,
  setBrand: () => null,
});

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brand, setBrandState] = useState<Brand>(
    () => (localStorage.getItem("design-system-brand") as Brand) || "cober"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("brand-cober", "brand-bristol");
    root.classList.add(`brand-${brand}`);

    const cfg = BRAND_CONFIGS[brand];

    // Update document title
    document.title = cfg.titleSuffix;

    // Update favicon
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = cfg.faviconHref;

    // Update theme-color meta
    let meta = document.querySelector<HTMLMetaElement>("meta[name='theme-color']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = cfg.themeColor;
  }, [brand]);

  const setBrand = (b: Brand) => {
    localStorage.setItem("design-system-brand", b);
    setBrandState(b);
  };

  return (
    <BrandContext.Provider value={{ brand, config: BRAND_CONFIGS[brand], setBrand }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  return useContext(BrandContext);
}
