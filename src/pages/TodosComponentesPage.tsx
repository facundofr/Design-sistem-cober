import { useState, useCallback } from "react";
import AppSidebar from "@/components/AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  // Originales
  AccountAccessCard,
  PayoutPreferencesCard,
  StockPerformanceCard,
  CardBalanceCard,
  PaymentDueCard,
  YearlyActivityCard,
  PowerUsageCard,
  TransferFundsCard,
  RecentTransactionsCard,
  InvestmentCard,
  SavingsTargetCard,
  BuyInvestmentCard,
  NotificationsCard,
  FormElementsCard,
  TabsCard,
  ButtonShowcaseCard,
  AvatarShowcaseCard,
  BadgeShowcaseCard,
  InputShowcaseCard,
  ExploreCatalogCard,
  MilestoneCard,
  // Nuevos
  FeedbackCard,
  WeeklyFitnessCard,
  GetAlertedCard,
  BookAppointmentCard,
  FileUploadCard,
  LiveAudioWaveformCard,
  VisitorsCard,
  SleepReportCard,
  AnalyticsCard,
  BillingCycleCard,
  ShortcutsCard,
  NotFoundCard,
  NovaMontserratCard,
  TypographyShowcaseCard,
  ButtonGroupToolbarCard,
  EnvironmentVariablesCard,
  TrafficChannelsCard,
  BrowserShareCard,
  NoCodespacesCard,
  InvoiceCard,
  ShippingAddressCard,
  InviteTeamCard,
  ReportBugCard,
  ContributorsCard,
  VercelAgentCard,
  ContributionsActivityCard,
  QRCodeCard,
  DividendIncomeCard,
  DollarCostAveragingCard,
  SyncingAccountsCard,
  SavingsGoalDonutCard,
  KitchenIslandCard,
  HoldingsListCard,
  NotificationsPreferencesCard,
  LivingRoomCard,
  UploadArtworkCard,
  UpcomingPaymentsCard,
  SocialLinksCard,
  TransferFundsFullCard,
  NavigationMenuCard,
  BreadcrumbCard,
  PreferencesCard,
  ProfileCard,
  FAQCard,
  SmartLockCard,
  NoTeamMembersCard,
  ConnectBankCard,
  NewSavingsGoalCard,
  ObservabilityCard,
  SavingsTargetsFullCard,
  RecentTransactionsFullCard,
} from "@/components/showcase/ShowcaseCards";

// CSS variables: fondo neutro negro de la app + violet en --primary
const violetDarkVars: React.CSSProperties = {
  "--background": "0 0% 7%",
  "--foreground": "0 0% 98%",
  "--card": "0 0% 10%",
  "--card-foreground": "0 0% 98%",
  "--popover": "0 0% 7%",
  "--popover-foreground": "0 0% 98%",
  "--primary": "263.4 70% 50.4%",
  "--primary-foreground": "0 0% 98%",
  "--secondary": "0 0% 15%",
  "--secondary-foreground": "0 0% 98%",
  "--muted": "0 0% 15%",
  "--muted-foreground": "0 0% 65%",
  "--accent": "0 0% 15%",
  "--accent-foreground": "0 0% 98%",
  "--destructive": "0 84% 60%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "0 0% 20%",
  "--input": "0 0% 20%",
  "--ring": "263.4 70% 50.4%",
  "--radius": "1.5rem",
} as React.CSSProperties;

const gridClass = "grid gap-x-6 gap-y-3 sm:gap-x-6 sm:gap-y-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start";

function Page1() {
  return (
    <div className={gridClass}>
      {/* Design System */}
      <div><NovaMontserratCard /></div>
      <div><TypographyShowcaseCard /></div>
      <div><ButtonGroupToolbarCard /></div>
      <div><EnvironmentVariablesCard /></div>

      {/* UI Base */}
      <div><ButtonShowcaseCard /></div>
      <div><BadgeShowcaseCard /></div>
      <div><InputShowcaseCard /></div>
      <div><AvatarShowcaseCard /></div>

      {/* Formularios */}
      <div><FormElementsCard /></div>
      <div><FeedbackCard /></div>
      <div><ReportBugCard /></div>
      <div><BookAppointmentCard /></div>

      {/* Formularios extendidos */}
      <div><ShippingAddressCard /></div>
      <div><TabsCard /></div>
      <div><NavigationMenuCard /></div>
      <div><BreadcrumbCard /></div>

      {/* Notificaciones */}
      <div><NotificationsCard /></div>
      <div><NotificationsPreferencesCard /></div>
      <div><ShortcutsCard /></div>
      <div><GetAlertedCard /></div>

      {/* Media y archivos */}
      <div><FileUploadCard /></div>
      <div><UploadArtworkCard /></div>
      <div><LiveAudioWaveformCard /></div>
      <div><QRCodeCard /></div>

      {/* Perfil y cuenta */}
      <div><ProfileCard /></div>
      <div><PreferencesCard /></div>
      <div><SocialLinksCard /></div>
      <div><MilestoneCard /></div>

      {/* Equipos y colaboración */}
      <div><InviteTeamCard /></div>
      <div><NoTeamMembersCard /></div>
      <div><ContributorsCard /></div>
      <div><ExploreCatalogCard /></div>

      {/* Dev y observabilidad */}
      <div><VercelAgentCard /></div>
      <div><ObservabilityCard /></div>
      <div><ContributionsActivityCard /></div>
      <div><NoCodespacesCard /></div>

      {/* FAQ y misc */}
      <div><FAQCard /></div>
      <div><NotFoundCard /></div>
    </div>
  );
}

