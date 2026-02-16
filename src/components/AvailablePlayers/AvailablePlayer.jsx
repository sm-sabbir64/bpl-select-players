import React, { use } from 'react';

const AvailablePlayer = ({playersPromise}) => {
    const playersData = use(playersPromise)
    console.log(playersData);
    
    return (
        <div className='max-w-325 mx-auto'>
            Computer Science & Technology
        </div>
    );
};

export default AvailablePlayer;