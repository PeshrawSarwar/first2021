import axios from "axios";

const url = "http://localhost:8000/api/admins/";
const token = { Authorization: `Bearer ${localStorage.adminsToken}` };

export const additems = async formData => {
    return await axios
        .post(url + "add/items", formData, {
            headers: token
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getitems = async () => {
    return await axios
        .get(url + "get/items", {
            headers: token
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getitemsCount = async () => {
    return await axios
        .get(url + "get/items/count", {
            headers: { Authorization: `Bearer ${localStorage.adminsToken}` }
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
};

export const handlePage = async pageNumber => {
    return await axios
        .get(url + "get/items?page=" + pageNumber, {
            headers: token
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
};

export const edititems = async id => {
    return await axios
        .get(url + "edit/items/" + id, {
            headers: token
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
};

export const updateitems = async (id, formData) => {
    return await axios
        .post(url + "update/items/" + id, formData, {
            headers: token
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
};
