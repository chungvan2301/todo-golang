import React from "react";

type TaskItemProps = {
    task: {
        id: number;
        title: string;
        description: string;
        completed: boolean;
    };
    toggleTask: (id: number, completed: boolean) => void;
    deleteTask: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h5 className={task.completed ? "text-decoration-line-through text-muted" : ""}>
                    {task.title}
                </h5>
                <p className="text-truncate mb-0" style={{ maxWidth: "100%" }}>
                    {task.description.length > 16 ? task.description.substring(0, 16) + "..." : task.description}
                </p>
            </div>
            <div>
                <button
                    className={`btn btn-${task.completed ? "secondary" : "success"} btn-sm me-2`}
                    onClick={() => toggleTask(task.id, task.completed)}
                >
                    {task.completed ? "Undo" : "Done"}
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
                    ❌
                </button>
            </div>
        </li>
    );
};

export default TaskItem;

