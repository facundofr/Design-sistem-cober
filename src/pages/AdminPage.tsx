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
            <div className="w-20 h-20 rounded-xl bg-primary flex items-center justify-center mx-auto mb-2 overflow-hidden">
              <svg viewBox="0 0 584 265" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" className="w-16 h-16 fill-current text-white dark:text-black">
                <g>
                  <g>
                    <path d="M404.2,136.8l-2.1-15.2l-7,15.2H393l-7-15.2l-2,15.2h-7.4l4-26.4h7.3l6.2,14.3l6.2-14.3h7.3l3.9,26.4H404.2z" />
                    <path d="M431.9,130.5v6.3h-17.2v-26.4h16.9v6.3H422v3.9h8.7v6H422v3.9H431.9z" />
                    <path d="M460,123.5c0,7.7-5.6,13.2-13.6,13.2h-10.7v-26.4h10.7C454.4,110.4,460,115.8,460,123.5z M452.5,123.5 c0-3.9-2.6-6.5-6.5-6.5h-3v13.1h3C449.9,130.1,452.5,127.4,452.5,123.5z" />
                    <path d="M463.4,110.4h7.4v26.4h-7.4V110.4z" />
                    <path d="M488.1,137.4c-8,0-14-5.9-14-13.8c0-7.9,6-13.9,14-13.9c6.9,0,12.3,4.6,13.3,11.2h-7.4 c-0.9-2.7-3.2-4.5-6-4.5c-3.7,0-6.5,3-6.5,7.1c0,4.1,2.7,7,6.5,7c2.9,0,5.2-1.9,6-4.8h7.4C500.5,132.7,495.1,137.4,488.1,137.4 L488.1,137.4z" />
                    <path d="M504.6,110.4h7.4v26.4h-7.4V110.4z" />
                    <path d="M540.2,110.4v26.4h-6l-10.5-14.3v14.3h-7v-26.4h6.4l10.1,13.8v-13.8H540.2z" />
                    <path d="M561,132.5h-9.3l-1.5,4.3h-7.8l10.4-26.4h7.1l10.6,26.4h-8L561,132.5z M556.3,118.6l-2.9,8.2h5.8L556.3,118.6 z" />
                    <path d="M399.1,150.9c0,5.5-4.2,9.6-9.8,9.6h-3.9v7.3h-7.3v-26.4h11.2C395,141.3,399.1,145.3,399.1,150.9z M391.7,150.9 c0-1.9-1.3-3.2-3.2-3.2h-3.1v6.4h3.1C390.4,154.1,391.7,152.8,391.7,150.9z" />
                  </g>
                  <g>
                    <path d="M177.2,126.3c-1-1.8-2.3-3.5-3.8-4.9c-1.5-1.5-3.1-2.7-4.9-3.8c-1.8-1-3.7-1.9-5.8-2.4 c-4.1-1.2-8.8-1.1-12.9,0c-2.1,0.6-4,1.4-5.8,2.4c-1.8,1-3.4,2.3-4.9,3.8c-1.5,1.5-2.7,3.1-3.8,4.9c-1,1.8-1.9,3.7-2.4,5.8 c-0.6,2-0.9,4.2-0.9,6.4c0,0.4,0,0.7,0,1.1l0,0.3l-0.1,0.2c-3.4,6.2-6.6,8.7-10.5,10.7l-0.3,0.1c-1.3,0.5-2.9,1.1-6,1.1h-0.1 c-1.8,0-3.6-0.4-5.2-1.1c-1.6-0.7-3-1.7-4.1-2.9c-1.2-1.2-2.1-2.7-2.7-4.3c-0.6-1.6-1-3.4-1-5.3c0-1.9,0.3-3.7,1-5.3 c0.6-1.7,1.5-3.1,2.7-4.4c1.2-1.2,2.5-2.2,4.1-2.9c1.6-0.7,3.4-1.1,5.2-1.1c1.5,0,3,0.2,4.3,0.7c1.4,0.5,2.6,1.1,3.7,2 c0.2,0.1,0.4,0.1,0.4,0.1c0,0,0.1,0,0.3-0.3l5.5-7.8c0.1-0.2,0.1-0.4,0.1-0.5c-0.1-0.2-0.3-0.4-0.5-0.5c-2-1.3-4.2-2.4-6.4-3.1 c-2.2-0.7-4.6-1.1-7.2-1.1c-2.2,0-4.4,0.3-6.4,0.9c-2.1,0.6-4,1.4-5.8,2.4c-1.8,1-3.4,2.3-4.9,3.8c-1.5,1.5-2.7,3.1-3.8,4.9 c-1.1,1.8-1.9,3.7-2.4,5.8c-0.6,2.1-0.9,4.2-0.9,6.4c0,2.2,0.3,4.4,0.9,6.4c0.6,2.1,1.4,4,2.4,5.8c1,1.8,2.3,3.4,3.8,4.9 c1.5,1.5,3.1,2.7,4.9,3.8c1.8,1.1,3.7,1.9,5.8,2.4c2,0.6,4.2,0.9,6.4,0.9c2.5,0,5-0.4,7.2-1.1c1.2-0.4,2.4-0.9,3.6-1.5 c4.4-2.2,6.7-4.9,8.9-7.8l0.6-0.9l0.6,0.9c0.8,1.2,1.8,2.3,2.8,3.3c1.5,1.5,3.1,2.7,4.9,3.8c1.8,1.1,3.7,1.9,5.8,2.4 c4.1,1.1,8.8,1.1,12.9,0c2.1-0.6,4-1.4,5.8-2.4c1.8-1.1,3.4-2.3,4.9-3.8c1.5-1.5,2.7-3.1,3.8-4.9c1-1.8,1.9-3.7,2.4-5.8 c0.6-2,0.9-4.2,0.9-6.4c0-2.2-0.3-4.4-0.9-6.4C179.1,130,178.3,128.1,177.2,126.3" />
                  </g>
                </g>
              </svg>
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
