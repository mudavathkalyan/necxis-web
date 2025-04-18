import "./globals.css";
import { Inter } from "next/font/google";
import MuiThemeProvider from "../mui-theme"; // adjust path if needed

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Auth App",
  description: "A Google Sign-In App with Next.js and Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
