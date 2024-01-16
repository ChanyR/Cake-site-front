import React, { useContext, useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from './DragItem';
import DropContainer from './DropContainer';
import Modal from './model';
import { fetchData } from '../general/imageGenerator';
import { AppContext } from '../context/context';
import Button from '@mui/material/Button';
import './designCake.css';

const ItemTypes = {
  CAKE_ITEM: 'cakeItem',
};

const DesignCake = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentCake, setCurrentCake] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { chosenBaker, setChosenBaker, total, setTotal } = useContext(AppContext);

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


  const calculateTotal = () => {
    let tempPrice = 0;
    console.log(selectedItems);
    selectedItems.forEach((item) => {
      console.log(item.price);
      tempPrice += item.price;
    });
    setTotal(tempPrice)
    console.log(total);
  };

  useEffect(() => {
    // Call calculateTotal whenever selectedItems change
    calculateTotal();
  }, [selectedItems]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div style={{margin:0, display:"flex", alignItems:"center", justifyContent:"space-around"}}>
          <h2 style={{margin:"0 auto"}} className="cake-top-lable mb-4">Design Your Own Cake</h2>
          <h4 style={{}}>price: {total}</h4>
        </div>
        <div className="cake-top-lable mb-4">
          <div className="row full-order-erea p-3" >
            <div className="col-md-6" >
              <DropContainer onDrop={handleDrop} selectedItems={selectedItems} />
            </div>

            <div className=" col-md-6" >
              {/* <div className="row"> */}
                <div className="col-md-12 cake-bases choose-erea ">
                  <h3 className="cake-top-lable lable">Cake Bases</h3>
                  <div className="d-flex flex-wrap">
                    {chosenBaker.cake_bases && chosenBaker.cake_bases.map((item) => (
                      <DragItem key={item._id} type={ItemTypes.CAKE_ITEM} name={item.cake_base} image={item.image} price={item.price} />
                    ))}
                  </div>
                </div>

                <div className="col-md-12 cake-deco choose-erea mt-2">
                  <h3 className="cake-top-lable lable">Cake Decorations</h3>
                  <div className="d-flex flex-wrap">
                    {chosenBaker.cake_decorations && chosenBaker.cake_decorations.map((item) => (
                      <DragItem key={item._id} type={ItemTypes.CAKE_ITEM} name={item.decoration} image={item.image} price={item.price} />
                    ))}
                  </div>
                </div>
              {/* </div> */}
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
