import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, Shield, Zap, BarChart3, Check, Star, 
  Code2, Layers, Box, Sparkles, TrendingUp, Users,
  Award, Clock, Target
} from "lucide-react";

export default function LandingPagesPage() {
  return (
    <PageLayout
      title="Landing Pages"
      description="Ejemplos de secciones hero y landing pages construidas con el design system."
    >
      {/* Hero Premium */}
      <section className="relative border border-border rounded-2xl overflow-hidden mb-12 group">
        {/* Gradient overlay subtle */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 opacity-[0.02]" />
        
        <div className="relative bg-primary text-primary-foreground">
          {/* Top decoration */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
          
          <div className="px-8 md:px-16 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground px-4 py-1.5 text-xs font-medium tracking-wide">
                  <Sparkles className="w-3 h-3 mr-2" />
                  DESIGN SYSTEM v2.0
                </Badge>
              </div>
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Experiencias digitales
                <br />
                <span className="bg-gradient-to-r from-primary-foreground via-primary-foreground/90 to-primary-foreground/80 bg-clip-text text-transparent">
                  de clase mundial
                </span>
              </h1>
              {/* Subtitle */}
              <p className="text-base md:text-lg text-primary-foreground/70 text-center max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                Sistema de diseño empresarial completo. Componentes elegantes, código limpio, 
                documentación exhaustiva. Desde la idea hasta producción en tiempo récord.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="group/btn relative overflow-hidden px-8 min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Comenzar ahora
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 min-w-[200px] transition-all duration-300 hover:border-primary-foreground/40"
                >
                  Ver documentación
                </Button>
              </div>

              {/* Social proof mini */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-primary-foreground/60 animate-in fade-in duration-700 delay-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-primary-foreground/20 border-2 border-primary flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary-foreground/40" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs">Usado por +500 equipos</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/30" />
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-primary-foreground/80 text-primary-foreground/80" />
                  ))}
                  <span className="ml-2 text-xs">4.9 de 5 estrellas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "150+", label: "Componentes", icon: Box },
            { value: "99.9%", label: "Uptime SLA", icon: Award },
            { value: "<100ms", label: "Tiempo de carga", icon: Clock },
            { value: "A11y", label: "100% Accesible", icon: Target },
          ].map((stat, i) => (
            <Card 
              key={stat.label} 
              className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="pt-6 pb-6 relative">
                <stat.icon className="w-5 h-5 text-brand-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-foreground mb-1 tabular-nums">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Grid Premium */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4">
            <Layers className="w-3 h-3 mr-2" />
            CARACTERÍSTICAS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Todo lo que necesitás
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un ecosistema completo de herramientas, componentes y recursos para construir productos digitales excepcionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              icon: Zap, 
              title: "Velocidad extrema", 
              desc: "Componentes optimizados con tree-shaking automático y lazy loading. Carga inicial < 50KB.",
              highlight: "50KB bundle"
            },
            { 
              icon: Shield, 
              title: "Seguridad primero", 
              desc: "Patrones de accesibilidad WCAG 2.1 AAA integrados. Auditorías automáticas en cada commit.",
              highlight: "WCAG AAA"
            },
            { 
              icon: BarChart3, 
              title: "Escala empresarial", 
              desc: "Arquitectura modular probada en aplicaciones con millones de usuarios activos diarios.",
              highlight: "Battle-tested"
            },
            { 
              icon: Code2, 
              title: "DX excepcional", 
              desc: "TypeScript, autocomplete completo, documentación inline. Productividad desde día uno.",
              highlight: "TypeScript"
            },
            { 
              icon: Sparkles, 
              title: "Diseño premium", 
              desc: "Refinamiento visual en cada píxel. Animaciones fluidas y transiciones perfectamente cronometradas.",
              highlight: "60 FPS"
            },
            { 
              icon: TrendingUp, 
              title: "100% personalizable", 
              desc: "Tema completo con variables CSS. Adapta colores, tipografía y spacing sin tocar código.",
              highlight: "CSS vars"
            },
          ].map((feature, i) => (
            <Card 
              key={feature.title} 
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-border hover:border-brand-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-700/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="pt-6 pb-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-mono">
                    {feature.highlight}
                  </Badge>
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg group-hover:text-brand-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4">
            <Star className="w-3 h-3 mr-2" />
            TESTIMONIOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Confianza de equipos líderes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "Reducimos el tiempo de desarrollo en un 60%. La consistencia visual mejoró dramáticamente en toda la plataforma.",
              author: "María González",
              role: "Head of Design, TechCorp",
              rating: 5
            },
            {
              quote: "El mejor design system que implementamos. Documentación clara, soporte excepcional, componentes robustos.",
              author: "Carlos Martínez",
              role: "CTO, StartupXYZ",
              rating: 5
            },
            {
              quote: "Accesibilidad y performance out-of-the-box. Nuestros clientes notaron la diferencia inmediatamente.",
              author: "Ana Silva",
              role: "Product Manager, Enterprise Inc",
              rating: 5
            },
          ].map((testimonial, i) => (
            <Card 
              key={i} 
              className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-6 pb-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-700 text-brand-700" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center font-semibold text-brand-700">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="mb-12">
        <Card className="overflow-hidden">
          <CardHeader className="bg-brand-50 border-b">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">¿Por qué este Design System?</h3>
              <p className="text-muted-foreground text-sm">Comparación con soluciones genéricas</p>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {[
                "Componentes diseñados específicamente para casos de uso empresariales",
                "Temas y personalizaciones sin límites vía CSS variables",
                "Documentación completa con ejemplos interactivos y código copiable",
                "Soporte prioritario con SLA garantizado para clientes empresariales",
                "Actualizaciones semanales con nuevos componentes y mejoras",
                "Migración asistida desde otros design systems o librerías legacy",
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-brand-50 transition-colors group"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Final Premium */}
      <section className="relative border border-border rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600" />
        <div className="relative px-8 py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6 border-white/20 text-white">
              <Sparkles className="w-3 h-3 mr-2" />
              ACCESO COMPLETO
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              ¿Listo para transformar
              <br />
              tu producto digital?
            </h2>
            
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Accedé a todos los componentes, plantillas y recursos. 
              Comienza a construir experiencias excepcionales hoy mismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="min-w-[220px] shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Acceder al sistema
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="min-w-[220px] border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Agenda una demo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Seguridad empresarial</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>30 días garantía</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
