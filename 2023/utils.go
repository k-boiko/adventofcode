package main

import (
	"regexp"
	"strconv"
)

func Sum(arr []int) int {
	sum := 0
	for _, valueInt := range arr {
		sum += valueInt
	}
	return sum
}

func Pow(arr []int) int {
	sum := 1
	for _, valueInt := range arr {
		sum *= valueInt
	}
	return sum
}

func PowMap(arr map[string]int) int {
	pow := 1
	for _, valueInt := range arr {
		pow *= valueInt
	}
	return pow
}

func IsNumericChar(char byte) bool {
	return char >= '0' && char <= '9'
}

func MergeMaps(m1 *map[string]int, m2 map[string]int) {
	for k, v := range m2 {
		(*m1)[k] = v
	}
}

func ParseInt(s string) int {
	num, _ := strconv.Atoi(s)
	return num
}

func getAllNumbers(s string) []int {
	matchDigits := regexp.MustCompile(`\d+`)
	strNums := matchDigits.FindAllString(s, -1)
	nums := []int{}
	for _, n := range strNums {
		i, _ := strconv.Atoi(n)
		nums = append(nums, i)
	}
	return nums
}

func findLCM(arr []int, divider int) int {
	result := 1
	for _, steps := range arr {
		result *= steps / divider
	}
	return result * divider
}
