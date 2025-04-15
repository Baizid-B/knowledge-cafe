import profile from '../../assets/imgs/profile.png'

const Header = () => {
    return (
        <div className="pt-4 flex justify-between items-center border-b pb-2">
           <h1 className='font-bold text-4xl'>knowledge cafe</h1>
           <img className='w-12 h-12 rounded-full' src={profile} alt="" />
        </div>
    );
};

export default Header;