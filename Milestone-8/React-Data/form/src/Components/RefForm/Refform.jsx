import { useEffect, useRef } from "react";

const Refform = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(nameRef.current.value)
    
    
  };

  const nameRef = useRef(null)
  
  useEffect(() =>{
    nameRef.current.focus()
  }, [])

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input type="email" defaultValue={'asfsdaf'} name="email" id="" />
        <br />

        <input type="number" name="number" id="" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Refform;
