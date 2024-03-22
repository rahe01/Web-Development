import { useEffect, useState } from "react";

const FeaturedJobs = () => {


    const [jobs , setJobs] = useState([]);

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


            <div>
                {
                    
                }
            </div>





        </div>
    );
};

export default FeaturedJobs;