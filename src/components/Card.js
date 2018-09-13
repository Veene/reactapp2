import React from 'react';


const Card = ({ name, email, id }) => {
    
    return (
        // let url = 'https://robohash.org/' + {props.id} +'?size=200x200';
        <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5">
            {/* <h1 className = 'tc f1'>ROBOFRIENDS</h1> */}
            <img src= {`https://robohash.org/${id}`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;