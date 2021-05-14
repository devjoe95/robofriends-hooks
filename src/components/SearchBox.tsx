import React from 'react';

interface ISearchBoxProps {
  searchChange(event:React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = (props:ISearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={props.searchChange}
      />
    </div>
  );
}

export default SearchBox;