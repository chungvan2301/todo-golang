import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const getTasks = async () => {
    const response = await axios.get(`${API_URL}/api/v1/tasks`);
    return response.data;
};

export const addTask = async (task: { title: string; description: string }) => {
    const response = await axios.post(`${API_URL}/api/v1/tasks`, task);
    return response.data;
};

export const updateTask = async (id: number, completed: boolean) => {
    await axios.put(`${API_URL}/api/v1/tasks/${id}`, { completed });
};

export const deleteTask = async (id: number) => {
    await axios.delete(`${API_URL}/api/v1/tasks/${id}`);
};
