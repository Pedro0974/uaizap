import imageMan from '../assets/images/image-man.jpg'

const HeaderListMessages = () => {

    return (
        <>
            <nav className="w-[30%] bg-slate-800 text-gray-300 flex justify-between items-center px-6 py-6">
                <div>

                    <img className="w-16 rounded-full" src={imageMan} alt="image-man"/>

                </div>

                <div className="flex justify-between text-xl w-[40%]">
                    <i className="fas fa-users"></i>
                    <i className="fas fa-search"></i>
                    <i className="fas fa-message"></i>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </nav>
        </> 
    );
}

export default HeaderListMessages