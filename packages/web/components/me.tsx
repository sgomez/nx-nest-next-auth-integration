import { useMemo } from 'react';
import useSWR from 'swr';
import { fetcher } from '../fetcher';

interface UserEntity {
  id: string;
  email: string;
}

function Me() {
  const { data } = useSWR<UserEntity>(
    'http://localhost:3000/api/auth/me',
    fetcher
  );

  const me = useMemo(() => (data ? (data as UserEntity) : undefined), [data]);

  return <div>{!me ? 'I am nobody' : `My email is ${me?.email}`}</div>;
}

export default Me;
