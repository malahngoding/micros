build	:
	go build -o bin/micros main.go
	
serve:
	./bin/micros

dev:
	./bin/air
