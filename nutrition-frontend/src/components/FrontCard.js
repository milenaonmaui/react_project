import React from 'react';
import {Link} from 'react-router-dom'

const FrontCard = (props) => {

    return (

        <div className ="card" style={{width: '18rem'}}>
            <img class="card-img-top" src={"/assets/"+props.name. toLowerCase() + ".jpg"} alt={"Go to "+props.name}></img>
            <div class="card-body">
                <h5 class="card-title"><Link to = {`/${props.name}`}>{props.name.toUpperCase()}</Link></h5>    
            </div>
       </div>
        
    )
}

export default FrontCard
