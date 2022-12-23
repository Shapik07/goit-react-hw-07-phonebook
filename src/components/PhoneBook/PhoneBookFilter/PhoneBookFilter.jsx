import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'components/redux/selectors';
import { setFilter } from 'components/redux/filterSlice';

import { Label, Input } from './PhoneBookFilter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={changeFilter}></Input>
    </Label>
  );
};
