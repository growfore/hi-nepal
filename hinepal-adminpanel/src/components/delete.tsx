'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import endpoints from '@/utils/endpoints';
import { del } from '@/utils/request-helper';
import { getCookie } from '@/lib/cookie-handler';

export function Delete(props: { id: number; type: string }) {
  const router = useRouter();
  let endPoint = () => {
    if (props.type === 'activity') {
      return endpoints.ACTIVITIES + '/' + props.id;
    }
    if (props.type === 'package') {
      return endpoints.PACKAGES + '/' + props.id;
    }
    if (props.type === 'destination')
      return endpoints.DESTINATIONS + '/' + props.id;
    if (props.type === 'carousel') {
      return endpoints.CAROUSELS + '/' + props.id;
    }
    if (props.type === 'review') {
      return endpoints.REVIEWS + '/' + props.id;
    }
  };

  async function handleClick() {
    if (endPoint() === undefined) {
      toast.error('Not found');
      return;
    } else {
      await del({
        endPoint: endPoint() || '',
        data: {},
        token: await getCookie('token'),
        success: (message: string, response: any) => {
          toast.success(message + ' ' + props.type);
          router.refresh();
        },
        failure: (error: any) => {
          toast.error(error.message + ' ' + props.type);
        },
      });
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive'>Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. It will delete your Items
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
