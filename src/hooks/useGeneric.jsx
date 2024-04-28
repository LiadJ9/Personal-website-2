import { useContext } from 'react';
import { GenericContext } from 'contexts';

const useGeneric = () => {
  return useContext(GenericContext);
};

export default useGeneric;
