
import { FaCheck } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex gap-2 items-center"  ><FaCheck></FaCheck>{feature}</p>
        </div>
    );
};

export default Feature;