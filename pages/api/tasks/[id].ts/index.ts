import { NextApiRequest, NextApiResponse } from 'next';

// /home/usama/Desktop/task-manager/pages/api/tasks/index.ts


const tasks: { id: number, title: string, completed: boolean }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(tasks);
      break;
    case 'POST':
      const newTask = { id: Date.now(), ...req.body };
      tasks.push(newTask);
      res.status(201).json(newTask);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}