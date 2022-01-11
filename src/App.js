import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import SearchDelivery from "./page/SearchDelivery";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="searchDelivery" element={<SearchDelivery />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
