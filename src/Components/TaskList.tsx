import { useState } from "react";
import TaskItem from "./TaskItem";

interface ITask {
    id: number;
    title: string;
    completed: boolean;
}

function TaskList() {
    const [tasks, setTasks] = useState<ITask[]>([
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: false },
    ]);

    const [newTaskTitle, setTaskTitle] = useState<string>("");

    const addTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;
        
        const id = Date.now();
        setTasks([...tasks, { id, title: newTaskTitle, completed: false }]);
        setTaskTitle("");
    };

    const toggleTask = (id: number) => {
        setTasks(prev =>
            prev.map(task =>
              task.id === id
                ? { ...task, completed: !task.completed }
                : task
            )
          );
    };

    return (
        <div>
            <form onSubmit={(e)=> addTask(e)}>
                <input type="text" value={newTaskTitle} onChange={(e) => setTaskTitle(e.target.value)} ></input>
                <button type="submit">Add task</button>
            </form>
            {tasks.map(task => (
                <TaskItem key={task.id} title={task.title} completed={task.completed} onToggle={() => toggleTask(task.id)} />
            ))}
        </div>
    );
}

export default TaskList;
