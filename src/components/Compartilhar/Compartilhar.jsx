import React from "react";
import "../Compartilhar/Compartilhar.css"

const Compartilhar = ({ link, onClose }) => {
  return (
    <div className="popupCompartilhar">
      <div className="popupConteudo">
        <p>Compartilhe este link:</p>
        <input type="text" value={link} readOnly />
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Compartilhar;
