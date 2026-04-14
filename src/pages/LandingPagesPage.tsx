import PageLayout from "@/components/PageLayout";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { 
  ArrowRight, Check, Star, ChevronRight,
  Smartphone, Bot, Gift, Shield, Heart, Globe,
  Phone, Mail, MapPin, Search, FileText, UserCheck
} from "lucide-react";
import { useBrand } from "@/components/brand-provider";

export default function LandingPagesPage() {
  const { config } = useBrand();
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [paused, setPaused] = React.useState(false);

  const images = config.prestadoresFiles.map(
    (f) => new URL(`../prestadoreswebp/${f}`, import.meta.url).href
  );

  React.useEffect(() => {
    if (!api) return;

    const id = setInterval(() => {
      if (paused) return;
      try {
        api?.scrollNext();
      } catch (e) {
        // ignore
      }
    }, 3000);

    return () => clearInterval(id);
  }, [api, paused]);
  return (
    <PageLayout
      title="Landing Page"
      description="Ejemplos de secciones hero y landing pages construidas con el design system."
    >
      {/* ─── HERO SECTION ─── */}
      <section className="relative rounded-2xl overflow-hidden mb-12 min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${config.heroBgImage}')` }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-10 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={config.logoSrc}
                  alt={config.label}
                  className="h-12 w-auto object-contain brightness-0 invert transition-transform duration-200"
                />
              </div>
              <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-3">
                Medicina Privada
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
                Elegí Salud.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-semibold mb-4">
                Ahorrá hasta{" "}
                <span className="text-white underline decoration-white/50 underline-offset-4">45%</span>{" "}
                en tu Plan de Medicina Prepaga
              </p>
              <p className="text-white/70 text-base leading-relaxed max-w-md">
                En {config.label} unimos innovación y experiencia para que acceder a la salud sea más simple, cercano y confiable.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-8 w-full sm:w-auto">
                  Cotizar ahora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 w-full sm:w-auto">
                  Ver planes
                </Button>
              </div>
            </div>
            {/* Right: Contact form */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8">
              <h2 className="text-white font-bold text-xl mb-1">Completá el formulario</h2>
              <p className="text-white/60 text-sm mb-6">y te contactamos</p>
                <div className="space-y-4">
                <div>
                  <label className="text-white/80 text-xs font-medium mb-1 block">Nombre completo</label>
                  <input
                    type="text"
                    placeholder="Juan García"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-xs font-medium mb-1 block">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="+54 11 1234-5678"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-xs font-medium mb-1 block">Email</label>
                  <input
                    type="email"
                    placeholder="juan@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-xs font-medium mb-1 block">Plan de interés</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/50 transition-all appearance-none cursor-pointer">
                    <option value="" className="text-black">Seleccioná un plan</option>
                    {config.plans.map((p) => (
                      <option key={p.name} value={p.name} className="text-black">{p.name}</option>
                    ))}
                  </select>
                </div>
                <Button className="w-full bg-white text-black hover:bg-white/90 font-bold text-base py-3 h-auto mt-2">
                  Cotizar
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <p className="text-white/40 text-xs text-center mt-4">
                Sin compromiso · Te respondemos en menos de 24hs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { value: "300+", label: "Sanatorios y Clínicas" },
            { value: "10.000+", label: "Reseñas Positivas" },
            { value: "50.000+", label: "Planes Vendidos" },
          ].map((stat) => (
            <Card key={stat.label} className="text-center bg-primary text-primary-foreground border-0">
              <CardContent className="py-5 sm:pt-6 sm:pb-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 tabular-nums">{stat.value}</div>
                <p className="text-primary-foreground/70 text-xs uppercase tracking-wide sm:tracking-widest font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── STEPS SECTION ─── */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 text-xs tracking-widest">CÓMO FUNCIONA</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Empezá en 3 simples pasos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            El proceso es rápido, simple y 100% online.
          </p>
        </div>
        <div className="relative grid sm:grid-cols-3 gap-6">
          <div className="hidden sm:block absolute top-[22px] left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-px bg-border z-0" />
          {[
            {
              num: "01",
              icon: Search,
              title: "Ver planes",
              desc: "Explorá nuestros planes de salud y encontrá el que mejor se adapte a tus necesidades.",
            },
            {
              num: "02",
              icon: FileText,
              title: "Cotizar",
              desc: "Completá tus datos y obtené tu cotización personalizada al instante.",
            },
            {
              num: "03",
              icon: UserCheck,
              title: "Afiliarte",
              desc: "Confirmá tu plan y completá la afiliación 100% online en minutos.",
            },
          ].map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center relative z-10">
              <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-6 shadow-lg ring-4 ring-background">
                {step.num}
              </div>
              <Card className="w-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6 pb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-xs tracking-widest">SOBRE NOSOTROS</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {config.label}, Tu Medicina Prepaga
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En {config.label} unimos innovación y experiencia para que acceder a la salud sea más simple, cercano y confiable. Somos una medicina prepaga con foco en la calidad de atención y el bienestar de nuestros socios.
            </p>
            <ul className="space-y-3">
              {[
                "Cartilla médica con más de 300 prestadores",
                "Atención personalizada y asesores especializados",
                `Gestión 100% digital a través de ${config.label} Touch`,
                "Cobertura nacional e internacional",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-8" size="lg">
              Conocé más sobre {config.label}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-[4/3]">
            <img
              src={config.heroBgImage}
              alt={`Familia ${config.label}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur rounded-xl p-4 flex items-center gap-3 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-black" />
                </div>
                <div className="text-black">
                  <p className="font-bold text-sm text-black">Cobertura garantizada</p>
                  <p className="text-black/70 text-sm">Desde el primer día de vigencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRESTADORES CAROUSEL ─── */}
      <section className="mb-8">
        <div className="text-center mb-6">
          <Badge variant="outline" className="mb-4 text-xs tracking-widest">PRESTADORES</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Nuestros prestadores</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">Algunos de los prestadores de nuestra cartilla.</p>
        </div>

        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <Carousel opts={{ align: "start", loop: true, containScroll: 'trimSnaps' }} setApi={setApi} className="w-full">
            <CarouselContent>
              {images.map((src, idx) => (
                <CarouselItem key={idx} className="pl-4 sm:basis-1/2 md:basis-1/3">
                  <div className="rounded-xl overflow-hidden bg-white h-40 sm:h-56 flex items-center justify-center p-4 shadow-sm">
                    <img
                      src={src}
                      alt={`Prestador ${idx + 1}`}
                      className="max-h-full max-w-full object-contain grayscale-0"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* ─── CAROUSEL SECTION ─── */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 text-xs tracking-widest">COBERTURA</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Beneficios que hacen la diferencia
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Más que un seguro médico, una experiencia de salud completa.
          </p>
        </div>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {[
              {
                icon: Shield,
                title: "Cobertura Total",
                desc: "Guardia, emergencias, consultas, estudios y cirugías incluidas en todos nuestros planes.",
                tag: "Seguridad",
              },
              {
                icon: Globe,
                title: "Cobertura Internacional",
                desc: `Estés donde estés en el mundo, ${config.label} te acompaña con cobertura de emergencias internacionales.`,
                tag: "Alcance",
              },
              {
                icon: Smartphone,
                title: "Gestión 100% Digital",
                desc: `Autorizá órdenes, pedí turnos y accedé a tu cartilla desde la app ${config.label} Touch.`,
                tag: "Tecnología",
              },
              {
                icon: Heart,
                title: "Salud Mental",
                desc: "Hasta 20 sesiones de psicología por año incluidas en todos los planes.",
                tag: "Bienestar",
              },
              {
                icon: Gift,
                title: `${config.label} Rewards`,
                desc: `Descuentos en gimnasios, farmacias, espectáculos y coworks como socio ${config.label}.`,
                tag: "Beneficios",
              },
              {
                icon: Bot,
                title: "Atención por IA 24/7",
                desc: `${config.label} IA resuelve tus consultas, turnos y autorizaciones sin esperas, todo el día.`,
                tag: "Innovación",
              },
            ].map((item) => (
              <CarouselItem key={item.title} className="pl-4 sm:basis-1/2 md:basis-1/3">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="pt-6 pb-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">{item.tag}</Badge>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>
      </section>

      {/* ─── PLANS SECTION ─── */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 text-xs tracking-widest">PLANES</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Elegí el Plan que te impulsa
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Encontrá la cobertura que mejor se adapte a vos. En {config.label} pensamos cada plan para impulsar tu bienestar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {config.plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.featured ? "border-primary border-2 shadow-lg" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <Badge className="text-xs font-bold tracking-wider">{plan.badge}</Badge>
                </div>
              )}
              <CardContent className="pt-6 pb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.featured ? "text-primary" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground mb-1">Desde</p>
                  <p className="text-3xl font-bold text-foreground tabular-nums">{plan.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">/ mes por persona</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.featured ? "text-primary" : "text-muted-foreground"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  Cotizar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 text-xs tracking-widest">TESTIMONIOS</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Lo que dicen Nuestros Socios
          </h2>
          <p className="text-muted-foreground text-sm">
            Miles de familias confían en {config.label} para su salud y bienestar.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              quote: "La mejor decisión para proteger a mi familia. Cobertura amplia, clínicas de primer nivel y un servicio al cliente excepcional. 100% recomendado.",
              author: "María Carolina",
              plan: "Plan Familiar",
            },
            {
              quote: "Servicio impecable desde el primer día. Las instalaciones son excelentes y la atención médica es de altísima calidad.",
              author: "Juan López",
              plan: "Plan Matrimonio",
            },
            {
              quote: `Acceso rápido a especialistas, turnos sin demoras y una red de clínicas increíble. ${config.label} superó todas mis expectativas.`,
              author: "Ana Rodríguez",
              plan: "Plan Familiar + 2 hijos",
            },
          ].map((t) => (
            <Card key={t.author} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 pb-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground leading-relaxed italic mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm flex-shrink-0">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.plan}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── TECHNOLOGY SECTION ─── */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 text-xs tracking-widest">TECNOLOGÍA</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Innovamos para estar más cerca tuyo.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            En {config.label} transformamos la forma de vivir tu cobertura médica con soluciones simples y beneficios que suman valor real.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: Smartphone,
                name: `${config.label} Touch`,
              subtitle: "App Móvil",
              desc: "La APP Móvil diseñada para gestionar tu cobertura de manera digital, de forma rápida y sencilla.",
              features: ["Credencial Digital", "Autorizaciones", "Cartilla", "Turnos online"],
            },
            {
              icon: Bot,
                name: `${config.label} IA`,
              subtitle: "Inteligencia Artificial",
              desc: "El primer ChatBot de IA para que gestiones tu cobertura de manera integral 24/7.",
              features: ["Solicitá Turnos", "Consultá tu Cartilla", "Autorizá tus Órdenes", "Gestión 24/7"],
            },
            {
              icon: Gift,
                name: `${config.label} Rewards`,
              subtitle: "Programa de beneficios",
              desc: "Un programa de beneficios pensado para vos: salud, movimiento y disfrute, todo en uno.",
              features: ["Descuentos en Gimnasios", "Descuentos Espectáculos", "Descuentos en Coworks", "Beneficios exclusivos"],
            },
          ].map((tech) => (
            <Card key={tech.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{tech.subtitle}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{tech.desc}</p>
                <ul className="space-y-1.5">
                  {tech.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-5 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* ─── WHY DESIGN SYSTEM SECTION ─── */}
      <section className="mb-12">
        <div className="border border-border rounded-2xl p-6 sm:p-10">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 text-xs tracking-widest">COMPARACIÓN</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              ¿Por qué este Design System?
            </h2>
            <p className="text-muted-foreground text-sm">Comparación con soluciones genéricas</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="multiple" className="w-full space-y-2">
              {[
                {
                  title: "Componentes diseñados específicamente para casos de uso empresariales",
                  body: "A diferencia de librerías genéricas, cada componente fue construido pensando en flujos reales de negocio: formularios de cotización, paneles de administración, dashboards de métricas y landing pages de conversión.",
                },
                {
                  title: "Temas y personalizaciones sin límites vía CSS variables",
                  body: "La arquitectura de tokens CSS permite cambiar colores, tipografías y radios de borde en un solo lugar, propagando los cambios al sistema automáticamente, sin tocar componente por componente.",
                },
                {
                  title: "Documentación completa con ejemplos interactivos y código copiable",
                  body: "Cada componente incluye ejemplos en contexto real, variantes y snippets listos para usar. Sin tener que buscar en foros ni adivinar props.",
                },
                {
                  title: "Soporte prioritario con SLA garantizado para clientes empresariales",
                  body: "Nuestro equipo de desarrollo responde tickets en menos de 4 horas hábiles para planes empresariales, con escalamiento directo al equipo de arquitectura.",
                },
                {
                  title: "Actualizaciones semanales con nuevos componentes y mejoras",
                  body: "Cada semana se publican mejoras de accesibilidad, nuevos patrones de UX y optimizaciones de rendimiento, sin breaking changes gracias a nuestra política de versionado semántico.",
                },
                {
                  title: "Migración asistida desde otros design systems o librerías legacy",
                  body: "Ofrecemos auditorías de código, mapeo de componentes y guías de migración paso a paso para equipos que necesitan transicionar desde Material UI, Ant Design u otras librerías.",
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`why-${i}`}
                  className="border border-border rounded-xl px-4 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">
                    <div className="flex items-center gap-3 flex-1 mr-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span>{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 pl-8">
                    {item.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 text-xs tracking-widest">AYUDA</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground text-sm">Todo lo que necesitás saber sobre {config.label}.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {[
              {
                q: "¿Qué es la medicina prepaga y en qué se diferencia de una obra social?",
                a: `La medicina prepaga es un servicio de cobertura de salud privado que se contrata de forma voluntaria. A diferencia de una obra social, que se asigna por tu actividad laboral o monotributo, con una prepaga como ${config.label} tenés la libertad de elegir el plan que mejor se adapte a tus necesidades, accediendo a una cartilla médica más amplia y servicios diferenciales.`,
              },
              {
                q: "¿Cómo hago para asociarme?",
                a: "Completá el formulario en nuestra web y un asesor se pondrá en contacto para ayudarte a elegir el plan de salud que mejor se adapte a tus necesidades y presupuesto.",
              },
              {
                q: `¿Por qué debería elegir ${config.label} como mi cobertura de salud?`,
                a: `En ${config.label} nos destacamos por ofrecer una excelente relación precio-calidad, con una amplia cartilla de profesionales y sanatorios de primer nivel en todo el país. Priorizamos la atención personalizada y la agilidad en las gestiones para que cuidar tu salud sea más simple.`,
              },
              {
                q: `¿Puedo pasarme de mi obra social a ${config.label}?`,
                a: `¡Claro que sí! Podés derivar tus aportes de la obra social para pagar una parte o la totalidad de la cuota de tu plan en ${config.label}. Nuestro equipo de asesores te guiará en todo el proceso de traspaso.`,
              },
              {
                q: `Soy monotributista/autónomo, ¿puedo contratar ${config.label}?`,
                a: "Por supuesto. Ofrecemos planes especialmente pensados para monotributistas y trabajadores autónomos. Si sos monotributista, podés utilizar tus aportes mensuales para acceder a nuestros servicios.",
              },
              {
                q: `¿${config.label} ofrece atención médica online o telemedicina?`,
                a: "Sí. A través de nuestra plataforma digital podés acceder a consultas médicas online con profesionales de distintas especialidades, sin necesidad de trasladarte. Las videoconsultas están disponibles 24/7 y se pueden realizar desde tu celular o computadora.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-4 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
     
      {/* ─── FOOTER ─── */}
      <footer className="mt-16 border-t border-border pt-10 pb-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <img
              src={config.logoSrc}
              alt={config.label}
              className="h-12 w-auto object-contain mb-4 dark:brightness-0 dark:invert transition-transform duration-200"
            />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Medicina prepaga con foco en la calidad de atención y el bienestar de nuestros socios.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Planes</h4>
            <ul className="space-y-2">
              {config.plans.map((p) => (
                <li key={p.name}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Compañía</h4>
            <ul className="space-y-2">
              {[
                "Sobre Nosotros",
                `${config.label} Touch`,
                `${config.label} IA`,
                `${config.label} Rewards`,
                "Trabajá con Nosotros",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>0800-666-0000</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{`info@${config.label.toLowerCase()}.com.ar`}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span>{`www.${config.label.toLowerCase()}.com.ar`}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">© 2026 {config.label} Todos los derechos reservados.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </PageLayout>
  );
}
