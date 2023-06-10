import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

export async function checkAuth(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const redirect = !session
    ? {
        destination: '/login',
        permanent: false,
      }
    : null;
  return { session, redirect };
}