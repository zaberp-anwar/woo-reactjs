const next = require('next');
const express = require('express');
const wooConfig = require('./wooConfig');

const WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
    url: wooConfig.siteUrl,
    consumerKey: wooConfig.consumerKey,
    consumerSecret: wooConfig.consumerSecret,


    //consumerKey: 'ck_ad5fdd76a13080a6c25d0d04b6291373f0ef55e6',
   // consumerSecret: 'cs_7c9b5b5ca6c963fdf4a5cc2f31a8edce43e79d0c',
    wpAPI: true,
    version: 'wc/v1'
  });

const port = 3000;
const dev = process.env.NODE_ENV !== 'porduction';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare()
    .then(  () => { 

        const server = express();

        server.get('/getProducts', ( req , response) => {
            WooCommerce.get( 'products', function( err ,data ,res){
                response.json( JSON.parse(res) );
            });
        });
           
       
        server.get( '*' , (req, res) => {
                return handle(req,res);
        });
        server.listen( port, err => {
            if (err) {
                throw err;
            }
            console.log(`Ready on ${port}`);
        } )
       
    } ) 
    .catch( ex =>{
        console.error(ex.stack);
        process.exit(1);
    });