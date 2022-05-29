
export default function Simpson({ item: {char_id, name, img, status, nickname, info} }) {
   let toggle = 'show';
    return (
        <div>
            <h2>{char_id}.  {name}</h2>
            <img src={img} alt="" />
            <p>{status}, {nickname}
            </p>
            <p className={toggle}>{info}
            </p>
            <button onClick={()=>{
                console.log('click', name);
            }}>hite/show info</button>
        </div>
    );
}