const HeaderListMessages = ({profileImage}) => {

    return (
        <>
            <nav className="w-full bg-colorHeader text-gray-300 flex justify-between items-center px-6 py-3">
                <div>
                    <img className='w-12 rounded-full' src={profileImage} alt=" Man to profile"/>
                </div>

                <div className="flex justify-between text-xl w-44">
                    <i className="fas fa-users"></i>
                    <i className="fas fa-search"></i>
                    <i className="fas fa-message"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </nav>
        </> 
    );
}

export default HeaderListMessages