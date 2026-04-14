import { useState, useCallback } from "react";
import AppSidebar from "@/components/AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useBrand } from "@/components/brand-provider";
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

const gridClass = "grid gap-x-6 gap-y-3 sm:gap-x-6 sm:gap-y-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start";

function Page1() {
  return (
    <div className={gridClass}>
      {/* Large — Priority rows */}
      <div><RecentTransactionsFullCard /></div>
      <div><TrafficChannelsCard /></div>
      <div><HoldingsListCard /></div>
      <div><VercelAgentCard /></div>
      <div><InviteTeamCard /></div>
      <div><SavingsTargetsFullCard /></div>
      <div><ObservabilityCard /></div>
      <div><TransferFundsFullCard /></div>

      {/* Large / Medium */}
      <div><CardBalanceCard /></div>
      <div><BrowserShareCard /></div>
      <div><StockPerformanceCard /></div>
      <div><AnalyticsCard /></div>

      {/* Medium — Financial & Activity */}
      <div><VisitorsCard /></div>
      <div><SleepReportCard /></div>
      <div><YearlyActivityCard /></div>
      <div><InvestmentCard /></div>
      <div><BuyInvestmentCard /></div>
      <div><DividendIncomeCard /></div>
      <div><DollarCostAveragingCard /></div>

      {/* Savings */}
      <div><SavingsGoalDonutCard /></div>
      <div><SavingsTargetCard /></div>
      <div><NewSavingsGoalCard /></div>

      {/* Transactions & Billing */}
      <div><RecentTransactionsCard /></div>
      <div><UpcomingPaymentsCard /></div>
      <div><InvoiceCard /></div>
      <div><BillingCycleCard /></div>
      <div><PaymentDueCard /></div>

      {/* Transfers & Banking */}
      <div><TransferFundsCard /></div>
      <div><ConnectBankCard /></div>
      <div><AccountAccessCard /></div>
      <div><PayoutPreferencesCard /></div>
      <div><SyncingAccountsCard /></div>
    </div>
  );
}

function Page2() {
  return (
    <div className={gridClass}>
      {/* Small / UI & Forms */}
      <div><ButtonShowcaseCard /></div>
      <div><BadgeShowcaseCard /></div>
      <div><InputShowcaseCard /></div>
      <div><AvatarShowcaseCard /></div>

      <div><FormElementsCard /></div>
      <div><TabsCard /></div>
      <div><ButtonGroupToolbarCard /></div>
      <div><TypographyShowcaseCard /></div>

      <div><NovaMontserratCard /></div>
      <div><EnvironmentVariablesCard /></div>
      <div><FileUploadCard /></div>
      <div><UploadArtworkCard /></div>

      <div><LiveAudioWaveformCard /></div>
      <div><QRCodeCard /></div>
      <div><NavigationMenuCard /></div>
      <div><BreadcrumbCard /></div>

      <div><FeedbackCard /></div>
      <div><ReportBugCard /></div>
      <div><BookAppointmentCard /></div>
      <div><ShippingAddressCard /></div>

      <div><PreferencesCard /></div>
      <div><ProfileCard /></div>
      <div><SocialLinksCard /></div>
      <div><MilestoneCard /></div>

      <div><ExploreCatalogCard /></div>
      <div><ContributorsCard /></div>
      <div><NoTeamMembersCard /></div>
      <div><ShortcutsCard /></div>

      <div><NotificationsCard /></div>
      <div><NotificationsPreferencesCard /></div>
      <div><FAQCard /></div>
      <div><NotFoundCard /></div>

      {/* IoT / small layout pieces */}
      <div><PowerUsageCard /></div>
      <div><KitchenIslandCard /></div>
      <div><LivingRoomCard /></div>
      <div><SmartLockCard /></div>

      <div><NoCodespacesCard /></div>
      <div><ContributionsActivityCard /></div>
      <div><GetAlertedCard /></div>
    </div>
  );
}

export default function TodosComponentesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [page, setPage] = useState(1);
  const isMobile = useIsMobile();
  const { brand } = useBrand();
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
        className={`flex-1 w-full min-w-0 transition-all duration-300 bg-background text-foreground ${brand === "cober" ? "violet-primary" : ""} ${
          isSidebarOpen && !isMobile ? "ml-60" : "ml-0"
        }`}
      >
        <div className="px-6 py-4">
          {/* Header */}
          <div className="mb-2 md:mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-foreground">
              Todos los Componentes
            </h1>
        
          </div>

          {/* Paginación — top */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">
              Página <span className="font-bold text-foreground">{page}</span> de {totalPages}
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
