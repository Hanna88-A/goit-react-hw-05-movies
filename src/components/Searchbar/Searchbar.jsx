import { useState} from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Search, SearchForm, SearchButton, SearchButtonLabel, SearchFormInput } from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export default function Searchbar({onSubmit}) {
    const [query, setQuery] = useState('');
    
    const handleChange = evt => {
         setQuery(evt.currentTarget.value.toLowerCase());
    };
    
    const handleSubmit = evt => {
        evt.preventDefault();
        
        if (evt.currentTarget.elements.query.value.trim() === '') {
            Notify.failure('Еnter the name of the movie!');
           return
        };
        onSubmit(query)
        evt.currentTarget.reset();
       
    };

    return (
        <>
            <Search>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchButton type="submit">
                        <FiSearch size='20'/>
                        <SearchButtonLabel>
                            Search
                        </SearchButtonLabel>
                    </SearchButton>
                    <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                        name='query'
                        value={query}
                        onChange={handleChange}
                    />
                </SearchForm>
            </Search>
             
        </>
    )
}

