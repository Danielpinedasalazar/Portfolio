import PortfolioContent from "@/components/portfolio";
import { ThemeProvider } from "@/components/theme-provider";

export default function Page() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
