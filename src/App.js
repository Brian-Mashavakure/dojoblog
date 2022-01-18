import Navbar from './nav';
import Home from './Home';
import {Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';



function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route  exact path="/" >
              <Route index element = {<Home/>}/>
            </Route>
            <Route exact path="/create" >
              <Route index element = {<Create/>}/>
            </Route>
            <Route exact path="/blogs/:id" >
              <Route index element = {<BlogDetails/>}/>
            </Route>
            <Route  path="*" >
              <Route index element = {<NotFound/>}/>
            </Route>
          </Routes>       
        </div>
      </div>
    
  );
}

export default App;
