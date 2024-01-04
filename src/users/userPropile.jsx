
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/context';
import Axios from 'axios';
import { Typography, Button, TextField, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { updateUserApi } from '../services/functionApiService';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: 400,
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    marginTop: theme.spacing(2),
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
        await updateUserApi(user._id, { name: user.name, email: user.email, role: user.role, image: imageUrl });
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

  const handleEditSubmit = async () => {
    setUser((prevData) => ({
      ...prevData,
      name: newName,
      email: newEmail,
    }));
    await updateUserApi(user._id, { name: newName, email: newEmail, role: user.role, image: user.image });

    setEditing(false);
  };

  const handleRemoveImage = async () => {
    try {
      setUser((prevData) => ({
        ...prevData,
        image: "no image",
      }));
      await updateUserApi(user._id, { name: user.name, email: user.email, role: user.role, image: "no image" });
    } catch (error) {
      console.error('Error removing image:', error);
    }
  };

  return (
    <div className={classes.container}>
      <Paper elevation={3} className='align-items-center mb-5'>
      <div className='container d-flex  align-items-center mb-5'>
      <Avatar alt={user.name} src={user.image} className={classes.avatar} />

        <Button component='label' variant='contained' startIcon={<CloudUploadIcon />}>
          <input type='file' style={{ display: 'none' }} onChange={handleImageChange} />
        </Button>

    </div>

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
            <Button variant="outlined" onClick={handleRemoveImage} className={classes.button}>
              Remove Image
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5">{user.name}</Typography>
            <Typography variant="body1">{user.email}</Typography>
            <Button variant="outlined" onClick={() => setEditing(true)} className={classes.button}>
              Edit
            </Button>
            {user.image && (
              <Button variant="outlined" onClick={handleRemoveImage} className={classes.button}>
                Remove Image
              </Button>
            )}
          </>
        )}
      </Paper>
    </div>
  );
};

export default UserProfile;
