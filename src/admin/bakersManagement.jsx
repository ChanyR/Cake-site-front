import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal';
import { apiRequestGet, API_URL } from '../services/apiService';
import { deleteBakerApi, fetchBakerListData, fetchUsersListData, updateBakerApi } from '../services/functionApiService';
import { AppContext } from '../context/context';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditBakerModal from './editBakerModal';

Modal.setAppElement('#root');

const BakersManagement = () => {
    const { usersList, setUsersList } = useContext(AppContext);
    const { bakers, setBakers } = useContext(AppContext);
    const [selectedBaker, setSelectedBaker] = useState(null);

    const editBaker = (bakerId) => {
        console.log("edit" + bakerId);
        const bakerToEdit = bakers.find(baker => baker._id === bakerId);
        setSelectedBaker(bakerToEdit);
    };

    const handleSaveEdit = async (baker) => {
        console.log("save", baker._id);
        await updateBakerApi(baker._id, { name: baker.name, email: baker.email, likes: baker.likes });
        await fetchBakerListData({ bakers, setBakers }, true);
    };

    const deleteBaker = async (bakerId) => {
        const userConfirmed = window.confirm("האם אתה בטוח שברצונך למחוק אופה זה?");
        if (userConfirmed) {
            console.log("delete" + bakerId);
            await deleteBakerApi(bakerId);
            await fetchBakerListData({ bakers, setBakers }, true);
            await fetchUsersListData({ usersList, setUsersList }, true);
        }
    }
    useEffect(() => {
        console.log('Effect is running');
        fetchBakerListData({ bakers, setBakers });
    }, []);



    return (
        <div className="container mt-5">
            <h2 className="text-center my-4">ניהול אופים</h2>

            <ul className="list-group">
                {bakers.map((baker) => (
                    <li key={baker._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {baker.name}
                        <div>
                            <span className="mx-4" onClick={() => editBaker(baker._id)}>
                                <EditIcon fontSize="small" />
                            </span>
                            <span onClick={() => deleteBaker(baker.user_id)}>
                                <DeleteIcon fontSize="small" />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedBaker != null && <EditBakerModal
                baker={selectedBaker}
                isOpen={!!selectedBaker}
                onClose={() => setSelectedBaker(null)}
                onSave={handleSaveEdit}
            />}
        </div>)
}

export default BakersManagement