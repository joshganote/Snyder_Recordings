import { ContentProvider } from "./util/contentContext";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { Artist } from "./components/Artist/Artist";
import { NewRelease } from "./components/NewRelease/NewRelease";
import { Map } from "./components/Map/Map";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Footer } from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <ContentProvider>
      <Navbar />
      <HeroBanner />
      <Artist />
      <NewRelease />
      <Map />
      <ContactForm />
      <Footer />
    </ContentProvider>
  );
}

export default App;
