import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const InputField = ({
  form,
  label,
  name,
  type,
}: {
  form: any;
  label: string;
  type: string;
  name: string;
}) => {
  return type === 'file' ? (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type='file'
              onChange={(e) =>
                field.onChange(e.target.files && e.target.files[0])
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
