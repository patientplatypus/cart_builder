#!/bin/bash
deactivate
virtualenv .env
source .env/bin/activate
pip install -r requirements.txt
FLASK_APP=main.py flask run --host=0.0.0.0