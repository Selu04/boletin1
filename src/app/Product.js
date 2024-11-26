export default function Product({name, price, desc}){
    return(
        <div>
            <li>{name}</li>
            <li>{price}</li>
            <li>{desc}</li>
        </div>
    );
}