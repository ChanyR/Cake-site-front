// DesignCake.jsx
import './designCake.css'
import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  CAKE_ITEM: 'cakeItem',
};

const DragItem = ({ name, type, image }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type,
    item: { name, image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div style={{ display: 'inline-block', marginRight: '10px' }}>
      <div ref={drag} className="card" style={{ cursor: 'move', margin: '8px' }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

const DropContainer = ({ onDrop, selectedItems }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CAKE_ITEM,
    drop: (item) => onDrop(item),
  });

  return (
    <div ref={drop} className="card border-dashed" style={{ minHeight: '200px', padding: '16px' }}>
      <div className="card-body">
        <p className="card-text">Drop here</p>
        <div className='d-flex'>
        {selectedItems.map((item, index) => (
          <div key={index} className="mt-2 dragging ">
            <img src={item.image} alt={item.name} style={{ marginRight: '5px' ,maxWidth: '100px', maxHeight:'100px'}} />
            {item.name}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

const DesignCake = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentCake, setCurrentCake] = useState([]);

  const handleDrop = (item) => {
    const updatedItems = [...selectedItems, item];
    setSelectedItems(updatedItems);
    setCurrentCake(updatedItems);
  };

  const cakeBases = [
    { name: 'Chocolate Base', type: ItemTypes.CAKE_ITEM, image: '../images/' },
    { name: 'Vanilla Base', type: ItemTypes.CAKE_ITEM, image: 'vanilla.jpg' },
    // Add more cake bases as needed
  ];

  const cakeDecorations = [
    { name: 'Sprinkles', type: ItemTypes.CAKE_ITEM, image: '../images/sprinkles.jpg' },
    { name: 'Fruits', type: ItemTypes.CAKE_ITEM, image: '../images/fruit.jpg' },
    // Add more cake decorations as needed
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mt-5">
        <h2 className="mb-4">Design Your Own Cake</h2>

        <div className="row">
          <div className="col-md-6">
            <h3>Cake Bases</h3>
            <div className="d-flex overflow-hidden w=100 h=100">
              {cakeBases.map((item) => (
                <DragItem key={item.name} {...item} />
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <h3>Cake Decorations</h3>
            <div className="d-flex">
              {cakeDecorations.map((item) => (
                <DragItem key={item.name} {...item} style="background-image: url('item.nameeee.jpg'); background-size: cover; background-position: center; height: 100vh; border:3px solid red;" />
              ))}
            </div>
          </div>
        </div>
        <div className="dragging container">
          <DropContainer onDrop={handleDrop} selectedItems={selectedItems}  />
        </div>
        <div className="mt-4">
          <h3>Your Cake</h3>
          {currentCake.map((item, index) => (
            <div key={index} className="mt-2" >
              {/* <img src={item.image} alt={item.name} style={{ marginRight: '5px' }} /> */}
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default DesignCake;
