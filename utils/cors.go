package utils

import (
	"github.com/go-chi/cors"
	"github.com/malahngoding/micros/config"
)

func MicrosCORS() cors.Options {
	return cors.Options{
		AllowedOrigins:   []string{config.GetSpacesUrl()},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300,
	}
}
