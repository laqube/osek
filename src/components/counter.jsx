import React, {useState} from 'react';
import {Button} from '@material-ui/core'


const Counter = function (){
    const[bitches, setBitches] = useState(0);

    function plus(){
        setBitches(bitches+1);
    }
    function minus(){
        setBitches(bitches-1);

    }

    return(
        <div>
            <h1>{bitches}</h1>
            <Button onClick={plus}>Go to gym</Button>
            <Button onClick={minus}>Play Dota</Button>
        </div>
    );

}

export default Counter;