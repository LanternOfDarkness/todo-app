import { useState } from "react";

function TaskItem(props: { title: string }) {
    const [completed, setCompleted] = useState(false);

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
