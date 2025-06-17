import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const productsUri = import.meta.env.VITE_API_PRODUCTS_URI;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(`${apiBaseUrl}${productsUri}`);
      return res.data;
    },
  });

  console.log("data", data);

  if (!data) return <div>No data available</div>;

  return <div>Hey! Working with react</div>;
};

export default App;