package routers

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func AuthRouter() chi.Router {
	r := chi.NewRouter()
	r.Post("/register", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello Register!"))
	})
	r.Post("/handshake", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello Handshake!"))
	})
	return r
}
