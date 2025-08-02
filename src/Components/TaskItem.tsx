function TaskItem(props: { title: string; completed: boolean, onToggle: any }) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.onToggle}>
                {props.completed ? "✅ Завершено" : "⬜ Активне"}
            </button>
        </div>
    );
}

export default TaskItem;
