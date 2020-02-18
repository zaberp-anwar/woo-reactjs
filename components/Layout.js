import Head from 'next/head';
import Header from './Header';

const Layout = (props) =>{
    return (
        <div>
            <head>
                <title>woocommerce </title>
                <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
            </head>
            <Header/>
            {props.children}
        </div>
    )
}

export default Layout;