import Product from './Product'

var ProductList = ({products}) => {
    return(
    <div className="productList">
      {products.map((p) => <Product product={p}/>)}
    </div>
    );
  };

  export default ProductList;