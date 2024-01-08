import React, { useContext, useState } from 'react';
import { AppContext } from '../context/context';

const BakerDetails = () => {
  const {selectedBaker} = useContext(AppContext);
  console.log(selectedBaker);
  console.log(selectedBaker.name);
  // const [bakerDetails, setBakerDetails] = useState({ _id: baker._id, name: baker.name || '', email: baker.email || '', likes: baker.likes.length || '', comments: baker.comments, cake_bases: baker.cake_bases, cake_decorations: baker.cake_decorations });
  
  return (
   
      <div className="container">

        <div >
          <p>
            <strong>Name:</strong> {selectedBaker.name}
          </p>
          <p>
            <strong>Email:</strong> {selectedBaker.email}
          </p>
          <p>
            <strong>Likes:</strong> {selectedBaker.likes}
          </p>
          {/* <p>
            <strong>Comments:</strong>{' '}
            {selectedBaker.comments && selectedBaker.comments.length > 0 ? (
              selectedBaker.comments.map((comment, index) => (
                <span key={index}>{comment.comment}{index !== selectedBaker.comments.length - 1 ? ', ' : ''}</span>
              ))
            ) : (
              'No comments'
            )}
          </p>
          <p>
            <strong>Cake Bases:</strong>{' '}
            {selectedBaker.cake_bases && selectedBaker.cake_bases.length > 0 ? (
              selectedBaker.cake_bases.map((base, index) => (
                <span key={index}>{base}{index !== selectedBaker.cake_bases.length - 1 ? ', ' : ''}</span>
              ))
            ) : 'No cake bases'}
          </p>
          <p>
            <strong>Cake Decorations:</strong>{' '}
            {selectedBaker.cake_decorations && selectedBaker.cake_decorations.length > 0 ? (
              selectedBaker.cake_decorations.map((decoration, index) => (
                <span key={index}>{decoration}{index !== selectedBaker.cake_decorations.length - 1 ? ', ' : ''}</span>
              ))
            ) : 'No cake decorations'}
          </p> */}
        </div>
      </div>
   
  );
};

export default BakerDetails;
