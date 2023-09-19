import React, { useState } from "react";

const ListContact = ({ contacts, onChildClick }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    onChildClick(contact);
  };

  return (
    <>
      <div className="bg-colorList w-full h-full pt-16">
        <ul>
          {contacts.map((contact, index) => (
            <li
              key={index}
              className={`flex justify-start px-6 gap-3 py-5 border-b border-colorIcons/30 ${
                selectedContact === contact ? "bg-colorInput" : ""
              }`}
            >
              <button
                className="flex gap-3 w-full"
                onClick={() => handleContactClick(contact)}
              >
                <img
                  className="image-profile"
                  src={contact.photo}
                  alt={contact.name}
                />

                <h2 className="text-colorIcons text-xl">{contact.name}</h2>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListContact;
