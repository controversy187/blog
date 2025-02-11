---
date: '2025-02-10T09:45:51-05:00'
draft: true
title: 'Video Compression Analysis'
description: ''
---
## A videography Hobbyist
In my free time, I like shooting videos of my family's adventures and doing some basic editing. I shoot on my cellphone and a GoPro. For the past several years, I have rendered my final projects in 1080p at 24 frames per second. I liked the ability to shoot in 4k and still "zoom in" digitally to 1080. That also let me shoot slow motion video at 1080, and match my final render resolution. I recently got a newer GoPro, so now I can shoot 4k at 120 fps, which allows me slow down to 20% speed if I render my final project at 24 fps.

With this advent of being able to shoot slow motion in 4k resolution, I decided to start rendering my projects in 4k, by default. I'm also experimenting with doing very quick edits, just splicing the day's footage together, applying automatic color balancing per-clip, and then rendering at 60fps. This is more of a "home movie" of a day or event, rather than a curated, edited highlight video. I do all this in Davinci Resolve. Previously, I would be able to render my 1080 videos at 24fps and be happy with the file size and quality of picture. Now that I am rendering at four times the resolution and two and a half times the framerate, my output filesize has ballooned, and I need to pay better attention to my compression.

I want to find a good balance between output filesize and quality for my home movies.

## Comparison of projects
In the past, I would shoot for around 100 megabytes per minute of rendered video. So a 5 minute video, rendered at a resultion of 1080, at 24 frames per second would come in around 500 MB. Videos I really spent time on, I would bump up my quality settings and I'd be happy with a 3 gig file for a 5 minute video.

I recently rendered a video using Davinci Resolve's 4k "Master" preset. So a resultion of 4k, at 60 frames per second, and a duration of 22 minutes came in at a whopping 75 gigabytes (~3.4 GB / min). I used Resolve's "YouTube" preset, and that reduced the filesize to 1.8 GB.(~80 MB / min). That is a significant difference!

For reference, my input files, shot on the GoPro Hero 13 were shot in 4k, mostly at 120 fps. They totaled 18.2GB, so my rendered file was actually four times larger than my source material!

The two questions I have are:
1. What is the difference in output files between these two?
2. Is there a noticeable difference in visible quality?

## Differences in objective data