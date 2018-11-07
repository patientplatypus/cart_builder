#!/usr/bin/python

from apiclient.discovery import build
from apiclient.errors import HttpError
from oauth2client.tools import argparser

# Set DEVELOPER_KEY to the API key value from the APIs & auth > Registered apps
# tab of
#   https://cloud.google.com/console
# Please ensure that you have enabled the YouTube Data API for your project.
# AIzaSyCyrT-evCr3xNABuEOC--vHDQ0ymIsE6nE
DEVELOPER_KEY = "AIzaSyCyrT-evCr3xNABuEOC--vHDQ0ymIsE6nE"
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

def youtube_search(searchString):
  youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
    developerKey=DEVELOPER_KEY)

  search_response = youtube.search().list(
    q=searchString,
    part="id,snippet",
    maxResults=10
  ).execute()

  videos = []

  for search_result in search_response.get('items', []):
      videos.append("%s (%s)" % (search_result["snippet"]["title"],
                                 search_result["id"]["videoId"]))
  return videos

  # Add each result to the appropriate list, and then display the lists of
#   # matching videos, channels, and playlists.
#   for search_result in search_response.get("items", []):
#     if search_result["id"]["kind"] == "youtube#video":
#       videos.append("%s (%s)" % (search_result["snippet"]["title"],
#                                  search_result["id"]["videoId"]))
#     elif search_result["id"]["kind"] == "youtube#channel":
#       channels.append("%s (%s)" % (search_result["snippet"]["title"],
#                                    search_result["id"]["channelId"]))
#     elif search_result["id"]["kind"] == "youtube#playlist":
#       playlists.append("%s (%s)" % (search_result["snippet"]["title"],
#                                     search_result["id"]["playlistId"]))

#   print "Videos:\n", "\n".join(videos), "\n"
#   print "Channels:\n", "\n".join(channels), "\n"
#   print "Playlists:\n", "\n".join(playlists), "\n"
