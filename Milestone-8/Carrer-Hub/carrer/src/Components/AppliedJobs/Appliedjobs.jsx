import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";


const Appliedjobs = () => {

    const jobs = useLoaderData();

    useEffect(() =>{

        const storedJobid = getStoredJobApplication();
        if(jobs.length > 0){
            const jobApplied = jobs.filter(job => storedJobid.includes(job.id));
            console.log(jobApplied)
        }


    },[])


    return (
        <div>
            <h1>jobssssssss</h1>
        </div>
    );
};

export default Appliedjobs;