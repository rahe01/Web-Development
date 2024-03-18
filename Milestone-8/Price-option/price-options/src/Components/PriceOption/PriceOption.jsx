import Feature from "../Features/Feature";

const PriceOption = ({option}) => {

    const {name, price , features} = option;

    return (
        <div className="bg-blue-600 rounded-2xl p-4 text-black flex flex-col  ">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4 className="text-3xl my-5 text-center">{name}</h4>

        <div className="pl-6 flex-grow">


        {
                features.map((feature , idx) => <Feature key={idx} feature={feature}></Feature>)
            }

        </div>
        <button className="btn glass mt-12 w-full ">Glass button</button>


        </div>
    );
};

export default PriceOption;