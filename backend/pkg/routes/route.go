package routes

import (
	"todo-app/pkg/handlers"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(r *gin.Engine) {
	v1 := r.Group("/api/v1")
	{
		v1.POST("/tasks", handlers.AddTask)
		v1.GET("/tasks", handlers.GetTasks)
		v1.PUT("/tasks/:id", handlers.UpdateTask)
		v1.DELETE("/tasks/:id", handlers.DeleteTask)
	}
}