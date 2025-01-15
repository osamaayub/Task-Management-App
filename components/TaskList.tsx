import { Task } from '../store/taskSlice';

type TaskListProps = {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};

export default function TaskList({ tasks, onEdit, onDelete }: TaskListProps) {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Title
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Description
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Priority
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Status
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Due Date
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {tasks.map((task) => (
            <tr key={task.id} className='hover:bg-gray-50'>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                {task.title}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {task.description}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {task.priority}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {task.status}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {task.dueDate}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                <button
                  onClick={() => onEdit(task)}
                  className='text-indigo-600 hover:text-indigo-900 mr-2'
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className='text-red-600 hover:text-red-900'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
