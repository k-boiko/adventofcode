package main

import (
	"fmt"
	"strings"
)

func Day6(part string) {
	races := []struct {
		time   int
		record int
	}{}
	lines := strings.Split(d6_prod, "\n")

	var times []int
	var distances []int
	if part == "1" {
		times = getAllNumbers(lines[1])
		distances = getAllNumbers(lines[2])
	}
	if part == "2" {
		times = getAllNumbers(strings.ReplaceAll(lines[1], " ", ""))
		distances = getAllNumbers(strings.ReplaceAll(lines[2], " ", ""))
	}

	for i, t := range times {
		races = append(races, struct {
			time   int
			record int
		}{
			time:   t,
			record: distances[i],
		})
	}

	waysToBeatTheRecord := []int{}

	for _, race := range races {
		for pause := 0; pause <= race.time; pause++ {
			remindingTime := race.time - pause

			if remindingTime*pause > race.record {
				waysToBeatTheRecord = append(waysToBeatTheRecord, remindingTime-pause+1)
				break
			}
		}
	}

	fmt.Printf("%#v\n", Pow(waysToBeatTheRecord))
}

const d6_test = `
Time:      7  15   30
Distance:  9  40  200`

const d6_prod = `
Time:        49     78     79     80
Distance:   298   1185   1066   1181`
