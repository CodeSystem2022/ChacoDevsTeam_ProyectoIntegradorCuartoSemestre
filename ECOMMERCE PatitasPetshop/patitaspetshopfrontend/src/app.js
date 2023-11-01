
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
import Detail from './Views/Detail/Detail'
import Carrito from './components/Carrito/Carrito';
import React from 'react';
import CarritoProvider from './CarritoContext/CarritoContext';
import Identificacion from './Views/Identificacion/Identificacion';
import Entrega from './Views/Entrega/Entrega';
import Pagos from './Views/Pagos/Pagos';
import Login from './Views/Login/Login';




function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <CarritoProvider >
            <Route  path={'*'} component={NavBar}></Route>
            <Switch>
              <Route exact path={'/'} component={Home}></Route>
              <Route path={'/form'} component={Form}></Route>
              <Route path={'/gatos'} component={Gatos}></Route>
              <Route path={'/perros'} component={Perros}></Route>
              <Route path={'/sucursales'} component={Sucursales}></Route>
              <Route path={'/accesorios'} component={Accesorios}></Route>
              <Route path='/detail/:id' component={Detail} />
              <Route path='/carrito' component={Carrito} />
              <Route path='/identificacion' component={Identificacion} />
              <Route path='/entrega' component={Entrega} />
              <Route path='/pagos' component={Pagos} />
              <Route path='/login' component={Login} />
            </Switch>
          </CarritoProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
