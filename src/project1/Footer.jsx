import React from 'react';

const Footer = ()=>{
    const year = new Date().getFullYear();
    return(
        <>
            <footer className="bg-light text-center">
                <p>© {year} Copyright: Thapa Technical and Uppari</p>
            </footer>
        </>
    );
};
export default Footer;