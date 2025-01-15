import { NextApiRequest, NextApiResponse } from 'next';

let tasks: { id: number, title: string, completed: boolean }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(tasks);
      break;
    case 'POST':
      const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false,
      };
      tasks.push(newTask);
      res.status(201).json(newTask);
      break;
    case 'PUT':
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
      const { taskId } = req.body;
      tasks = tasks.filter(task => task.id !== taskId);
      res.status(200).json({ message: 'Task deleted' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}