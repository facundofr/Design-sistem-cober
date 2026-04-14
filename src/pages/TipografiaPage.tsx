import PageLayout from "@/components/PageLayout";
import { useBrand } from "@/components/brand-provider";

const headings = [
  { tag: "H1", size: "text-4xl", weight: "font-bold", label: "Heading 1", example: "Título Principal" },
  { tag: "H2", size: "text-3xl", weight: "font-bold", label: "Heading 2", example: "Subtítulo de Sección" },
  { tag: "H3", size: "text-2xl", weight: "font-semibold", label: "Heading 3", example: "Título de Tarjeta" },
  { tag: "H4", size: "text-xl", weight: "font-semibold", label: "Heading 4", example: "Subtítulo Interno" },
  { tag: "H5", size: "text-lg", weight: "font-medium", label: "Heading 5", example: "Etiqueta Destacada" },
  { tag: "H6", size: "text-base", weight: "font-medium", label: "Heading 6", example: "Texto de Soporte" },
];

const bodyStyles = [
  { label: "Body Large", className: "text-lg", desc: "Párrafos destacados, introducciones" },
  { label: "Body Regular", className: "text-base", desc: "Contenido principal, párrafos" },
  { label: "Body Small", className: "text-sm", desc: "Texto secundario, descripciones" },
  { label: "Caption", className: "text-xs", desc: "Etiquetas, metadatos, pie de página" },
];

export default function TipografiaPage() {
  const { config } = useBrand();
  return (
    <PageLayout
      title="Tipografía"
      description={`Sistema tipográfico basado en ${config.fontFamily}. Escala definida para jerarquía clara y lectura óptima.`}
    >
      {/* Font Family */}
      <section className="border border-border rounded-xl p-6 mb-8">
        <h3 className="text-xs font-bold tracking-wider text-foreground mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          FAMILIA TIPOGRÁFICA
        </h3>
        <p className="text-5xl font-light text-foreground mb-2">{config.fontFamily}</p>
        <p className="text-muted-foreground text-sm">
          {config.fontDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {["font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold"].map((w) => (
            <div key={w} className="text-center">
              <p className={`text-2xl text-foreground ${w}`}>Aa</p>
              <p className="text-xs text-muted-foreground mt-1">{w.replace("font-", "")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Headings */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Escala de Títulos</h3>
        <div className="space-y-4">
          {headings.map((h) => (
            <div key={h.tag} className="flex items-baseline gap-4 border-b border-border pb-4">
              <span className="text-xs font-mono text-muted-foreground w-8 shrink-0">{h.tag}</span>
              <p className={`${h.size} ${h.weight} text-foreground flex-1`}>{h.example}</p>
              <span className="text-xs text-muted-foreground font-mono hidden sm:block">
                {h.size} {h.weight}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-4">Estilos de Cuerpo</h3>
        <div className="space-y-4">
          {bodyStyles.map((b) => (
            <div key={b.label} className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-foreground">{b.label}</span>
                <span className="text-xs font-mono text-muted-foreground">{b.className}</span>
              </div>
              <p className={`${b.className} text-foreground mb-1`}>
                La tipografía es uno de los pilares fundamentales del diseño visual.
              </p>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
