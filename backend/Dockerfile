
FROM python:3.6.5-alpine

# set the working directory in the container to /app
WORKDIR /app

# RUN apt-get install ffmpeg
RUN apk update
RUN apk add ffmpeg

# add the current directory to the container as /app
ADD . /app
VOLUME [ "/data" ]

# execute everyone's favorite pip command, pip install -r
RUN pip install --trusted-host pypi.python.org -r requirements.txt

RUN chmod 700 /app/entrypoint.sh

# 

# unblock port 80 for the Flask app to run on
EXPOSE 5000

# CMD ["/app/entrypoint.sh"]
ENTRYPOINT ["sh","/app/entrypoint.sh"]

# execute the Flask app
# CMD ["python", "main.py"]