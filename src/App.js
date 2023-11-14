import { Button } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Upload from './components/Upload';
function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/videos" element={<Videos/>}></Route>
        <Route path="/upload" element={<Upload/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
