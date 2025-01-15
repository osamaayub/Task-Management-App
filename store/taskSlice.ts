import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'high' | 'medium';
  status: 'pending' | 'completed' | 'In Progress';
  dueDate: string;
};

type Tasks = {
  tasks: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
const initialState: Tasks = {
  tasks: [],
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/tasks');
      if (!response.ok) {
        throw new Error('Failed to Fetch the Tasks');
      }
      return response.json();
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);
//add task
export const addTask = createAsyncThunk(
  'tasks/addtasks',
  async (task: Omit<Task, 'id'>, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error('Failed to add Task');
      }
      return response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
//update Task
export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (task: Task, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error('failed to update Task');
      }
      return response.json();
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);
//delete Task
export const deleteTask = createAsyncThunk(
  'tasks/deleteTasks',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('failed to delete the Task');
      }
      return id;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const TaskSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(addTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(
        deleteTask.fulfilled,
        (state, action: PayloadAction<string | undefined>) => {
          if (action.payload) {
            state.tasks = state.tasks.filter(
              (task) => task.id !== action.payload
            );
          }
        }
      );
  },
});
export default TaskSlice.reducer;