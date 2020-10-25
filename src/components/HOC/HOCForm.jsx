// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

/* D.R.Y.
HOCForm permettrait d'avoir 1 seul formulaire et on pourrait import les components
FoodAdd, FoodUpdate, FoodList dans Foods
*/

import React from "react"
import {Form} from "../Form/Form"

function FoodForm(){
    return(
        <Form/>
    )
}

export function HOCform (component){
    return function(component){
        return (<FoodForm test="Hello" {...props}/>)
    }
}