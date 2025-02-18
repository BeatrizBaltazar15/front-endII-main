import "./globals.css";
import Header from '@/components/Header'

export const metadata = {
  title: "Beatriz",
  description: "Portifólio ",
  charset: "UTF-8",
  author: "Beatriz Baltazar",
  keywords: "Site, código, vida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
