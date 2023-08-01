import React from 'react';
import MyClassComponent from './MyClassComponent';
import Product from './Product';
import State from './State';
import RenderConditional from './RenderConditional';
import RenderElements from './RenderElements';
import { EventsES6, EventsES7, MasSobreEventos, Welcome } from './Events';
import Counter from './Counter';
import ComunicacionComponente from './ComunicacionComponentes';
import CicloVida from './CicloVida';
import { LoginForm, ElementosControlados } from './formularios/Formularios';
import AjaxApis from './AjaxApis';

const App = () => (
  <div>
    <Product name="Cobra" price={1500} />
    <hr />
    <MyClassComponent />
    <hr />
    <Counter />
    <hr />
    <State />
    <hr />
    <RenderConditional />
    <hr />
    <RenderElements />
    <hr />
    <EventsES6 />
    <hr />
    <EventsES7 />
    <hr />
    <MasSobreEventos />
    <hr />
    <Welcome />
    <hr />
    <ComunicacionComponente />
    <hr />
    <CicloVida />
    <hr />
    <LoginForm onSubmit={values => console.log(values)} />
    <hr />
    <ElementosControlados />
    <hr />
    <AjaxApis />
  </div>
);

export default App;
