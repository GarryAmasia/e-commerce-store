import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* main */}
      <main className="main container">{children}</main>

      {/* footer */}
      <Footer />
    </div>
  );
};
