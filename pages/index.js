import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import clientConfig from '../client-config';
import Product from '../components/Products'

const Index = ( props ) =>{
    console.warn(props);
    const {products} = props ;

    return (
       <Layout>
          {products.length ? (
               products.map( product => <Product product={product}/>)
          ) :'' }
       </Layout>
    );
};

Index.getInitialProps = async () => {

    const res = await fetch( `${clientConfig.siteUrl}/getProducts` );
    const producsData = await res.text();
    return {
        products:producsData
    }
};




export default Index;