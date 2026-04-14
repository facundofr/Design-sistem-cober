import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  description?: string;
}

/** Content-only wrapper — the persistent sidebar/shell lives in AppLayout (App.tsx) */
export default function PageLayout({ children, title, description }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-10">
      <h1 className="text-3xl font-bold text-foreground mb-1">{title}</h1>
      {description && (
        <p className="text-muted-foreground mb-8">{description}</p>
      )}
      {children}
    </div>
  );
}
