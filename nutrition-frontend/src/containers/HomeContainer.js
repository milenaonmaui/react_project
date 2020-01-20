import React from 'react';
import FrontCard from '../components/FrontCard.js'

const HomeContainer = (props) =>{

    return(
        <div className="jumbotron">
           <div className="row">
                <div className = "col-sm-5 offset-sm-1">
                    <FrontCard name={"Meals"} />                 
                </div>
                <div className = "col-sm-5">
                    <FrontCard name={"Ingredients"} />                       
                </div>
            </div>
        </div>
    )
}

export default HomeContainer