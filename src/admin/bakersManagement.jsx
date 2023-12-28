import React, { useContext, useEffect } from 'react'
import { apiRequestGet, API_URL } from '../services/apiService';
import { fetchBakerListData } from '../services/functionService';
import { AppContext } from '../context/context';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const BakersManagement = () => {

    const { bakers, setBakers } = useContext(AppContext);

    useEffect(() => {
        console.log('Effect is running');
        fetchBakerListData({ bakers, setBakers });
    }, []);

    const editBaker = (bakerId) => {
        console.log("edit" + bakerId);
    }

    const deleteBaker = (bakerId) => {
        console.log("delete" + bakerId);
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Bakers Management</h2>

            <ul className="list-group">
                {bakers.map((baker) => (
                    <li key={baker._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {baker.name}
                        <div>
                            <span className="mx-4" onClick={()=>editBaker(baker._id)}>
                                <EditIcon fontSize="small" />
                            </span>
                            <span onClick={deleteBaker(()=>baker._id)}>
                                <DeleteIcon fontSize="small" />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>)
}

export default BakersManagement