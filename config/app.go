package config

func GetSpacesUrl() string {
	return Config("SPACES_URL")
}

func GetMicrosPort() string {
	return Config("MICROS_PORT")
}
