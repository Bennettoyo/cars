import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import CarForm from "./components/carForm";

function App() {
  return (
    <div>
      <CarForm></CarForm>
      <CarList></CarList>
      <CarSearch></CarSearch>
      <CarValue></CarValue>
    </div>
  );
}

export default App;
