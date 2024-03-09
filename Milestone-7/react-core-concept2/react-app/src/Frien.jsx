export default function Frien({friend}){
    const {name,email} = friend;
    return(
        <div className="box">
            <h3>Name : {name} </h3>
            <p>Email : {email}</p>
        </div>
    )
}