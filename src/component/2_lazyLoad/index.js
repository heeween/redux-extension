import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import MyNavLink from './components/MyNavLink'

import Loading from './components/Loading'
const About = lazy(
    (params) => {

        const about = import('./pages/About')
        console.log('LazyparamsAbout', params, about);
        return about
    }
)
const Home = lazy(
    (params) => {
        const home = import('./pages/Home')
        console.log('LazyparamsHome', params, home);
        return home
    }
)
const Header = lazy(() => import('./components/Header'))


export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Suspense fallback={Loading}>
                                    {/* <Switch> */}
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    <Redirect to="/about" />
                                    {/* </Switch> */}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

