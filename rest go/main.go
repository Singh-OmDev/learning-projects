package main

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

type todo struct {
	ID        string `json:"id"`
	Item      string `json:"item"`
	Completed bool   `json:"completed"`
}

var todos = []todo{
	{ID: "1", Item: "Buy groceries", Completed: false},
	{ID: "2", Item: "Walk the dog", Completed: true},
	{ID: "3", Item: "Read a book", Completed: false},
}

// GET all todos
func getTodos(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, todos)
}

// POST new todo
func addTodo(context *gin.Context) {
	var newTodo todo

	if err := context.BindJSON(&newTodo); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	todos = append(todos, newTodo)
	context.IndentedJSON(http.StatusCreated, newTodo)
}

// helper function
func getTodoById(id string) (*todo, error) {
	for i, t := range todos {
		if t.ID == id {
			return &todos[i], nil
		}
	}
	return nil, errors.New("todo not found")
}

// GET by ID
func getTodo(context *gin.Context) {
	id := context.Param("id")

	todo, err := getTodoById(id)
	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "todo not found"})
		return
	}

	context.IndentedJSON(http.StatusOK, todo)
}

// PATCH update (toggle completed)
func updateTodo(context *gin.Context) {
	id := context.Param("id")

	todo, err := getTodoById(id)
	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "todo not found"})
		return
	}

	todo.Completed = !todo.Completed

	context.IndentedJSON(http.StatusOK, todo)
}

func main() {
	router := gin.Default()

	router.GET("/todos", getTodos)
	router.POST("/todos", addTodo)
	router.GET("/todos/:id", getTodo)
	router.PATCH("/todos/:id", updateTodo)

	router.Run("localhost:2000")
}