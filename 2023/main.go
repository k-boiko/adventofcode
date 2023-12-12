package main

import (
	"os"
)

func main() {
	args := os.Args[1:]

	days := map[string]func(string){
		"1": Day1,
		"2": Day2,
		"3": Day3,
		"4": Day4,
		"5": Day5,
		"6": Day6,
		"7": Day7,
		"8": Day8,
	}

	days[args[0]](args[1])
}
