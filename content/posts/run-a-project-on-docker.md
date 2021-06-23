---
title: Run a project on Docker
description: "I am going to write this post to learn you how you can create a
  simple Docker file step by step. "
date: 2021-06-23T15:07:25.521Z
published: false
cover_image: false
tags:
  - Machine Learning
  - Docker
content: "Since some of my students are always struggling with working with
  docker or create a docker file to run machine learning projects, I am going to
  write this post to learn you how you can create a simple Docker file step by
  step.


  ## Choose the initial Docker image\\*\\*


  First, Download the *Docker* application. Then you need to understand the
  differences between the types of Docker images so that you choose the right
  one for your application or script. The difference between docker images is
  the underlying operating system. You can always change the image in your
  Dockerfile and rebuild your images. I recommend Images tagged with *buster*
  for Mac or Linux operating system. You can check [this
  website](https://medium.com/swlh/alpine-slim-stretch-buster-jessie-bullseye-b\
  ookworm-what-are-the-differences-in-docker-62171ed4531d) to get familiar with
  different initial docker images.


  ## Make a Docker file on Vscode


  Make a new project at the determined address and make a file with the name
  of Dockerfile. Since you make it, the logo of the file will be changed to the
  Docker logo.


  Now you should write this command to create the initial Docker image.


  `From python:3.7.6-buster`


  `RUN apt-get update`


  `RUN pip install --upgrade pip`


  `RUN pip install pandas flask sklearn interpret`


  It's optional to get the apt-get update and install the initial python
  packages.


  Another important thing you should consider when you want to make a Docker
  image is mounting the place your files are into the image.


  `WORKDIR /Files_location`


  Then you can save the file. Here is an example of one of my docker files for
  one project.


  ![](/images/uploads/screen-shot-2021-06-23-at-10.02.18-am.png)


  After saving the docker file you should write this command at the terminal
  to run a docker image named yourimagename:1 at the current location.


  `Docker build --tag yourimagename:1 .`


  To make sure that your image is built or not, you can use \"Docker image
  list\" to see the list of docker images.


  `$ Docker image list`


  ## Create the Docker container\r


  After building an image with the name of “yourimagename:1” we can build and
  run the container.


  \r

  Start your container using the docker run command and specify the name of
  the image we just created.

  \r


  `$ docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]`


  The above command is the pattern to build a docker image. The following code
  is an example I used for run \"nrc:1\" image.\ 


  `docker run --rm -it --volume \"$(PWD)\":\"/maryam/\" -p 8050:8050 nrc:1`

  Let's narrow it down.\ 

  `--rm` is a docker option. It ?

  `-i`

  `t`

  `--volume`

  `$(PWD)` it retunrs the current location

  `\"$(PWD)\":\"/maryam/\"` the currnet location will be mounted to a valume
  named \"maryam\" on the container of the docker.

  `-p` It defines the available port to run the image. It's mostly used for
  web applications or using Jupitor.

  `nrc:1` the name of the docker image.


  By running the docker image you will go to that image with the specific
  directory you mounted. Now you can make as many files as your project needs
  and run your code on the docker environment.\n"
---
