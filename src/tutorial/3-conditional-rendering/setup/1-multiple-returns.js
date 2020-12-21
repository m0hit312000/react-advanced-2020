import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState('Default User');
  
  useEffect(() => {
    fetch(url)
    .then((resp) => {
      if(resp.status >= 200 && resp.status <= 299) {
        return resp.json();
      }
      else {
        setLoading(false);
        setError(true);
        throw new Error(resp.statusText);
      }
    })
    .then((user) => {
      const {login} = user;
      setUser(login);
      setLoading(false);
    })
    .catch(error => console.log(error)); 
  }, []);

  if(isLoading) {
     return(
       <div>
        <h1>Loading...</h1>
       </div>
     );
  }
  if(isError) {
    return(
      <div>
       <h1>Error...</h1>
      </div>
    );
 }
  return(
    <div>
     <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
