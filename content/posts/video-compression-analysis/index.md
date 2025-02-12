---
date: '2025-02-12T05:00:00-05:00'
draft: false
title: 'Video Compression Analysis'
description: 'A detailed analysis comparing video compression settings in DaVinci Resolve and Handbrake, exploring the balance between file size and quality when rendering 4K footage at 60fps. Includes both technical comparisons and visual quality assessments.'
tags:
    - Video
---
## A videography hobbyist
In my free time, I like shooting videos of my family's adventures and doing some basic editing. I shoot on my cellphone and a GoPro. For the past several years, I have rendered my final projects in 1080p at 24 frames per second. I liked the ability to shoot in 4k and still "zoom in" digitally to 1080. That also let me shoot slow motion video at 1080, and match my final render resolution. I recently got a newer GoPro, so now I can shoot 4k at 120 fps, which allows me slow down to 20% speed if I render my final project at 24 fps.

With this advent of being able to shoot slow motion in 4k resolution, I decided to start rendering my projects in 4k, by default. I'm also experimenting with doing very quick edits, just splicing the day's footage together, applying automatic color balancing per-clip, and then rendering at 60fps. This is more of a "home movie" of a day or event, rather than a curated, edited highlight video. I do all this in Davinci Resolve. Previously, I would be able to render my 1080 videos at 24fps and be happy with the file size and quality of picture. Now that I am rendering at four times the resolution and two and a half times the framerate, my output filesize has ballooned, and I need to pay better attention to my compression.

I want to find a good balance between output filesize and quality for my home movies.

## Comparison of projects
In the past, I would shoot for around 100 megabytes per minute of rendered video. So a 5 minute video, rendered at a resolution of 1080, at 24 frames per second would come in around 500 MB. For videos I really spent time on, I would bump up my quality settings and I'd be happy with a 3 gig file for a 5 minute video.

I recently rendered a video using Davinci Resolve's 4k "Master" preset. So a resolution of 4k, at 60 frames per second, and a duration of 22 minutes came in at a whopping 75 gigabytes (~3.4 GB / min). I used Resolve's "YouTube" preset, and that reduced the filesize to 1.8 GB.(~80 MB / min). That is a significant difference!

For reference, my input files, shot on the GoPro Hero 13 were shot in 4k, mostly at 120 fps. They totaled 18.2GB, so my rendered file was actually four times larger than my source material!

The two questions I have are:
1. What is the difference in output files between these two?
2. Is there a noticeable difference in visible quality?

