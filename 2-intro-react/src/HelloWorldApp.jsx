import Proptypes from "prop-types";
import {Title} from "./components/Title"
import {UserDetails} from "./components/UserDetails"
 
export function HelloWorldApp({id ,user,title}){
 

    return(
        <>
        <Title title={title}/>
        <UserDetails id={id}/>
        </>
    )
}

//gestion y tipado de props recibidos al componente.
HelloWorldApp.propTypes = {
    title: Proptypes.string.isRequired,
    id: Proptypes.string.isRequired
}

//Valores por defecto de los props del componente
HelloWorldApp.defaultprops = {
    title: 'Hola Mundo por defecto'
}



