import { useId} from 'react'
import './filters.css'
import { useFilters } from '../hooks/useFilters.js';

export const Filter = ()=>{
    const {filters , setFilters} = useFilters()
    const minPriceFilterId = useId();
    const categoryFilterId = useId();
    //tener una sola fuente de la verdad
    const hanlderChangePrice = (event)=>{
        setFilters(prevState=>{
            return {
                ...prevState,
                minPrice: event.target.value
            }
        })
    }
    const handlerChangeCategory = (event)=>{
        setFilters(prevState=>{
            return {
                ...prevState,
                category: event.target.value
            }
        })
    }

    return (
        <section className="filters">   
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={hanlderChangePrice}
                    value={filters.minPrice}
                />
                <span>{filters.minPrice}</span>
                <div>
                    <label htmlFor={categoryFilterId}>Categoria</label>
                    <select id={categoryFilterId} onChange={handlerChangeCategory}>
                        <option value="all">Todas</option>
                        <option value="laptops">Portatiles</option>
                        <option value="smartphones">Celulares</option>
                    </select>
                </div>
            </div>
        </section>
    )
}