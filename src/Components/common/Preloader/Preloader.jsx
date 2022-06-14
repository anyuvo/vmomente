import React from 'react';
import preloader from "../../../img/ajax_loader_blue_256.gif";

const Preloader = (props) => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={preloader} alt='preloader'/>
        </div>
    );
};

export default Preloader;