import { BrowserRouter, Route,  Routes } from "react-router-dom";
import PageTwo from "./pages/PageTwo";
import PagesOne from "./pages/PagesOne";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/pageone"  element={<PagesOne/>}/>
        <Route path="/pagetwo"  element={<PageTwo/>}/>
        
      </Routes>



      </BrowserRouter>
    
    </div>
  );
}

export default App;
