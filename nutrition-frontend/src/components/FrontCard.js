import React from 'react';
import {Link} from 'react-router-dom'

const FrontCard = (props) => {

    return (

        <div className ="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={"/assets/" + props.name.toLowerCase() + ".jpg"} alt={"Go to "+props.name}></img>
            <div className="card-body">
                <h5 className="card-title"><Link to = {`/${props.name}`}>{props.name.toUpperCase()}</Link></h5>    
            </div>
       </div>
        
    )
}

export default FrontCard
