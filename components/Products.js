const Product = (props) => {
    const {product } = props;
    return (
      
            <div class="card mb-3" key={product.id}>
    <h3 class="card-header">{product.name}</h3>
                <div class="card-body">
                    
                <img  src={product.images[0].src} alt="Card image"/>
                <h5 class="card-title">Special title treatment</h5>
    <h6 class="card-subtitle text-muted">{product.price}</h6>
                </div>
            </div>

    );
}

export default Product;