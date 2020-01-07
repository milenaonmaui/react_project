import React, { Component } from 'react'

const Ingredient = (props) => {
      
    return (
        <React.Fragment>
            {props.ingredient.name}        
        </React.Fragment>
    )

}
export default Ingredient;