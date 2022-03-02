import Easy from './Component/EasyLearn/Easy';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import SecondPage from './Component/Second/SecondPage';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Entery from './Component/Entery/Entery';
import Prolog from './Component/Prolog/Prolog';
import Todo from './Component/Todo/Todo';
import Start from './Component/Start/Start';
import HomePage from './Component/HomePage/HomePage';
import Prepare from './Component/Prepare/Prepare';
import Trolly from './Component/Torlly/Trolly';
import Page from './Component/Page8/Page';
import Plan from './Component/Plan/Plan';
import Article from './Component/Article/Article';
import Sign from './Component/Sign/Sign';
function App() {
  return (
    <BrowserRouter>
    <div  className="App  text-center">
      <Navbar/>
     <Routes>
       <Route  path="/easy" element={<Easy/>}/>
       <Route path="/category/*" element={<SecondPage/>}/>
       <Route path="/entery/*" element={<Entery/>}/>
       <Route path="/prolog" element={<Prolog/>}/>
       <Route path="/todo" element={<Todo/>}/>
       <Route path="/start" element={<Start/>}/>
       <Route path="/homePage" element={<HomePage/>}/>
       <Route path="/prepare" element={<Prepare/>}/>
        <Route path="/trolly" element={<Trolly/>}/>
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/article" element={<Article/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/" element={<Page/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
