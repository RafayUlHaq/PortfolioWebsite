import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,10,10,0.65), rgba(10,10,10,0.65)), url('/images/RAFAY-WEBSITE-02 .jpg')",
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
