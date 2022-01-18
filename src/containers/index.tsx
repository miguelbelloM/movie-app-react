import MoviesContainer from "./movies/MoviesContainer";
import HeaderComponent from "./header/HeaderComponent";
import FooterContainer from "./footer/FooterContainer";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MoviesContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
