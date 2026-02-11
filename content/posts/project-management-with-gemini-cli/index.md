---
date: '2026-02-11'
draft: false
title: 'Project Management with Gemini CLI'
description: "How I use the Gemini CLI, Obsidian, and the PARA method to manage project lifecycles and stay in a state of flow."
summary: "Combining David Allen's Getting Things Done with Tiago Forte's Second Brain and leveraging AI to keep it all organized."
tags:
    - AI
    - Gemini CLI
    - Obsidian
    - Productivity
categories:
    - Workflows
ShowToc: true
TocOpen: false
---

## Project (or Task) Management
In my day job, I work as a product owner for an Advanced Analytics / Data Science team. It's a bunch of really smart people that use many analytical techniques including machine learning, statistical models, and a whole host of other tools. We work with teams across most of the business to help understand markets, demand, supply chain, sales... just about everything. Generally speaking, we have a lot of stakeholders and several projects in-flight at any given time. Much of the work we do is proof-of-concept with new tools, or building and refining analytical engines to help accelerate business areas. The nature of this work usually involves multiple feedback cycles and waiting to hear from our business stakeholders on the effectiveness of our work. That leads to many projects in flight and in various states of their POC -> MVP -> Iterate -> Deliver-to-supporting-team lifecycle.

With so many projects in flight, it's very easy for me to lose sight of the details within the projects, and what next-best action I need to be focused on, any given day. While I generally "get" the big picture, I'm less of a detail-oriented mind, and things can slip through the cracks.

## Efforts Up Until Now
I wrote earlier about how I was [experimenting with Google's Agent Development Kit]({{< ref "how-i-used-google-adk-and-ai-agents-to-take-control-of-my-todoist-backlog" >}}) and having it interact with Todoist for managing my tasks. This was great, but it lacked context and prioritization. It quickly grew to become unmanageable. In my personal life, I use [Obsidian.md](https://obsidian.md/) to manage my "[second brain](https://amzn.to/4ammFzO)" using the [PARA](https://fortelabs.com/blog/para/) method of organization. It's nice because I can quickly capture ideas for later processing. I tried using this for work, but once something was logged and dealt with, I struggled with follow-up tasks bubbling back up. Even worse, if I was waiting for a reply to something, it would likely get lost in my notes and never be seen again.

I'm also a fan of David Allen's book, "[Getting Things Done](https://amzn.to/3OAkaT4)". This idea of having an inbox for ideas and tasks to be sorted and scheduled into specific actionable areas resonates with me. I have leveraged this system in the past with mild success. It still didn't do a great job of handling "waiting for..." types of tasks. I could file a follow-up to be addressed in a week, but I get a response the following day, I would struggle to find the task that I scheduled out. It became more managing my task manager than actually getting things done.

Today, I've sort of mashed techniques and tools together to create an abomination of productivity.

## PARAIGTD
Don't use that name. It's just a mashup of letters to show that I'm using the PARA method of organization, combined with the Getting Things Done method of getting things done, and leveraging AI to help me keep it all organized. I have a DASHBOARD.md file that lists my current projects in either an "in progress" or "backlog" state, and all the immediately actionable tasks associated with those projects. Each project has its own directory and dashboard. Those individual dashboards have ToDo lists of tasks, organized with the Obsidian Tasks plugin, which is how I have my master list of actionable tasks on my master Dashboard. Meeting transcripts are archived in those project directories as well. Because this is all done in markdown, it makes it very easy to leverage a CLI agent to take action.

My workflow is something like this:

Each morning, when I start work, I load up [Gemini CLI](https://github.com/google/gemini-cli) in the directory of my Obsidian vault which corresponds to my work. I tell it my calendar for the day (future improvement, build a skill to allow read-only access to my calendar), and then ask it for help prioritizing my tasks. The agent churns for a bit, and then gives me a suggestion for how to structure my day and the most impactful work I can accomplish. I compare this to my dashboard, and get to work!

Throughout the day, as emails, chats, or meetings happen, I drop either the outcomes of those, or direct copy/pastes of conversations and transcriptions into the agent and ask it to update my project files. It does a decent job of identifying the project, marking off tasks, adding new ones, and updating the project documentation. New tasks get a "due date" of a reasonable date, which ensures that they bubble up in the future. Additionally, the agent is able to examine the project files very quickly and update future tasks that might have taken me a considerable amount of time to locate and manage.

At the end of each day, I conduct an end-of-day audit with the agent, log what was decided and completed, and update any future tasks that need to be revised.

## What's next?
I'm not sure. I keep a GEMINI.md file up to date with how I want the agent to act, and I'm frequently tweaking that. Here's an excerpt:

```
## 1. Role & Persona
You are a **Executive Obsidian Assistant** combining David Allen's *Getting Things Done* (GTD) with Tiago Forte's *Second Brain*.
* **Primary Goal:** Maintain a "State of Flow" for the user (Brett). Ensure every item in the system has a home and a next action.
* **Method:** You manage the Obsidian Vault structure, ensuring links are valid and the `DASHBOARD.md` is always actionable.
```

That file is constantly evolving, which is why I'm not pasting it in its entirety. I'm sure if you wanted to, you could copy this blog post into Gemini, ChatGPT or whatever and ask it to generate an AGENTS.md file for your own use, and give it a shot. Let me know how it goes!
