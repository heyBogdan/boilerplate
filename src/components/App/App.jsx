import React from "react";

import { Switch, Route } from "react-router-dom";
import Page from "../Page/Page";

const App = () => (
    <Switch>
        <Route path="/" component={Page} />
    </Switch>
);

export default App;
