'use client';
import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { useForm } from 'react-hook-form';

import InputField from './inputs/inputfield';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { authorSchema, TAuthor } from '@/utils/schema';
import { postAndPatch, uploadImage } from '@/helper/fetch-data';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

const AuthorForm = ({ initialData }: { initialData?: any }) => {
  const form = useForm<TAuthor>({
    resolver: zodResolver(authorSchema),
    defaultValues: initialData,
  });
  const router = useRouter();
  async function onSubmit(data: TAuthor) {
    let image = undefined;
    if (data.profilePicture) {
      image = await uploadImage(data.profilePicture);
      data.profilePicture = image;
    }

    const response = await postAndPatch(
      'authors',
      { ...data, socialLinks: JSON.stringify(data.socialLinks || '{}') },
      data.id
    );
    if (response) {
      router.push('/authors');
      router.refresh();
    }
  }
  return (
    <div className='bg-white container  p-4 m-4 border rounded-md'>
      <Form {...form}>
        <form className='' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid lg:grid-cols-2 gap-4'>
            <InputField form={form} name='name' label='Name' type='text' />
            <InputField
              form={form}
              name='username'
              label='User Name'
              type='text'
            />
          </div>
          <div className='grid lg:grid-cols-2 gap-4'>
            <InputField form={form} name='email' label='Email' type='text' />
            <InputField
              form={form}
              name='profilePicture'
              label='Profile Picture'
              type='file'
            />
          </div>
          <div className='grid lg:grid-cols-2 gap-4'>
            <InputField
              form={form}
              name='socialLinks.facebook'
              label='Facebook Link'
              type='text'
            />
            <InputField
              form={form}
              name='socialLinks.twitter'
              label='Twitter Link'
              type='text'
            />
            <InputField
              form={form}
              name='socialLinks.instagram'
              label='Instagram Link'
              type='text'
            />
            <InputField
              form={form}
              name='socialLinks.linkedin'
              label='Linkedin Link'
              type='text'
            />
          </div>
          <InputField form={form} name='website' label='Website' type='text' />
          <InputField form={form} name='role' label='Role' type='text' />
          <InputField form={form} name='status' label='Status' type='text' />
          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='mt-4' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AuthorForm;
