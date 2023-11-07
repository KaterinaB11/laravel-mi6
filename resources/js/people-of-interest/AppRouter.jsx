import React from "react";
import People from "../people/People";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../app";

export default function AppRouter(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/people" component={People} /> 
            </Switch>
        </BrowserRouter>
    );
};
