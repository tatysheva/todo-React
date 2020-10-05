# Todo app

### Build and run via docker

Building the docker image following command:

```sh
$ docker build -t todo-app -f docker/app/Dockerfile .
```

Running the docker container following command:

```sh
$ docker run -d --name todo-app -p 80:80 todo-app
```

`NGINX` logs are available following command: 

```sh
$ docker logs -f todo-app
```
