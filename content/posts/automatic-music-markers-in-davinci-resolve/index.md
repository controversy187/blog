---
date: '2025-02-10T15:20:00-05:00'
draft: true
title: 'Automatic Music Markers in Davinci Resolve'
description: ''
---
## Making Music Videos
I am very formulaic in how I make videos for my personal library.

1. Shoot some footage on my cell phone and/or a GoPro. 
2. Find a song that captures the feeling of the event.
3. Import all the clips from the event to DaVinci Resolve, and the song selected above.
4. Add the song to the timeline.
5. I then go through the clips, usually chronologically, and see which ones are "cool enough" to make it the cut.
6. If I end up with more clips than I have time for, ruthlessly cut clips until I have the right amount for the song.
7. Manually drag clip start and end points to align with the measures of the song.
8. Apply Autolevels to each clip, based on the midpoint of the clip (I'm red/green color blind and haven't invest any time into figuring out how to color grade).
9. Export and Upload.

It's time consuming, but I usually enjoy it. One part that is always frustrating, though, is aligning the cuts in the clips to the measures in the song. I play the timeline and tap the beat on my desk, usually counting out the beats. If I'm lucky, there is a visible spike in the waveform on the beats, so I can drag my video clip boundaries to align with them. Sometimes I just have to guess where they are. The whole point is that a generic video like this will draw someone in mre effectively if the video is synchronized with the audio. It's hard to describe, but without the synchronization, the video just sort of plays and the music creates a general feeling. When the timings line up, it feels like the music is pushing the visuals forward, creating more of an emotional resonance with the viewer. That's my experience, at least.

I wanted to figure out how I could make it easier to find those beats in the audio, and the measure boundaries, so I could speed my workflow.

## Making a click-track
My first attempt was to use python to analyize the audio file of the song I was using. I figured that there is likely some library out there that would determine the beats and hopefully the measures. I could then use that information to generate a new audio file. A single "click" sound on the beats, and a higher pitched click on the first beat of each measure. With that audio file, I could add it to the timeline in Resolve, mute it, and have a very clear visual to align my video clips to.

With some help from Claude.ai and ChatGPT, I played with the librosa libary. It was suprisingly accurate at finding the beats and generating a click track. The biggest hurdle I ran into happened during musical transitions. It seems that librosa analyizes the music for acoustic "density". Music is generally more "dense" on the beats, which is where louder drums are hit, guitar chords are strummed, keys are struck, and generally most or all of the instruments "happen" at the same time.

For example, a guitar chord would be played on a beat, and then it is left to resonate until the next beat, or possibly a divison of the next beat. So with most of the instruments striking on the beats, those moments are more dense. Any given song will usually have a relatively consistent feel, and it seems like librosa does a good job of determining that feel, finding those dense moments and aligning them to the beats. Where it struggled for me is when the general density of the music changed. 

I was testing with The Allman Brother's song Ramblin' Man. This song starts with a clearly defined introduction which is mainly electric guitar for a couple of measures, and then the full band comes in. The problem is that librosa seems to normalize to the relatively low density of the electric guitar-only intro, and correctly identifies the beats. But once the full band comes in, the density goes up significantly, and librosa identifies extra beats for a short period, until it renormalizes to the higher density of the song. That throws off the counts of our beats, and then our measures are no longer in alignment.

I played with several parameters of librosa, but never got to satisfactory results.

## Making project markers
DaVinci Resolve (and most other populary video editing tools) support a feature called Markers. I haven't used them before, so this is my first foray into them. The idea is that you can set specific markers on your timeline and then snap clips to them.