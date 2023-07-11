import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Calculator from './components/Calculator';
import Quote from './Pages/Quote';
import NotMatch from './Pages/NotMatch';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Calc" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
