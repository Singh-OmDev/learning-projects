package main



type todo struct {

	 ID string
	  Item string
	  Completed bool
}

 var todos = [] todo {
	 {ID: "1", Item: "Buy groceries", Completed: false},
	 {ID: "2", Item: "Walk the dog", Completed: true},
	 {ID: "3", Item: "Read a book", Completed: false},
 }