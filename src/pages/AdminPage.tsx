import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/mode-toggle";
// using project public image for branding

export default function AdminPage() {
  return (
    <PageLayout
      title="Acceso Admin"
      description="Panel de administración para gestionar el design system."
    >
      {/* Theme toggle - positioned at top right */}
      <div className="flex justify-end mb-4">
        <ModeToggle />
      </div>

      <div className="flex items-center justify-center py-12">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mx-auto mb-2 overflow-hidden">
              <img src="/cober.svg" alt="Cober" className="w-22 h-22 " />
            </div>
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>Ingresá tus credenciales para acceder</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="admin-email">Email</Label>
                <Input id="admin-email" type="email" placeholder="admin@empresa.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-pass">Contraseña</Label>
                <Input id="admin-pass" type="password" placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full">Ingresar</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
