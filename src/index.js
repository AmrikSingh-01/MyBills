import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider,useSpeechContext } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render( <
    SpeechProvider appId = "2cd10873-bfe2-4664-82b9-fabec713d8c1"
    language = "en-US" >
    <
    Provider >
    <
    App / >
    <
    /Provider> < /
    SpeechProvider > ,
    document.getElementById('root'),
);