import "./styles/main.scss";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CardSlider as NewCardSlider } from "./components/CardSlider";
import { IMAGES } from "./TEMP_DATA";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Hero />
        <NewCardSlider images={IMAGES} />
      </div>
    </div>
  );
}

export default App;
