import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  AlertCircle, ArrowRight, Bell, Download, Lock, Filter,
  Settings, ArrowUpRight, ArrowDownRight, Coffee, ShoppingCart, Globe,
  Check, X, Plus, Search, RefreshCw, Upload, Mic, Home, LayoutDashboard,
  CreditCard, BellRing, Shield, Target, FileText, HelpCircle, MessageSquare,
  Activity, Wifi, LogIn, Copy, UserPlus, Bug, Users, Cpu, QrCode,
  Sun, Thermometer, Volume2, ChevronRight, MoreHorizontal, Eye, ArrowLeftRight,
  RotateCcw, Repeat, MonitorSmartphone, Image as ImageIcon,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Area, AreaChart, PieChart, Pie, Cell } from "recharts";

const chartData = [
  { month: "J", value: 186 }, { month: "F", value: 305 }, { month: "M", value: 237 },
  { month: "A", value: 273 }, { month: "M", value: 209 }, { month: "J", value: 314 },
  { month: "J", value: 250 }, { month: "A", value: 190 }, { month: "S", value: 320 },
  { month: "O", value: 278 }, { month: "N", value: 340 }, { month: "D", value: 295 },
];

const areaData = [
  { time: "6a", value: 1.2 }, { time: "8a", value: 2.1 }, { time: "10a", value: 3.4 },
  { time: "12p", value: 2.8 }, { time: "2p", value: 3.1 }, { time: "4p", value: 2.5 },
  { time: "6p", value: 1.8 }, { time: "8p", value: 1.4 },
];

export function AccountAccessCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Access</CardTitle>
        <CardDescription>Update your credentials or re-authenticate.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" defaultValue="artist@studio.inc" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Current Password</Label>
            <button className="text-xs text-muted-foreground hover:text-foreground">FORGOT?</button>
          </div>
          <Input id="password" type="password" defaultValue="••••••••••••" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full gap-2">
          <Lock className="h-4 w-4" /> Update Security
        </Button>
        <Separator />
        <button className="flex w-full items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-4 w-4" />
            <div className="text-left">
              <p className="font-medium">Danger Zone</p>
              <p className="text-xs text-muted-foreground">Archive account and remove catalog</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </button>
      </CardFooter>
    </Card>
  );
}

export function PayoutPreferencesCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Payout Preferences</CardTitle>
          <CardDescription>Receiving Method</CardDescription>
        </div>
        <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Account Holder Name</Label>
          <Input defaultValue="Synthetic Horizons Music LLC" />
        </div>
        <div className="space-y-2">
          <Label>Receiving Method</Label>
          <RadioGroup defaultValue="bank" className="flex gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-primary p-3">
              <RadioGroupItem value="bank" id="bank" />
              <div>
                <Label htmlFor="bank" className="font-medium">Bank Transfer</Label>
                <p className="text-xs text-muted-foreground">SWIFT / IBAN</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border p-3">
              <RadioGroupItem value="paypal" id="paypal" />
              <div>
                <Label htmlFor="paypal" className="font-medium">PayPal</Label>
                <p className="text-xs text-muted-foreground">Instant Payout</p>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label>IBAN / Account Number</Label>
          <Input placeholder="DE89 3704 0044 ...." />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Payout Settings</Button>
      </CardFooter>
    </Card>
  );
}

export function StockPerformanceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock Performance</CardTitle>
        <CardDescription>6-month price history.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Label>Ticker</Label>
          <Select defaultValue="VOO">
            <SelectTrigger className="ml-auto w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="VOO">VOO</SelectItem>
              <SelectItem value="VTI">VTI</SelectItem>
              <SelectItem value="QQQ">QQQ</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/0.1)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function CardBalanceCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Card Balance</CardDescription>
        <CardTitle className="text-3xl font-bold">US$12.94</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">US$11,337.06 Available</p>
      </CardContent>
    </Card>
  );
}

export function PaymentDueCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Payment Due</CardDescription>
        <CardTitle className="text-3xl font-bold">1 Apr</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" size="sm">Pay Early</Button>
      </CardFooter>
    </Card>
  );
}

export function YearlyActivityCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Yearly Activity</CardTitle>
        <Badge variant="secondary">+US$0.25 Daily Cash</Badge>
      </CardHeader>
      <CardContent>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs" stroke="hsl(var(--muted-foreground))" />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function PowerUsageCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Power Usage</CardTitle>
          <CardDescription>Whole Home</CardDescription>
        </div>
        <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <XAxis dataKey="time" axisLine={false} tickLine={false} className="text-xs" stroke="hsl(var(--muted-foreground))" fontSize={10} />
              <Area type="monotone" dataKey="value" stroke="hsl(var(--foreground))" fill="hsl(var(--muted))" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Currently Using</p>
            <p className="text-xl font-bold">3.4 kW</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Solar Gen</p>
            <p className="text-xl font-bold text-primary">+1.2 kW</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Battery Level</span>
            <span className="font-medium">85%</span>
          </div>
          <Progress value={85} />
        </div>
      </CardContent>
    </Card>
  );
}

export function TransferFundsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Transfer Funds</CardTitle>
          <CardDescription>Move money between your connected accounts</CardDescription>
        </div>
        <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
      </CardHeader>
    </Card>
  );
}

