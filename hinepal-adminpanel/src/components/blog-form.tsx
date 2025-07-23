'use client';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  patch,
  patchWithFile,
  post,
  postWithFile,
  uploadFile,
} from '@/utils/request-helper';
const CustomCKEditor = dynamic(
  () => import('./ck-editor').then((mod) => mod.default),
  {}
);
import { getCookie } from '@/lib/cookie-handler';
import toast from 'react-hot-toast';
import endpoints from '@/utils/endpoints';
import { useEffect, useState } from 'react';
import InputField from './inputs/inputfield';
import { Form } from './ui/form';
import { useRouter } from 'next/navigation';
import { Textarea } from './ui/textarea';
import { TBlog, TSeo } from '@/utils/type';
import SeoFields from './seo-fields';
import dynamic from 'next/dynamic';

export default function BlogForm({
  initialData,
  id,
}: {
  initialData?: TBlog;
  id?: number;
}) {
  const router = useRouter();
  const [seoData, setSeoData] = useState<TSeo>({
    id: undefined,
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    metaImage: '',
    metaRobots: '',
    metaAuthor: '',
    metaCanonical: '',
    metaRating: '',
    metaCopyright: '',
    metaRevisit: '',
    twitterCard: '',
    twitterSite: '',
    schema: '',
  });
  const form = useForm<TBlog>({
    defaultValues: {
      title: '',
      description: '',
      slug: '',
      image: '',
      link: '',
      page: '',
      content: '',
      seo: {
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        metaImage: '',
        metaRobots: '',
        metaAuthor: '',
        metaCanonical: '',
        metaRating: '',
        metaCopyright: '',
        metaRevisit: '',
        twitterCard: '',
        twitterSite: '',
        schema: '',
      },
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
      form.reset(initialData);
      setSeoData(initialData.seo);
    }
  }, [initialData]);

  const submitHandler: SubmitHandler<TBlog> = async (data) => {
    let imageUrl = undefined;
    let seoImageUrl = undefined;
    if (data.image) imageUrl = await uploadImage(data.image);
    if (seoData.metaImage) seoImageUrl = await uploadImage(seoData.metaImage);
    addAndUpdate({
      ...data,
      image: imageUrl,
      seo: {
        ...seoData,
        metaImage: seoImageUrl,
      },
    });
  };

  async function addAndUpdate(formData: TBlog) {
    initialData
      ? await patch({
          endPoint: endpoints.BLOGS + `/${id}`,
          data: formData,
          token: await getCookie('token'),
          success: (message, res) => {
            toast.success(message || 'Review updated successfully');
            router.push('/blogs');
            router.refresh();
          },
          failure: (message) => {
            toast.error(message);
          },
        })
      : await post({
          endPoint: endpoints.BLOGS,
          data: formData,
          token: await getCookie('token'),
          success: () => {
            toast.success('Review added successfully');
            router.push('/blogs');
            router.refresh();
          },
          failure: (message) => {
            toast.error(message || 'Something went wrong');
          },
        });
  }
  return (
    <div className='space-y-6 bg-white rounded-md m-2 p-4'>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitHandler)} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <InputField form={form} name='title' label='Title' type='text' />
            <InputField form={form} name='link' label='Link' type='text' />
            <InputField form={form} name='slug' label='Slug' type='text' />
            <InputField form={form} name='image' label='Image' type='file' />
          </div>
          <div>
            <label className='block text-sm font-medium leading-6 text-gray-900'>
              Content
            </label>
            {
              <CustomCKEditor
                content={form.getValues('content')}
                onChange={(value: string) =>
                  form.setValue('content', value, {
                    shouldValidate: true,
                  })
                }
              />
            }
          </div>
          <div>
            <label className='block text-sm font-medium leading-6 text-gray-900'>
              Description
            </label>

            <Textarea {...register('description')} placeholder='Description' />
          </div>
          <SeoFields seoData={seoData} setSeoData={setSeoData} />
          <Button type='submit'>
            {initialData ? 'Update Blog' : 'Create Blog'}
          </Button>
        </form>
      </Form>
    </div>
  );
}

async function uploadImage(img: File | string) {
  const formData = new FormData();

  formData.append('image', img);
  formData.append('folderName', 'blogs');
  let image = undefined;
  await uploadFile({
    endPoint: endpoints.UPLOAD,
    data: formData,
    token: await getCookie('token'),
    success: (_, response) => {
      image = response.imageUrl;
    },
    failure: (message) => {
      toast.error(message);
    },
  });
  return image;
}
