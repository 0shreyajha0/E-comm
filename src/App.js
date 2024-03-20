import "./App.css";
// import Corousal from './components/Corousal/Corousal';
// import Nav from './components/Nav';
import Navbar from "./components/Navbar";
import CardSlider from "./components/card/CardSlider";

function App() {
  const images = [
    "https://images.unsplash.com/photo-1682687220866-c856f566f1bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687982502-1529b3b33f85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  ];
  return (
    <div className="App1">
      <Navbar></Navbar>
      <div>
        <div className="heading">
          <h1>Featured Products</h1>
          <p>Explore and discover a variety of products</p>
        </div>
        <CardSlider images={images}></CardSlider>
      </div>
    </div>
  );
}

export default App;
