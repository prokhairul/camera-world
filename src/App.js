
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AllReviews from './components/AllReviews/AllReviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About'


function App() {
  return (

    <div className="App">

      <div className='head-design'> <Header></Header> </div>
      <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/allreviews' element={<AllReviews></AllReviews>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<Home></Home>}> </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
