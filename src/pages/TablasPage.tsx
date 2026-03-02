import PageLayout from "@/components/PageLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const data = [
  { id: "INV-001", client: "Empresa Alpha", amount: "$12,500", status: "Pagado", date: "2026-02-15" },
  { id: "INV-002", client: "Corp Beta", amount: "$8,200", status: "Pendiente", date: "2026-02-20" },
  { id: "INV-003", client: "Grupo Gamma", amount: "$45,000", status: "Pagado", date: "2026-02-22" },
  { id: "INV-004", client: "Industrias Delta", amount: "$3,750", status: "Vencido", date: "2026-01-10" },
  { id: "INV-005", client: "Services Epsilon", amount: "$21,300", status: "Pendiente", date: "2026-03-01" },
];

const statusVariant = (status: string) => {
  switch (status) {
    case "Pagado": return "default" as const;
    case "Pendiente": return "secondary" as const;
    case "Vencido": return "destructive" as const;
    default: return "outline" as const;
  }
};

export default function TablasPage() {
  return (
    <PageLayout
      title="Tablas"
      description="Componente de tabla para mostrar datos tabulares con estilos consistentes."
    >
      <section className="border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Factura</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-mono text-sm">{row.id}</TableCell>
                <TableCell>{row.client}</TableCell>
                <TableCell className="font-medium">{row.amount}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant(row.status)}>{row.status}</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </section>
    </PageLayout>
  );
}
