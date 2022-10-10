package routers

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func HelloRouter() chi.Router {
	r := chi.NewRouter()
	r.Get("/hello", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})
	return r
}
