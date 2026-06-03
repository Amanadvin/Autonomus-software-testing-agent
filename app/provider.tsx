"use client";
import { UserDetailContent } from '@/context/UserDeatilContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 const [userDetail, setUserDetail] = useState<any>();

  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post('/api/users', {});
      console.log("Result", result);
      setUserDetail(result.data?.user ?? null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserDetailContent.Provider value={{ userDetail, setUserDetail }}>
    <div>{children}</div>
    </UserDetailContent.Provider>
  );
}

export default Provider;