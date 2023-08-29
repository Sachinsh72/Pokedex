import useDebounce from '../../hooks/UseDebounce';
import './Search.css'

function Search({updateSearchTerm}){
    const debounceCallBack = useDebounce((e)=> updateSearchTerm(e.target.value))
    return(
        <div className='search-wrapper'> 
            <input 
                id='pokemon-name-search'
                type="text" 
                placeholder="pokemon name...." 
                onChange={debounceCallBack}
            />
        </div>
    )
}

export default Search;