import { useContext } from "react";
import { FilterContext } from "../context/filters.jsx";
export const useFilters = ()=>{
    //const [filters, setFilters] = useState({
     // category: "all",
     // minPrice: 0
     //});
      const {filters, setFilters} = useContext(FilterContext);
     const filterProducts = (productsF)=>{
      return productsF.filter(item=>{
        return (
          item.price >= filters.minPrice &&
          (
            filters.category === "all" ||
            item.category === filters.category
          )
        )
      })
     }
     return {filters, filterProducts, setFilters};
  }