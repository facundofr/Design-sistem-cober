import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function FormulariosPage() {
  return (
    <PageLayout
      title="Formularios"
      description="Componentes de entrada de datos. Todos los campos incluyen estados de validación y accesibilidad."
    >
      {/* Inputs */}
      <section className="border border-border rounded-xl p-6 mb-8">
        <h3 className="text-xs font-bold tracking-wider text-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          CAMPOS DE TEXTO
        </h3>
        <div className="grid gap-6 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input id="name" placeholder="Ingrese su nombre" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="correo@ejemplo.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">Campo deshabilitado</Label>
            <Input id="disabled" disabled placeholder="No editable" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" placeholder="Escriba su mensaje aquí..." />
          </div>
        </div>
      </section>

      {/* Select */}
      <section className="border border-border rounded-xl p-6 mb-8">
        <h3 className="text-xs font-bold tracking-wider text-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          SELECTORES
        </h3>
        <div className="grid gap-6 max-w-md">
          <div className="space-y-2">
            <Label>País</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un país" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ar">Argentina</SelectItem>
                <SelectItem value="br">Brasil</SelectItem>
                <SelectItem value="cl">Chile</SelectItem>
                <SelectItem value="uy">Uruguay</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              Acepto los términos y condiciones
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="notifications" />
            <Label htmlFor="notifications" className="text-sm">
              Recibir notificaciones
            </Label>
          </div>
        </div>
      </section>

      {/* Example form */}
      <section className="border border-border rounded-xl p-6">
        <h3 className="text-xs font-bold tracking-wider text-foreground mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          FORMULARIO EJEMPLO
        </h3>
        <form className="grid gap-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nombre</Label>
              <Input placeholder="Juan" />
            </div>
            <div className="space-y-2">
              <Label>Apellido</Label>
              <Input placeholder="Pérez" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="juan@empresa.com" />
          </div>
          <div className="space-y-2">
            <Label>Comentario</Label>
            <Textarea placeholder="Opcional..." />
          </div>
          <Button type="submit" className="w-full">Enviar</Button>
        </form>
      </section>
    </PageLayout>
  );
}
