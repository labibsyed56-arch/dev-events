import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import {Navbar} from "@/components/Navbar";
const SchibstedGrotesk = Schibsted_Grotesk({
  variable: "--front-schibsted-Grotesk",
  subsets: ["latin"],
});

const MartianMono = Martian_Mono({
  variable: "--front-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEVEvent",
  description: "the hub for every dev event you must't miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SchibstedGrotesk.variable} ${MartianMono.variable} min-h-screen antialiased`}
      >
      <Navbar />

      <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
       <LightRays
              raysOrigin="top-center-offset"
              raysColor="#5dfca"
              raysSpeed={1}
              lightSpread={0.5}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={1}
              saturation={1}
          />
</div>
    <main>
      {children}
    </main>

    </body>
    </html>
  );
}
