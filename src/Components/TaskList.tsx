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

    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} title={task.title} completed={task.completed}/>
            ))}
        </div>
    );
}

export default TaskList;
