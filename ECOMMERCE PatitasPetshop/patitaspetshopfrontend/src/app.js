
import './styles/App.css';
import './styles/styles.css'
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Views/Home/Home';
import Form from './Views/Formulario/Form';
import NavBar from './components/NavBar/NavBar';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Gatos from './Views/Gatos/Gatos';
import Perros from './Views/Perros/Perros';
import Sucursales from './Views/Sucursales';
import Accesorios from './Views/Accesorios/Accesorios';


function App() {
 
  return (
    <div className="App">
        <BrowserRouter>
        <Route  path={'*'} component={NavBar}></Route>
          <Switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route path={'/form'} component={Form}></Route>
            <Route path={'/gatos'} component={Gatos}></Route>
            <Route path={'/perros'} component={Perros}></Route>
            <Route path={'/sucursales'} component={Sucursales}></Route>
            <Route path={'/accesorios'} component={Accesorios}></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
