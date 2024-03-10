export default function Country({country}){
    
    console.log(country)
    const {name , flags} = country;

    return(
        <div>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt={name.common}/>
        </div>
    )
}