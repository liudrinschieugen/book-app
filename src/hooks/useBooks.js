import { useEffect, useState } from 'react';
import { getBooks } from '../api/axios';

const useBooks = (pageNumber) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getBooks(pageNumber, { signal })
      .then((res) => {
        setBooks((prevState) => [...prevState, ...res]);
        setNextPage(Boolean(res.length));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setError({ message: e.message });
      });

    return () => controller.abort();
  }, [pageNumber]);

  return { books, isLoading, isError, error, nextPage };
};

export default useBooks;
