import logo from "./logo.svg";
import { Styleguide } from "./styles/Styleguide";
import { ContentProvider } from "./util/contentContext";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { Map } from "./components/Map/Map";

import "./App.css";
import { Artist } from "./components/Artist/Artist";
import { NewRelease } from "./components/NewRelease/NewRelease";
import { ContactForm } from "./components/ContactForm/ContactForm";

function App() {
  return (
    <ContentProvider>
      <div className="App">
        <Navbar />
        <HeroBanner />
        <Artist />
        <NewRelease />
        <Map />
        <ContactForm />
      </div>
    </ContentProvider>
  );
}

export default App;
