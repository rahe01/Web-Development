

const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}



const saveJobApplication = (id) =>{

    const storedJobApplication = getStoredJobApplication();
    const exist = storedJobApplication.find(job => job.id === id);
    if(!exist){
        storedJobApplication.push({id});
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication));
    }

}

export {saveJobApplication , getStoredJobApplication}