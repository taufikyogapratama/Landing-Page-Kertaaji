import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Structure from "./pages/Structure";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Structure />
      <Events />
    </>
  );
};

export default App;
