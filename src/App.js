import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Blogbar from './pages/Blogbar/Blogbar';
import Write from './pages/write/Write'
import SinglePost from './pages/SinglePost/SinglePost'
import Posts from './pages/Posts/Posts'
import Settings from './pages/settings/Settings';
import Joinus from './pages/JoinUs/Joinus';




function App() {

  const user = true;

  return (
   
   <Router>
   <Blogbar />
      <Routes>

      <Route  exact path="/posts" element={<Posts />} >
          <Route path="/posts/singlePost" element={<SinglePost />} />
          <Route path="/posts/write" element={<Write />} />
          <Route path="/posts/settings" element={<Settings />} />
          <Route path="/posts/inputs" element={user ? <Posts/> : <Joinus />} />

      </Route>

      <Route path="/write" element={<Write />} />
      <Route path="/singlePost" element={<SinglePost />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/inputs" element={<Joinus />} />




      </Routes>


  
</Router>
  );
}

export default App;
