import React, {useState} from 'react';

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
            <button onClick={plus}>Go to gym</button>
            <button onClick={minus}>Play Dota</button>
        </div>
    );

}

export default Counter;