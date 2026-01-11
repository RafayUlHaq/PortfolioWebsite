import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Rafay Ul Haq - Software Engineer & UI/UX Designer",
  description: "Portfolio of Rafay Ul Haq - Software Engineer and UI/UX Designer based in Islamabad, Pakistan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white min-h-screen flex flex-col bg-[#0a0a0a]">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
