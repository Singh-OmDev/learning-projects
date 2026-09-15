package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type SystemStatus struct {
	Service   string  `json:"service"`
	Status    string  `json:"status"`
	Version   string  `json:"version"`
	Timestamp string  `json:"timestamp"`
	CPUUsage  float64 `json:"cpu_usage"`
	Memory    float64 `json:"memory_usage"`
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "DevOps Monitoring Dashboard")
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	fmt.Fprintln(w, "Service is healthy")
}

func statusHandler(w http.ResponseWriter, r *http.Request) {
	status := SystemStatus{
		Service:   "Monitoring API",
		Status:    "Running",
		Version:   "1.0.0",
		Timestamp: time.Now().Format(time.RFC3339),
		CPUUsage:  35.5,
		Memory:    62.8,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(status)
}

 func metricsHandler(w http.ResponseWriter, r *http.Request) {
	metrics := map[string]float64{
		"cpu_usage":    35.5,
		"memory_usage": 62.8,
		"disk_usage":   48.2,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(metrics)
}
func main() {
	http.Handle("/", http.FileServer(http.Dir("./static")))
	http.HandleFunc("/health", healthHandler)
	http.HandleFunc("/status", statusHandler)
	http.HandleFunc("/metrics", metricsHandler)

	fmt.Println("Monitoring server running on port 8080")
	http.ListenAndServe(":8080", nil)
}