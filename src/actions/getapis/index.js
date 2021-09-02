import axios from 'axios';
import { API_ROOT } from 'utilities/constants';

export const updateBoard = async (id, data) => {
  const response = await axios.put(`${API_ROOT}/v1/boards/${id}`, data);
  return response.data;
};

export const getFullBoards = async (id) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${id}`);
  return response.data;
};

export const createNewColumn = async (data) => {
  const response = await axios.post(`${API_ROOT}/v1/columns`, data);
  return response.data;
};

export const createNewCard = async (data) => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, data);
  return response.data;
};

export const updateColumn = async (id, data) => {
  const response = await axios.put(`${API_ROOT}/v1/columns/${id}`, data);
  return response.data;
};

export const updateCard = async (id, data) => {
  const response = await axios.put(`${API_ROOT}/v1/cards/${id}`, data);
  return response.data;
};
