
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";


export const metadata = {
  title: "টিম উৎসব",
  description: "উৎসব নয়, উদযাপন",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
