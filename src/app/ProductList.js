import Product from "./Product";

export default function ProductList(){
    return(
        <div>
            <ul>
                <Product name="Tomate" price="20€" desc="15 kg tomates"></Product>
                <Product name="Tomate" price="20€" desc="15 kg tomates"></Product>
                <Product name="Tomate" price="20€" desc="15 kg tomates"></Product>
            </ul>
        </div>
    );
}