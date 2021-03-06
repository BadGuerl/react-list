import EpisodesList from "./components/header/episodes-list/EpisodesList";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        
        <main className="container mt-5">
          <EpisodesList/>
        </main>
    </div>
  );
}

export default App;
