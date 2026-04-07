import {
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
} from "@/components/showcase/ShowcaseCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Design System</h1>
          <p className="mt-1 text-muted-foreground">
            shadcn/ui component showcase — preset b5vnF8VIO · Nova · Neutral · Inter
          </p>
        </div>

        {/* Masonry-like grid */}
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
          <InvestmentCard />
          <AccountAccessCard />
          <PayoutPreferencesCard />
          <StockPerformanceCard />
          <CardBalanceCard />
          <PaymentDueCard />
          <YearlyActivityCard />
          <PowerUsageCard />
          <ButtonShowcaseCard />
          <RecentTransactionsCard />
          <SavingsTargetCard />
          <FormElementsCard />
          <TabsCard />
          <AvatarShowcaseCard />
          <BadgeShowcaseCard />
          <InputShowcaseCard />
          <NotificationsCard />
          <TransferFundsCard />
          <ExploreCatalogCard />
          <MilestoneCard />
          <BuyInvestmentCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
