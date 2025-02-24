import React, { useEffect, useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";
import { Task } from "../models/Task";
import { getTasks, addTask, updateTask, deleteTask } from "../services/api";

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data || []);
        } catch (error) {
            console.error("Error fetching tasks:", error);
            setTasks([]);
        }
    };


    const handleAddTask = async (title: string, description: string) => {
        if (title.trim() === "" || description.trim() === "") {
            alert("Please fill in all fields");
            return;
        }
        const newTask = await addTask({ title, description });
        setTasks([...tasks, newTask]);
    };


    const handleToggleTask = async (id: number, completed: boolean) => {
        await updateTask(id, !completed);
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleDeleteTask = async (id: number) => {
        await deleteTask(id);
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "400px", maxHeight: "80vh", overflowY: "auto" }}>
                <h1 className="text-center mb-4">To-Do List 📋</h1>
                <TaskInput addTask={handleAddTask} />
                <ul className="list-group mt-3">
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            toggleTask={handleToggleTask}
                            deleteTask={handleDeleteTask}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
