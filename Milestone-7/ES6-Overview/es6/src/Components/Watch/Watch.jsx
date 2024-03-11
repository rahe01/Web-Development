import './Watchh.css'

const Watch = ({watch}) => {

    const {brand , price } = watch;
    return (
        <div>
            <h3>Watches : {brand}</h3>
            <p>Price : {price}</p>
        </div>
    );
};

export default Watch;