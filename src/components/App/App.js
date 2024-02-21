import {Routes, Route} from 'react-router-dom';

import './App.scss';

import Layout from '../../pages/layout/Layout';
import Main from '../../pages/main/Main';

const App = () => {
    return (
        <Routes>
            <Route path = '/' element = {<Layout/>}>
                <Route index element= {<Main/>}></Route>
            </Route>
        </Routes>
    );
};

export default App;
