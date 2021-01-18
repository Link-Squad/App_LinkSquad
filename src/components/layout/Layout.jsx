import Header from '../header/Header';
import Footer from '../footer/Footer';
import React from 'react';

const Layout = ({ withHeader, withFooter, children }) => {
	const layout = (
		<>
			{withHeader && <Header />}
			{children}
			{withFooter && <Footer />}
		</>
    );
    
    return layout
};

export default Layout;
