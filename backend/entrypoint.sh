#!/bin/bash
source .env/bin/activate
FLASK_APP=main.py flask run --host=0.0.0.0