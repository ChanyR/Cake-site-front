import React, { useContext, useState, useEffect } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { fetchData } from '../general/imageGenerator';
import { AppContext } from '../context/context';
import Modal from './model';
import './designCake.css';
import Button from '@mui/material/Button';
import { baseById, decorationById } from '../services/functionApiService';

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
  const [cakeBases, setCakeBases] = useState([]);
  const [cakeDecorations, setCakeDecorations] = useState([]);

  useEffect(() => {
    fetchDataChosenBaker();
  }, [cakeBases, cakeDecorations]);

  const fetchDataChosenBaker = () => {
    fetchBasesChosenBaker();
    fetchDecorationsChosenBaker();
  };

  const fetchBasesChosenBaker = async () => {
    try {
      const basePromises = chosenBaker.cake_bases.map(item => baseById(item));
      const bases = await Promise.all(basePromises);
      setCakeBases(bases);
      console.log(bases);
    } catch (error) {
      console.error('Error fetching bases:', error);
    }
  };

  const fetchDecorationsChosenBaker = async () => {
    try {
      const decorationPromises = chosenBaker.cake_decorations.map(item => decorationById(item));
      const decorations = await Promise.all(decorationPromises);
      setCakeDecorations(decorations);
      console.log(decorations);
    } catch (error) {
      console.error('Error fetching decorations:', error);
    }
  };

  // const fetchBasesChosenBaker =() => {
  //   let array=[]
  //   chosenBaker.cake_bases.map(async (item) => {
  //     let b = await baseById(item);
  //     console.log(b);
  //     array.push(b);
  //   });
  //   setCakeBases(array);
  //   console.log(cakeBases);
  // };

  // const fetchDecorationsChosenBaker = async() => {
  //   let array=[];
  //   await chosenBaker.cake_decorations.map(async (item) => {
  //     let d = await decorationById(item);
  //     console.log(d);
  //     cakeDecorations.push(d);
  //   });
  //   setCakeDecorations(array);
  //   console.log(cakeDecorations);
  // };


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

  // cakeBases = [
  //   { name: 'Chocolate Base', type: ItemTypes.CAKE_ITEM, image: '../public/images/chocolate.jpg' },
  //   { name: 'Vanilla Base', type: ItemTypes.CAKE_ITEM, image: '../public/images/vanilla.jpg' },
  // ];

  // cakeDecorations = [
  //   { name: 'Sprinkles', type: ItemTypes.CAKE_ITEM, image: '../public/images/Rainbow-Sprinkles.png' },
  //   { name: 'Fruits', type: ItemTypes.CAKE_ITEM, image: '../public/images/fruits.jpg' },
  //   { name: 'Nuts', type: ItemTypes.CAKE_ITEM, image: '../public/images/Nuts.png' },
  //   { name: 'Candy', type: ItemTypes.CAKE_ITEM, image: '../public/images/Candy Canes.png' },
  //   { name: 'Mint Leaves', type: ItemTypes.CAKE_ITEM, image: '../public/images/Mint Leaves.jpeg' },
  //   { name: 'Marshmallows', type: ItemTypes.CAKE_ITEM, image: '../public/images/Marshmallows.jpeg' },
  // ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mt-5">
        <h2 className="cake-top-lable mb-4">Design Your Own Cake</h2>
        <div className="cake-top-lable mb-4">
          <div className="row full-order-erea p-3">
            <div className="col-md-6">
              <DropContainer onDrop={handleDrop} selectedItems={selectedItems} />
            </div>

            <div className=" col-md-6 choose-erea">
              <div className="row">
                <div className="col-md-4">
                  <h3 className="cake-top-lable lable">Cake Bases</h3>
                  <div className="d-flex flex-wrap">
                    {cakeBases.length != 0 && cakeBases.map((item) => (
                      <DragItem key={item.name} {...item} />
                    ))}
                  </div>
                </div>

                <div className="col-md-8">
                  <h3 className="cake-top-lable lable">Cake Decorations</h3>
                  <div className="d-flex flex-wrap">
                    {cakeDecorations.length != 0 && cakeDecorations.map((item) => (
                      <DragItem key={item.name} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-4">
          <h3>Your Cake</h3>
          {currentCake.map((item, index) => (
            <div key={index} className="mt-2">
              {item.name}
            </div>
          ))}
        </div> */}






        <div className='d-flex align-items-center justify-content-center'>
          <button color="secondary" onClick={handleShowImage} className="button button-info button-89">
            הצג הדמיה
          </button>

        </div>
        {isModalOpen && <Modal imageURL={imageURL} onClose={closeModal} />}

        {/* {imageURL && (
          <div className="mt-4">
            <h3>Generated Image</h3>
            <div className="mt-2">
              <img src={imageURL} alt="Generated Image" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            </div>
          </div>
        )} */}
      </div>
    </DndProvider>
  );
};

export default DesignCake;
