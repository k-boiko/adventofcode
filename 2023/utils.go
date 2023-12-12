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

// Ghat GPT's code -- start --
// Функція для знаходження НСД за допомогою алгоритму Евкліда
func gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}

// Функція для знаходження НСК двох чисел
func lcm(a, b int) int {
	return a * b / gcd(a, b)
}

// Функція для знаходження НСК масиву чисел
func findLCM(arr []int) int {
	if len(arr) < 2 {
		return 0
	}

	result := arr[0]
	for i := 1; i < len(arr); i++ {
		result = lcm(result, arr[i])
	}
	return result
}

// Ghat GPT's code -- end --
