import PageLayout from "@/components/PageLayout";

export default function LayoutsPage() {
  return (
    <PageLayout
      title="Layouts"
      description="Patrones de disposición recomendados para las diferentes secciones de la aplicación."
    >
      {/* 2 Column */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">2 Columnas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-32 rounded-lg bg-brand-100 border border-border flex items-center justify-center text-sm text-muted-foreground">
            Sidebar / Navegación
          </div>
          <div className="h-32 rounded-lg bg-brand-50 border border-border flex items-center justify-center text-sm text-muted-foreground">
            Contenido Principal
          </div>
        </div>
      </section>

      {/* 3 Column */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">3 Columnas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 rounded-lg bg-brand-50 border border-border flex items-center justify-center text-sm text-muted-foreground">
              Columna {i}
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Dashboard Layout</h3>
        <div className="space-y-4">
          <div className="h-16 rounded-lg bg-primary flex items-center px-6">
            <span className="text-sm text-primary-foreground font-medium">Header / Navbar</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 rounded-lg bg-brand-100 border border-border flex items-center justify-center text-sm text-muted-foreground">
                KPI {i}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 h-48 rounded-lg bg-brand-50 border border-border flex items-center justify-center text-sm text-muted-foreground">
              Gráfico Principal
            </div>
            <div className="h-48 rounded-lg bg-brand-50 border border-border flex items-center justify-center text-sm text-muted-foreground">
              Panel Lateral
            </div>
          </div>
        </div>
      </section>

      {/* Holy Grail */}
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-4">Holy Grail Layout</h3>
        <div className="space-y-2">
          <div className="h-12 rounded-lg bg-primary flex items-center px-6">
            <span className="text-sm text-primary-foreground">Header</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="h-40 rounded-lg bg-brand-200 border border-border flex items-center justify-center text-sm text-muted-foreground">
              Nav
            </div>
            <div className="col-span-3 h-40 rounded-lg bg-brand-50 border border-border flex items-center justify-center text-sm text-muted-foreground">
              Main Content
            </div>
            <div className="h-40 rounded-lg bg-brand-200 border border-border flex items-center justify-center text-sm text-muted-foreground">
              Aside
            </div>
          </div>
          <div className="h-12 rounded-lg bg-brand-300 flex items-center px-6">
            <span className="text-sm text-foreground">Footer</span>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
