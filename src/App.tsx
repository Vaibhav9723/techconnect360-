import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/layout/AppLayout";

// Pages
import Home from "@/pages/home";
import POSPage from "@/pages/pos";
import StreetVendorPOSPage from "@/pages/pos-street-vendor";
import ServicesPage from "@/pages/services";
import CRMPage from "@/pages/crm";
import SocialMediaPage from "@/pages/social-media";
import PortfolioPage from "@/pages/portfolio";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pos" component={POSPage} />
        <Route path="/pos/street-vendor" component={StreetVendorPOSPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/crm" component={CRMPage} />
        <Route path="/social-media" component={SocialMediaPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
