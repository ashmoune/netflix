import "./App.css";
// import du JSON
import MoviesList from "./assets/movies_rnexgr.json";
import Logo from "./assets/netflix.png";

// // import du composant 
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <header>
        <a href="https://www.netflix.com/fr/">
          <img className="logo" src={Logo} alt="logo" />
        </a>
      </header>
      {/* itération sur la liste de films */}
      {MoviesList.map((type) => {
        return (
          // Transmet les données d'une catégorie à un composant section
          <Section elem={type} key={type.category}></Section>
        );
        // console.log(elem);
      })}
    </>
  );
};

export default App;
