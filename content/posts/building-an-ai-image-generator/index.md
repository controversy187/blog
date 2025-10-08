---
date: '2025-10-06T10:13:12-04:00'
draft: false
title: 'From Idea to Play Store: Shipping an AI Image Editor with Gemini + Firebase'
description: "How a Gemini image model, a swarm of copilots, and a patient beta crew helped me ship Picture Wizard, an AI-powered renovation playground."
tags:
    - Android
    - AI
    - Firebase
    - Product
---

## Chasing Nano Banana
When Google quietly dropped the Gemini image model codenamed "Nano Banana" (Google’s Gemini 2.5 Flash Image model) and only exposed it through an API, I was disappointed that I couldn't immediately test it out. Since I've been enjoying building things recently, first thought was, "I'll just build the app I want." I wanted a fast way to play with the model, optionally add a reference photo, and see what kind of edits it could muster. That became Picture Wizard.

## Early experiments
I've never really built an Android app, except for a few tutorials in the past. I've had decent success vibe coding, but I wasn't sure how to integrate Cursor with Android Studio, or if Cursor could even reliably build an Android app. It turned out to not be an issue. Cursor was great for quick iteration, and I could still control the build process through Android Studio. I used it strictly for compiling and emulator runs while Cursor and I filled in the features.

## Planning with copilots
As the surface area grew, I realized I found Cursor providing quick, but unreliable changes. Many features for overarchitected, versioning was inconsistent, and managing Android dependencies seemed to challenge the editor. I iterated on the workflow I developed when I was building [Adeptli](https://adeptli.org). I chose a feature, described it to Codex, and asked for an implementation plan. I found most of my time was spent iterating through the development of the implementation plan, which I shopped around to ChatGPT, Gemini, Codex, and Gemini-CLI. It was interesting to see the different perspectives each model had on the plan. In the end, I took all those inputs and synthesized something that I felt good about, before starting a build, with an agent.

## Getting real with Firebase
Most of my learning curve was on Firebase. I wired up Auth for Google sign-in, built Firestore collections for generations, and leaned on Storage for the image pipeline. Every time I thought something was done, I found another edge case. Billing retries, storage permissions, security rules. It was fun to learn and explore, and Firebase really makes a lot of the backend simple. After a couple of days, I had a single-activity Jetpack Compose app that could accept a prompt, optionally reuse a reference, and display Nano Banana's handiwork side by side.

<div style="display: flex; gap: 20px; margin: 20px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 300px;">
    {{< figure src="images/7ec8cc42f4be4ba8df80773769ef2674-d_d.webp" alt="Original image from Zillow" caption="Original image from Zillow" >}}
  </div>
  <div style="flex: 1; min-width: 300px;">
    {{< figure src="images/PictureWizard_1759847807246_add_a_small_deck_to_this_house.png" alt="Porch-friendly remix of the same house" caption="Porch-friendly remix of the same house" >}}
  </div>
</div>

Those two shots are from a prompt my wife and I obsessed over: "What if this house had a porch?" Picture Wizard made it stupidly easy to experiment, and suddenly we were iterating on renovation ideas every night.

## The beta gauntlet
Then came Google's reality check: you need twelve active testers and a fourteen-day soak before the Play Store will even look at a production submission. I scrambled to find volunteers, set up Firebase app distribution, and spent the waiting period shipping polish. I kept pushing builds, collecting feedback through email and text messages, and watching the roadmap evolve in real time. The testers were amazing. One friend cartoonified vacation photos, another lasered his son's portrait after he stripped out the background with the app. Every share was proof that the tool was more than a tech demo.

## Launch and life
Once the clock expired, I hit submit and Picture Wizard went live. The release notes were almost anticlimactic compared to the wild beta cycle, but the payoff came at home. My wife uses it constantly while we evaluate houses, sketching patios, porches, and new siding in minutes. That feedback loop, seeing her light up, then hearing from testers whose imaginations ran wild, made every late-night debugging session worth it.

## What's next
Now that the app is out there, I'm focused on tightening the loop between idea and iteration: better gallery tools, richer sharing, and more guidance for people who are new to generative image prompts. Nano Banana already feels less mysterious, and Picture Wizard keeps finding new ways to be useful. I'm just happy I followed the urge to build when the API landed. This one has been a lot of fun!

Check out [Picture Wizard](https://play.google.com/store/apps/details?id=com.brettfitzgerald.picturewizard&pcampaignid=blog_post), and give some feedback on the [discord](https://discord.gg/CwBQMuzT) channel!
