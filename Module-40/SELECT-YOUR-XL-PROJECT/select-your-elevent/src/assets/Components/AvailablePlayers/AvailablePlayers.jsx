import React from 'react';

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div>
            Available
        </div>
    );
};

export default AvailablePlayers;