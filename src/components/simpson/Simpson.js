
export default function Simpson({ item: {char_id, name, img, status, nickname} }) {
    return (
        <div>
            <h2>{char_id}.  {name}</h2>
            <img src={img} alt="" />
            <p>{status}, {nickname}
            </p>
        </div>
    );
}