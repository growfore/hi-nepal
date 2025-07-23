'use client';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { patchWithFile, postWithFile } from '@/utils/request-helper';
import { getCookie } from '@/lib/cookie-handler';
import toast from 'react-hot-toast';
import endpoints from '@/utils/endpoints';
import { useEffect } from 'react';
import InputField from './inputs/inputfield';
import { Form } from './ui/form';
import { useRouter } from 'next/navigation';
import { Textarea } from './ui/textarea';

interface ReviewFormData {
  name: string;
  description: string;
  image: FileList;
  title: string;
  progress: string;
  link: string;
}

export default function ReviewForm({
  initialData,
  id,
}: {
  initialData?: ReviewFormData;
  id?: number;
}) {
  const router = useRouter();
  const form = useForm<ReviewFormData>({
    defaultValues: {
      name: '',
      description: '',
      image: undefined,
      title: '',
      progress: '',
      link: '',
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (initialData) {
      setValue('name', initialData.name);
      setValue('description', initialData.description);
      setValue('title', initialData.title);
      setValue('progress', initialData.progress);
      setValue('link', initialData.link);
    }
  }, [initialData]);

  const submitHandler: SubmitHandler<ReviewFormData> = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    addAndUpdate(formData);
  };
  async function addAndUpdate(formData: FormData) {
    initialData
      ? await patchWithFile({
          endPoint: endpoints.REVIEWS + `/${id}`,
          data: formData,
          token: await getCookie('token'),
        success: (message,res) => {
            toast.success(message||'Review updated successfully');
            router.push('/reviews');
          },
          failure: (message) => {
            toast.error(message);
          },
        })
      : await postWithFile({
          endPoint: endpoints.REVIEWS,
          data: formData,
          token: await getCookie('token'),
          success: () => {
            toast.success('Review added successfully');
            router.push('/reviews');
          },
          failure: (message) => {
            toast.error(message||'Something went wrong');
          },
        });
  }
  return (
    <div className='space-y-6 bg-white rounded-md m-2 p-4'>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitHandler)} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <InputField form={form} name='name' label='Name' type='text' />
            <InputField form={form} name='link' label='Link' type='text' />
            <InputField form={form} name='image' label='Image' type='file' />
          </div>
          <Textarea {...register('description')} placeholder='Description' />
          <div className='grid grid-cols-2 gap-4'>
            {/* <InputField
              form={form}
              name='progress'
              label='Progress'
              type='text'
            /> */}
            {/* <InputField form={form} name='title' label='Title' type='text' /> */}
          </div>

          <Button type='submit'>
            {initialData ? 'Update Review' : 'Create Review'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
