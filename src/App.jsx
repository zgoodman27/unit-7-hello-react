import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="flex-container">
      <Header />
      <section>
        <div id="left-sidebar">Ad 1</div>
        <Content />
        <div id="right-sidebar">Ad 2</div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
