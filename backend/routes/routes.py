from __future__ import unicode_literals
import youtube_dl
import os

import json
import requests
import logos
import time

# v7AadUgzVgQ

DIYFilePath="./Destination: Captain Toad Treasure Tracker (dunkview)-okYcCeYBPUk.mp3"

def getDIYFile():
    print('inside getDIYFile()')
    print('value of DIYFilePath in routes')
    print(DIYFilePath)
    return DIYFilePath

def scrapeAudio(tubePath, tubeID):
    print('inside scrapeAudio()')
    print('value of tubePath')
    print(tubePath)
    scriptString = 'sh ./files/youtubeDL.sh -p '+tubeID
    os.system(scriptString)
    global DIYFilePath
    DIYFilePath = "./files/sampleMP3.mp3"
    returnString = revAudio(tubeID)
    return returnString

def revAudio(tubeID):
    print('inside revAudio')
    revKey="01DtOaYEmdmSdVsGmYemHplPJmZiWCcf1wTdrKuTsp6hSejxw3YQPT73ahUWkDQJJFnv1OcFc-qcDe2wSOaHx2fW83aWU"

    headers = {
        'Authorization': 'Bearer '+revKey,
        'Content-Type': 'application/json',
    }

    # curl -X POST "https://api.rev.ai/revspeech/v1beta/jobs" -H "Authorization: Bearer <api_key>" -H "Content-Type: application/json" -d "{\"media_url\":\"https://support.rev.com/hc/en-us/article_attachments/200043975/FTC_Sample_1_-_Single.mp3\",\"metadata\":\"This is a sample submit jobs option\"}"

    # 

# https://104.236.214.151:5000/files/sampleMP3.mp3


    data = '{"media_url":"104.236.214.151:5000/files/sampleMP3.mp3","metadata":"This is a sample submit jobs option"}'

    print('value of data in revAudio')
    print(data)

    response = requests.post('https://api.rev.ai/revspeech/v1beta/jobs', headers=headers, data=data)

    data = response.json()
    print('value of the response (id)')
    print(data["id"])
    print('value of total response')
    print(data)
    time.sleep(10)

    headers2 = {
        'Authorization': 'Bearer '+revKey,
        'Accept': 'text/plain',
    }

    transcriptURI = 'https://api.rev.ai/revspeech/v1beta/jobs/'+data['id']+'/transcript'

    totalSleepSecs = 0

    loopRes = True
    returnString = ""

    while loopRes:
        response = requests.get(transcriptURI, headers=headers2)
        print(response.text)
        try:
            resjson = response.json()
            print("title")
            print(resjson["title"])
        except: 
            print('inside except')
            print(response.text)
            loopRes = False
            returnString = response.text
            break
        totalSleepSecs = totalSleepSecs + 5
        print('value of totalSleepSecs')
        print(totalSleepSecs)
        time.sleep(5)
    
    return returnString



def searchYoutube(searchString):
    print('inside searchYoutube()')
    videos = []
    videos = logos.youtube_search(searchString)
    # return jsonify(array=videos)
    # return 'OK'
    return videos

# @staticmethod
def test(**kwargs):
    print('inside test()')
    print(kwargs)
    # print(args)
    for key, value in kwargs.items(): 
        print ("%s == %s" %(key, value)) 
    return "hello there test"

def linkedauth(code):
    print('inside linkedauth()')
    print('and value of code is : ')
    print(code)
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    params = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': 'http://localhost:1024/experiments', 
        'client_id': '78lloahtzyrsoh', 
        'client_secret': 'DuMq3nH3u8j651Os'
    }
    print('value of params')
    print(params)
    url = 'https://www.linkedin.com/oauth/v2/accessToken'
    response = requests.post(url, headers=headers, params=params)
    return response.text

def linkedauthcallback():
    print('inside linkedauthcallback()')
    return 'linkedauthcallback return'

def linkeduserprofile(req):
    print('inside linkeduserprofile()')
    print('value of req')
    print(req)
    token = req.get('payload').get('token')
    bearerToken = "Bearer " + token
    headers = {"Authorization": bearerToken}
    url = 'https://api.linkedin.com/v2/me'
    response = requests.get(url, headers=headers)
    print(response.text)
    return 'linkeduserprofile return'