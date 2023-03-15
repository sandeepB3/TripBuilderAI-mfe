import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})

function App({history}) {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        {/* <Route exact path="/itinerary" component={Itinerary} /> */}
                        <Route path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}


export default App;