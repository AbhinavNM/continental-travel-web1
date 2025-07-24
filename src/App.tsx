
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DayTours from "./pages/DayTours";
import InternationalTours from "./pages/InternationalTours";
import Accommodation from "./pages/Accommodation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Destinations from "./pages/Destinations";
import Transportation from "./pages/Transportation";
import Blog from "./pages/Blog";
import NatureTours from "./pages/NatureTours";
import CultureTours from "./pages/CultureTours";
import AdventureTours from "./pages/AdventureTours";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/day-tours" element={<DayTours />} />
          <Route path="/international-tours" element={<InternationalTours />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tours/nature" element={<NatureTours />} />
          <Route path="/tours/culture" element={<CultureTours />} />
          <Route path="/tours/adventure" element={<AdventureTours />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
