const ListContact = ({contacts}) => {

  return (
    <>
      <div className="bg-colorList w-full h-full pt-16  ">
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="flex justify-start ml-6 gap-3 py-4 border-b border-colorIcons/30">
              <img className='image-profile' src={contact.photo} alt={contact.name} />
        
              <h2 className="text-colorIcons text-xl">{contact.name}</h2>

            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListContact;
