import logo from "./logo.svg";
import { Styleguide } from "./styles/Styleguide";
import { ContentProvider } from "./util/contentContext";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <ContentProvider>
      <div>
        <Navbar />
      </div>
    </ContentProvider>
  );
}

export default App;
