import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import CarForm from "./components/carForm";

function App() {
  return (
    <div className="container is-fluid">
      <CarForm></CarForm>
      <CarSearch></CarSearch>
      <CarList></CarList>
      <CarValue></CarValue>
    </div>
  );
}

export default App;
