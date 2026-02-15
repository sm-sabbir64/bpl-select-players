import React, { use } from 'react';

const AvailablePlayer = ({playersPromise}) => {
    const playersData = use(playersPromise)
    console.log(playersData);
    
    return (
        <div>
            
        </div>
    );
};

export default AvailablePlayer;