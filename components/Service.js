import axios from 'axios'

const getAll = (url) => axios.get(url);

const getById = (url, userId) => axios.get(`${url}/${userId}`);

// const addUser = (url, obj) => axios.post(url, obj);
const addUser = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const updateItem = (url, userId, obj) => axios.patch(`${url}/${userId}`, obj);


const AddSensor = async (url, sensor) => {
    try {
        const response = await axios.post(`${url}`, sensor);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const DeleteSensor = async (url, sensor) => {
    try {
        const response = await axios.post(`${url}`, sensor);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}


export {DeleteSensor,AddSensor, addUser, getById, getAll, updateItem };

// import axios from 'axios'

// const getAll = (url) => axios.get(url);

// const getById = (url, userId) => axios.get(`${url}/${userId}`);

// const addItem = (url, obj) => axios.post(url, obj);

// const updateItem = (url, userId, obj) => axios.patch(`${url}/${userId}`, obj);

// export const addUser = async (url, user) => {
//     try {
//         const response = await axios.post(`${url}`, user);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

