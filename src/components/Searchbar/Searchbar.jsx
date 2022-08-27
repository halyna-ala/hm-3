import { useState } from 'react';
import { SearchbarStyle, InputWrap,
	SearchFormInput, } from './Searchbar.styled';
import SearchbarForm from '../SearchbarForm';
import { PropTypes } from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
	const [searchQuery, setSearchQuery]= useState('');

	const handleChange = e => {
		setSearchQuery(e.target.value.toLowerCase());
	  };
	
	  const handleSubmit = e => {
		e.preventDefault();
		if (searchQuery.trim() === '') {
		  return alert('Please enter something');
		}
		onSubmit(searchQuery);
		
	  };
	return (
		<SearchbarStyle>
			<SearchbarForm onSubmit={handleSubmit}>
			<InputWrap>
          <SearchFormInput
            className="SearchForm-input "
			type="text"
			autoComplete="off"
			autoFocus
			placeholder="Search images and photos"
			name="searchQuery"
			value={searchQuery}
			onChange={handleChange}
          />
          <div>
            <span></span>
          </div>
          <button type="submit">
            <span>Finde</span>
          </button>
        </InputWrap>
		</SearchbarForm >
		</SearchbarStyle>
	);
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
