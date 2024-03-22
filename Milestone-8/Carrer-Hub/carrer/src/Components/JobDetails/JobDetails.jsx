import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id == idInt);
    console.log(job);


    const handleApplyJob = () =>{
        saveJobApplication(idInt)
        toast("Wow so easy !");
    }




    return (
        <div>
            <h1>Job details : {job.job_title} </h1>
            <div className="grid gap-4 md:grid-cols-4">
                    <div className="border md:col-span-3">
                        <h2>Details comming here</h2>
                    </div>
                    <div className="border col-span-1">
                        <h2>Side things</h2>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default JobDetails;