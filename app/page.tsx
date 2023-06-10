import React from "react";
import { GetServerSideProps } from "next";
import { checkAuth } from "./api/auth/auth";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { session, redirect } = await checkAuth(context);

  if (redirect) {
    return { redirect };
  }

  // Any additional data fetching logic for the specific page

  return { props: { session } };
};

const HomePage = () => {
  return <div>HomePage</div>;
};

export default HomePage;
