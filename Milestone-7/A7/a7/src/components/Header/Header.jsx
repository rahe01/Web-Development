import profile from '../../assets/images/profile.png'


const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-4 border-b-2 max-w-6xl m-auto">
        <h1 className="text-4xl font-bold">Knowladge Cafe</h1>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
