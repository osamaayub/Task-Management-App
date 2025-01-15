import { Task } from '@/store/taskSlice'
import { Card } from '@/components/ui/card'
import Progress from '@/components/ui/progress'
import { MessageSquare, Paperclip, MoreVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TaskCardProps {
  task: Task
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
}

export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const getProgressColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'In Progress':
        return 'bg-blue-500'
      case 'pending':
        return 'bg-purple-500'
      default:
        return 'bg-gray-200'
    }
  }

  const getProgress = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 100
      case 'In Progress':
        return 50
      case 'pending':
        return 75
      default:
        return 0
    }
  }

  return (
    <Card className="p-4 md:p-6 lg:p-8">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-sm md:text-base lg:text-lg">{task.title}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onEdit(task)}>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDelete(task.id)}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-xs md:text-sm lg:text-base text-gray-500 mt-1 line-clamp-2">
          {task.description}
        </p>

        <div>
          <div className="flex items-center justify-between text-xs md:text-sm lg:text-base text-gray-500 mb-2">
            <span>Progress</span>
            <span>{getProgress(task.status)}%</span>
          </div>
          <Progress
            value={getProgress(task.status)}
            className={getProgressColor(task.status)}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-white bg-gray-200"
              />
            ))}
          </div>
          
          <div className="flex items-center text-gray-500">
            <div className="flex items-center gap-1">
              <Paperclip className="h-3 w-3 md:h-4 md:w-4" />
              <span className="text-xs md:text-sm">4</span>
            </div>
            <div className="flex items-center gap-1 ml-2">
              <MessageSquare className="h-3 w-3 md:h-4 md:w-4" />
              <span className="text-xs md:text-sm">8</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
