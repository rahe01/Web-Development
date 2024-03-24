import { RingLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-116px)]">
      <RingLoader color="#36d7b7" size={100} />
    </div>
  );
};

export default Loader;
