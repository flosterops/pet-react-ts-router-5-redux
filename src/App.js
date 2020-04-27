import React, { useEffect } from 'react';
import { PageBuilder } from 'modules';
import { RequestTypes } from 'models/RequestTypes';
import { Config } from 'helpers/Config';
import { request } from 'helpers/request';
import './App.scss';

function App() {
    useEffect(() => {
        request(RequestTypes.get, Config('/firms'), null).then(res => {
            console.log(res.data);
        });
    }, []);
    return (
        <div className="App">
            <PageBuilder />
        </div>
    );
}

export default App;
