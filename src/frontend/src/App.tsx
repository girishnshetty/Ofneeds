import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import WhatsAppWidget from "./components/WhatsAppWidget";
import AdminGuard from "./components/admin/AdminGuard";
import AdminInquiriesPage from "./pages/AdminInquiriesPage";
import CorporateGiftsPage from "./pages/CorporateGiftsPage";
import CustomizedJacketsPage from "./pages/CustomizedJacketsPage";
import CustomizedTshirtsPage from "./pages/CustomizedTshirtsPage";
import HomePage from "./pages/HomePage";
import JacketsPage from "./pages/JacketsPage";
import LanyardsPage from "./pages/LanyardsPage";
import TrophiesPage from "./pages/TrophiesPage";
import WelcomeGiftsPage from "./pages/WelcomeGiftsPage";
import WelcomeGoodiesPage from "./pages/WelcomeGoodiesPage";

function Layout() {
  return (
    <>
      <Outlet />
      <Toaster />
      <WhatsAppWidget />
    </>
  );
}

const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/inquiries",
  component: () => (
    <AdminGuard>
      <AdminInquiriesPage />
    </AdminGuard>
  ),
});

const corporateGiftsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/corporate-gifts",
  component: CorporateGiftsPage,
});

const welcomeGiftsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/welcome-gifts",
  component: WelcomeGiftsPage,
});

const trophiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trophies",
  component: TrophiesPage,
});

const lanyardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lanyards",
  component: LanyardsPage,
});

const customizedTshirtsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customized-tshirts",
  component: CustomizedTshirtsPage,
});

const jacketsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jackets",
  component: JacketsPage,
});

const customizedJacketsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customized-jackets",
  component: CustomizedJacketsPage,
});

const welcomeGoodiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/welcome-goodies",
  component: WelcomeGoodiesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  adminRoute,
  corporateGiftsRoute,
  welcomeGiftsRoute,
  trophiesRoute,
  lanyardsRoute,
  customizedTshirtsRoute,
  jacketsRoute,
  customizedJacketsRoute,
  welcomeGoodiesRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
