package main

func Sum(arr []int) int {
	sum := 0
	for _, valueInt := range arr {
		sum += valueInt
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
