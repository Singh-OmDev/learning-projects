package main

import (
	"net/http"
	"time"
	"fmt"

	"github.com/gin-gonic/gin"
)

type Job struct {
	ID     int    `json:"id"`
	Type   string `json:"type"`
	Data   string `json:"data"`
	Status string `json:"status"`
}

// Job queue with capacity of 10
var jobQueue = make(chan Job, 10)

func createJob(c *gin.Context) {
	var job Job

	// Read JSON request body
	if err := c.ShouldBindJSON(&job); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "invalid request body",
		})
		return
	}

	// Set job information
	job.ID = 1
	job.Status = "queued"

	// Add job to queue
	jobQueue <- job

	// Send response
	c.JSON(http.StatusCreated, job)
}

 func worker (){

	 for {
		 job :=<-jobQueue
		  //process job

		  fmt.Println ("processing job :" ,  job.ID )
		   fmt.Println ("job type:", job.Type)

		    time.Sleep ( time.Second *2)
			 fmt.Println("job processed  :", job.ID)

	 }
 }

func main() {

	router := gin.Default()
	 	 go.worker()


	// Home route
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Distributed Job Queue is running",
		})
	})


	// Create job
	router.POST("/jobs", createJob)

	// Start server
	router.Run(":9000")
}