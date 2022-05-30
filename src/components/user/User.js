export default function User({item, choose}){
    return(
        <div> {item.id} - {item.name}
        <button onClick={()=>{
            choose(item.id);
        }}>choose
        </button>
        </div>
    );
}