import axios from 'axios';

export const updateBoard = async (id,data) => {
  const response = await axios.put(`http://localhost:8017/v1/boards/${id}`,data);
  return response.data;
};

export const getFullBoards = async (id) => {
  const response = await axios.get(`http://localhost:8017/v1/boards/${id}`);
  return response.data;
};

export const createNewColumn = async (data) => {
  const response = await axios.post('http://localhost:8017/v1/columns', data);
  return response.data;
};

export const createNewCard = async (data) => {
  const response = await axios.post('http://localhost:8017/v1/cards', data);
  return response.data;
};

export const updateColumn = async (id,data) => {
  const response = await axios.put(`http://localhost:8017/v1/columns/${id}`, data);
  return response.data;
};

export const updateCard = async (id,data) => {
  const response = await axios.put(`http://localhost:8017/v1/cards/${id}`, data);
  return response.data;
};

