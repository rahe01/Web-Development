import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
    return (
        <div>
              <Link
            to={'/'}
            
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
              src="https://source.unsplash.com/random/480x360?1"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-400 dark:text-gray-600">
                January 21, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
        </div>
    );
};

export default BlogCard;