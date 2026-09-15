package main

import (
	"fmt"
	"net/http"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "DevOps Monitoring Dashboard")
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	fmt.Fprintln(w, "Service is healthy")
}

func main() {
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/health", healthHandler)

	fmt.Println("Monitoring server running on port 8080")
	http.ListenAndServe(":8080", nil)
}