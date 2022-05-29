import Simpson from "../simpson/Simpson";

let simpsons = [
    {
        "char_id": 1,
        "name": "Walter White",
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        "status": "Presumed dead",
        "nickname": "Heisenberg",
        "info": "Fusce hendrerit ullamcorper lacinia. Donec elementum nunc a neque condimentum, eleifend blandit arcu auctor. Cras rutrum, leo eget lacinia iaculis, est leo mattis sapien, ut vestibulum nisi quam a urna. Donec viverra neque vel imperdiet placerat. Quisque aliquam laoreet tellus, sed bibendum erat faucibus sit amet. Donec euismod fermentum neque. Aliquam finibus sapien id augue suscipit, sed blandit massa feugiat. Morbi ut velit eu dui consectetur aliquet. Donec in vehicula nulla, ut fermentum felis. Vivamus metus turpis, aliquam in ante egestas, posuere luctus tortor. Nullam ut varius ipsum. Donec efficitur orci elit, ultrices pharetra eros auctor in. Donec justo turpis, placerat non pellentesque ac, sollicitudin eu libero."
    },
    {
        "char_id": 2,
        "name": "Jesse Pinkman",
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
        "status": "Alive",
        "nickname": "Cap n' Cook",
        "info": "Fusce hendrerit ullamcorper lacinia. Donec elementum nunc a neque condimentum, eleifend blandit arcu auctor. Cras rutrum, leo eget lacinia iaculis, est leo mattis sapien, ut vestibulum nisi quam a urna. Donec viverra neque vel imperdiet placerat. Quisque aliquam laoreet tellus, sed bibendum erat faucibus sit amet. Donec euismod fermentum neque. Aliquam finibus sapien id augue suscipit, sed blandit massa feugiat. Morbi ut velit eu dui consectetur aliquet. Donec in vehicula nulla, ut fermentum felis. Vivamus metus turpis, aliquam in ante egestas, posuere luctus tortor. Nullam ut varius ipsum. Donec efficitur orci elit, ultrices pharetra eros auctor in. Donec justo turpis, placerat non pellentesque ac, sollicitudin eu libero."
    },
    {
        "char_id": 3,
        "name": "Skyler White",
        "img": "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
        "status": "Alive",
        "nickname": "Sky",
        "info": "Fusce hendrerit ullamcorper lacinia. Donec elementum nunc a neque condimentum, eleifend blandit arcu auctor. Cras rutrum, leo eget lacinia iaculis, est leo mattis sapien, ut vestibulum nisi quam a urna. Donec viverra neque vel imperdiet placerat. Quisque aliquam laoreet tellus, sed bibendum erat faucibus sit amet. Donec euismod fermentum neque. Aliquam finibus sapien id augue suscipit, sed blandit massa feugiat. Morbi ut velit eu dui consectetur aliquet. Donec in vehicula nulla, ut fermentum felis. Vivamus metus turpis, aliquam in ante egestas, posuere luctus tortor. Nullam ut varius ipsum. Donec efficitur orci elit, ultrices pharetra eros auctor in. Donec justo turpis, placerat non pellentesque ac, sollicitudin eu libero."
    },
    {
        "char_id": 4,
        "name": "Walter White Jr.",
        "img": "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
        "status": "Alive",
        "nickname": "Flynn",
        "info": "Fusce hendrerit ullamcorper lacinia. Donec elementum nunc a neque condimentum, eleifend blandit arcu auctor. Cras rutrum, leo eget lacinia iaculis, est leo mattis sapien, ut vestibulum nisi quam a urna. Donec viverra neque vel imperdiet placerat. Quisque aliquam laoreet tellus, sed bibendum erat faucibus sit amet. Donec euismod fermentum neque. Aliquam finibus sapien id augue suscipit, sed blandit massa feugiat. Morbi ut velit eu dui consectetur aliquet. Donec in vehicula nulla, ut fermentum felis. Vivamus metus turpis, aliquam in ante egestas, posuere luctus tortor. Nullam ut varius ipsum. Donec efficitur orci elit, ultrices pharetra eros auctor in. Donec justo turpis, placerat non pellentesque ac, sollicitudin eu libero."
    },
    {
        "char_id": 5,
        "name": "Henry Schrader",
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
        "status": "Deceased",
        "nickname": "Hank",
        "info": "Fusce hendrerit ullamcorper lacinia. Donec elementum nunc a neque condimentum, eleifend blandit arcu auctor. Cras rutrum, leo eget lacinia iaculis, est leo mattis sapien, ut vestibulum nisi quam a urna. Donec viverra neque vel imperdiet placerat. Quisque aliquam laoreet tellus, sed bibendum erat faucibus sit amet. Donec euismod fermentum neque. Aliquam finibus sapien id augue suscipit, sed blandit massa feugiat. Morbi ut velit eu dui consectetur aliquet. Donec in vehicula nulla, ut fermentum felis. Vivamus metus turpis, aliquam in ante egestas, posuere luctus tortor. Nullam ut varius ipsum. Donec efficitur orci elit, ultrices pharetra eros auctor in. Donec justo turpis, placerat non pellentesque ac, sollicitudin eu libero."
    },
    {
        "char_id": 6,
        "name": "Marie Schrader",
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
        "status": "Alive",
        "nickname": "Marie",
        "info": "Fusce hendrerit ullamcorper lacinia. Donec elementum nunc a neque condimentum, eleifend blandit arcu auctor. Cras rutrum, leo eget lacinia iaculis, est leo mattis sapien, ut vestibulum nisi quam a urna. Donec viverra neque vel imperdiet placerat. Quisque aliquam laoreet tellus, sed bibendum erat faucibus sit amet. Donec euismod fermentum neque. Aliquam finibus sapien id augue suscipit, sed blandit massa feugiat. Morbi ut velit eu dui consectetur aliquet. Donec in vehicula nulla, ut fermentum felis. Vivamus metus turpis, aliquam in ante egestas, posuere luctus tortor. Nullam ut varius ipsum. Donec efficitur orci elit, ultrices pharetra eros auctor in. Donec justo turpis, placerat non pellentesque ac, sollicitudin eu libero."
    },
    {
        "char_id": 7,
        "name": "Mike Ehrmantraut",
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
        "status": "Deceased",
        "nickname": "Mike",
        "info": "Fusce hendrerit ullamcorper lacinia. Donec elementum nunc a neque condimentum, eleifend blandit arcu auctor. Cras rutrum, leo eget lacinia iaculis, est leo mattis sapien, ut vestibulum nisi quam a urna. Donec viverra neque vel imperdiet placerat. Quisque aliquam laoreet tellus, sed bibendum erat faucibus sit amet. Donec euismod fermentum neque. Aliquam finibus sapien id augue suscipit, sed blandit massa feugiat. Morbi ut velit eu dui consectetur aliquet. Donec in vehicula nulla, ut fermentum felis. Vivamus metus turpis, aliquam in ante egestas, posuere luctus tortor. Nullam ut varius ipsum. Donec efficitur orci elit, ultrices pharetra eros auctor in. Donec justo turpis, placerat non pellentesque ac, sollicitudin eu libero."
    },
    {
        "char_id": 8,
        "name": "Saul Goodman",
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
        "status": "Alive",
        "nickname": "Jimmy McGill",
        "info": "Fusce hendrerit ullamcorper lacinia. Donec elementum nunc a neque condimentum, eleifend blandit arcu auctor. Cras rutrum, leo eget lacinia iaculis, est leo mattis sapien, ut vestibulum nisi quam a urna. Donec viverra neque vel imperdiet placerat. Quisque aliquam laoreet tellus, sed bibendum erat faucibus sit amet. Donec euismod fermentum neque. Aliquam finibus sapien id augue suscipit, sed blandit massa feugiat. Morbi ut velit eu dui consectetur aliquet. Donec in vehicula nulla, ut fermentum felis. Vivamus metus turpis, aliquam in ante egestas, posuere luctus tortor. Nullam ut varius ipsum. Donec efficitur orci elit, ultrices pharetra eros auctor in. Donec justo turpis, placerat non pellentesque ac, sollicitudin eu libero."
    },
    {
        "char_id": 9,
        "name": "Gustavo Fring",
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
        "status": "Deceased",
        "nickname": "Gus",
        "info": "Fusce hendrerit ullamcorper lacinia. Donec elementum nunc a neque condimentum, eleifend blandit arcu auctor. Cras rutrum, leo eget lacinia iaculis, est leo mattis sapien, ut vestibulum nisi quam a urna. Donec viverra neque vel imperdiet placerat. Quisque aliquam laoreet tellus, sed bibendum erat faucibus sit amet. Donec euismod fermentum neque. Aliquam finibus sapien id augue suscipit, sed blandit massa feugiat. Morbi ut velit eu dui consectetur aliquet. Donec in vehicula nulla, ut fermentum felis. Vivamus metus turpis, aliquam in ante egestas, posuere luctus tortor. Nullam ut varius ipsum. Donec efficitur orci elit, ultrices pharetra eros auctor in. Donec justo turpis, placerat non pellentesque ac, sollicitudin eu libero."
    },
    {
        "char_id": 10,
        "name": "Hector Salamanca",
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
        "status": "Deceased",
        "nickname": "Don Hector",
        "info": "Fusce hendrerit ullamcorper lacinia. Donec elementum nunc a neque condimentum, eleifend blandit arcu auctor. Cras rutrum, leo eget lacinia iaculis, est leo mattis sapien, ut vestibulum nisi quam a urna. Donec viverra neque vel imperdiet placerat. Quisque aliquam laoreet tellus, sed bibendum erat faucibus sit amet. Donec euismod fermentum neque. Aliquam finibus sapien id augue suscipit, sed blandit massa feugiat. Morbi ut velit eu dui consectetur aliquet. Donec in vehicula nulla, ut fermentum felis. Vivamus metus turpis, aliquam in ante egestas, posuere luctus tortor. Nullam ut varius ipsum. Donec efficitur orci elit, ultrices pharetra eros auctor in. Donec justo turpis, placerat non pellentesque ac, sollicitudin eu libero."
    },
];
export default function Simpsons() {
    return (
        <div>
            {
                simpsons.map((value, index) => <Simpson key={index} item={value} />)
            }
        </div>
    );
}