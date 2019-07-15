import React,{ Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from './pages/login/Login'
import Admin from "./pages/Admin/Admin"

export default class App extends Component{
    
    render (){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Admin" component={Admin}/>
                </Switch>
            </BrowserRouter>
        )
    }
}