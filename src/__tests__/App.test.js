import React from "react";
import App from "../App";
import TestRenderer from 'react-test-renderer'; 
import { Provider } from 'react-redux';
import  store from '../redux/reducers/store';

it('Test if App renders correctly', () => 
{ const TREE = TestRenderer.create( 
<Provider store={store}> 
<App /> 
</Provider>, ); expect(TREE).toMatchSnapshot(); }); 