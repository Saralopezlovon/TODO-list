import React, { Component } from "react";
import List from '../List/List'
import Weather from '../Weather/Weather'
import {Route, Routes} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<List/>} exact />
                <Route path="/weather" element={<Weather/>} />      
            </Routes>
        </main>
    )
}
}

export default Main;
