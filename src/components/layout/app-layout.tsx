import { ReactNode } from "react";
import Help from "../Help";
import { Navbar } from "../navbar";
import Footer from "../footer";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto max-w-lg flex-1 pb-4 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-2 space-y-4 sm:px-0">
        {children}
        <Help />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
