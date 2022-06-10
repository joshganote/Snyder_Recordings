import logo from "./logo.svg";
import { Styleguide } from "./styles/Styleguide";
import { ContentProvider } from "./util/contentContext";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";

import "./App.css";
import { Artist } from "./components/Artist/Artist";

function App() {
  return (
    <ContentProvider>
      <Navbar />
      <HeroBanner />
      <Artist />
    </ContentProvider>
  );
}

export default App;
