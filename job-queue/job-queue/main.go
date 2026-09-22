package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Job struct {
	ID      int    `json:"id"`
	Type    string `json:"type"`
	Payload string `json:"payload"`
	Status  string `json:"status"`
}

var jobs []Job
var nextID = 1

func main() {
	r := gin.Default()

	// Home
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Job Queue API is running",
		})
	})

	// Create Job
	r.POST("/jobs", func(c *gin.Context) {
		var job Job

		if err := c.ShouldBindJSON(&job); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})
			return
		}

		job.ID = nextID
		nextID++

		job.Status = "pending"

		jobs = append(jobs, job)

		c.JSON(http.StatusCreated, gin.H{
			"message": "Job created successfully",
			"job":     job,
		})
	})

	 r.GET("/jobs" , func  ( c  * gin.Context) {
		 c.JSON (http.StatusOK , gin.H {
			 "jobs": jobs,
		 })
	 })

	r.Run(":8080")
}