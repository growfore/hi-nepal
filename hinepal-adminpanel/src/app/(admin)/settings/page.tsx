'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { get, patchWithFile, post, postWithFile } from '@/utils/request-helper';
import endpoints from '@/utils/endpoints';
import { getCookie } from '@/utils/cookie-handler';
import InputField from '@/components/inputs/inputfield';
import toast from 'react-hot-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  logo: z.any().optional(),
  description: z.string(),
  url: z.string().url({
    message: 'Please enter a valid URL.',
  }),
  openingTime: z.string(),
  address: z.string(),
  phone1: z.string(),
  phone2: z.string().optional(),
  email1: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  email2: z
    .string()
    .email({
      message: 'Please enter a valid email address.',
    })
    .optional(),
  facebook: z.string().url().optional(),
  twitter: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  instagram: z.string().url().optional(),
  bgImage: z.any().optional(),
  icon: z.any().optional(),
  footerAbout: z.string(),
  footerImg: z.any().optional(),
  rewardImg1: z.any().optional(),
  rewardImg2: z.any().optional(),
  whatsapp: z.string(),
  location: z.string(),
  aboutTitle: z.string().optional(),
  aboutDescription: z.string().optional(),
  about: z.object({
    title: z.string(),
    description: z.string(),
    image1: z.any(),
    image2: z.any(),
    image3: z.any(),
    image4: z.any(),
    image5: z.any(),
  }),
});

export default function CompanyDataForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [siteInfo, setSiteInfo] = useState<undefined | any>();

  useEffect(() => {
    (async () => {
      const token = await getCookie('token');
      if (token) {
        await get({
          endPoint: endpoints.SITE_INFORMATION,
          token: token,
          success: (message, response) => {
            setSiteInfo(response.data);
            form.setValue('name', response.data.name);
            form.setValue('description', response.data.description);
            form.setValue('url', response.data.url);
            form.setValue('openingTime', response.data.openingTime);
            form.setValue('address', response.data.address);
            form.setValue('phone1', response.data.phone1);
            form.setValue('phone2', response.data.phone2);
            form.setValue('email1', response.data.email1);
            form.setValue('email2', response.data.email2);
            form.setValue('facebook', response.data.facebook);
            form.setValue('twitter', response.data.twitter);
            form.setValue('linkedin', response.data.linkedin);
            form.setValue('instagram', response.data.instagram);
            form.setValue('footerAbout', response.data.footerAbout);
            form.setValue('whatsapp', response.data.whatsapp);
            form.setValue('location', response.data.location);
            form.setValue('aboutTitle', response.data.about.title);
            form.setValue('aboutDescription', response.data.about.description);
            form.setValue('about.image1', response.data.about.image1);
            form.setValue('about.image2', response.data.about.image2);
            form.setValue('about.image3', response.data.about.image3);
            form.setValue('about.image4', response.data.about.image4);
          },
          failure: (message) => {
          },
        });
      }
    })();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      logo: '',
      description: '',
      url: '',
      openingTime: '',
      address: '',
      phone1: '',
      phone2: '',
      email1: '',
      email2: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: '',
      bgImage: '',
      icon: '',
      footerAbout: '',
      footerImg: '',
      rewardImg1: '',
      rewardImg2: '',
      whatsapp: '',
      location: '',
      about: {
        title: '',
        description: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
      },
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const formData = new FormData();
    // Append form data
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append('aboutImage1', values.about.image1);
    formData.append('aboutImage2', values.about.image2);
    formData.append('aboutImage3', values.about.image3);
    formData.append('aboutImage4', values.about.image4);

    !siteInfo
      ? await postWithFile({
          endPoint: endpoints.SITE_INFORMATION,
          data: formData,
          token: await getCookie('token'),
          success: () => {
            toast.success('Information added successfully');
            setIsSubmitting(false);
          },
          failure: (message) => {
            toast.error('Something went wrong');
            setIsSubmitting(false);
          },
        })
      : await patchWithFile({
          endPoint: endpoints.SITE_INFORMATION,
          data: formData,
          token: await getCookie('token'),
          success: () => {
            toast.success('Information updated successfully');
            setIsSubmitting(false);
          },
          failure: (message) => {
            toast.error('Something went wrong');
            setIsSubmitting(false);
          },
        });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 bg-white m-4 p-4'>
        <InputField form={form} label='Company Name' name='name' type='text' />
        <InputField form={form} label='Company Icon' name='icon' type='file' />
        <InputField form={form} label='Company Logo' name='logo' type='file' />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='Describe your company' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <InputField form={form} label='Company Url' name='url' type='text' />
        <InputField
          form={form}
          label='Opening Time'
          name='openingTime'
          type='text'
        />
        <InputField
          form={form}
          label='Company Address'
          name='address'
          type='text'
        />
        <InputField
          form={form}
          label='Primary Phone'
          name='phone1'
          type='tel'
        />
        <FormField
          control={form.control}
          name='phone2'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Secondary Phone (Optional)</FormLabel>
              <FormControl>
                <Input placeholder='+1 (555) 987-6543' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email1'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Email</FormLabel>
              <FormControl>
                <Input placeholder='contact@yourcompany.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email2'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Secondary Email (Optional)</FormLabel>
              <FormControl>
                <Input placeholder='support@yourcompany.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='facebook'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Facebook URL</FormLabel>
              <FormControl>
                <Input
                  placeholder='https://facebook.com/yourcompany'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='twitter'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Twitter URL</FormLabel>
              <FormControl>
                <Input
                  placeholder='https://twitter.com/yourcompany'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='linkedin'
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn URL</FormLabel>
              <FormControl>
                <Input
                  placeholder='https://linkedin.com/company/yourcompany'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='instagram'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instagram URL</FormLabel>
              <FormControl>
                <Input
                  placeholder='https://instagram.com/yourcompany'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <InputField
          form={form}
          label='Background Image'
          name='bgImage'
          type='file'
        />
        <FormField
          control={form.control}
          name='footerAbout'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Footer About Text</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Brief description for footer'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <InputField
          form={form}
          label='Footer Logo'
          name='footerImg'
          type='file'
        />
        <InputField
          form={form}
          label='reward image 1'
          name='rewardImg1'
          type='file'
        />
        <InputField
          form={form}
          label='reward image 2'
          name='rewardImg2'
          type='file'
        />
        <FormField
          control={form.control}
          name='whatsapp'
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp Number</FormLabel>
              <FormControl>
                <Input placeholder='+1 (555) 123-4567' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder='City, Country' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{' '}
        <FormField
          control={form.control}
          name='aboutTitle'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder='About Title' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='aboutDescription'
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea placeholder='about description' {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <InputField
          name='about.image1'
          form={form}
          label='About Image1'
          type='file'
        />
        <InputField
          name='about.image2'
          form={form}
          label='About Image2'
          type='file'
        />
        <InputField
          name='about.image3'
          form={form}
          label='About Image3'
          type='file'
        />
        <InputField
          name='about.image4'
          form={form}
          label='About Image4'
          type='file'
        />
        <InputField
          name='about.image5'
          form={form}
          label='About Image5'
          type='file'
        />
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
}
