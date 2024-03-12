
import profile from '../../assets/images/profile.png'


const Header = () => {
    return (
        <header className='flex justify-between items-center p-4  border-b-2 max-w-6xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowladge Cafe</h1>

            <img src={profile} alt="" />
        </header>
    );
};

export default Header;