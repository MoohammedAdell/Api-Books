import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBooks = async (searchForm) => {
  return await axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchForm}&printType=books&maxResults=40&startindex=0&orderBy=relevance&key=AIzaSyAOnIl7HzFVfaBMYYcmnAaXjtnYHh3nrqI`
    )
    .then((res) => res.data);
};

export default function useBooks(searchForm) {
  return useQuery({
    queryKey: ["books", searchForm],
    queryFn: () => fetchBooks(searchForm),
    
  });
}
