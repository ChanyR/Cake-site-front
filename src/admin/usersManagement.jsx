import React, { useContext, useEffect, useState } from 'react';
import { changeUserToBakerApi, deleteUserApi, fetchBakerListData, fetchUsersListData, updateUserApi } from '../services/functionApiService';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CakeIcon from '@mui/icons-material/Cake';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { AppContext } from '../context/context';
import EditUserModal from './editUserModal';

const UsersManagement = () => {
    const { usersList, setUsersList } = useContext(AppContext);
    const { bakers, setBakers } = useContext(AppContext);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const editUser = (user) => {
        setSelectedUser(user);
        setIsEditModalOpen(true);
    };

    const saveUser = async (user) => {
        console.log("save", user._id);
        await updateUserApi(user._id, { name: user.name, email: user.email, role: user.role });
        await fetchUsersListData({ usersList, setUsersList }, true);
        await fetchBakerListData({ bakers, setBakers }, true);
    };

    const deleteUser = async (userId) => {
        const userConfirmed = window.confirm('האם אתה בטוח שברצונך למחוק משתמש זה?');
        if (userConfirmed) {
            console.log('delete' + userId);
            let resp = await deleteUserApi(userId);
            await fetchBakerListData({ bakers, setBakers }, true);
            await fetchUsersListData({ usersList, setUsersList }, true);
            if (resp[0].msg == 'You are not admin') {
                alert('הנך לא מאושר למחוק משתמש');
            }
        }
    };

    const promoteToBaker = async (userId) => {
        const userConfirmed = window.confirm('האם אתה בטוח שברצונך להפוך את המשתמש לאופה?');
        if (userConfirmed) {
            console.log('promote to baker' + userId);
            await changeUserToBakerApi(userId);
            await fetchUsersListData({ usersList, setUsersList }, true);
            await fetchBakerListData({ bakers, setBakers }, true)
        }
    };

    useEffect(() => {
        console.log('Effect is running');
        fetchUsersListData({ usersList, setUsersList });
    }, [usersList,bakers]);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">ניהול משתמשים</h2>

            <ul className="list-group">
                {usersList.map((user) => (
                    <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                            {user.role} - <strong>{user.name}</strong>
                        </span>
                        <div>
                            {user.role === 'user' && (
                                <span onClick={() => promoteToBaker(user._id)}>
                                    <SwapHorizIcon />
                                </span>
                            )}
                            <span className="mx-4" onClick={() => editUser(user)}>
                                <EditIcon fontSize="small" />
                            </span>
                            <span onClick={() => deleteUser(user._id)}>
                                <DeleteIcon fontSize="small" />
                            </span>

                        </div>

                    </li>
                ))}
            </ul>

            {isEditModalOpen && (
                <EditUserModal
                    user={selectedUser}
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={saveUser}
                />
            )}
        </div>
    );
};

export default UsersManagement;
