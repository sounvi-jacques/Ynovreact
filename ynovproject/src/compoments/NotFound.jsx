import React from 'react';
import HeaderNotFound from './HeaderNotFound';


class NotFound extends React.Component{

    render(){

        return(

            <div>
                <HeaderNotFound/>
                <h3>404 page not found</h3>
                <p>We are sorry but the page you are looking for does not exist.</p>
            </div>


        );




    }



}

export default NotFound;