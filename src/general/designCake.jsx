import React, { useContext, useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { fetchData } from '../general/imageGenerator';
import { AppContext } from '../context/context';
import Modal from './model'; // Assuming the Modal component is in the same directory
import './designCake.css';

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

  return (
    <Card
      ref={drag}
      className="mb-2"
      sx={{
        width: 150,
        margin: 2,
        cursor: 'move',
        opacity: isDragging ? 0.4 : 1,
      }}
    >
      <CardMedia component="img" alt={name} height="140" image={image} />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

const DropContainer = ({ onDrop, selectedItems }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CAKE_ITEM,
    drop: (item) => onDrop(item),
  });

  return (
    <div
      ref={drop}
      className="card border-dashed mb-2  choose-erea"
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

const DesignCake = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentCake, setCurrentCake] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { chosenBaker, setChosenBaker } = useContext(AppContext);

  const handleDrop = (item) => {
    const updatedItems = [...selectedItems, item];
    setSelectedItems(updatedItems);
    setCurrentCake(updatedItems);
  };

  const handleShowImage = async () => {
    try {
      const prompt = selectedItems.map((item) => item.name).join(' ');
      const imageUrl = await fetchData(prompt);
      setImageURL(imageUrl);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cakeBases = [
    { name: 'Chocolate Base', type: ItemTypes.CAKE_ITEM, image: '../public/images/chocolate.jpg' },
    { name: 'Vanilla Base', type: ItemTypes.CAKE_ITEM, image: '../public/images/vanilla.jpg' },
    // Add more cake bases as needed
  ];

  const cakeDecorations = [
    { name: 'Sprinkles', type: ItemTypes.CAKE_ITEM, image: '../public/images/Rainbow-Sprinkles.png' },
    { name: 'Fruits', type: ItemTypes.CAKE_ITEM, image: '../public/images/fruits.jpg' },
    { name: 'Nuts', type: ItemTypes.CAKE_ITEM, image: '../public/images/Nuts.png' },
    { name: 'Candy', type: ItemTypes.CAKE_ITEM, image: '../public/images/Candy Canes.png' },
    { name: 'Mint Leaves', type: ItemTypes.CAKE_ITEM, image: '../public/images/Mint Leaves.jpeg' },
    { name: 'Marshmallows', type: ItemTypes.CAKE_ITEM, image: '../public/images/Marshmallows.jpeg' },
    // Add more cake decorations as needed
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mt-5">
        <h2 className="cake-top-lable mb-4">Design Your Own Cake</h2>

        <div className="row full-order-erea p-3">
          <div className="col-md-6">
            <DropContainer onDrop={handleDrop} selectedItems={selectedItems} />
          </div>

          <div className=" col-md-6 choose-erea">
            <div className="row">
              <div className="col-md-4">
                <h3 className="cake-top-lable lable">Cake Bases</h3>
                <div className="d-flex flex-wrap">
                  {cakeBases.map((item) => (
                    <DragItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              <div className="col-md-8">
                <h3 className="cake-top-lable lable">Cake Decorations</h3>
                <div className="d-flex flex-wrap">
                  {cakeDecorations.map((item) => (
                    <DragItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3>Your Cake</h3>
          {currentCake.map((item, index) => (
            <div key={index} className="mt-2">
              {item.name}
            </div>
          ))}
        </div>

        <button onClick={handleShowImage} className="button button-info">
          הצג הדמיה
        </button>

        {isModalOpen && <Modal imageURL={imageURL} onClose={closeModal} />}

        {imageURL && (
          <div className="mt-4">
            <h3>Generated Image</h3>
            <div className="mt-2">
              <img src={imageURL} alt="Generated Image" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default DesignCake;
