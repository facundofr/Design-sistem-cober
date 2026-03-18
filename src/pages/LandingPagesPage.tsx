import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowRight, Check, Star, ChevronRight,
  Smartphone, Bot, Gift, Shield, Heart, Globe,
  Phone, Mail, MapPin
} from "lucide-react";

export default function LandingPagesPage() {
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
          style={{ backgroundImage: "url('/pareja2.webp')" }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-10 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo-cober.svg" alt="Cober" className="h-8 brightness-0 invert" />
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
                En Cober unimos innovación y experiencia para que acceder a la salud sea más simple, cercano y confiable.
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
                    <option value="classic" className="text-black">Classic X</option>
                    <option value="taylored" className="text-black">Taylored</option>
                    <option value="wagon" className="text-black">Wagon</option>
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

      {/* ─── ABOUT SECTION ─── */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-xs tracking-widest">SOBRE NOSOTROS</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Cober, Tu Medicina Prepaga
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En Cober unimos innovación y experiencia para que acceder a la salud sea más simple, cercano y confiable. Somos una medicina prepaga con foco en la calidad de atención y el bienestar de nuestros socios.
            </p>
            <ul className="space-y-3">
              {[
                "Cartilla médica con más de 300 prestadores",
                "Atención personalizada y asa esores especializados",
                "Gestión 100% digital a través de Cober Touch",
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
              Conocé más sobre Cober
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-[4/3]">
            <img
              src="/pareja2.webp"
              alt="Familia Cober"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur rounded-xl p-4 flex items-center gap-3 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-sm text-primary-foreground/70">Cobertura garantizada</p>
                  <p className="text-primary-foreground/70 ">Desde el primer día de vigencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PLANS SECTION ─── */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 text-xs tracking-widest">PLANES</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Elegí el Plan que te impulsa
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Encontrá la cobertura que mejor se adapte a vos. En Cober pensamos cada plan para impulsar tu bienestar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "Classic X",
              subtitle: "Un plan superador.",
              price: "$121.456",
              featured: false,
              features: [
                "Guardia y emergencias las 24hs",
                "Consultas online",
                "20 sesiones de psicología",
                "40% OFF en farmacias",
                "50% OFF en gimnasios",
                "Cobertura nacional",
              ],
            },
            {
              name: "Taylored",
              subtitle: "Cartilla superadora a tu disposición.",
              price: "$157.893",
              featured: true,
              badge: "MÁS VENDIDO",
              features: [
                "Guardia y emergencias las 24hs",
                "Consultas online",
                "20 sesiones de psicología",
                "Un par de anteojos por año",
                "40% OFF en farmacias",
                "50% OFF en gimnasios",
                "Cobertura nacional e internacional",
              ],
            },
            {
              name: "Wagon",
              subtitle: "Cartilla médica premium 24/7.",
              price: "$205.262",
              featured: false,
              features: [
                "Guardia y emergencias las 24hs",
                "Consultas online",
                "20 sesiones de psicología",
                "Un par de anteojos por año",
                "40% OFF en farmacias",
                "50% OFF en gimnasios",
                "Cobertura nacional e internacional",
              ],
            },
          ].map((plan) => (
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
            Miles de familias confían en Cober para su salud y bienestar.
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
              quote: "Acceso rápido a especialistas, turnos sin demoras y una red de clínicas increíble. Cober superó todas mis expectativas.",
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
            En Cober transformamos la forma de vivir tu cobertura médica con soluciones simples y beneficios que suman valor real.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: Smartphone,
              name: "Cober Touch",
              subtitle: "App Móvil",
              desc: "La APP Móvil diseñada para gestionar tu cobertura de manera digital, de forma rápida y sencilla.",
              features: ["Credencial Digital", "Autorizaciones", "Cartilla", "Turnos online"],
            },
            {
              icon: Bot,
              name: "Cober IA",
              subtitle: "Inteligencia Artificial",
              desc: "El primer ChatBot de IA para que gestiones tu cobertura de manera integral 24/7.",
              features: ["Solicitá Turnos", "Consultá tu Cartilla", "Autorizá tus Órdenes", "Gestión 24/7"],
            },
            {
              icon: Gift,
              name: "Cober Rewards",
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

      {/* ─── FAQ SECTION ─── */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 text-xs tracking-widest">AYUDA</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground text-sm">Todo lo que necesitás saber sobre Cober.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {[
              {
                q: "¿Qué es la medicina prepaga y en qué se diferencia de una obra social?",
                a: "La medicina prepaga es un servicio de cobertura de salud privado que se contrata de forma voluntaria. A diferencia de una obra social, que se asigna por tu actividad laboral o monotributo, con una prepaga como Cober tenés la libertad de elegir el plan que mejor se adapte a tus necesidades, accediendo a una cartilla médica más amplia y servicios diferenciales.",
              },
              {
                q: "¿Cómo hago para asociarme?",
                a: "Completá el formulario en nuestra web y un asesor se pondrá en contacto para ayudarte a elegir el plan de salud que mejor se adapte a tus necesidades y presupuesto.",
              },
              {
                q: "¿Por qué debería elegir Cober como mi cobertura de salud?",
                a: "En Cober nos destacamos por ofrecer una excelente relación precio-calidad, con una amplia cartilla de profesionales y sanatorios de primer nivel en todo el país. Priorizamos la atención personalizada y la agilidad en las gestiones para que cuidar tu salud sea más simple.",
              },
              {
                q: "¿Puedo pasarme de mi obra social a Cober?",
                a: "¡Claro que sí! Podés derivar tus aportes de la obra social para pagar una parte o la totalidad de la cuota de tu plan en Cober. Nuestro equipo de asesores te guiará en todo el proceso de traspaso.",
              },
              {
                q: "Soy monotributista/autónomo, ¿puedo contratar Cober?",
                a: "Por supuesto. Ofrecemos planes especialmente pensados para monotributistas y trabajadores autónomos. Si sos monotributista, podés utilizar tus aportes mensuales para acceder a nuestros servicios.",
              },
              {
                q: "¿Cober ofrece atención médica online o telemedicina?",
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
      <section className="relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/pareja2.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60" />
        <div className="relative z-10 px-4 sm:px-8 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/60 text-xs uppercase tracking-widest font-medium mb-3">
              Comenzá hoy
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              ¿Listo para proteger tu salud y la de tu familia?
            </h2>
            <p className="text-white/70 text-sm md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Contactá a un asesor de Cober y encontrá el plan ideal para vos. Sin compromiso y en minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-bold w-full sm:min-w-[220px] sm:w-auto shadow-2xl"
              >
                Cotizar Plan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 w-full sm:min-w-[220px] sm:w-auto"
              >
                Asociate Online
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Atención 24/7</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Respuesta en menos de 24hs</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>30 días de garantía</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Cobertura nacional e internacional</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
