import React, { useContext, useState } from 'react';
import { AppContext } from '../context/context';
import Axios from 'axios';
import { Typography, Button, TextField, Paper, Avatar } from '@mui/material';

// Import makeStyles from @mui/system
import { styled } from '@mui/system';
import {updateUserApi} from '../services/functionApiService'


const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  input: {
    display: 'none',
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const { user, setUser } = useContext(AppContext);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageUrl = await uploadImage(file);

        setUser((prevData) => ({
          ...prevData,
          image: imageUrl,
        }));
        await updateUserApi(user._id, { name: user.name, email: user.email, role: user.role,image:imageUrl });
        // await updateUserApi(user.id,user)
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
      }
    }
  };

  const uploadImage = async (file) => {
    if (!file) {
      throw new Error('No file provided');
    }

    try {
      const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dwwvof9x3/image/upload';
      const uploadPreset = 'vqxjlzqi';

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

      const response = await Axios.post(cloudinaryUrl, formData);

      if (response.status === 200) {
        return response.data.secure_url;
      } else {
        console.error('Cloudinary Response:', response);
        throw new Error('Failed to upload image to Cloudinary');
      }
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw error;
    }
  };

  const handleEditSubmit = async() => {
    setUser((prevData) => ({
      ...prevData,
      name: newName,
      email: newEmail,
    }));
    await updateUserApi(user._id, { name: user.name, email: user.email, role: user.role,image:user.image });

    setEditing(false);
  };

  return (
    <Paper elevation={3} className={classes.root} >
      {console.log(user.image)}
      <Avatar alt={user.name} src={user.image} className={classes.avatar} />
      <input type="file" name="image" onChange={handleImageChange} className={classes.input} />

      {editing ? (
        <>
          <TextField
            label="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleEditSubmit}>
            Save
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="body1">{user.email}</Typography>
          <Button variant="outlined" onClick={() => setEditing(true)}>
            Edit
          </Button>
        </>
      )}
    </Paper>
  );
};

export default UserProfile;