function Page2() {
  return (
    <div className={gridClass}>
      {/* Analytics */}
      <div><TrafficChannelsCard /></div>
      <div><VisitorsCard /></div>
      <div><AnalyticsCard /></div>
      <div><BrowserShareCard /></div>

      {/* Performance y salud */}
      <div><StockPerformanceCard /></div>
      <div><YearlyActivityCard /></div>
      <div><SleepReportCard /></div>
      <div><WeeklyFitnessCard /></div>

      {/* Balance y facturación */}
      <div><CardBalanceCard /></div>
      <div><PaymentDueCard /></div>
      <div><BillingCycleCard /></div>
      <div><InvoiceCard /></div>

      {/* Inversiones */}
      <div><InvestmentCard /></div>
      <div><BuyInvestmentCard /></div>
      <div><DividendIncomeCard /></div>
      <div><DollarCostAveragingCard /></div>

      {/* Ahorros */}
      <div><SavingsGoalDonutCard /></div>
      <div><SavingsTargetCard /></div>
      <div><SavingsTargetsFullCard /></div>
      <div><NewSavingsGoalCard /></div>

      {/* Transacciones */}
      <div><RecentTransactionsCard /></div>
      <div><RecentTransactionsFullCard /></div>
      <div><UpcomingPaymentsCard /></div>
      <div><HoldingsListCard /></div>

      {/* Transferencias y banking */}
      <div><TransferFundsCard /></div>
      <div><TransferFundsFullCard /></div>
      <div><ConnectBankCard /></div>
      <div><AccountAccessCard /></div>

      {/* Cuenta y sincronización */}
      <div><PayoutPreferencesCard /></div>
      <div><SyncingAccountsCard /></div>

      {/* Hogar / IoT */}
      <div><PowerUsageCard /></div>
      <div><KitchenIslandCard /></div>
      <div><LivingRoomCard /></div>
      <div><SmartLockCard /></div>
    </div>
  );
}

export default function TodosComponentesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [page, setPage] = useState(1);
  const isMobile = useIsMobile();
  const totalPages = 2;

  const handleToggle = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <div className="min-h-screen flex">
      <AppSidebar isOpen={isSidebarOpen} onToggle={handleToggle} />

      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main
        className={`flex-1 w-full min-w-0 transition-all duration-300 ${
          isSidebarOpen && !isMobile ? "ml-60" : "ml-0"
        }`}
        style={{
          ...violetDarkVars,
          backgroundColor: "hsl(0, 0%, 7%)",
          color: "hsl(0, 0%, 98%)",
          fontFamily: "'Montserrat', sans-serif",
          minHeight: "100vh",
        }}
      >
        <div className="px-6 py-4">
          {/* Header */}
          <div className="mb-2 md:mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "hsl(0, 0%, 98%)" }}>
              Todos los Componentes
            </h1>
        
          </div>

          {/* Paginación — top */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm" style={{ color: "hsl(0, 0%, 65%)" }}>
              Página <span className="font-bold" style={{ color: "hsl(0, 0%, 98%)" }}>{page}</span> de {totalPages}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 1}
                onClick={() => { setPage(1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="gap-1.5 text-xs"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Anterior</span>
              </Button>
              {[1, 2].map((p) => (
                <Button
                  key={p}
                  size="sm"
                  variant={page === p ? "default" : "outline"}
                  onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="h-8 w-8 p-0 text-xs"
                >
                  {p}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                disabled={page === totalPages}
                onClick={() => { setPage(2); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="gap-1.5 text-xs"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* Contenido de página */}
          {page === 1 ? <Page1 /> : <Page2 />}

          {/* Paginación — bottom */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => { setPage(1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="gap-1.5"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Anterior</span>
            </Button>
            {[1, 2].map((p) => (
              <Button
                key={p}
                size="sm"
                variant={page === p ? "default" : "outline"}
                onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="h-9 w-9 p-0"
              >
                {p}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => { setPage(2); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="gap-1.5"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
