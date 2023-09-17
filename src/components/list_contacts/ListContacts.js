import React from "react";

const ListContact = ({ contacts, onChildClick }) => {
  return (
    
    <>
      <div className="bg-colorList w-full h-full pt-16  ">
        <ul>
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="flex justify-start ml-6 gap-3 py-4 border-b border-colorIcons/30"
            >
              <button className="flex gap-3 w-full"  onClick={() => onChildClick(contact)}>
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
