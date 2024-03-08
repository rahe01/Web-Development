export default function Singer({singer}){
    return(
        <div>
            <h1>Singer</h1>
            <h2>Name : {singer.name} </h2>
            <p>Age : {singer.age}</p>
        </div>
    )
}