## Differences in objective data
I wrote a [python script](https://gist.github.com/controversy187/0d33948ba3afeb5ba4c4d2fb9ae8113f) that compares various aspects of the videos. I also ran them through the various presets in [Handbrake](https://handbrake.fr/) to see how they compare. The video is 21:49 long. These are the results of that comparison, in order of increasing filesize.


| Filename                                           |   Bitrate (kbps) | Resolution   |   Framerate (FPS) | Video Codec   |Filesize  |
|----------------------------------------------------|------------------|--------------|-------------------|---------------|----------|
| Source Video (Sample).MP4                          |           120000 | 3840x2160    |            119.88 | hevc          |67 **MB** |
| Resolve - YouTube - h264.mp4                       |            11618 | 3840x2160    |             60    | h264          |1.8 GB    |
| Resolve - YouTube - h265.mp4                       |            10566 | 3840x2160    |             60    | hevc          |1.7 GB    |
| Resolve - Master - h264 - HandBrake - Fast.mp4     |            37948 | 3840x2160    |             60    | hevc          |6 GB      |
| Resolve - Master - h264 - HandBrake - VeryFast.mp4 |            41025 | 3840x2160    |             60    | hevc          |6.5 GB    |
| Resolve - Master - h264 - HandBrake - HQ.mp4       |            57001 | 3840x2160    |             60    | hevc          |9 GB      |
| Resolve - Master - h264 - HandBrake - Super HQ.mp4 |            78210 | 3840x2160    |             60    | hevc          |12.5 GB   |
| Resolve - Master - h265.mp4                        |           473927 | 3840x2160    |             60    | h264          |75.7 GB   |
| Resolve - Master - h264.mp4                        |           474208 | 3840x2160    |             60    | h264          |75.8 GB   |

Obviously, Handbrake is going a good job at compressing the video, and lowering the bitrate, thus reducing filesize. But how do the videos actually *look*?

## Subjective comparison
Here are images captured from each of the above videos. 

<div id="gallery">
  <a href="images/Resolve - YouTube - h264.jpg" data-sub-html="Davinci Resolve, YouTube preset, h264">
  	<img src="images/Resolve - YouTube - h264.jpg" width="100%">
  	Davinci Resolve, YouTube preset, h264
  </a>
  <a href="images/Resolve - YouTube - h265.jpg" data-sub-html="Davinci Resolve, YouTube preset, h265">
  	<img src="images/Resolve - YouTube - h265.jpg" width="100%">
  	Davinci Resolve, YouTube Preset, h265
  </a>
  <a href="images/Resolve - Master - h264 - HandBrake - Fast.jpg" data-sub-html="Handbrake, Fast">
  	<img src="images/Resolve - Master - h264 - HandBrake - Fast.jpg" width="100%">
  	Handbrake, Fast
  </a>
  <a href="images/Resolve - Master - h264 - HandBrake - VeryFast.jpg" data-sub-html="Handbrake, Very Fast">
  	<img src="images/Resolve - Master - h264 - HandBrake - VeryFast.jpg" width="100%">
  	Handbrake, Very Fast
  </a>
  <a href="images/Resolve - Master - h264 - HandBrake - HQ.jpg" data-sub-html="Handbrake, High Quality">
  	<img src="images/Resolve - Master - h264 - HandBrake - HQ.jpg" width="100%">
  	Handbrake, High Quality
  </a>
  <a href="images/Resolve - Master - h264 - HandBrake - Super HQ.jpg" data-sub-html="Handbrake, Super High Quality">
  	<img src="images/Resolve - Master - h264 - HandBrake - Super HQ.jpg" width="100%">
  	Handbrake, Super High Quality
  </a>
  <a href="images/Resolve - Master - h264.jpg" data-sub-html="Davinci Resolve, Master - h264">
  	<img src="images/Resolve - Master - h264.jpg" width="100%">
  	Davinci Resolve, Master - h264
  </a>
  <a href="images/Resolve - Master - h265.jpg" data-sub-html="Davinci Resolve, Master - h265">
  	<img src="images/Resolve - Master - h265.jpg" width="100%">
  	Davinci Resolve, Master - h265
  </a>
</div>

In these very specific examples, you can immediately see that the DaVinci Resolve YouTube presets are not good. The h264 version shows artifiacts on the right side of the frame and all detail in the snow on the ground is completely lost. Interestingly, the h265 codec doesn't lose as much detail, and is slightly smaller. In the case were you need a small file, it seems like the h265 does a better job at these lower bitrates.

When we jump up into the Handbrake re-encodes, things get noticeably better. Honestly, from the still frames it's very hard (for me) to tell the difference between these images, all the way through to the masters. Even when I watch the playback of the videos themselves, I'm hard pressed to see any difference. It could be that the source clips themselves only have a 120Mbps bitrate, and we're re-encoding at a higher bitrate for the masters (474Mbps). 

## Conclusions
To really judge this fairly, I probably should have rendered everything out from DaVinci Resolve and manually adjusted the bitrate. Based on these tests, though, I'm not seeing a noticeable loss in quality between the 474Mbps best quality from Resolve and a re-encoded to 78Mbps in Handbrake. For the time being, I'm planning to render out from Resolve and limiting my bitrate to 80Mbps. That's only 590 MB or so per minute of video, which isn't bad for what I'm doing with them.

