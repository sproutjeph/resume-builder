import CvFormAboutSection from "./components/base-components/cv-form-about-section";
import CvFormHeadSection from "./components/base-components/cv-form-head-section";
import Navbar from "./components/base-components/navbar";
import { ThemeProvider } from "./components/base-components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <main className="mt-20 mx-8 space-y-4">
        <CvFormHeadSection />
        <CvFormAboutSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
