

import React from 'react';

const IconButton = (props) => {
    return <button onClick={props.onClick}>{props.children}</button>
}

export default IconButton;