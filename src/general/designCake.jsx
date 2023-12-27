// DesignCake.jsx
import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  CAKE_ITEM: 'cakeItem',
};

const DragItem = ({ name, type }) => {
  const [, drag] = useDrag({
    type,
    item: { name },
  });

  return (
    <div ref={drag} className="card" style={{ cursor: 'move', margin: '8px' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
};

const DropContainer = ({ onDrop }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CAKE_ITEM,
    drop: (item) => onDrop(item),
  });

  return (
    <div ref={drop} className="card border-dashed" style={{ height: '200px', padding: '16px' }}>
      <div className="card-body">
        <p className="card-text">Drop here</p>
      </div>
    </div>
  );
};

const DesignCake = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleDrop = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const cakeBases = [
    { name: 'Chocolate Base', type: ItemTypes.CAKE_ITEM },
    { name: 'Vanilla Base', type: ItemTypes.CAKE_ITEM },
    // Add more cake bases as needed
  ];

  const cakeDecorations = [
    { name: 'Sprinkles', type: ItemTypes.CAKE_ITEM },
    { name: 'Fruits', type: ItemTypes.CAKE_ITEM },
    // Add more cake decorations as needed
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mt-5">
        <h2 className="mb-4">Design Your Own Cake</h2>

        <div className="row">
          <div className="col-md-6">
            <h3>Cake Bases</h3>
            <div className="d-flex">
              {cakeBases.map((item) => (
                <DragItem key={item.name} {...item} />
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <h3>Cake Decorations</h3>
            <div className="d-flex">
              {cakeDecorations.map((item) => (
                <DragItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>

        <DropContainer onDrop={handleDrop} />

        <div className="mt-4">
          <h3>Your Cake</h3>
          {selectedItems.map((item, index) => (
            <p key={index}>{`Selected: ${item.name}`}</p>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default DesignCake;
