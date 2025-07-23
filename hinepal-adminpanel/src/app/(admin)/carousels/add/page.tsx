'use client';
import InputField from '@/components/inputs/inputfield';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { getCookie } from '@/utils/cookie-handler';
import endpoints from '@/utils/endpoints';
import { postWithFile } from '@/utils/request-helper';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

const carouselFormSchema = z.object({
  title: z.string(),
  page: z.string(),
  image: z.any(),
  description: z.string().optional(),
  subtitle: z.string().optional(),
  link: z.string().optional(),
});
type CarouselFormValues = z.infer<typeof carouselFormSchema>;

const Carousels = () => {
  const router = useRouter();
  const form = useForm<CarouselFormValues>({
    resolver: zodResolver(carouselFormSchema),
    defaultValues: {
      title: '',
      page: '',
      description: '',
      subtitle: '',
      link: '',
    },
  });
  const onSubmit = async (data: CarouselFormValues) => {
    const formData = new FormData();
    Object.entries(data).forEach(([Key, value]) => {
      formData.append(Key, value);
    });
    await postWithFile({
      endPoint: endpoints.CAROUSELS,
      data: formData,
      token: await getCookie('token'),
      success: (message, data) => {
        toast.dismiss();
        toast.success(message);
        router.push('/carousels');
      },
      failure: (message) => {
        toast.dismiss();
        toast.error(message);
      },
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=' bg-white m-4 p-4 grid lg:grid-cols-2 gap-4'>
          <InputField form={form} label='Title' name='title' type='text' />
          <InputField form={form} label='Page' name='page' type='text' />
          <InputField
            form={form}
            label='Description'
            name='description'
            type='text'
          />
          <InputField
            form={form}
            label='Subtitle'
            name='subtitle'
            type='text'
          />
          <InputField form={form} label='Link' name='link' type='url' />
          <InputField form={form} label='Link' name='image' type='file' />
          <Button type='submit' className='lg:col-span-2 w-fit '>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Carousels;
