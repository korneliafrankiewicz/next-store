const Products = ({products}) => {
    return (
     <>
     <div>Prods:</div>
     {(products.data)?.map((product, i) => {
        return (<><div>{product.attributes.Title}</div>{product.attributes.Description}<div></div></>
        )
      })}
     </>
    )
}

export default Products;