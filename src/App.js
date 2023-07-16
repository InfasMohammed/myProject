import {  Router, Route, Routes } from 'react-router-dom';
import AllmeetupPage from './pages/Allmeetup';
import NewmeetupPage from './pages/Newmeetup';
import FavoritePage from './pages/Favorite';


function App() {
  return (

      <Router>
        <Routes>
          <Route exact path="/allmeetup" element={<AllmeetupPage/>} />
          
          <Route exact path="/newmeetup" element={<NewmeetupPage/>} />
          
          <Route exact path="/favorite" element={<FavoritePage/>} />

        </Routes>
      </Router>
    
  );
}

export default App;
