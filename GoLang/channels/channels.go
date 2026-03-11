package mai

import "fmt"

func main() {

	messageChan := make(chan string)

	messageChan <- "hello ji"

	msg := <-messageChan

	fmt.Println(msg)

}