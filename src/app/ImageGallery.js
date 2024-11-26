const imgs = [
  "https://i.imgur.com/DoP8q0E.jpeg",
  "https://i.imgur.com/Q8TPuKq.jpeg",
    "https://i.imgur.com/DoP8q0E.jpeg"
]

let indice = 0

function Image({url}){
    return (
        <div>
            <img src={url} />
        </div>
    );
}

export default function ImageGallery(){
    return (
        <div>
            {imgs.map((img) => <Image key={indice++} url={img} />)}
        </div>
    );

}