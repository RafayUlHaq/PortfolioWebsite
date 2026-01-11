import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="text-white"
        style={{
          backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/images/RAFAY-WEBSITE-02 .jpg')",

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
