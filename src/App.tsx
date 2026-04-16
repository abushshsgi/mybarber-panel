import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/contexts/AppContext";
import { AppLayout } from "@/components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Clients from "./pages/Clients";
import Chat from "./pages/Chat";
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import SalonOverview from "./pages/SalonOverview";
import SalonGallery from "./pages/SalonGallery";
import SalonReviews from "./pages/SalonReviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/salon-view" element={<SalonOverview />} />
              <Route path="/salon-view/gallery" element={<SalonGallery />} />
              <Route path="/salon-view/reviews" element={<SalonReviews />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
