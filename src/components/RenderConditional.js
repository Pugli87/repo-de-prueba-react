import React, {Component} from "react";

function Login() {
  return(
  <div><h3>Login</h3></div>
  )
}
function Logout() {
  return(
  <div><h3>Logout</h3></div>
  )
}

export default class RenderConditional extends Component{
/*  constructor(props){
    super(props);
    this.state = {
      section: true, // esta variable renderiza los botones 
    }
  }*/

  /*Desde que Babel usa bajo el capó,
  podemos saltarnos la tediosa declaración del constructor
  y especificar el estado como una propiedad pública de la clase,
  el compilador hará el resto por nosotros. */

  state = {
    section: true, // esta variable renderiza los botones 
  }

  render(){
    return(
      <div>
        <h2>Renderizado Conditional</h2>
        {this.state.section ? <Login />:<Logout />}
      </div>

    );
  }
}