import useInput from "../../Hooks/useInput";

const HookForm = () => {
  const [name, handleName] = useInput("rahe");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleName} type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />

        <input type="password" name="password" id="" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
