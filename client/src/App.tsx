import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import islamicPattern from "@assets/image_1765500336350.png";
import Home from "@/pages/home";
import IsraMiraj from "@/pages/isra-miraj";
import Hijrah from "@/pages/hijrah";
import BattleOfBadr from "@/pages/battle-of-badr";
import BattleOfUhud from "@/pages/battle-of-uhud";
import BattleOfTrench from "@/pages/battle-of-trench";
import BattleOfKhaybar from "@/pages/battle-of-khaybar";
import BattleOfMutah from "@/pages/battle-of-mutah";
import ConquestOfMakkah from "@/pages/conquest-of-makkah";
import BattleOfHunayn from "@/pages/battle-of-hunayn";
import ExpeditionOfTabuk from "@/pages/expedition-of-tabuk";
import FarewellPilgrimage from "@/pages/farewell-pilgrimage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/events/isra-miraj" component={IsraMiraj} />
      <Route path="/events/hijrah" component={Hijrah} />
      <Route path="/events/battle-of-badr" component={BattleOfBadr} />
      <Route path="/events/battle-of-uhud" component={BattleOfUhud} />
      <Route path="/events/battle-of-trench" component={BattleOfTrench} />
      <Route path="/events/battle-of-khaybar" component={BattleOfKhaybar} />
      <Route path="/events/battle-of-mutah" component={BattleOfMutah} />
      <Route path="/events/conquest-of-makkah" component={ConquestOfMakkah} />
      <Route path="/events/battle-of-hunayn" component={BattleOfHunayn} />
      <Route path="/events/expedition-of-tabuk" component={ExpeditionOfTabuk} />
      <Route path="/events/farewell-pilgrimage" component={FarewellPilgrimage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen">
          {/* Islamic geometric pattern background - dark mode */}
          <div 
            className="fixed inset-0 opacity-100 dark:opacity-100 pointer-events-none z-0"
            style={{
              backgroundImage: `url(${islamicPattern})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          {/* Islamic geometric pattern background - light mode (inverted) */}
          <div 
            className="fixed inset-0 opacity-60 dark:opacity-0 pointer-events-none z-0"
            style={{
              backgroundImage: `url(${islamicPattern})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'invert(1)'
            }}
          />
          <div className="relative z-10">
            <Toaster />
            <Router />
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
