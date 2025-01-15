import { NextApiRequest, NextApiResponse } from 'next';

let tasks: { id: number, title: string, completed: boolean }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(tasks);
      break;
    case 'POST':
      if (!req.body.title) {
        res.status(400).json({ message: 'Title is required' });
        break;
      }
      const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false,
      };
      tasks.push(newTask);
      res.status(201).json(newTask);
      break;
    case 'PUT':
      if (!req.body.id || !req.body.title || req.body.completed === undefined) {
        res.status(400).json({ message: 'ID, title, and completed status are required' });
        break;
      }
      const { id, title, completed } = req.body;
      const taskIndex = tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        tasks[taskIndex] = { id, title, completed };
        res.status(200).json(tasks[taskIndex]);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
      break;
    case 'DELETE':
      if (!req.body.taskId) {
        res.status(400).json({ message: 'Task ID is required' });
        break;
      }      const { taskId } = req.body;
      tasks = tasks.filter(task => task.id !== taskId);
      res.status(200).json({ message: 'Task deleted' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}