export function RecentTransactionsCard() {
  const transactions = [
    { name: "Blue Bottle Coffee", category: "Food & Drink", date: "Today, 10:24 AM", amount: "-$6.50", icon: Coffee },
    { name: "Whole Foods Market", category: "Groceries", date: "Yesterday", amount: "-$142.30", icon: ShoppingCart },
    { name: "Direct Deposit", category: "Income", amount: "+$4,200.00", positive: true as const, icon: ArrowDownRight },
    { name: "Netflix", category: "Entertainment", date: "Jun 1", amount: "-$24.10", icon: Globe },
    { name: "Uber", category: "Transportation", date: "Jun 1", amount: "-$19.99", icon: ArrowUpRight },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-sm font-medium">Recent Transactions</CardTitle>
        </div>
        <Button variant="ghost" size="icon"><Filter className="h-4 w-4" /></Button>
      </CardHeader>
      <CardContent className="space-y-1">
        {transactions.map((t, i) => (
          <div key={i} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                <t.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-medium ${t.positive ? "text-primary" : ""}`}>{t.amount}</p>
              {t.date && <p className="text-xs text-muted-foreground">{t.date}</p>}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function InvestmentCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Investment</CardTitle>
        <CardDescription>Amount to Invest</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input defaultValue="$10,000.00" className="text-lg" />
        <div className="space-y-2">
          <Label>Order Type</Label>
          <Select defaultValue="market">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="market">Market Order</SelectItem>
              <SelectItem value="limit">Limit Order</SelectItem>
              <SelectItem value="stop">Stop Order</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">Market orders execute at the current price.</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Estimated Shares</span>
          <span className="font-medium">1.95</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Buying Power</span>
          <span className="font-bold">$12,450.00</span>
        </div>
        <Button className="w-full">Review Order</Button>
        <p className="text-center text-xs text-muted-foreground">
          Orders are typically executed within minutes during market hours.
        </p>
      </CardContent>
    </Card>
  );
}

export function SavingsTargetCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Savings Targets</CardTitle>
        <Button variant="outline" size="sm">New Goal</Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-xs text-muted-foreground">Est. Investment</p>
          <p className="text-4xl font-bold">$420,000</p>
        </div>
        <Separator />
        <div>
          <p className="text-xs text-muted-foreground">Acct. Balance</p>
          <p className="text-4xl font-bold">$45,000</p>
          <p className="text-sm text-muted-foreground">15% of target · <span className="text-primary">$21,000</span></p>
        </div>
      </CardContent>
    </Card>
  );
}

export function BuyInvestmentCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buy Investment</CardTitle>
        <CardDescription>Amount to Invest</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Order Type</span>
          <Badge variant="outline">Market Order</Badge>
        </div>
        <p className="text-xs text-muted-foreground">
          Market orders execute at the current price.
        </p>
        <Separator />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Estimated Shares</span>
          <span className="font-medium">1.95</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Buying Power</span>
          <span className="font-bold">$456</span>
        </div>
        <Button className="w-full">Review Order</Button>
        <p className="text-center text-xs text-muted-foreground">
          Trades are typically executed within minutes during market hours.
        </p>
      </CardContent>
    </Card>
  );
}

export function NotificationsCard() {
  const notifications = [
    { title: "New follower", desc: "Someone started following your portfolio", time: "2m ago" },
    { title: "Dividend received", desc: "VOO quarterly dividend: $45.20", time: "1h ago" },
    { title: "Price alert", desc: "AAPL reached your target price", time: "3h ago" },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Notifications</CardTitle>
        <Bell className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-3">
        {notifications.map((n, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">{n.title}</p>
              <p className="text-xs text-muted-foreground">{n.desc}</p>
            </div>
            <span className="text-xs text-muted-foreground">{n.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function FormElementsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Elements</CardTitle>
        <CardDescription>Interactive components showcase</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Label>Push Notifications</Label>
            <p className="text-xs text-muted-foreground">Receive alerts on your device</p>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <Label>Auto-Save</Label>
            <p className="text-xs text-muted-foreground">Save changes automatically</p>
          </div>
          <Switch />
        </div>
        <Separator />
        <div className="space-y-3">
          <Label>Volume</Label>
          <Slider defaultValue={[65]} max={100} step={1} />
        </div>
        <Separator />
        <div className="space-y-3">
          <Label>Preferences</Label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox id="c1" defaultChecked />
              <Label htmlFor="c1" className="text-sm font-normal">Email updates</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="c2" />
              <Label htmlFor="c2" className="text-sm font-normal">SMS alerts</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="c3" defaultChecked />
              <Label htmlFor="c3" className="text-sm font-normal">Marketing emails</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TabsCard() {
  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs defaultValue="overview">
          <TabsList className="w-full">
            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
            <TabsTrigger value="analytics" className="flex-1">Analytics</TabsTrigger>
            <TabsTrigger value="reports" className="flex-1">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">$45,231</p>
                <p className="text-xs text-primary">+20.1%</p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs text-muted-foreground">Subscriptions</p>
                <p className="text-2xl font-bold">+2,350</p>
                <p className="text-xs text-primary">+180.1%</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <p className="text-sm text-muted-foreground">Analytics data will appear here.</p>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <p className="text-sm text-muted-foreground">Reports will appear here.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export function ButtonShowcaseCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
        <CardDescription>All button variants</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <Separator />
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Plus className="h-4 w-4" /></Button>
        </div>
        <Separator />
        <div className="flex flex-wrap gap-2">
          <Button disabled>Disabled</Button>
          <Button className="gap-2"><Download className="h-4 w-4" /> Download</Button>
          <Button variant="outline" className="gap-2"><RefreshCw className="h-4 w-4" /> Refresh</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function AvatarShowcaseCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Active contributors this month</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          { name: "Sofia Davis", email: "sofia@example.com", initials: "SD", role: "Admin" },
          { name: "Jackson Lee", email: "jackson@example.com", initials: "JL", role: "Editor" },
          { name: "Isabella Nguyen", email: "isabella@example.com", initials: "IN", role: "Viewer" },
        ].map((member, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">{member.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.email}</p>
              </div>
            </div>
            <Badge variant="secondary">{member.role}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function BadgeShowcaseCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Badges & Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
        <Separator />
        <div className="flex flex-wrap gap-2">
          <Badge className="gap-1"><Check className="h-3 w-3" /> Completed</Badge>
          <Badge variant="secondary" className="gap-1"><RefreshCw className="h-3 w-3" /> Processing</Badge>
          <Badge variant="outline" className="gap-1"><AlertCircle className="h-3 w-3" /> Pending</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export function InputShowcaseCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Fields</CardTitle>
        <CardDescription>Various input types</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="search-input">Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="search-input" placeholder="Search..." className="pl-9" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email-input">Email</Label>
          <Input id="email-input" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="textarea-input">Message</Label>
          <Textarea id="textarea-input" placeholder="Type your message..." rows={3} />
        </div>
      </CardContent>
    </Card>
  );
}

export function ExploreCatalogCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Explore Catalog</CardTitle>
        <CardDescription>
          Check your ISRC codes, metadata, and visual assets before going live.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline">View Catalog</Button>
      </CardFooter>
    </Card>
  );
}

export function MilestoneCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Set a new milestone</CardTitle>
        <CardDescription>
          Define your financial target and we'll help you pace your savings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="01">
          <TabsList>
            <TabsTrigger value="01">01</TabsTrigger>
            <TabsTrigger value="02">02</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  );
}

// ─── NUEVOS COMPONENTES ───────────────────────────────────────────────────────

export function FeedbackCard() {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="space-y-2">
          <Label>Topic</Label>
          <Select>
            <SelectTrigger><SelectValue placeholder="Select a topic" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="bug">Bug Report</SelectItem>
              <SelectItem value="feature">Feature Request</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Feedback</Label>
          <Textarea placeholder="Your feedback helps us improve..." rows={4} />
        </div>
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}

export function WeeklyFitnessCard() {
  const days = [
    { day: "M", val: 70 }, { day: "T", val: 45 }, { day: "W", val: 80 },
    { day: "T", val: 50 }, { day: "F", val: 90 }, { day: "S", val: 30 }, { day: "S", val: 55 },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Fitness Summary</CardTitle>
        <CardDescription>Calories and workout load by day</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-2 h-24 mb-4">
          {days.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <div
                className="w-full rounded-sm bg-primary"
                style={{ height: `${d.val}%` }}
              />
              <span className="text-xs text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
        <Button className="w-full">View details</Button>
      </CardContent>
    </Card>
  );
}

export function GetAlertedCard() {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle className="text-base">Get alerted for anomalies</CardTitle>
        <CardDescription>Automatically monitor your projects for anomalies and get notified.</CardDescription>
      </CardHeader>
      <CardFooter className="justify-center">
        <Button>Upgrade to Observability Plus</Button>
      </CardFooter>
    </Card>
  );
}

export function BookAppointmentCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Appointment</CardTitle>
        <CardDescription>Dr. Sarah Chen · Cardiology</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm font-semibold">Available on March 18, 2026</p>
        <div className="flex flex-wrap gap-2">
          {["9:00 AM", "10:30 AM", "11:00 AM", "1:30 PM"].map((t) => (
            <Button key={t} variant="outline" size="sm">{t}</Button>
          ))}
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm font-medium">New patient?</p>
          <p className="text-xs text-muted-foreground">Please arrive 15 minutes early.</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book Appointment</Button>
      </CardFooter>
    </Card>
  );
}

export function FileUploadCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>File Upload</CardTitle>
        <CardDescription>Drag and drop or browse</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-10 gap-3">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <div className="text-center">
            <p className="text-sm font-medium">Upload files</p>
            <p className="text-xs text-muted-foreground">PNG, JPG, PDF up to 10MB</p>
          </div>
          <Button>Browse Files</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function LiveAudioWaveformCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Audio Waveform</CardTitle>
        <CardDescription>Real-time microphone input visualization with audio reactivity</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center gap-0.5 h-12">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-muted-foreground/40"
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Start Listening</Button>
          <Button size="sm">Stop Processing</Button>
          <Button variant="outline" size="sm">Static</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function VisitorsCard() {
  const data = [
    { m: "Jan", v: 400 }, { m: "Feb", v: 300 }, { m: "Mar", v: 600 },
    { m: "Apr", v: 200 }, { m: "May", v: 500 }, { m: "Jun", v: 700 },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Visitors</CardTitle>
          <CardDescription>Last 6 months</CardDescription>
        </div>
        <Badge variant="secondary">+2% vs last month</Badge>
      </CardHeader>
      <CardContent>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area type="monotone" dataKey="v" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/0.15)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function SleepReportCard() {
  const data = [
    { h: "Mo", deep: 40, light: 60 }, { h: "Tu", deep: 55, light: 45 },
    { h: "We", deep: 70, light: 80 }, { h: "Th", deep: 50, light: 90 },
    { h: "Fr", deep: 80, light: 70 }, { h: "Sa", deep: 60, light: 50 },
    { h: "Su", deep: 65, light: 55 },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sleep Report</CardTitle>
        <CardDescription>Last night · 7h 24m</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="h" axisLine={false} tickLine={false} fontSize={10} stroke="hsl(var(--muted-foreground))" />
              <Bar dataKey="deep" stackId="a" fill="hsl(var(--primary))" radius={[0, 0, 0, 0]} />
              <Bar dataKey="light" stackId="a" fill="hsl(var(--primary)/0.4)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div><p className="font-bold">2h 10m</p><p className="text-muted-foreground">Deep</p></div>
          <div><p className="font-bold">3h 48m</p><p className="text-muted-foreground">Light</p></div>
          <div><p className="font-bold">1h 26m</p><p className="text-muted-foreground">REM</p></div>
          <div><p className="font-bold">84</p><p className="text-muted-foreground">Score</p></div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Good</Button>
        <Button variant="outline" size="sm">Details</Button>
      </CardFooter>
    </Card>
  );
}

export function AnalyticsCard() {
  const data = [
    { m: "Jan", v: 300 }, { m: "Feb", v: 450 }, { m: "Mar", v: 350 },
    { m: "Apr", v: 600 }, { m: "May", v: 400 }, { m: "Jun", v: 520 },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <CardTitle>Analytics</CardTitle>
          <span className="text-sm text-muted-foreground">418.2K Visitors</span>
          <Badge className="text-xs">+10%</Badge>
        </div>
        <Button variant="outline" size="sm">View Analytics</Button>
      </CardHeader>
      <CardContent>
        <div className="h-36">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="m" axisLine={false} tickLine={false} fontSize={10} stroke="hsl(var(--muted-foreground))" />
              <Area type="monotone" dataKey="v" stroke="hsl(var(--primary)/0.6)" fill="hsl(var(--primary)/0.2)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm font-bold">237</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function BillingCycleCard() {
  const items = [
    { label: "Edge Requests", val: "$1.83K" },
    { label: "Fast Data Transfer", val: "$952.51" },
    { label: "Monitoring data points", val: "$901.20" },
    { label: "Web Analytics Events", val: "$603.71" },
    { label: "ISR Writes", val: "524.52K / 2M" },
    { label: "Function Duration", val: "5.11 GB Hrs / 1K GB Hrs" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>5 days remaining in cycle</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full border-2 border-primary/40" />
              <span>{item.label}</span>
            </div>
            <span className="font-medium text-muted-foreground">{item.val}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function ShortcutsCard() {
  const shortcuts = [
    { label: "Search", keys: "⌘ K" },
    { label: "Quick Actions", keys: "⌘ J" },
    { label: "New File", keys: "⌘ N" },
  ];
  return (
    <Card>
      <CardHeader><CardTitle>Shortcuts</CardTitle></CardHeader>
      <CardContent className="space-y-0">
        {shortcuts.map((s, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
            <span className="text-sm">{s.label}</span>
            <kbd className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{s.keys}</kbd>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function NotFoundCard() {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>404 - Not Found</CardTitle>
        <CardDescription>The page you're looking for doesn't exist. Try searching for what you need below.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Try searching for page: /" className="pl-9" />
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="link" className="text-primary">Go to homepage</Button>
      </CardFooter>
    </Card>
  );
}

export function NovaMontserratCard() {
  const swatches = [
    { label: "--backgr...", color: "bg-background border border-border" },
    { label: "--foregr...", color: "bg-foreground" },
    { label: "--primary", color: "bg-primary" },
    { label: "--second...", color: "bg-secondary" },
    { label: "--muted", color: "bg-muted" },
    { label: "--accent", color: "bg-accent" },
  ];
  const chartSwatches = [
    { label: "--border", color: "bg-border" },
    { label: "--chart-1", color: "bg-primary/90" },
    { label: "--chart-2", color: "bg-primary/70" },
    { label: "--chart-3", color: "bg-primary/50" },
    { label: "--chart-4", color: "bg-primary/30" },
    { label: "--chart-5", color: "bg-primary/15" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Nova - Montserrat</CardTitle>
        <CardDescription>Designers love packing quirky glyphs into test phrases. This is a preview of the...</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-6 gap-1">
          {swatches.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className={`h-10 w-full rounded-md ${s.color}`} />
              <p className="text-[9px] text-muted-foreground truncate">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 gap-1">
          {chartSwatches.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className={`h-10 w-full rounded-md ${s.color}`} />
              <p className="text-[9px] text-muted-foreground truncate">{s.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function TypographyShowcaseCard() {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Inherit - Montserrat</p>
        <h2 className="text-3xl font-bold leading-tight">Designing with rhythm and hierarchy.</h2>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>A strong body style keeps long-form content readable and balances the visual weight of headings.</p>
          <p>Thoughtful spacing and cadence help paragraphs scan quickly without feeling dense.</p>
        </div>
        <Button variant="outline" className="w-full">Share Feedback</Button>
      </CardContent>
    </Card>
  );
}

export function ButtonGroupToolbarCard() {
  const icons = [Copy, RefreshCw, Download, Upload, MoreHorizontal, RotateCcw, Plus];
  const icons2 = [ArrowUpRight, ArrowRight, ArrowDownRight, Check, ArrowRight, Search, Settings];
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex flex-wrap gap-1">
          {icons.map((Icon, i) => (
            <Button key={i} variant="outline" size="icon" className="h-8 w-8">
              <Icon className="h-3.5 w-3.5" />
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {icons2.map((Icon, i) => (
            <Button key={i} variant="ghost" size="icon" className="h-8 w-8">
              <Icon className="h-3.5 w-3.5" />
            </Button>
          ))}
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Two-factor authentication</p>
              <p className="text-xs text-muted-foreground">Verify via email or phone number.</p>
            </div>
            <Button variant="outline" size="sm">Enable</Button>
          </div>
          <Slider defaultValue={[60]} max={100} step={1} />
        </div>
        <div className="relative">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Name" className="pr-9" />
        </div>
        <Textarea placeholder="Message" rows={2} />
        <div className="flex flex-wrap gap-2 items-center">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Switch />
          <Switch />
          <Checkbox defaultChecked />
          <Checkbox />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Alert Dialog</Button>
          <Button variant="outline">Button Group</Button>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
}

export function EnvironmentVariablesCard() {
  const vars = [
    { key: "DATABASE_URL", val: "·········" },
    { key: "NEXT_PUBLIC_API", val: "https://api.example.com" },
    { key: "STRIPE_SECRET", val: "·········" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Environment Variables</CardTitle>
        <CardDescription>Production · 8 variables</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {vars.map((v, i) => (
          <div key={i} className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-xs font-mono">
            <span className="font-bold">{v.key}</span>
            <span className="text-muted-foreground">{v.val}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Edit</Button>
        <Button size="sm">Deploy</Button>
      </CardFooter>
    </Card>
  );
}

export function TrafficChannelsCard() {
  const data = [
    { m: "Jan", desktop: 500, mobile: 300 }, { m: "Feb", desktop: 600, mobile: 400 },
    { m: "Mar", desktop: 450, mobile: 350 }, { m: "Apr", desktop: 700, mobile: 500 },
    { m: "May", desktop: 550, mobile: 420 }, { m: "Jun", desktop: 800, mobile: 600 },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic channels</CardTitle>
        <CardDescription>Monthly desktop and mobile traffic for the last six months—compare volume and mix across...</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="m" axisLine={false} tickLine={false} fontSize={10} stroke="hsl(var(--muted-foreground))" />
              <Bar dataKey="desktop" fill="hsl(var(--primary)/0.5)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="mobile" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary/50" />Desktop</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary" />Mobile</span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div><p className="text-xs text-muted-foreground uppercase tracking-wide">Desktop</p><p className="text-xl font-bold">1224</p></div>
          <div><p className="text-xs text-muted-foreground uppercase tracking-wide">Mobile</p><p className="text-xl font-bold">860</p></div>
          <div><p className="text-xs text-muted-foreground uppercase tracking-wide">Mix Delta</p><p className="text-xl font-bold">+42%</p></div>
        </div>
        <Button className="w-full">View report</Button>
      </CardContent>
    </Card>
  );
}

export function BrowserShareCard() {
  const pieData = [
    { name: "Chrome", value: 35, color: "hsl(var(--primary))" },
    { name: "Edge", value: 20, color: "hsl(var(--primary)/0.7)" },
    { name: "Firefox", value: 31, color: "hsl(var(--primary)/0.45)" },
    { name: "Safari", value: 14, color: "hsl(var(--primary)/0.2)" },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Browser Share</CardTitle>
          <CardDescription>January - June 2026</CardDescription>
        </div>
        <Badge variant="outline">Firefox</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <PieChart width={140} height={140}>
            <Pie data={pieData} cx={65} cy={65} innerRadius={45} outerRadius={65} dataKey="value" strokeWidth={0}>
              {pieData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex flex-wrap gap-3 text-xs justify-center">
          {pieData.map((b, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: b.color }} />
              {b.name}
            </span>
          ))}
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Firefox</span>
            <span>31%</span>
          </div>
          <Progress value={31} />
        </div>
      </CardContent>
    </Card>
  );
}

export function NoCodespacesCard() {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <Tabs defaultValue="codespaces">
          <TabsList className="w-full">
            <TabsTrigger value="codespaces" className="flex-1">Codespaces</TabsTrigger>
            <TabsTrigger value="local" className="flex-1">Local</TabsTrigger>
          </TabsList>
          <TabsContent value="codespaces" className="space-y-3 pt-3">
            <div className="flex items-center justify-between text-sm">
              <span>Codespaces</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-6 w-6"><Plus className="h-3 w-3" /></Button>
                <Button variant="ghost" size="icon" className="h-6 w-6"><MoreHorizontal className="h-3 w-3" /></Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Your workspaces in the cloud</p>
            <Separator />
            <div className="flex flex-col items-center py-4 gap-3">
              <Cpu className="h-8 w-8 text-muted-foreground" />
              <p className="text-sm font-medium">No codespaces</p>
              <p className="text-xs text-muted-foreground text-center">You don't have any codespaces with this repository checked out</p>
              <Button size="sm">Create Codespace</Button>
              <button className="text-xs text-muted-foreground underline">Learn more about codespaces</button>
            </div>
            <Separator />
            <p className="text-xs text-muted-foreground">Codespace usage for this repository is paid for by shadcn.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export function InvoiceCard() {
  const items = [
    { name: "Design System License", qty: 1, rate: "$499.00", amount: "$499" },
    { name: "Priority Support", qty: 12, rate: "$99.00", amount: "$1,188" },
    { name: "Custom Components", qty: 3, rate: "$250.00", amount: "$750" },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Invoice #INV-2847</CardTitle>
          <CardDescription>Due March 30, 2026</CardDescription>
        </div>
        <Badge variant="outline">Pending</Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-xs grid grid-cols-4 gap-2 font-medium text-muted-foreground pb-1 border-b border-border">
          <span>Item</span><span>Qty</span><span>Rate</span><span className="text-right">Am</span>
        </div>
        {items.map((item, i) => (
          <div key={i} className="text-xs grid grid-cols-4 gap-2">
            <span>{item.name}</span><span>{item.qty}</span><span>{item.rate}</span><span className="text-right">{item.amount}</span>
          </div>
        ))}
        <Separator />
        <div className="space-y-1 text-sm">
          <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>$2,437</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>$0</span></div>
          <div className="flex justify-between font-bold"><span>Total Due</span><span>$2,437</span></div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-1" />Download PDF</Button>
        <Button size="sm">Pay Now</Button>
      </CardFooter>
    </Card>
  );
}

export function ShippingAddressCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Address</CardTitle>
        <CardDescription>Where should we deliver?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Street address</Label>
          <Input placeholder="123 Main Street" />
        </div>
        <div className="space-y-2">
          <Label>Apt / Suite</Label>
          <Input placeholder="Apt 4B" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>City</Label>
            <Input placeholder="San Francisco" />
          </div>
          <div className="space-y-2">
            <Label>State</Label>
            <Select defaultValue="ca">
              <SelectTrigger><SelectValue placeholder="California" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ca">California</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>ZIP Code</Label>
            <Input placeholder="94102" />
          </div>
          <div className="space-y-2">
            <Label>Country</Label>
            <Select defaultValue="us">
              <SelectTrigger><SelectValue placeholder="United States" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="mx">Mexico</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="default-address" defaultChecked />
          <Label htmlFor="default-address" className="text-sm font-normal">Save as default address</Label>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="outline" className="flex-1">Cancel</Button>
        <Button className="flex-1">Save Address</Button>
      </CardFooter>
    </Card>
  );
}

export function InviteTeamCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Team</CardTitle>
        <CardDescription>Add members to your workspace</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input defaultValue="alex@example.com" className="flex-1" />
          <Select defaultValue="editor">
            <SelectTrigger className="w-28"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Input defaultValue="sam@example.com" className="flex-1" />
          <Select defaultValue="viewer">
            <SelectTrigger className="w-28"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" className="w-full gap-2"><Plus className="h-4 w-4" />Add another</Button>
        <Separator />
        <div className="space-y-2">
          <p className="text-sm font-medium">Or share invite link</p>
          <div className="flex gap-2">
            <Input defaultValue="https://app.co/invite/x8f2k" readOnly className="flex-1 text-xs" />
            <Button variant="outline" size="icon"><Copy className="h-4 w-4" /></Button>
          </div>
        </div>
        <Button className="w-full">Send Invites</Button>
      </CardContent>
    </Card>
  );
}

export function ReportBugCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Report Bug</CardTitle>
        <CardDescription>Help us fix issues faster.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Title</Label>
          <Input placeholder="Brief description of the issue" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>Severity</Label>
            <Select defaultValue="medium">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Component</Label>
            <Select defaultValue="dashboard">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="dashboard">Dashboard</SelectItem>
                <SelectItem value="forms">Forms</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Steps to reproduce</Label>
          <Textarea placeholder="1. Go to 2. Click on 3. Observe..." rows={3} />
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="outline">Attach File</Button>
        <Button>Submit Bug</Button>
      </CardFooter>
    </Card>
  );
}

export function ContributorsCard() {
  const initials = ["ST", "AL", "N", "RE", "TS", "PL", "BA", "CU", "GR", "SA", "AN", "MA", "SK", "TA", "AV", "SO"];
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Contributors</CardTitle>
          <Badge>312</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1">
          {initials.map((ini, i) => (
            <Avatar key={i} className="h-8 w-8">
              <AvatarFallback className="text-[10px] bg-muted">{ini}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <button className="text-sm text-primary underline underline-offset-2">+ 810 contributors</button>
      </CardContent>
    </Card>
  );
}

export function VercelAgentCard() {
  const features = [
    { bold: "Code reviews", rest: " with full codebase context to catch ", highlight: "hard-to-find", end: " bugs." },
    { bold: "Code suggestions", rest: " validated in sandboxes before you merge.", highlight: "", end: "" },
    { bold: "Root-cause analysis", rest: " for production issues with deployment context.", highlight: "", end: "" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ship faster & safer with Vercel Agent</CardTitle>
        <CardDescription>Your use is subject to Vercel's Public Beta Agreement and AI Product Terms.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
              <Check className="h-3 w-3 text-primary-foreground" />
            </div>
            <p className="text-sm">
              <strong>{f.bold}</strong>{f.rest}
              {f.highlight && <strong>{f.highlight}</strong>}
              {f.end}
            </p>
          </div>
        ))}
        <Badge variant="secondary" className="mt-1">Requires Observability Plus</Badge>
        <p className="text-xs text-muted-foreground">Pro teams get $100 in Vercel Agent trial credit for 2 weeks after activation.</p>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="outline" className="flex-1">Cancel</Button>
        <Button className="flex-1">Enable with $100 credits</Button>
      </CardFooter>
    </Card>
  );
}

export function ContributionsActivityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contributions & Activity</CardTitle>
        <CardDescription>Manage your contributions and activity visibility.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <Checkbox id="private" />
          <div>
            <Label htmlFor="private" className="font-medium text-sm">Make profile private and hide activity</Label>
            <p className="text-xs text-muted-foreground mt-1">
              Enabling this will hide your contributions and activity from your GitHub profile and from social features like followers, stars, feeds, leaderboards and releases.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}

export function QRCodeCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4 pt-6">
        <div className="h-40 w-40 rounded-xl bg-white flex items-center justify-center">
          <QrCode className="h-32 w-32 text-black" />
        </div>
        <div className="text-center space-y-1">
          <p className="text-sm font-medium">Scan to connect your mobile device</p>
          <p className="text-xs text-muted-foreground">Open the Ledger mobile app and scan this code to link your device.</p>
        </div>
        <Button variant="outline" className="w-full">Got it</Button>
      </CardContent>
    </Card>
  );
}

export function DividendIncomeCard() {
  const holdings = [
    { name: "Vanguard VIG", shares: "450 Shares", val: "$1,842.10", bars: 4 },
    { name: "S&P 500 VOO", shares: "112 Shares", val: "$928.40", bars: 3 },
    { name: "Apple AAPL", shares: "85 Shares", val: "$340.00", bars: 2 },
    { name: "Realty Income", shares: "320 Shares", val: "$1,139.50", bars: 4 },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Q2 Dividend Income</CardTitle>
          <CardDescription>Quarterly dividend payouts across your portfolio holdings.</CardDescription>
        </div>
        <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {holdings.map((h, i) => (
          <div key={i} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{h.name}</p>
              <p className="text-xs text-muted-foreground">{h.shares}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-end gap-0.5 h-5">
                {Array.from({ length: h.bars }).map((_, j) => (
                  <div key={j} className="w-1.5 rounded-sm bg-primary" style={{ height: `${40 + j * 20}%` }} />
                ))}
              </div>
              <span className="text-sm font-medium">{h.val}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function DollarCostAveragingCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dollar-Cost Averaging</CardTitle>
        <CardDescription>A strategy for building wealth over time.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        <p>
          <span className="text-primary underline">Over time</span>, this smooths out the average cost of your investments. When prices drop, your fixed amount buys more shares. When prices rise, you buy fewer. The result is a lower average cost per share compared to lump-sum investing during volatile periods.
        </p>
      </CardContent>
    </Card>
  );
}

export function SyncingAccountsCard() {
  return (
    <Card className="text-center">
      <CardContent className="flex flex-col items-center gap-4 pt-8 pb-6">
        <div className="h-10 w-10 rounded-full border-2 border-muted-foreground/30 border-t-primary animate-spin" />
        <div>
          <p className="text-sm font-medium">Syncing your accounts</p>
          <p className="text-xs text-muted-foreground">We're pulling in your latest transactions. This usually takes a few seconds.</p>
        </div>
        <Button variant="outline" size="sm">Cancel</Button>
      </CardContent>
    </Card>
  );
}

export function SavingsGoalDonutCard() {
  const pieData = [
    { value: 80, color: "hsl(var(--primary))" },
    { value: 20, color: "hsl(var(--muted))" },
  ];
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex justify-center">
          <div className="relative">
            <PieChart width={160} height={160}>
              <Pie data={pieData} cx={75} cy={75} innerRadius={55} outerRadius={75} dataKey="value" startAngle={90} endAngle={-270} strokeWidth={0}>
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold">$24,000</p>
              <p className="text-xs text-muted-foreground">80% of $30,000</p>
            </div>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-muted-foreground">Projected Finish</span><span className="font-medium">October 2024</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Monthly Average</span><span className="font-medium">$1,250</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Top Contributor</span><span className="font-bold">Auto-Transfer</span></div>
        </div>
      </CardContent>
    </Card>
  );
}

export function KitchenIslandCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Kitchen Island</CardTitle>
          <CardDescription>Hue Color Ambient</CardDescription>
        </div>
        <Switch defaultChecked />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {["Cooking", "Dining", "Nightlight", "Focus"].map((m) => (
            <Button key={m} variant="outline" size="sm" className="rounded-full">{m}</Button>
          ))}
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Sun className="h-4 w-4 text-muted-foreground shrink-0" />
            <div className="flex-1"><Slider defaultValue={[70]} max={100} step={1} /></div>
            <span className="text-xs text-muted-foreground w-16">Brightness</span>
          </div>
          <div className="flex items-center gap-3">
            <Thermometer className="h-4 w-4 text-muted-foreground shrink-0" />
            <div className="flex-1"><Slider defaultValue={[55]} max={100} step={1} /></div>
            <span className="text-xs text-muted-foreground w-16">Color Temp</span>
          </div>
          <div className="flex items-center gap-3">
            <Volume2 className="h-4 w-4 text-muted-foreground shrink-0" />
            <div className="flex-1"><Slider defaultValue={[40]} max={100} step={1} /></div>
            <span className="text-xs text-muted-foreground w-16">Volume</span>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw className="h-4 w-4 text-muted-foreground shrink-0" />
            <div className="flex-1"><Slider defaultValue={[20]} max={100} step={1} /></div>
            <span className="text-xs text-muted-foreground w-16">Fade</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function HoldingsListCard() {
  const holdings = [
    { ticker: "VOO", name: "Vanguard S&P 500 ETF", shares: "112 SHARES · JAN 2021", type: "ETF", val: "$48,230.40" },
    { ticker: "VIG", name: "Vanguard Dividend Appreciation", shares: "450 SHARES · MAR 2022", type: "ETF", val: "$26,033.79" },
    { ticker: "AAPL", name: "Apple Inc.", shares: "85 SHARES · NOV 2020", type: "Stock", val: "$18,488.90" },
    { ticker: "O", name: "Realty Income Corp", shares: "320 SHARES · JUN 2023", type: "REIT", val: "$15,136.59" },
  ];
  return (
    <Card>
      <CardContent className="space-y-1 pt-4">
        <div className="flex gap-2 mb-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search holdings or tickers..." className="pl-9" />
          </div>
          <Button variant="outline">Stocks</Button>
          <Button variant="outline">ETFs</Button>
          <Button variant="outline">REITs</Button>
        </div>
        {holdings.map((h, i) => (
          <div key={i} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-xs font-bold shrink-0">{h.ticker}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{h.name}</p>
              <p className="text-xs text-muted-foreground">{h.shares}</p>
            </div>
            <Badge variant="outline" className="shrink-0">{h.type}</Badge>
            <div className="text-right shrink-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Value</p>
              <p className="text-sm font-bold">{h.val}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function NotificationsPreferencesCard() {
  const prefs = [
    { id: "select-all", label: "Select all", checked: false },
    { id: "transactions", label: "Transaction alerts", desc: "Deposits, withdrawals, and transfers.", checked: true },
    { id: "security", label: "Security alerts", desc: "Login attempts and account changes.", checked: true },
    { id: "goals", label: "Goal milestones", desc: "Updates at 25%, 50%, 75%, and 100%.", checked: false },
    { id: "market", label: "Market updates", desc: "Daily portfolio summary and price alerts.", checked: false },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose what you want to be notified about.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {prefs.map((p, i) => (
          <div key={i} className="flex items-start gap-3">
            <Checkbox id={p.id} defaultChecked={p.checked} className="mt-0.5" />
            <div>
              <Label htmlFor={p.id} className="text-sm font-medium">{p.label}</Label>
              {p.desc && <p className="text-xs text-muted-foreground">{p.desc}</p>}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Preferences</Button>
      </CardFooter>
    </Card>
  );
}

export function LivingRoomCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Living Room</CardTitle>
        <CardDescription>Roller Shades</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg overflow-hidden border border-border">
          <div className="h-16 bg-muted/50" />
          <div className="h-16 bg-muted" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>OPEN</span><span>CLOSE</span>
          </div>
          <Slider defaultValue={[45]} max={100} step={1} />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">Open</Button>
          <Button variant="outline" className="flex-1">Half</Button>
          <Button variant="outline" className="flex-1">Closed</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function UploadArtworkCard() {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex h-40 items-center justify-center rounded-lg bg-muted border border-dashed border-border">
          <ImageIcon className="h-10 w-10 text-muted-foreground/50" />
        </div>
        <Button variant="outline" className="w-full">Upload Artwork</Button>
        <p className="text-center text-xs text-muted-foreground">Minimum 3000 × 3000px<br />JPEG or PNG only</p>
      </CardContent>
    </Card>
  );
}

export function UpcomingPaymentsCard() {
  const payments = [
    { name: "Netflix Subscription", date: "Apr 15, 2024", amount: "$19.99" },
    { name: "Rent Payment", date: "Apr 1, 2024", amount: "$2,400.00" },
    { name: "Auto Insurance", date: "Apr 22, 2024", amount: "$186.00" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Payments</CardTitle>
        <CardDescription>Select a date to view scheduled payments.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {payments.map((p, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
            <div>
              <p className="text-sm font-medium">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.date}</p>
            </div>
            <span className="text-sm font-medium">{p.amount}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function SocialLinksCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Spotify Artist URL</Label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input defaultValue="spotify.com/artist/3j…2k" className="pl-9" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Instagram Handle</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">@</span>
            <Input defaultValue="juliandurya_music" className="pl-8" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Website</Label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input defaultValue="https://yoursite.com" className="pl-9" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="outline" className="flex-1">Discard</Button>
        <Button className="flex-1">Save Changes</Button>
      </CardFooter>
    </Card>
  );
}

export function TransferFundsFullCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Transfer Funds</CardTitle>
          <CardDescription>Move money between your connected accounts</CardDescription>
        </div>
        <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Amount to Transfer</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input defaultValue="1,200.00" className="pl-7" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>From Account</Label>
          <Select defaultValue="checking">
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="checking">Main Checking (-8402) — $12,450.00</SelectItem>
              <SelectItem value="savings">High Yield Savings</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>To Account</Label>
          <Select defaultValue="savings">
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="savings">High Yield Savings (-1192) — $42,100.00</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator />
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-muted-foreground">Estimated arrival</span><span className="font-medium">Today, Apr 14</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Transaction fee</span><span className="font-medium">$0.00</span></div>
          <div className="flex justify-between font-bold"><span>Total amount</span><span>$1,200.00</span></div>
        </div>
        <Button className="w-full">Confirm Transfer</Button>
      </CardContent>
    </Card>
  );
}

export function NavigationMenuCard() {
  const col1 = [{ header: "Overview", items: ["Dashboard", "Transactions", "Investments"] }, { header: "Planning", items: ["Goals", "Budget", "Reports", "Documents"] }];
  const col2 = [{ header: "Account", items: ["Profile", "Billing", "Notifications", "Security"] }, { header: "Support", items: ["Help Center", "Contact Us", "Status"] }];
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-6 text-sm">
          {[col1, col2].map((cols, ci) => (
            <div key={ci} className="space-y-4">
              {cols.map((section, si) => (
                <div key={si}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{section.header}</p>
                  <div className="space-y-1">
                    {section.items.map((item, ii) => (
                      <div key={ii} className={`flex items-center gap-2 rounded-md px-2 py-1.5 cursor-pointer hover:bg-muted ${item === "Billing" || item === "Dashboard" ? "bg-muted" : ""}`}>
                        {item === "Dashboard" && <LayoutDashboard className="h-4 w-4 text-primary" />}
                        {item === "Billing" && <CreditCard className="h-4 w-4 text-primary" />}
                        <span className={item === "Billing" || item === "Dashboard" ? "font-medium" : ""}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function BreadcrumbCard() {
  const quickActions = [
    { icon: ArrowLeftRight, title: "Change transfer limit", desc: "Adjust how much you can send from your balance." },
    { icon: RefreshCw, title: "Scheduled transfers", desc: "Set up a transfer to send at a later date." },
    { icon: ArrowDownRight, title: "Direct Debits", desc: "Set up and manage regular payments." },
    { icon: Repeat, title: "Recurring card payments", desc: "Manage your repeated card transactions." },
  ];
  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>Home</span><ChevronRight className="h-3 w-3" />
          <MoreHorizontal className="h-3 w-3" />
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-foreground">Payments</span>
        </div>
        <div className="space-y-3">
          {quickActions.map((a, i) => (
            <div key={i} className="flex items-start gap-3 cursor-pointer group">
              <a.icon className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function PreferencesCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Manage your account settings and notifications.</CardDescription>
        </div>
        <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <Label>Default Currency</Label>
          <Select defaultValue="usd">
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD — United States Dollar</SelectItem>
              <SelectItem value="eur">EUR — Euro</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Public Statistics</p>
            <p className="text-xs text-muted-foreground">Allow others to see your total stream count and listening activity</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Email Notifications</p>
            <p className="text-xs text-muted-foreground">Monthly royalty reports and distribution updates</p>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="outline" className="flex-1">Reset</Button>
        <Button className="flex-1">Save Preferences</Button>
      </CardFooter>
    </Card>
  );
}

export function ProfileCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription className="text-primary">Manage your profile information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Name</Label>
          <Input defaultValue="shadcn" />
          <p className="text-xs text-muted-foreground">Your name may appear around GitHub where you are mentioned. You can remove it at any time.</p>
        </div>
        <div className="space-y-2">
          <Label>Public Email</Label>
          <Select defaultValue="m">
            <SelectTrigger><SelectValue placeholder="m@shadcn.com" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="m">m@shadcn.com</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">You can manage verified email addresses in your <span className="underline text-foreground cursor-pointer">email settings</span>.</p>
        </div>
        <div className="space-y-2">
          <Label>Bio</Label>
          <Textarea placeholder="Tell us a little bit about yourself" rows={3} />
          <p className="text-xs text-muted-foreground">You can @mention other users and organizations to link to them.</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Profile</Button>
      </CardFooter>
    </Card>
  );
}

export function FAQCard() {
  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs defaultValue="general">
          <TabsList className="w-full">
            <TabsTrigger value="general" className="flex-1">General</TabsTrigger>
            <TabsTrigger value="billing" className="flex-1">Billing</TabsTrigger>
            <TabsTrigger value="goals" className="flex-1">Goals</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="mt-4">
            <Accordion type="single" collapsible className="space-y-0">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-sm text-left">How secure is my financial data with Ledger?</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground">
                  We use bank-level AES-256 encryption, SOC 2 Type II certified infrastructure, and never store your credentials. All connections use read-only access tokens. We are a SEC registered investment advisor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-sm text-left">How do I connect my bank or investment accounts?</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground">
                  Connect via Plaid or manual CSV import. We support 12,000+ financial institutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-sm text-left">Can I export my data for tax purposes?</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground">
                  Yes. Go to Settings → Export and download reports in CSV or PDF format.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
        <Button variant="outline" className="w-full mt-4">Contact Support</Button>
      </CardContent>
    </Card>
  );
}

export function SmartLockCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Front Door</CardTitle>
          <CardDescription>Smart Lock Pro</CardDescription>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Lock className="h-3 w-3" />
          <span>Locked</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="relative rounded-lg overflow-hidden h-36 bg-muted">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, hsl(var(--border)) 8px, hsl(var(--border)) 9px)"
          }} />
          <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-[10px]">Live</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export function NoTeamMembersCard() {
  return (
    <Card className="text-center">
      <CardContent className="flex flex-col items-center gap-4 pt-6">
        <div className="flex -space-x-2">
          {["ST", "AL", "YO"].map((ini, i) => (
            <Avatar key={i} className="h-10 w-10 border-2 border-card">
              <AvatarFallback className="text-xs bg-muted">{ini}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div>
          <p className="text-sm font-medium">No Team Members</p>
          <p className="text-xs text-muted-foreground">Invite your team to collaborate on this project.</p>
        </div>
        <Button size="sm">Invite Members</Button>
      </CardContent>
    </Card>
  );
}

export function ConnectBankCard() {
  return (
    <Card className="text-center">
      <CardContent className="flex flex-col items-center gap-4 pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <p className="text-sm font-medium">Connect Bank</p>
          <p className="text-xs text-muted-foreground">Link your payout method to receive monthly royalty distributions automatically.</p>
        </div>
        <Button>Set Up Payouts</Button>
        <Separator />
        <div className="text-xs text-muted-foreground space-y-1 text-left w-full">
          <p className="font-medium text-foreground">Total Ready to Claim</p>
          <div className="flex justify-between"><span>Total Ready to Claim</span><span className="font-medium">$0.00 USD</span></div>
          <p className="pt-2">Once your bank is connected, balances over $10.00 are automatically eligible for monthly distribution on the 15th of each month.</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function NewSavingsGoalCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Set a new milestone</CardTitle>
        <CardDescription>Define your financial target and we'll help you pace your savings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Goal Name</Label>
          <Input placeholder="e.g. New Car, Home Downpayment" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>Target Amount</Label>
            <Input defaultValue="$15,000" />
          </div>
          <div className="space-y-2">
            <Label>Target Date</Label>
            <Input defaultValue="Dec 2025" />
          </div>
        </div>
        <Button className="w-full">Create Goal</Button>
        <Button variant="outline" className="w-full">Cancel</Button>
      </CardContent>
    </Card>
  );
}

export function ObservabilityCard() {
  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="h-24 rounded-lg overflow-hidden bg-muted" />
        <CardTitle className="text-base">Observability Plus is replacing Monitoring</CardTitle>
        <CardDescription>Switch to the improved way to explore your data, with natural language. Monitoring will no longer be available on the Pro plan in November, 2025</CardDescription>
        <div className="flex gap-3">
          <Button className="gap-2 flex-1"><Plus className="h-4 w-4" />Create Query</Button>
          <Badge variant="outline" className="self-center">Warning</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export function SavingsTargetsFullCard() {
  const targets = [
    { name: "RETIREMENT", amount: "$420,000", pct: 65, saved: "$273,000" },
    { name: "REAL ESTATE", amount: "$85,000", pct: 32, saved: "$27,200" },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Savings Targets</CardTitle>
          <CardDescription>Active milestones for 2024</CardDescription>
        </div>
        <Button variant="outline" size="sm">New Goal</Button>
      </CardHeader>
      <CardContent className="space-y-5">
        {targets.map((t, i) => (
          <div key={i} className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground tracking-widest">{t.name}</p>
            <p className="text-4xl font-bold">{t.amount}</p>
            <Progress value={t.pct} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{t.pct}% achieved</span><span>{t.saved}</span>
            </div>
          </div>
        ))}
        <p className="text-xs text-muted-foreground">You have not met your targets for <span className="underline">this year</span>.</p>
      </CardContent>
    </Card>
  );
}

export function RecentTransactionsFullCard() {
  const transactions = [
    { icon: Coffee, name: "Blue Bottle Coffee", category: "Food & Drink", date: "Today, 10:24 AM", amount: "-$6.50" },
    { icon: ShoppingCart, name: "Whole Foods Market", category: "Groceries", date: "Yesterday", amount: "-$142.30" },
    { icon: ArrowDownRight, name: "Stripe Payout", category: "Income", date: "Oct 12", amount: "+$4,200.00", positive: true },
    { icon: Globe, name: "Uber Technologies", category: "Transport", date: "Oct 11", amount: "-$24.10" },
    { icon: Activity, name: "Netflix Subscription", category: "Entertainment", date: "Oct 10", amount: "-$19.99" },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest account activity.</CardDescription>
        </div>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        {transactions.map((t, i) => (
          <div key={i} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted shrink-0">
              <t.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.category}</p>
            </div>
            <div className="text-right shrink-0">
              <p className={`text-sm font-medium ${t.positive ? "text-primary" : ""}`}>{t.amount}</p>
              <p className="text-xs text-muted-foreground">{t.date}</p>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0">
              <MoreHorizontal className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
