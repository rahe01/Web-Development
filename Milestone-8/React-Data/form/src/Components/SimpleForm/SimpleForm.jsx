

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log('submit')
        console.log(e.target.number.value)
    }



    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />

                <input type="password" name="password" id="" />
                <input type="submit" value="Submit" />



            </form>
        </div>
    );
};

export default SimpleForm;