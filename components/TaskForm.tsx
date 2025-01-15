import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Task } from '@/store/taskSlice';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type TaskFormProps = {
  task?: Task;
  onSubmit: (data: Omit<Task, 'id'>) => void;
};

const taskSchema = z.object({
  title: z.string().nonempty('Title is required'),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']),
  status: z.enum(['pending', 'in-progress', 'completed', 'under-review']),
  dueDate: z.string().nonempty('Due date is required'),
});

export default function TaskForm({ task, onSubmit }: TaskFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Omit<Task, 'id'>>({
    resolver: zodResolver(taskSchema),
    defaultValues: task || {
      title: '',
      description: '',
      priority: 'medium',
      status: 'pending',
      dueDate: '',
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-6 p-4 sm:p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto'
    >
      <div>
        <Label htmlFor='title'>Title</Label>
        <Controller
          name='title'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='text'
              placeholder='Task Title'
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300'
            />
          )}
        />
        {errors.title && (
          <p className='text-sm text-red-500 mt-1'>{errors.title.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor='description'>Description</Label>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              id='description'
              placeholder='Task Description'
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300'
            />
          )}
        />
      </div>

      <div>
        <Label htmlFor='priority'>Priority</Label>
        <Controller
          name='priority'
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300'
            >
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </select>
          )}
        />
      </div>

      <div>
        <Label htmlFor='status'>Status</Label>
        <Controller
          name='status'
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300'
            >
              <option value='pending'>Pending</option>
              <option value='in-progress'>In Progress</option>
              <option value='completed'>Completed</option>
              <option value='under-review'>Under Review</option>
            </select>
          )}
        />
      </div>

      <div>
        <Label htmlFor='dueDate'>Due Date</Label>
        <Controller
          name='dueDate'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='date'
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300'
            />
          )}
        />
        {errors.dueDate && (
          <p className='text-sm text-red-500 mt-1'>{errors.dueDate.message}</p>
        )}
      </div>

      <div className='flex justify-end space-x-4'>
        <Button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'>
          {task ? 'Update Task' : 'Add Task'}
        </Button>
      </div>
    </form>
  );
}
