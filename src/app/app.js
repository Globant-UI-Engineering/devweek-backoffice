import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './Pages/main'


class App extends Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Main} exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App

