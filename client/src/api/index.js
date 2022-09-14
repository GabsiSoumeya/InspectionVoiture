import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchDemandes = () => axios.get(url);
export const createDemande = (newDemande) => axios.post(url, newDemande);
export const updateDemande = (id, updatedDemande) => axios.patch(`${url}/${id}`, updatedDemande);
export const deleteDemande = (id) => axios.delete(`${url}/${id}`);

export const fetchMarque = () => axios.get(url + '/api/marque/getAll');
export const createMarque = (newMarque) => axios.post(url, newMarque);
export const updateMarque = (id, updatedMarque) => axios.patch(`${url}/${id}`, updatedMarque);
export const deleteMarque = (id) => axios.delete(`${url}/${id}`);

export const fetchModele = () => axios.get(url + '/api/modele/getAll');

export const register = () => axios.post(url+ '/api/user/register');
export const login =() => axios.post(url+ '/api/user/login');
export const postResetPassword =() => axios.post(url+'/api/auth/reset-password');
export const postForgotPassword =() => axios.post(url+'/api/auth/forgot-password');

