#!/bin/bash
docker build -t frontend .
docker run -d -it -p 3000:3000 frontend