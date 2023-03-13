import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://example-data.draftbit.com',
});

export const getBooks = async (pageNumber = 1, options = {}) => {
  const response = await api.get(
    `/books?_page=${pageNumber}&_limit=10`,
    options
  );

  return response.data;
};
