import axios from 'axios';
import React from 'react';

const useRequest = ({ url, method, body }) => {
  const [errors, setErrors] = React.useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      return response.data;
    } catch (error) {
      setErrors(error);
      return errors;
    }
  };

  return [doRequest, errors];
};
export default useRequest;
