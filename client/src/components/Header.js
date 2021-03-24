import React from 'react';
import { navigate} from '@reach/router';



const Header = (props) => {
    return(
        <div>
            <h1> Welcome to the SKIFF Collections</h1>
        <div>
            <button onClick = {() => navigate("/skiffs")}>List All Skiffs</button>
            <button onClick = {() => navigate("/skiff/new")}>New Skiff</button>
            {/* <button onClick ={() => navigate("/karaoke")}>List All</button>
            <button onClick ={() => navigate("/karaoke")}>List All</button> */}

        </div> 
        </div>
    )
};

export default Header;
