import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, selectSearchTerm } from '../redux/searchSlice';

export default function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearch = ({ target }) => {
    const { value } = target;
    dispatch(setSearchTerm(value));
  };

  return (
    <div className="ui icon input">
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearch}
        placeholder="Search Coin"
      />
      <i className="search icon" />
    </div>
  );
}
