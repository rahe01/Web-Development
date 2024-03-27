import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {


    const [jobs , setJobs] = useState([]);

    // this is not best way for show all data 
    const [dataLength , setDataLength] = useState(4);

    useEffect( ()=>{

        fetch('jobs.json')
        .then(res=>res.json())
        .then(data => setJobs(data))


    },[])





    return (
        <div>
           
            <div className="text-center">
                <h2 className="text-5xl">Featured jobs {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat ut ipsum perferendis esse molestias qui, est, maxime possimus quaerat inventore quo soluta quibusdam quia quam nostrum ipsam? Suscipit, fugit!</p>
            </div>


            <div className="grid grid-cols-2 gap-20">
                {
                    jobs.slice(0, dataLength).map((job , idx) => <Job key={idx} job={job}></Job>)
                }
            </div>

            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={ ()=> setDataLength(jobs.length)} className="btn btn-primary">Show all jobs</button>
            </div>





        </div>
    );
};

export default FeaturedJobs;