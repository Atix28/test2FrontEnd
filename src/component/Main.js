import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Cars from './Cars';
import AddCars from './AddCars';

const Main = () =>( 
    <main>
        <Switch>
            <Route exact path = '/' component={Cars} />
            <Route exact path ='/addcars' component={AddCars}/>
        </Switch>
    </main>
)



export default Main;
