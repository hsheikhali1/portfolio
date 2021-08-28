import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
