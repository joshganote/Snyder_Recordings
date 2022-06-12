import logo from "./logo.svg";
import { Styleguide } from "./styles/Styleguide";
import { ContentProvider } from "./util/contentContext";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";

import "./App.css";
import { Artist } from "./components/Artist/Artist";
import { NewRelease } from "./components/NewRelease/NewRelease";

function App() {
  return (
    <ContentProvider>
      <div className="App">
        <Navbar />
        <HeroBanner />
        <Artist />
        <NewRelease />
      </div>
    </ContentProvider>
  );
}

export default App;
