package service

import "todo-app/pkg/models"

var tasks = make(map[int]models.Task)
var id = 1

func AddTask(task models.Task) models.Task {
	task.ID = id
	tasks[id] = task
	id++
	return task
}

func GetTasks() []models.Task {
	var taskList []models.Task
	for _, task := range tasks {
		taskList = append(taskList, task)
	}
	return taskList
}

func UpdateTask(id int) bool {
	if task, exists := tasks[id]; exists {
		task.Completed = true
		tasks[id] = task
		return true
	}
	return false
}

func DeleteTask(id int) bool {
	if _, exists := tasks[id]; exists {
		delete(tasks, id)
		return true
	}
	return false
}