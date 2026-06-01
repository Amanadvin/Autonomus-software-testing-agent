"use client";
import axios from 'axios';
import React, { useEffect } from 'react';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post('/api/users', {});
      console.log("Result", result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>{children}</div>
  );
}

export default Provider;