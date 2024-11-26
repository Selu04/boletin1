export default function Card({title, desc, img}){
    return(
        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <img src={img}></img>
        </div>
    );
}