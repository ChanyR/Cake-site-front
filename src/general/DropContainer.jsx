// DropContainer.jsx

import React from 'react';
import { useDrop } from 'react-dnd';

// Define ItemTypes here or import it from a separate file
const ItemTypes = {
  CAKE_ITEM: 'cakeItem',
};

const DropContainer = ({ onDrop, selectedItems }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CAKE_ITEM,
    drop: (item) => onDrop(item),
  });

  return (
    <div
      ref={drop}
      className="card border-dashed mb-2 choose-erea"
      style={{ width: '500px', minHeight: '100vh', padding: '16px' }}
    >
      <div className="card-body">
        <p className="card-text">Drop here</p>
        <div className="d-flex flex-wrap">
          {selectedItems.map((item, index) => (
            <div key={index} className="mt-2 mr-2">
              <img src={item.image} alt={item.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropContainer;
