import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Generate from './components/Generate';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ga',
})

function App({history}) {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        {/* <Route exact path="/itinerary" component={Itinerary} /> */}
                        <Route path="/" component={Generate} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}


export default App;