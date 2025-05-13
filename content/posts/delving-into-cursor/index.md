---
date: '2025-05-13T00:00:00-05:00'
draft: false
title: "Cursor AI: Rediscovering the Joy of Code (A PM's Journey)"
description: "Exploring Cursor AI for Python development: Sharing my real-world experiences, from setup and agentic coding to tackling context loss and bug loops while working with the Jira API and BigQuery."
tags:
    - Programming
    - AI
    - Technology
---
## Delving into Cursor
Ok, I'm late to the game. I just started using [Cursor](https://cursor.sh) to write code. To be fair, writing code isn't really part of my day-to-day job as a Product Manager for an advanced data analytics team, but I wanted to scratch that "builder" itch in me. Also, I wanted better data than what is available through Jira's API. That means I need to write some code, probably in Python since that's my jam. And why not use these AI tools that everyone else is using? But which one(s) should I use?

## Cursor vs. Windsurf vs. Gemini Code Assist vs. Others
Cursor. Why? No reason. Gotta start somewhere, and that's what the kids are talking about.

## Getting set up
Super simple to get Cursor running. Create an account, download the software, and go. Up and running. It looks very familiar (I guess it's a fork of VSCode, which itself resembles Sublime Text, etc.). There's a file browser in the left sidebar, and primary tabbed coding window. In Cursor, though, there's a chatbox on the right that connects to their AI agent. After signup, you're given two weeks of their Pro version for free. I honestly don't know what their free version includes. That was really hard to determine on their website. Full disclosure, I still don't know. Regardless, that's about all you need to get setup.

## First steps
Not knowing where to start, I typed in the description of the application I wanted to build. I've worked with LLMs enough to know to ask if it has any questions for me before it starts doing anything. Sure enough, it asked about technologies to use, and some basic structure questions. Once I answered those, it started writing my code for me! It proposed several files and I blindly accepted the proposals. In short order, I had a basic application running!

## Iterating
The app itself wasn't worth using yet. Several things were non-functional or looked terrible, but I started to correct the issues one at a time. Through this entire process, I didn't write any code. I simply described the change I wanted to make, and Cursor made a suggestion. I accepted it, and tested the results, going back and forth with the agent. I hear a lot about Cursor's superpower: Tab completion. Describe something, hit Tab, and Cursor fills in the rest. I still haven't used that. The Agentic build is doing everything I ask of it.

## Limitations
Eventually, my conversation started losing context. A little note at the bottom of the chat window informed me that starting a new chat will yield better results. But would Cursor pick up where it left off? It turned out, no. A new chat was a new chat. It had the context of the codebase, but only the details of the files that I specifically mentioned. This floundering and context-loss made me realize I needed a better way to guide Cursor, which led me to...

## A Project Plan
As a recovering Agilist, I don't like having a plan. I like to just build things. But a plan gives a person a larger context for what their work does, where it leads, and what it fits into. And that's just what a coding agent needs. So I stopped building for a bit, then told Cursor what my project goals are, and asked it to create a markdown file describing the project, building a checklist of incremental steps we would need to accomplish the project. It happily complied! From that point on, as we accomplished tasks, we checked them off, started a new chat, and picked up right where we left off. Tagging the project plan and the relevant files in a new chat very quickly reacclimated Cursor to what we were doing.

More recently, as features that I'm building into this application are more sizeable, I'm creating Feature plans in addition to the Project plan. So I can give Cursor the overall context of the project, then give it the more granular context of the feature we're building. Keeping these agentic chats small seems to keep them more intellegent.

## Bug loops
I did stumble on some long loops a bug being introduced, then three or four steps of remediation, then it reintroduced the same bug again. As a concise example, I'm new to Big Query and was asking for Cursor to store and update some Big Query records.

Me: Grab the data from the API and update the table in BQ with it.
Cursor: Sure, here's the code.
Me: I ran it and it's adding every record as a new record. I want to update the existing records, and add any new ones. Think "Upsert".
Cursor: Got it. Here's the new code that adds new records and updates existing ones.
Me: I ran that, and now Big Query is complaining about not updating a streaming buffer.
Cursor: That makes sense. The streaming buffer hasn't finished writing to the table from our last operation, so you can't update those records. I'll refactor the code to accommodate this by creating new rows for each record we get back from the API
Me: No, that's where we started!

In order to break out of some of these loops, I had to do some learning (from a co-worker) and learned about Merging records. I mentioned that to Cursor, and it quickly leveraged that method to accomodate the streaming buffers.

## Final Thoughts
I described this to my wife. I like building things and solving problems. I used to write code for a living, but I have a horrible memory. I knew _how_ I wanted to solve a problem, but I spent so much time looking up coding references, examples, or debugging things that seemed pretty far into the weeds. Solving the problems was fun, but writing the code was more of a tedius hoop I had to jump through. Heaven forbid I had to go back through someone else's code to try and discover what they were attempting to do!

Cursor has reignited my joy in coding. I am focused on building and solving problems, not remembering syntax and keeping a complex process flow in my active memory. I can delegate the detailed parts to an AI agent who is, frankly, better at keeping them straight. I'm learning how to interact with the agent in a way that we both meet with success. Small steps, incremental value delivery. Tight feedback loops. It's all that agile stuff. But the fundamental agile stuff, not the meetings, roles, process, and Agile-Industry.

It's fun.

After my two week free Pro trial, the Agent chat just threw errors at me. It said I should try again later, but I never got it to work. I did end up paying the $20 / month for the paid pro version so that I could continue building my application. Frankly, I'm getting excited again about building more things. Ideas keep coming like they used to. When I was new to programming and I naively felt like I could build anything with a handful of for loops and if statements. The feeling of ability seemed to unlock so many ideas. Now I'm feeling that excitement again. Is Cursor (and agentic programming in general) perfect? Nope! But it's really good, and it's going to get better!