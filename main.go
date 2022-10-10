package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/malahngoding/micros/config"
	"github.com/malahngoding/micros/routers"
	"github.com/malahngoding/micros/utils"
)

func main() {
	/*
	*	Application Wide Middleware
	 */
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(cors.Handler(utils.MicrosCORS()))

	/*
	* Router Mounter
	 */
	r.Mount("/api", routers.HelloRouter())
	r.Mount("/api/auth", routers.AuthRouter())

	/*
	*	Custom Error Handlers
	 */
	r.NotFound(utils.NotFoundHandler)
	r.MethodNotAllowed(utils.MethodNotAllowedHandler)

	/*
	*	Run The Service
	 */
	log.Fatal(http.ListenAndServe(config.GetMicrosPort(), r))
}
