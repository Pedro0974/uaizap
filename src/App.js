import "./styles/Style.css";
import HeaderListContacts from "./components/list_contacts/HeaderListContacts";
import ListContact from "./components/list_contacts/ListContacts";
import HeaderMessage from "./components/message/HeaderMessage";
import MessageComponent from "./components/message/MessageComponent";
import PromptMessage from "./components/message/PromptMessage";

function App() {
  return (
    <div className="App">

      {/* Aqui vai ficar os componentes da lista de contatos */}
      <div>

        <HeaderListContacts />

        <ListContact />
      
      </div>



      {/* Aqui vai ficar os componentes da converça */}
      <div>

        <HeaderMessage />

        <MessageComponent />

        <PromptMessage />

      </div>

    </div>
  );
}

export default App;
