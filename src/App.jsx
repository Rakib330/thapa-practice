import React from 'react';
import Todo from './Todo/Todo';
import Form from './Form/Multi_input';
import Inc from './Increment/Inc';
import TodoM from './TodoMaterials/Todo';
import Keep from './Keep/Keep';
import UseEff from './useEff/UseEff';
import RoUte from './RoUte/RoUte';
import Sfilter from './SFilter/Sfilter';
import P1app from './project1/P1app';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
    return(
        <>
            <BrowserRouter>
                <P1app/>
            </BrowserRouter>
            <Sfilter/>
            <BrowserRouter>
                <RoUte/>
            </BrowserRouter>
            
            <UseEff/>
            <Keep/>
            <TodoM/>
            <Inc/>
            <Todo/>
            <Form/>
        </>
    );
};
export default App;