import logo from "./logo.svg";
import { Styleguide } from "./styles/Styleguide";
import { ContentProvider } from "./util/contentContext";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";

import "./App.css";

function App() {
  return (
    <ContentProvider>
      <Navbar />
      <HeroBanner />
    </ContentProvider>
  );
}

export default App;
