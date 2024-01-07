import React from 'react';
import { useDrag } from 'react-dnd';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const DragItem = ({ type, name, image, price }) => {
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

export default DragItem;
