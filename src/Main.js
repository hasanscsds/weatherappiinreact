import React from 'react';
import TopNav from './TopNav';
import Aplication from './Aplication';
import Footer from './Footer';
const Main = () => {




    return (
        <>
            <div className="row d-flex flex-column flex-nowrap justify-content-between h-100">
                <div className='col-md-12 p-0'>
                    <TopNav/>
                    <Aplication/>
                </div>
                
                <div className='col-md-12'>
                    <Footer/>
                </div>
            </div>
        </>
        
    );
};


export default Main;