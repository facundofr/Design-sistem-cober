import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={(e) => e.preventDefault()}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Bienvenido de nuevo</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Ingresá tu email para acceder a tu cuenta
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="admin@cober.com" required />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>

        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            O continuá con
          </span>
        </div>

        <Button variant="outline" className="w-full" type="button">
          {/* Google icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mr-2 h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
          </svg>
          Continuar con Google
        </Button>
      </div>

      <div className="text-center text-sm">
        ¿No tenés cuenta?{" "}
        <a
          href="#"
          className="underline underline-offset-4"
          onClick={(e) => e.preventDefault()}
        >
          Registrate
        </a>
      </div>
    </form>
  );
}

export default function AdminPage() {
  return (
    <PageLayout
      title="Acceso Admin"
      description="Panel de administración para gestionar el design system."
    >
      <div className="grid min-h-[600px] overflow-hidden rounded-2xl border border-border lg:grid-cols-2">
        {/* Left column – form */}
        <div className="flex flex-col gap-4 p-6 md:p-10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img src="/logo-cober.svg" alt="Cober" className="h-8 w-auto" />
            </a>
          </div>

          {/* Form centered */}
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
        </div>

        {/* Right column – image */}
        <div className="relative hidden lg:block">
          <img
            src="/pareja2.webp"
            alt="Cober"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Quote overlay */}
        
        </div>
      </div>
    </PageLayout>
  );
}
