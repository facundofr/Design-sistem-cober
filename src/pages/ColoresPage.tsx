import PageLayout from "@/components/PageLayout";
import { ColorSwatch } from "@/components/ColorSwatch";

const officialPalette = [
  { color: "#660E80", name: "color cober", className: "bg-brand-800" },
  { color: "#262626", name: "Dark Gray", className: "bg-brand-700" },
  { color: "#404040", name: "Medium Gray", className: "bg-brand-500" },
  { color: "#d6d6d6", name: "Light Gray", className: "bg-brand-200", textDark: true },
  { color: "#ffffff", name: "White", className: "bg-background", textDark: true },
];

const extendedScale = [
  { color: "#f7f7f7", name: "Brand 50", className: "bg-brand-50", textDark: true },
  { color: "#ededed", name: "Brand 100", className: "bg-brand-100", textDark: true },
  { color: "#d6d6d6", name: "Brand 200", className: "bg-brand-200", textDark: true },
  { color: "#b3b3b3", name: "Brand 300", className: "bg-brand-300", textDark: true },
  { color: "#8c8c8c", name: "Brand 400", className: "bg-brand-400" },
  { color: "#666666", name: "Brand 500", className: "bg-brand-500" },
  { color: "#404040", name: "Brand 600", className: "bg-brand-600" },
  { color: "#262626", name: "Brand 700", className: "bg-brand-700" },
  { color: "#660E80", name: "Brand 800", className: "bg-brand-800" },
];

const semantics = [
  { color: "#ef4444", name: "Error", className: "bg-destructive" },
  { color: "#eab308", name: "Warning", className: "bg-warning" },
  { color: "#22c55e", name: "Success", className: "bg-success" },
  { color: "#3b82f6", name: "Info", className: "bg-info" },
];

const codeSnippet = `// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          800: '#660E80', // Color Cober (institucional)
          700: '#262626',
          600: '#404040',
          500: '#666666',
          400: '#8c8c8c',
          300: '#b3b3b3',
          200: '#d6d6d6',
          100: '#ededed',
          50:  '#f7f7f7',
          // primary or accents can be added here
        }
      }
    }
  }
}`;

export default function ColoresPage() {
  return (
    <PageLayout
      title="Colores Institucionales"
      description="Esta es la paleta oficial definida para la identidad de la marca. El uso correcto de estos códigos es obligatorio en todos los medios digitales."
    >
      {/* Official Palette */}
      <section className="border border-border rounded-xl p-6 mb-8">
        <h3 className="text-xs font-bold tracking-wider text-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          PALETA OFICIAL
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {officialPalette.map((c) => (
            <ColorSwatch key={c.color + c.name} {...c} />
          ))}
        </div>
      </section>

      {/* Extended */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-1">Escala Extendida (Tailwind)</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Variaciones generadas para estados de interacción (hover, active, focus).
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
          {extendedScale.map((c) => (
            <ColorSwatch key={c.className} {...c} />
          ))}
        </div>
      </section>

      {/* Semantics */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Semánticos (Feedback)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {semantics.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
      </section>

      {/* Code */}
      <section>
        <h4 className="text-sm font-semibold text-foreground mb-2">Configuración Tailwind CSS</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Extensión para incluir los colores institucionales.
        </p>
        <pre className="bg-primary text-primary-foreground rounded-lg p-4 text-xs overflow-x-auto font-mono">
          {codeSnippet}
        </pre>
      </section>
    </PageLayout>
  );
}
