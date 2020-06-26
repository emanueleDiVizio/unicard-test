import {useEffect} from 'react';
import {thunks} from '../state/user';
import {useSelector, useDispatch} from 'react-redux';

const useUserList = () => {
  const dispatch = useDispatch();
  const {users, isLoading, error} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(thunks.getUsers());
  }, [dispatch]);

  return {users, isLoading, error};
};

export default useUserList;
