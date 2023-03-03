import client from './client';

const request = async function (options, store) {
  // success handler
  const onSuccess = function (response) {
    const {
      data: { message }
    } = response;
    return message;
  };

  // error handler
  const onError = function (error) {
    return Promise.reject(error.response);
  };

  // adding success and error handlers to client
  return client(options).then(onSuccess).catch(onError);
};

export default request;
