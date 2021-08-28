import axios from 'axios';

export const getFullBoards = async (id) => {
  const response = await axios.get(`http://localhost:8017/v1/boards/${id}`);
  return response.data;
};
