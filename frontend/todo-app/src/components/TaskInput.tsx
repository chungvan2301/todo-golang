import React, { useState } from "react";

type TaskInputProps = {
    addTask: (title: string, description: string) => void;
};

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTask(title, description);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2">
            <input
                type="text"
                className="form-control"
                placeholder="Task title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                className="form-control"
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
                ➕
            </button>
        </form>
    );
};

export default TaskInput;
