// CakeOptions.jsx

import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './constants'; // Assuming you have a constants file for item types

const CakeOptions = ({ bakerId, allBases, allDecorations, onDrop }) => {
  const [availableBases, setAvailableBases] = useState([]);
  const [availableDecorations, setAvailableDecorations] = useState([]);

  // Assume a function to fetch data from your database based on the selected baker
  const fetchDataForBaker = async () => {
    try {
      // Fetch data from your database based on the bakerId
      // Example: const data = await fetchBakerData(bakerId);

      // For simplicity, let's assume your database response has the following structure:
      const data = {
        availableBases: [1, 2, 3], // Array of available cake base IDs
        availableDecorations: [4, 5, 6], // Array of available cake decoration IDs
      };

      // Update the available bases and decorations state
      setAvailableBases(data.availableBases);
      setAvailableDecorations(data.availableDecorations);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts or when the bakerId changes
    fetchDataForBaker();
  }, [bakerId]);

  const createDragItem = (id, name, type, image) => {
    const [, drag] = useDrag({
      type,
      item: { id, name, image },
    });

    return (
      <div key={id} ref={drag} className="mb-2" style={{ width: '150px', margin: '8px', cursor: 'move' }}>
        {/* Display your cake item here, e.g., an image or a button */}
        {name}
      </div>
    );
  };

  return (
    <div>
      <h3>Cake Bases</h3>
      <div className="d-flex flex-wrap">
        {allBases
          .filter((base) => availableBases.includes(base.id))
          .map((base) => createDragItem(base.id, base.name, ItemTypes.CAKE_BASE, base.image))}
      </div>

      <h3>Cake Decorations</h3>
      <div className="d-flex flex-wrap">
        {allDecorations
          .filter((decoration) => availableDecorations.includes(decoration.id))
          .map((decoration) =>
            createDragItem(decoration.id, decoration.name, ItemTypes.CAKE_DECORATION, decoration.image)
          )}
      </div>
    </div>
  );
};

export default CakeOptions;
