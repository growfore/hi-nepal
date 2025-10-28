'use client';
import { Activity, activitySchema } from '@/utils/schema';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import endpoints from '@/utils/endpoints';
import {
  get,
  patch,
  patchWithFile,
  post,
  postWithFile,
} from '@/utils/request-helper';
import { getCookie } from '@/utils/cookie-handler';

const ActivityForm = ({ activities }: { activities: Activity[] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);

  const form = useForm<Activity>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      name: '',
      description: '',
      slug: '',
      image: [],
      imageAlt: '',
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

  const handleEdit = (activity: Activity) => {
    setEditingActivity(activity);
    form.reset({
      name: activity.name || '',
      description: activity.description || '',
      slug: activity.slug || '',
      image: activity.image || '',
      imageAlt: activity?.imageAlt || '',
      seo: {
        metaTitle: activity.seo?.metaTitle || '',
        metaDescription: activity.seo?.metaDescription || '',
        metaKeywords: activity.seo?.metaKeywords || '',
        metaImage: activity.seo?.metaImage || '',
        metaRobots: activity.seo?.metaRobots || '',
        metaAuthor: activity.seo?.metaAuthor || '',
        metaCanonical: activity.seo?.metaCanonical || '',
        metaRating: activity.seo?.metaRating || '',
        metaCopyright: activity.seo?.metaCopyright || '',
        metaRevisit: activity.seo?.metaRevisit || '',
        twitterCard: activity.seo?.twitterCard || '',
        twitterSite: activity.seo?.twitterSite || '',
        schema: activity.seo?.schema || '',
      },
    });
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setEditingActivity(null);
    form.reset();
    setIsDialogOpen(true);
  };
  useEffect(() => {
    if (!editingActivity) {
      form.reset({
        name: '',
        description: '',
        slug: '',
        image: [],
        imageAlt: '',
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
      });
    }
  }, [editingActivity]);

  const onSubmit = async (data: Activity) => {
    try {
      const url = editingActivity
        ? `${endpoints.ACTIVITIES}/${editingActivity.id}`
        : endpoints.ACTIVITIES;

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('slug', data.slug);
      formData.append('image', data?.image);
      formData.append('imageAlt', data?.imageAlt);
      formData.append('seo', JSON.stringify(data.seo));
      formData.append(
        'seo.metaImage',
        data?.seo?.metaImage && data?.seo?.metaImage
      );

      editingActivity
        ? await patchWithFile({
            endPoint: url,
            token: await getCookie('token'),
            data: formData,
            success: (message, data) => {
              setIsDialogOpen(false);
              setEditingActivity(null);
              form.reset();
            },
            failure: (message) => {
              setIsDialogOpen(false);
              setEditingActivity(null);
            },
          })
        : await postWithFile({
            endPoint: url,
            token: await getCookie('token'),
            data: formData,
            success: (message, data) => {
              setIsDialogOpen(false);
              setEditingActivity(null);
              form.reset();
            },
            failure: (message) => {
              setIsDialogOpen(false);
              setEditingActivity(null);
            },
          });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };
  return (
    <div className='m-4 px-4 py-10 bg-white'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Activities</h1>
        <Button onClick={handleAdd}>Add Activity</Button>
      </div>

      <Table className=''>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell>{activity.name}</TableCell>
              <TableCell>{activity.description}</TableCell>
              <TableCell>{activity.slug}</TableCell>
              <TableCell>
                <Button variant='outline' onClick={() => handleEdit(activity)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='sm:max-w-4xl max-h-screen overflow-auto '>
          <DialogHeader>
            <DialogTitle>
              {editingActivity ? 'Edit Activity' : 'Add Activity'}
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='slug'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image </FormLabel>
                    <FormControl>
                      <Input
                        multiple
                        type='file'
                        onChange={(e) => {
                          field.onChange(
                            e.target?.files && e?.target?.files[0]
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* showing the image */}

              <div className='mt-4'>
                <h3 className='text-lg font-semibold mb-2'>Existing Image</h3>
                <img
                  src={editingActivity?.image}
                  alt={editingActivity?.name}
                  className='max-w-full h-auto'
                />
              </div>
              <FormField
                control={form.control}
                name='imageAlt'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image Alt Text</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* SEO */}
              <FormField
                control={form.control}
                name='seo.metaTitle'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SEO</FormLabel>
                    <FormControl>
                      <Input
                        value={field.value as string}
                        onChange={field.onChange}
                        placeholder='Meta Title'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='seo.metaDescription'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        value={field.value as string}
                        onChange={field.onChange}
                        placeholder='Meta Description'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='seo.metaKeywords'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        value={field.value as string}
                        onChange={field.onChange}
                        placeholder='Meta Keywords'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='seo.schema'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        value={field.value as string}
                        onChange={field.onChange}
                        placeholder='Schema'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='seo.metaImage'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='file'
                        // value={field.value as string}
                        onChange={(e) => {
                          field.onChange(
                            e.target?.files && e?.target?.files[0]
                          );
                        }}
                        placeholder='Meta Image'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='seo.metaCanonical'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        value={field.value as string}
                        onChange={field.onChange}
                        placeholder='Meta Canonical'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit'>
                {editingActivity ? 'Update Activity' : 'Create Activity'}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ActivityForm;
