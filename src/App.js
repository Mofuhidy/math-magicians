import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App grid place-items-center grid-cols-2 w-screen h-screen">
      <Quotes />
      <Calculator />
    </div>
  );
}

export default App;
