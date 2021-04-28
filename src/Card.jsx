import React from 'react';

function Card(fusu){
    return(
        <div className="card">
            <div className="img">
                <img src={fusu.chabi} alt="Image"/>
            </div>
            <h2>{fusu.nam}</h2>
            <a href={fusu.link}>
                <button>Watch Now</button>
            </a>
        </div>
    );
}

export default Card;