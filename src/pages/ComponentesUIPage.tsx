import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Info } from "lucide-react";

export default function ComponentesUIPage() {
  return (
    <PageLayout
      title="Componentes UI"
      description="Componentes reutilizables construidos con shadcn/ui y adaptados al design system corporativo."
    >
      {/* Badges */}
      <section className="border border-border rounded-xl p-6 mb-8">
        <h3 className="text-xs font-bold tracking-wider text-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          BADGES
        </h3>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Cards</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Proyecto Alpha</CardTitle>
              <CardDescription>Descripción del proyecto en curso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progreso</span>
                  <span className="text-foreground font-medium">75%</span>
                </div>
                <Progress value={75} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Proyecto Beta</CardTitle>
              <CardDescription>En fase de planificación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progreso</span>
                  <span className="text-foreground font-medium">30%</span>
                </div>
                <Progress value={30} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Proyecto Gamma</CardTitle>
              <CardDescription>Completado exitosamente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progreso</span>
                  <span className="text-foreground font-medium">100%</span>
                </div>
                <Progress value={100} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tabs */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Tabs</h3>
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="config">Configuración</TabsTrigger>
            <TabsTrigger value="advanced">Avanzado</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="border border-border rounded-lg p-4 mt-2">
            <p className="text-sm text-muted-foreground">Contenido de la pestaña General.</p>
          </TabsContent>
          <TabsContent value="config" className="border border-border rounded-lg p-4 mt-2">
            <p className="text-sm text-muted-foreground">Configuración del sistema.</p>
          </TabsContent>
          <TabsContent value="advanced" className="border border-border rounded-lg p-4 mt-2">
            <p className="text-sm text-muted-foreground">Opciones avanzadas.</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Accordion */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Accordion</h3>
        <Accordion type="single" collapsible className="border border-border rounded-lg">
          <AccordionItem value="item-1" className="px-4">
            <AccordionTrigger>¿Cómo instalar el design system?</AccordionTrigger>
            <AccordionContent>
              Cloná el repositorio y ejecutá <code className="bg-muted px-1 py-0.5 rounded text-xs">npm install</code> para instalar las dependencias.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="px-4">
            <AccordionTrigger>¿Cómo personalizar los colores?</AccordionTrigger>
            <AccordionContent>
              Editá las variables CSS en <code className="bg-muted px-1 py-0.5 rounded text-xs">index.css</code> y los tokens en el archivo de configuración de Tailwind.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="px-4 border-b-0">
            <AccordionTrigger>¿Puedo usar componentes individuales?</AccordionTrigger>
            <AccordionContent>
              Sí, cada componente es independiente y puede importarse de forma individual.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Alerts */}
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-4">Alerts</h3>
        <div className="space-y-3">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Información</AlertTitle>
            <AlertDescription>Este es un mensaje informativo para el usuario.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Algo salió mal. Intente nuevamente.</AlertDescription>
          </Alert>
        </div>
      </section>
    </PageLayout>
  );
}
