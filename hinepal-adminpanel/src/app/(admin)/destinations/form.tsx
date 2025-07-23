'use client';
import { destinationSchema, TDestination } from '@/utils/schema';
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
  DialogTrigger,
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';


const DestinationForm = ({
  destinations,
}: {
  destinations: TDestination[];
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activities, setActivities] = useState<TDestination[]>([]);

  const [editingDestination, setEditingDestination] =
    useState<TDestination | null>(null);

  const form = useForm<TDestination>({
    resolver: zodResolver(destinationSchema),
    defaultValues: {
      name: '',
      description: '',
      slug: '',
      activityId: undefined,
      image: [],
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
        // twitterCreator: '',
        schema: '',
      },
    },
  });

  useEffect(() => {
    (async () => {
      await get({
        endPoint: endpoints.ACTIVITIES,
        success: (message, res) => {
          setActivities(res.data);
        },
        failure: (message) => {
        },
      });
    })();
  }, []);
  const handleEdit = (destination: TDestination) => {
    setEditingDestination(destination);
    form.reset({
      name: destination.name || '',
      description: destination.description || '',
      slug: destination.slug || '',
      image: destination.image || '',
      activityId: destination.activityId,
      seo: {
        metaTitle: destination.seo?.metaTitle || '',
        metaDescription: destination.seo?.metaDescription || '',
        metaKeywords: destination.seo?.metaKeywords || '',
        metaImage: destination.seo?.metaImage || '',
        metaRobots: destination.seo?.metaRobots || '',
        metaAuthor: destination.seo?.metaAuthor || '',
        metaCanonical: destination.seo?.metaCanonical || '',
        metaRating: destination.seo?.metaRating || '',
        metaCopyright: destination.seo?.metaCopyright || '',
        metaRevisit: destination.seo?.metaRevisit || '',
        twitterCard: destination.seo?.twitterCard || '',
        twitterSite: destination.seo?.twitterSite || '',
        // twitterCreator: destination.seo?.twitterCreator || '',
        schema: destination.seo?.schema || '',
      },
    });
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setEditingDestination(null);
    form.reset();
    setIsDialogOpen(true);
  };
  useEffect(() => {
    if (!editingDestination) {
      form.reset({
        name: '',
        description: '',
        slug: '',
        image: [],
        activityId: undefined,
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
          // twitterCreator: '',
          schema: '',
        },
      });
    }
  }, [editingDestination]);
  const onSubmit = async (data: TDestination) => {
    try {
      const url = editingDestination
        ? `${endpoints.DESTINATIONS}/${editingDestination.id}`
        : endpoints.DESTINATIONS;

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('activityId', data.activityId.toString());
      formData.append('slug', data.slug);
      formData.append('image', data?.image);
      formData.append('seo', JSON.stringify(data.seo));
      formData.append(
        'seo.metaImage',
        data?.seo?.metaImage && data?.seo?.metaImage
      );

      editingDestination
        ? await patchWithFile({
            endPoint: url,
            token: await getCookie('token'),
            data: formData,
            success: (message, data) => {
              setIsDialogOpen(false);
              setEditingDestination(null);
              form.reset();
            },
            failure: (message) => {
              setIsDialogOpen(false);
              setEditingDestination(null);
            },
          })
        : await postWithFile({
            endPoint: url,
            token: await getCookie('token'),
            data: formData,
            success: (message, data) => {
              setIsDialogOpen(false);
              setEditingDestination(null);
              form.reset();
            },
            failure: (message) => {
              setIsDialogOpen(false);
              setEditingDestination(null);
            },
          });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };
  return (
    <div className='m-4 px-4 py-10 bg-white'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>destinations</h1>
        <Button onClick={handleAdd}>Add Destination</Button>
      </div>

      {!isDialogOpen ? (
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
            {destinations?.map((destination) => (
              <TableRow key={destination.id}>
                <TableCell>{destination.name}</TableCell>
                <TableCell>{destination.description}</TableCell>
                <TableCell>{destination.slug}</TableCell>
                <TableCell>
                  <Button
                    variant='outline'
                    onClick={() => handleEdit(destination)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
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
              name='activityId'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Id</FormLabel>
                  <FormControl>
                  
                    <Select onValueChange={(e) => field.onChange(Number(e))}>
                        <SelectTrigger>
                          <SelectValue placeholder='Select an activity'>
                            
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {activities?.map((activity, index) => (
                            <SelectItem
                              key={activity.id}
                              value={activity?.id?.toString() || ''}>
                              {activity.name+" - "+activity.slug}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                        field.onChange(e.target?.files && e?.target?.files[0]);
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
                src={editingDestination?.image}
                alt={editingDestination?.name}
                className='max-w-full h-auto'
              />
            </div>

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
                        field.onChange(e.target?.files && e?.target?.files[0]);
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
              {editingDestination ? 'Update Destination' : 'Create Destination'}
            </Button>
          </form>
        </Form>
      )}

     
    </div>
  );
};

export default DestinationForm;
