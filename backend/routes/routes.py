from __future__ import unicode_literals
import youtube_dl

import json
import requests
import logos


def scrapeAudio(tubeID):
    print('inside scrapeAudio()')
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
    }
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        ydl.download(['http://www.youtube.com/watch?v=hY7m5jjJ9mM'])
    return 'OK'


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