import React from "react";
import { MainLayout } from "../../layout/MainLayout";
import { useSearchParams } from "react-router-dom";

export const EmailVerification = () => {
  let [searchParams] = useSearchParams();

  const email = searchParams.get("e");
  const verificationCode = searchParams.get("c");
  //   console.log(searchParams.get("e"));
  //   console.log(searchParams.get("c"));

  return (
    <MainLayout>
      <h1>Email verification to do</h1>
      {email} || {verificationCode}
    </MainLayout>
  );
};

// http://localhost:3000/admin-verification?e=uyuyuyu@outlook.com&c=e04b1a51-014d-4ea1-9d03-6146fb24471c
