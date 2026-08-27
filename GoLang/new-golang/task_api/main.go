package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Task struct {
    ID          int    `json:"id"`
    Title       string `json:"title"`
    Description string `json:"description"`
    Completed   bool   `json:"completed"`
}

var tasks = []Task{
    {
        ID:          1,
        Title:       "Learn Go",
        Description: "Learn Gin REST API",
        Completed:   false,
    },
    {
        ID:          2,
        Title:       "Build project",
        Description: "Build Task Management API",
        Completed:   false,
    },
}

func createTask(c *gin.Context) {

    var newTask Task

    if err := c.ShouldBindJSON(&newTask); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": err.Error(),
        })
        return
    }

    newTask.ID = len(tasks) + 1

    tasks = append(tasks, newTask)

    c.JSON(http.StatusCreated, newTask)
}

 func getTask(c *gin.Context) {

	id := c.Param("id")

	for _, task := range tasks {

		if fmt.Sprint(task.ID) == id {

			c.JSON(http.StatusOK, task)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{
		"error": "Task not found",
	})

	 
}

 func updateTask(c *gin.Context) {

    id := c.Param("id")

    var updatedTask Task

    if err := c.ShouldBindJSON(&updatedTask); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error": "Invalid JSON",
        })
        return
    }

    for i := range tasks {

        if fmt.Sprint(tasks[i].ID) == id {

            updatedTask.ID = tasks[i].ID

            tasks[i] = updatedTask

            c.JSON(http.StatusOK, updatedTask)
            return
        }
    }

    c.JSON(http.StatusNotFound, gin.H{
        "error": "Task not found",
    })
}


func main() {

    router := gin.Default()

    router.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "message": "Task API is running",
        })
    })

    router.GET("/tasks", func(c *gin.Context) {
        c.JSON(http.StatusOK, tasks)
    })

    router.POST("/tasks", createTask)

	 router.GET("/tasks/:id", getTask)

    router.Run(":9000")
}