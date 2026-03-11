package main

import (
	"fmt"
	"time"
)

type order struct {
	id        string
	amount    float32
	status    string
	createdAt time.Time
}

func main() {

	order1 := order{
		id:     "1",
		amount: 500000,
		status: "received",
	}

	order1.createdAt = time.Now()

	order2 := order{
		id:        "2",
		amount:    44444,
		status:    "delivered",
		createdAt: time.Now(),
	}

	fmt.Println("order struct", order1)
	fmt.Println("order struct", order2)
}