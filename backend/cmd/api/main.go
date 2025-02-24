package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"todo-app/pkg/routes"
)

func main() {
	
	r := gin.Default()

	// Cấu hình CORS middleware
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // Cho phép frontend truy cập
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Content-Type"},
		AllowCredentials: true,
	}))

	routes.RegisterRoutes(r)
	r.Run(":8080")
}