import "./styles/Style.css";
import HeaderListContacts from "./components/list_contacts/HeaderListContacts";
import ListContact from "./components/list_contacts/ListContacts";
import HeaderMessage from "./components/message/HeaderMessage";
import MessageComponent from "./components/message/MessageComponent";
import PromptMessage from "./components/message/PromptMessage";

// import imagens
import woman1 from './assets/images/woman-image1.png'
import woman2 from './assets/images/woman-image2.png'
import man from './assets/images/image-man.png'

function App() {

  // Array de objetos c que serao os contatos
  const arrayContacts = [
    {
      name: "Isabela",
      photo: woman1,
      lastSeen: "Visto por ultimo 10 minutos atrás",
      messagesSent: [],
      receivedMessages: [],
    },
    {
      name: "Carol",
      photo: woman2,
      lastSeen: "visto por ultimo 20 minutos atrás",
      messagesSent: [],
      receivedMessages: [],
    },
  ];

  return (
    <div className="bg-bgMessage h-[100vh] flex w-full">

      {/* Aqui vai ficar os componentes da lista de contatos */}
      <div className="border-r-2 border-colorIcons/30 w-[40%] h-full">

        {/* Cabeçalho para lista de contatos */}
        <HeaderListContacts profileImage={man} />

        <ListContact contacts={arrayContacts} />
      
      </div>



      {/* Aqui vai ficar os componentes da converça */}
      <div className="w-full flex flex-col justify-between">

        <HeaderMessage />

        <MessageComponent />

        <PromptMessage />

      </div>

    </div>
  );
}

export default App;
