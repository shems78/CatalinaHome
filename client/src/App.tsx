import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/use-language";
import Home from "@/pages/home";
import Quote from "@/pages/quote";
import NotFound from "@/pages/not-found";
import WebDevelopment from "@/pages/services/web-development";
import BusinessApps from "@/pages/services/business-apps";
import Maintenance from "@/pages/services/maintenance";
import Consulting from "@/pages/services/consulting";
import ERPSystem from "@/pages/projects/erp-system";
import ShowcaseWebsite from "@/pages/projects/showcase-website";
import ShemsPlayer from "@/pages/projects/shems-player";
import CapPlayer from "@/pages/projects/cap-player";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/fr" component={Home} />
      <Route path="/en" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/services/web-development" component={WebDevelopment} />
      <Route path="/services/business-apps" component={BusinessApps} />
      <Route path="/services/maintenance" component={Maintenance} />
      <Route path="/services/consulting" component={Consulting} />
      <Route path="/projects/erp-system" component={ERPSystem} />
      <Route path="/projects/showcase-website" component={ShowcaseWebsite} />
      <Route path="/projects/shems-player" component={ShemsPlayer} />
      <Route path="/projects/cap-player" component={CapPlayer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
