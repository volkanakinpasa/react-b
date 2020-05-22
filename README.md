# react-b[est]

Initial React projects using babel, typescript, webpack

### Run locally on a Docker container using with NgInx

```sh
$ cd react-b
$ docker build -t react-b .
$ docker run -d -p 3000:3000 react-b
$ open http://localhost:3000
```

### Check if the files are copied into /usr/share/nginx/html/

```sh
$ docker run -it --entrypoint sh react-b
$ cd /usr/share/nginx/html/
$ ls
```
