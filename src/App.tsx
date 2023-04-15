import { MovieProvider } from "./Context/movieContext";
import MainRoutes from "./Routes";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MainRoutes></MainRoutes>
      </div>
    </MovieProvider>
  );
}

export default App;
