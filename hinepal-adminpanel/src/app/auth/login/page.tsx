'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getCookie, setCookie } from '@/utils/cookie-handler';
import endpoints from '@/utils/endpoints';
import { post } from '@/utils/request-helper';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    if (email && password) {
      setLoading(true);
      await post({
        endPoint: endpoints.LOGIN,
        data: {
          email,
          password,
        },
        success: async (message, res) => {
          await setCookie('token', res.data.token);
          router.push('/');
          setLoading(false);
        },
        failure: () => {
          setLoading(false);
        },
      });
    }
  }
  useEffect(() => {
    (async () => {
      const token = await getCookie('token');
      if (token) {
        router.push('/');
      }
    })();
  });
  return (
    <main className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white grid gap-4 p-8 min-w-[400px]'>
        <h1>Login </h1>
        <Input type='email' name='email' placeholder='Email' />
        <Input type='password' name='password' placeholder='Password' />
        <Button type='submit'>{loading ? 'Loading...' : 'Login'}</Button>
      </form>
    </main>
  );
};

export default Login;
