import { useState } from "react";

export default function Simpson({ item: {char_id, name, img, status, nickname, info} }) {
   let [toggle, setToggle] = useState('show');


    return (
        <div>
            <h2>{char_id}.  {name}</h2>
            <img src={img} alt="" />
            <p>{status}, {nickname}
            </p>
            <p className={toggle}>{info}
            </p>
            <button onClick={()=>{
                if (toggle === 'hide') {
                    setToggle('show');
                } else if ( toggle === 'show'){
                    
                    setToggle('hide');
                }


                console.log(toggle);


            }}>hite/show info
            </button>

        </div>
    );
}