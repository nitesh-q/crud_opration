
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import Show from './components/Show';
import Home from './components/Home';
import Navbar  from './Navbar';
function App() {

const Employees1=[    {
  id:"1",
  name:"Haris",
  age:"30"
},
{
  id:"2",
  name:"Parish",
  age:"80"
},
{
  id:"3",
  name:"Karish",
  age:"40"
},
{
  id:"4",
  name:"morrish",
  age:"75"
},
{
  id:"5",
  name:"sonu ",
  age:"30"
},
]



  return (
    <>
    <Navbar/>
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home Employees1={Employees1} />}/>
          <Route path="/create" element={<Add Employees1={Employees1}/>}/>
          <Route path="/edit" element={<Edit Employees1={Employees1}/>}/>
          <Route path="/show" element={<Show Employees1={Employees1}/>} />
        </Routes>
      </Router>
    </div>

    </>
  );
}

export default App;
