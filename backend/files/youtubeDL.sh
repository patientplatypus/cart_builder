#!/bin/bash

while getopts ":s:p:" o; do
    case "${o}" in
        s)
            s=${OPTARG}
            ((s == 45 || s == 90)) || usage
            ;;
        p)
            p=${OPTARG}
            ;;
        *)
            usage
            ;;
    esac
done
shift $((OPTIND-1))

if [ -z "${s}" ] || [ -z "${p}" ]; then
    # echo "${p}"
    youtube-dl --extract-audio --audio-format mp3 -o "./files/sampleMP3.%(ext)s" http://youtube.com/watch?v=${p}
fi