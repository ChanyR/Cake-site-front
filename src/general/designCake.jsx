import React, { useContext, useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from './DragItem';
import DropContainer from './DropContainer';
import Modal from './model';
import { fetchData } from '../general/imageGenerator';
import { AppContext } from '../context/context';
import Button from '@mui/material/Button';
import { baseById, decorationById } from '../services/functionApiService';
import './designCake.css'

const ItemTypes = {
  CAKE_ITEM: 'cakeItem',
};

const DesignCake = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentCake, setCurrentCake] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { chosenBaker, setChosenBaker } = useContext(AppContext);
  const [cakeBases, setCakeBases] = useState([]);
  const [cakeDecorations, setCakeDecorations] = useState([]);
  let array = [];
  let array2 = [];

  useEffect(() => {
    fetchDataChosenBaker();
  }, []);

  const fetchDataChosenBaker = async() => {
    let base_arr=await fetchBasesChosenBaker();
    setCakeBases(base_arr);
    let decoration_arr=await fetchDecorationsChosenBaker();
    setCakeDecorations(decoration_arr);
  };

  const fetchBasesChosenBaker = () => {
    chosenBaker.cake_bases.map(async (item) => {
      let b = await baseById(item);
      array.push(b);
    });
    console.log(array);
    return array;
    // console.log(cakeBases);
    // setCakeBases(array);
  };
  console.log(cakeBases);


  const fetchDecorationsChosenBaker = async () => {
    await chosenBaker.cake_decorations.map(async (item) => {
      let d = await decorationById(item);
      array2.push(d);
    });
    console.log(array2);
    return array2
    // setCakeDecorations(array2);
    // console.log(cakeDecorations);
  };
  console.log(cakeDecorations);


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

        <div className='d-flex align-items-center justify-content-center'>
          <button color="secondary" onClick={handleShowImage} className="button button-info button-89">
            הצג הדמיה
          </button>
        </div>
        {isModalOpen && <Modal imageURL={imageURL} onClose={closeModal} />}
      </div>
    </DndProvider>
  );
};

export default DesignCake;
