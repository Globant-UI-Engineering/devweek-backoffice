import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Styles
import '../Assets/scss/styles.scss';

// Components
import DashboardHeader from './Pages/Dashboard/dashboard-header';
import DashboardNav from './Pages/Dashboard/dashboard-nav';
import Statistics from './Pages/Dashboard/components/statistics';
import Speakers from './Pages/Dashboard/components/speakers';
import Event from './Pages/Dashboard/components/event';

class App extends Component{

    render(){
        return(
            <div className="wrapper">
                
                    <BrowserRouter>
                <DashboardHeader />
                        <DashboardNav />
                        
                            <Switch>
                                <Route path="/" component={Statistics} exact/>
                                <Route path="/speakers" component={Speakers} exact/>
                                <Route path="/events" component={Event}exact/>
                            </Switch>
                       
                    </BrowserRouter>
                   
            </div>
        )
    }
}

export default App



{/* <div className="wrapper">
                <DashboardHeader />
                <div className="wrapper__grid">
                    <section className="wrapper__grid--nav">
                    </section>
                    <BrowserRouter>
                        <DashboardNav />
                        <section className="wrapper__grid--content">
                            <Switch>
                                <Route path="/" component={Statistics} exact/>
                                <Route path="/speakers" component={Speakers} exact/>
                                <Route path="/events" component={Event}exact/>
                            </Switch>
                        </section>
                    </BrowserRouter>
                </div>    
            </div> */}

