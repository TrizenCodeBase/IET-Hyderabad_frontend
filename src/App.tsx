import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import PATN from "./pages/PATN";
import PATNRegistration from "./pages/PATNRegistration";
import ProtoPlanetLanding from "./pages/ProtoPlanetLanding";
import ProtoPlanet from "./pages/ProtoPlanet";
import NotFound from "./pages/NotFound";
import StartupSphere from "./pages/StartupSphere";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/patn" element={<PATN />} />
            <Route path="/patn/register" element={<PATNRegistration />} />
            <Route path="/protoplanet" element={<ProtoPlanetLanding />} />
            <Route path="/protoplanet/register" element={<ProtoPlanet />} />
            <Route path="/startupsphere" element={<StartupSphere />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
