import * as React from "react";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
import { AlertCircle, Info, Star } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LoginForm } from "@/components/login-form";

export default function ComponentesUIPage() {
  const [date, setDate] = React.useState<Date>();

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
          <Badge variant="ghost">Ghost</Badge>
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

      {/* Carousel */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Carousel</h3>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {[1, 2, 3].map((i) => (
              <CarouselItem key={i} className="pl-4 sm:basis-1/2 md:basis-1/3">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="pt-6 pb-6 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                      <Star className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">Slide {i}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">Contenido de ejemplo para el slide {i}.</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>
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

      {/* Card Login */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4 mt-10">Card Login</h3>
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </section>

      {/* Card con imagen */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4 mt-10">Card con imagen</h3>
        <div className="flex justify-center">
          <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">Featured</Badge>
              </CardAction>
              <CardTitle>Design systems meetup</CardTitle>
              <CardDescription>
                A practical talk on component APIs, accessibility, and shipping
                faster.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">View Event</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Date Picker */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4 mt-10">Date Picker</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              data-empty={!date}
              className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
            >
              {date ? format(date, "PPP") : <span>Pick a date</span>}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
            />
          </PopoverContent>
        </Popover>
      </section>
    </PageLayout>
  );
}
