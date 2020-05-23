import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLogin from './Components/Admin/Login.admin';
import AdminHome from './Components/Admin/Home.admin';
import AdminMasivo from './Components/Admin/Masivo.admin';
import AdminCrudCuentas from './Components/Admin/Cuentas.admin';
import AdminCrudLugares from './Components/Admin/Lugares.admin';


import Depart from './Components/Departamento/Login.depa';
import DepartHome from './Components/Departamento/Home.depa';
import DepartLugares from './Components/Departamento/Lugares.depa';
import DepartPerfil from './Components/Departamento/Perfil.depa';
import DepartMuro from './Components/Departamento/Muro.depa';


import Alum from './Components/Alumno/Login.alumno';
import AlumMuros from './Components/Alumno/Muros.alumno';
import AlumPerfil from './Components/Alumno/Perfil.alumno';
import AlumLugares from './Components/Alumno/Lugares.alumno';


import NotFound from './Components/NotFound';

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/admin/login" component={AdminLogin} />
                    <Route path="/admin/home" component={AdminHome} />
                    <Route path="/admin/masivo" component={AdminMasivo} />
                    <Route path="/admin/crud/cuentas" component={AdminCrudCuentas} />  
                    <Route path="/admin/crud/lugares" component={AdminCrudLugares} />

                    <Route path="/departamento/login" component={Depart} />
                    <Route path="/departamento/home" component={DepartHome} />
                    <Route path="/departamento/perfil" component={DepartPerfil} />
                    <Route path="/departamento/muro" component={DepartMuro} />
                    <Route path="/departamento/lugares" component={DepartLugares} />
                    
                    <Route path="/login" component={Alum} />
                    <Route path="/perfil" component={AlumPerfil} />
                    <Route path="/muros" component={AlumMuros} />
                    <Route path="/Lugares" component={AlumLugares} />
                
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;