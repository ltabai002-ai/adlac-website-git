import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyContactBar from "./StickyContactBar";
import MobileBottomCTA from "./MobileBottomCTA";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col font-body">
    <Navbar />
    <main className="flex-1 pb-16 md:pb-0">{children}</main>
    <Footer />
    <StickyContactBar />
    <MobileBottomCTA />
  </div>
);

export default Layout;
