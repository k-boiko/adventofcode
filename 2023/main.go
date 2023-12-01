package main

import (
	"os"
)

func main() {
	args := os.Args[1:]

	days := map[string]func(string){
		"1": Day1,
	}

	days[args[0]](args[1])
}
