const HeaderListMessages = ({profileImage}) => {

    return (
        <>
            <nav className="header-contacts">
                <div>
                    <img className="image-profile" src={profileImage} alt=" Man to profile"/>
                </div>

                <div className=" header-options w-44">
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