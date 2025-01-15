'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
  Task,
} from '@/store/taskSlice';
import Layout from '@/components/Layout';
import TaskCard from '@/components/TaskCard';
import TaskForm from '@/components/TaskForm';
import Button from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { LayoutGrid, CalendarIcon, Table, Clock } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

export default function Home() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const status = useAppSelector((state) => state.tasks.status);
  const error = useAppSelector((state) => state.tasks.error);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [view, setView] = useState<
    'board' | 'timeline' | 'spreadsheet' | 'calendar'
  >('board');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const handleAddTask = async (task: Omit<Task, 'id'>) => {
    try {
      await dispatch(addTask(task)).unwrap();
      setIsFormOpen(false);
      toast({
        title: 'Task added successfully',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'Failed to add task',
        description: (error as Error).message,
        variant: 'destructive',
      });
    }
  };

  const handleUpdateTask = async (task: Omit<Task, 'id'>) => {
    if (editingTask) {
      try {
        await dispatch(updateTask({ ...task, id: editingTask.id })).unwrap();
        setEditingTask(null);
        setIsFormOpen(false);
        toast({
          title: 'Task updated successfully',
          variant: 'success',
        });
      } catch (error) {
        toast({
          title: 'Failed to update task',
          description: (error as Error).message,
          variant: 'destructive',
        });
      }
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await dispatch(deleteTask(id)).unwrap();
      toast({
        title: 'Task deleted successfully',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'Failed to delete task',
        description: (error as Error).message,
        variant: 'destructive',
      });
    }
  };

  const groupedTasks = {
    'To-Do': tasks.filter((task) => task.status === 'pending'),
    'On Progress': tasks.filter((task) => task.status === 'In Progress'),
    Completed: tasks.filter((task) => task.status === 'completed'),
    'Under Review': tasks.filter((task) => task.status === 'pending'),
  };

  if (status === 'loading') {
    return (
      <Layout>
        <div className='flex items-center justify-center h-screen'>
          Loading...
        </div>
      </Layout>
    );
  }

  if (status === 'failed') {
    return (
      <Layout>
        <div className='flex items-center justify-center h-screen'>
          Error: {error}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='space-y-6'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='text-center md:text-left'>
            <h1 className='text-2xl font-bold'>Welcome Back!</h1>
            <p className='text-gray-500 mt-1'>
              Stay organized, track progress, and monitor task status.
            </p>
          </div>
          <Button className='bg-black cursor-pointer border-none px-3 py-2 text-white rounded mt-4 md:mt-0' onClick={() => setIsFormOpen(true)}>Create Task</Button>
        </div>

        <div className='flex flex-wrap items-center gap-4 border-b pb-4'>
          <Button
            variant={view === 'board' ? 'primary' : 'tertiary'}
            onClick={() => setView('board')}
            className='flex items-center'
          >
            <LayoutGrid className='h-4 w-4 mr-2' />
            Board
          </Button>
          <Button
            variant={view === 'timeline' ? 'primary' : 'tertiary'}
            onClick={() => setView('timeline')}
            className='flex items-center'
          >
            <Clock className='h-4 w-4 mr-2' />
            Timeline
          </Button>
          <Button
            variant={view === 'spreadsheet' ? 'primary' : 'tertiary'}
            onClick={() => setView('spreadsheet')}
            className='flex items-center'
          >
            <Table className='h-4 w-4 mr-2' />
            Spreadsheet
          </Button>
          <Button
            variant={view === 'calendar' ? 'primary' : 'tertiary'}
            onClick={() => setView('calendar')}
            className='flex items-center'
          >
            <CalendarIcon className='h-4 w-4 mr-2' />
            Calendar
          </Button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {Object.entries(groupedTasks).map(([status, tasks]) => (
            <div key={status}>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='font-semibold'>{status}</h2>
                <span className='text-sm text-gray-500'>{tasks.length}</span>
              </div>
              <div className='space-y-4'>
                {tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={setEditingTask}
                    onDelete={handleDeleteTask}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={isFormOpen || !!editingTask}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingTask ? 'Edit Task' : 'Create New Task'}
            </DialogTitle>
          </DialogHeader>
          <TaskForm
            task={editingTask || undefined}
            onSubmit={editingTask ? handleUpdateTask : handleAddTask}
          />
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
