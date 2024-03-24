import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero  -mt-16">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className=" bg-gradient-to-r bg-300% from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
              ByteBlaze
            </span>
          </h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to undrastand it
          </p>
          <div className="flex gap-2 justify-center">
            <Link
              to={"/blogs"}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-purbg-purple-500 group-hover:bg-purple-500"></span>
              <span className="relative text-purbg-purple-500 group-hover:text-white">
                Read Blogs
              </span>
            </Link>

            <Link
              to={"/bookmarks"}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-pubg-purple-500 group-hover:bg-purple-500"></span>
              <span className="relative text-pubg-purple-500 group-hover:text-white">
                BookMarks
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
