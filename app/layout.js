
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { assets } from "@/assets/assets";

export const metadata = {
  title: "টিম উৎসব",
  description: "উৎসব নয়, উদযাপন",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-[url("../assets/bg-1.png")] bg-cover bg-no-repeat relative bg-center bg-fixed bg-black/40 bg-blend-multiply' style={{backgroundColor: "rgba(255,254,230,0.7)"}}>
      <body
        className={` antialiased `}
      >
        <LayoutWrapper>
                  {children}
        </LayoutWrapper>

      </body>
    </html>
  );
}
