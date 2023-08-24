import foto from "../../assets/images/woman-image1.png";

const HeaderMessage = () => {
  return (
    <>
      <header className="header-message">
        <div className="flex gap-3">
          <img className="image-profile" src={foto} alt="imagem teste"></img>

          <div className="header-contact-name">
            <h2 className="text-xl text-colorIcons font-bold">Nome do contato</h2>
            <h5 className="text-sm text-colorIcons">Historico de visualizações</h5>
          </div>
        </div>

        <div className="header-options w-16">
          <i className="fas fa-search"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </header>
    </>
  );
};

export default HeaderMessage;
