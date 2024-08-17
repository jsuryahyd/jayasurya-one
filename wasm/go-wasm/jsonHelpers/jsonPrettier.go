package jsonHelpers

import ("encoding/json")

func PrettifyJSON(input string) (string,error){
		var raw interface{}
		if err := json.Unmarshal([]byte(input), &raw); err != nil {
			return "", err
		}
		pretty, err := json.MarshalIndent(raw, "", "  ")
		if err != nil {
			return "", err
		}
		return string(pretty), nil
}