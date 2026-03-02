import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

export default function BotonesPage() {
  return (
    <PageLayout
      title="Botones"
      description="Variantes de botones disponibles en el design system. Utilizar consistentemente según la jerarquía de acción."
    >
      {/* Variants */}
      <section className="border border-border rounded-xl p-6 mb-8">
        <h3 className="text-xs font-bold tracking-wider text-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          VARIANTES
        </h3>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="space-y-2 text-center">
            <Button>Default</Button>
            <p className="text-xs text-muted-foreground">default</p>
          </div>
          <div className="space-y-2 text-center">
            <Button variant="secondary">Secondary</Button>
            <p className="text-xs text-muted-foreground">secondary</p>
          </div>
          <div className="space-y-2 text-center">
            <Button variant="destructive">Destructive</Button>
            <p className="text-xs text-muted-foreground">destructive</p>
          </div>
          <div className="space-y-2 text-center">
            <Button variant="outline">Outline</Button>
            <p className="text-xs text-muted-foreground">outline</p>
          </div>
          <div className="space-y-2 text-center">
            <Button variant="ghost">Ghost</Button>
            <p className="text-xs text-muted-foreground">ghost</p>
          </div>
          <div className="space-y-2 text-center">
            <Button variant="link">Link</Button>
            <p className="text-xs text-muted-foreground">link</p>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="border border-border rounded-xl p-6 mb-8">
        <h3 className="text-xs font-bold tracking-wider text-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          TAMAÑOS
        </h3>
        <div className="flex flex-wrap gap-4 items-end">
          <div className="space-y-2 text-center">
            <Button size="sm">Small</Button>
            <p className="text-xs text-muted-foreground">sm</p>
          </div>
          <div className="space-y-2 text-center">
            <Button size="default">Default</Button>
            <p className="text-xs text-muted-foreground">default</p>
          </div>
          <div className="space-y-2 text-center">
            <Button size="lg">Large</Button>
            <p className="text-xs text-muted-foreground">lg</p>
          </div>
          <div className="space-y-2 text-center">
            <Button size="icon">✦</Button>
            <p className="text-xs text-muted-foreground">icon</p>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="border border-border rounded-xl p-6">
        <h3 className="text-xs font-bold tracking-wider text-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          ESTADOS
        </h3>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="space-y-2 text-center">
            <Button>Normal</Button>
            <p className="text-xs text-muted-foreground">normal</p>
          </div>
          <div className="space-y-2 text-center">
            <Button disabled>Disabled</Button>
            <p className="text-xs text-muted-foreground">disabled</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
