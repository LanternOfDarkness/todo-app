import { useState } from "react";

function TaskItem(props: { title: string; completed: boolean }) {
    const [completed, setCompleted] = useState(props.completed);

    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={() => setCompleted(!completed)}>
                {completed ? "✅ Завершено" : "⬜ Активне"}
            </button>
        </div>
    );
}

export default TaskItem;
