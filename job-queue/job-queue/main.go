package main

import (
	"net/http"
	  "strconv"
	   "fmt"
	    "time"
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
 var  jobQueue  chan Job

     func worker(id int) {
	for job := range jobQueue {

		// pending → processing
		for i := range jobs {
			if jobs[i].ID == job.ID {
				jobs[i].Status = "processing"
				break
			}
		}

		fmt.Println("Worker", id, "processing job ID:", job.ID)

		time.Sleep(2 * time.Second)

		// processing → completed
		for i := range jobs {
			if jobs[i].ID == job.ID {
				jobs[i].Status = "completed"
				break
			}
		}

		fmt.Println("Worker", id, "completed job ID:", job.ID)
	}
}
func main() {
	r := gin.Default()
	jobQueue = make(chan Job, 10)
	  
	 for  i := 1; i <=3; i++ {
		 go worker ()
	 }

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
		 jobQueue  <- job

		c.JSON(http.StatusCreated, gin.H{
			"message": "Job created successfully",
			"job":     job,
		})
	})

	 // Get all jobs
	 r.GET("/jobs" , func  ( c  * gin.Context) {
		 c.JSON (http.StatusOK , gin.H {
			 "jobs": jobs,
		 })
	 })

	  r.GET("/jobs/:id", func(c *gin.Context) {
	id := c.Param("id")

	idInt, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid job ID",
		})
		return
	}

	for _, job := range jobs {
		if job.ID == idInt {
			c.JSON(http.StatusOK, gin.H{
				"job":     job,
				"message": "Job retrieved successfully",
			})
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{
		"error": "Job not found",
	})
})

  r.DELETE( "/jobs/:id", func ( c * gin.Context) {
		id := c.Param("id")

		idInt, err := strconv.Atoi(id)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid job ID",
			})
			return
		}

		for i, job := range jobs {
			if job.ID == idInt {
				jobs = append(jobs[:i], jobs[i+1:]...)
				c.JSON(http.StatusOK, gin.H{
					"message": "Job deleted successfully",
				})
				return
			}
		}

		c.JSON(http.StatusNotFound, gin.H{
			"error": "Job not found",
		})
  })
  r.PUT("/jobs/:id", func(c *gin.Context) {
	id := c.Param("id")

	idInt, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid job ID",
		})
		return
	}

	var updatedJob Job

	if err := c.ShouldBindJSON(&updatedJob); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	for i := range jobs {
		if jobs[i].ID == idInt {

			// Don't allow client to change ID or Status
			jobs[i].Type = updatedJob.Type
			jobs[i].Payload = updatedJob.Payload

			c.JSON(http.StatusOK, gin.H{
				"message": "Job updated successfully",
				"job":     jobs[i],
			})
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{
		"error": "Job not found",
	})
})


	r.Run(":8080")
}