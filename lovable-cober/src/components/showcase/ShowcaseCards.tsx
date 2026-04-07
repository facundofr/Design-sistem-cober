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
import {
  AlertCircle, ArrowRight, Bell, CreditCard, Download, Lock, Mail, MoreHorizontal,
  Settings, Star, TrendingUp, Users, Zap, ChevronRight, Globe, Shield, Calendar,
  BarChart3, Wallet, ArrowUpRight, ArrowDownRight, Coffee, ShoppingCart, Wifi,
  BatteryCharging, Sun, Moon, Check, X, Plus, Minus, Search, Filter, RefreshCw
} from "lucide-react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Area, AreaChart } from "recharts";

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
    { name: "Direct Deposit", category: "Income", amount: "+$4,200.00", positive: true, icon: ArrowDownRight },
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
              <p className={`text-sm font-medium ${t.positive ? 'text-primary' : ''}`}>{t.amount}</p>
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
