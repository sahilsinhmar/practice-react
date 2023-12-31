import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/lib/useContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Practice",
  description: "nothing bro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
