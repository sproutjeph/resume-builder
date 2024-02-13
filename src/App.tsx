import CvHeaderForm from "./components/base-components/cv-header-form";
import Navbar from "./components/base-components/navbar";
import { ThemeProvider } from "./components/base-components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <main className="mt-20 mx-8">
        <CvHeaderForm />
      </main>
    </ThemeProvider>
  );
}

export default App;
