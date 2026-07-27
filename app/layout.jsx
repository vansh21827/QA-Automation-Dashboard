import "./globals.css";
import { DashboardProvider } from "../context/DashboardContext";

export const metadata = {
  title: "QA Automation Dashboard",
  description: "Sprint 11 - Unit & Component Testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DashboardProvider>
          {children}
        </DashboardProvider>
      </body>
    </html>
  );
}