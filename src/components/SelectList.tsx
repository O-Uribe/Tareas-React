import React, { useState } from "react";
import '../App.css';

interface ListProps {
  elements: string[];
}

const SelectList: React.FC<ListProps> = ({ elements }) => {
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [showSelected, setShowSelected] = useState<boolean>(false);


  const ChangeCheckbox = (element: string, isChecked: boolean) => {
    setSelectedElements((prevSelected) =>
      isChecked
        ? [...prevSelected, element]
        : prevSelected.filter((selectedElement) => selectedElement !== element) // Eliminar si se desmarca
    );
  };

  const ShowSelectedElements = () => {
    if (selectedElements.length > 0){
      setShowSelected(true);
    }
  };

  const CleanSelections = () => {
    setSelectedElements([]);
    setShowSelected(false);
    document.querySelectorAll('.form-check-input').forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }

  return (
    <div>
      <h2>Seleccione los elementos del listado</h2>
      <div className="form-check">
        <ul>
          {elements.map((elements) => (
            <li key={elements}>
              <label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={(e) =>
                    ChangeCheckbox(elements, e.target.checked)
                  }
                />
                {elements}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button className= "btn btn-primary custom-button" onClick={ShowSelectedElements}>Mostrar elementos seleccionadas</button>
      {showSelected && selectedElements.length != 0 && (
           <button className= "btn btn-danger custom-button" onClick={CleanSelections}>Borrar todas las selecciones</button>
      )}
      <hr />
      {showSelected && (
        <div className="selected-elements-container">
          {selectedElements.map((elements, index) => (
            <div className="selected-element" key={index}>
              {elements} 
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};


export default SelectList;
