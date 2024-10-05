import { createContext, useState } from "react";
//1.Crear el contexto
//Este tenemos que consumir
export const FilterContext =createContext();

//2.crear el provider para proveer el contexto
//Este es el que provee el acceso a los datos
export const FilterProvider =  ({children})=>{
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    });
    return <FilterContext.Provider value={
        {
           filters, 
           setFilters
        }
    }>
        {children}
    </FilterContext.Provider>
}