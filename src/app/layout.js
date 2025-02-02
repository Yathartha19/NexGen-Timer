import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nexgen Timer",
  description: "Nexgen Timer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full top-0 fixed z-50 px-8 flex flex-row items-center justify-between">
          <img src='pes.png' alt="PES Logo" className="h-16" />
          <img src='nexus.png' alt="Nexus Logo" className="h-32 -pt-32" />
        </div>
        {children}
        <div className="w-full bottom-6 fixed z-50 flex flex-row items-center justify-center">
          <h1 className="text-3xl font-bold text-[#26498e]">Department of CSE</h1>
        </div>
      </body>
    </html>
  );
}
