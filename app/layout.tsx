import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { IngredientsProvider } from "./Contexts/IngredientsContext";

export const metadata: Metadata = {
  title: "Glucoz",
  description: "Diabetes-free pregnancy, made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <IngredientsProvider>
        <Navbar/>
        <main className="relative overflow-hidden"> {children} </main>
        <Footer/>
        </IngredientsProvider>
        </body>
    </html>
  );
}
