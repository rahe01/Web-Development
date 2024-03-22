import { FaMapLocationDot } from "react-icons/fa6";

import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo , job_title , company_name , remote_or_onsite, location , job_type , salary} = job;

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img
          src= {logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>


        <div>
            <button className="px-5 py-2 font-bold border-2 rounded border-b-cyan-500 mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-bold border-2 rounded border-b-cyan-500 ">{job_type}</button>
        </div>

        <div className=" flex mr-4">
            <h1 className="text-2xl flex gap-2"><FaMapLocationDot />{location}</h1>
            <h1 className="text-2xl flex gap-2 justify-center items-center"><FaDollarSign />{salary}</h1>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}><button className="btn btn-primary">View details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
