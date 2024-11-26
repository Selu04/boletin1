export default function ProductStock({inStock}){
    return(
        <div>
            <p>{inStock ? 'Producto en stock' : "Producto fuera de stock"}</p>
        </div>
    );
}