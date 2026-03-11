package main

import (
	"fmt"
	"os"
)

func main() {

	f, err := os.Open("example.txt")
	if err != nil {
		panic(err)
	}

	defer f.Close()

	fileInfo, err := f.Stat()
	if err != nil {
		panic(err)
	}

	fmt.Println("file name is", fileInfo.Name())
	fmt.Println("is directory:", fileInfo.IsDir())
	fmt.Println("size of the file:", fileInfo.Size())
	fmt.Println("mode of the file:", fileInfo.Mode())
	fmt.Println("modification time:", fileInfo.ModTime())

	// reading file
	buf := make([]byte, 10)

	d, err := f.Read(buf)
	if err != nil {
		panic(err)
	}

	fmt.Println("data read:", string(buf[:d]))
}