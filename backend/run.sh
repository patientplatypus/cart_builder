#in order to run without docker
# FLASK_APP=main.py flask run

#!/bin/bash
docker build -t backend .
docker run -it -p 5000:5000 backend