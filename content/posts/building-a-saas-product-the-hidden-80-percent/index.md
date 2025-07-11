---
title: "Building a SaaS Product: The Hidden 80% That Nobody Talks About"
date: 2025-07-11
description: "My journey building a software service website revealed that only 20% was the actual value I wanted to provide. The other 80% was all the infrastructure nobody thinks about until they're deep in it."
tags: [programming, technology, saas, entrepreneurship, web-development]
---
> "I've got a great idea for a weekend project!"

Two months later...

>"I'm launching my weekend project!"

## The Dream vs. The Reality

I want to give anyone the power to learn anything, however they want to. That was the idea. With the Age of A.I. changing the way we think and work, I thought this would be a great time to get started turning that project into a reality. As the technology advances, so can my solution. So I whipped up a proof-of-concept in a couple of days, thought to myself "that's not bad!" and decided to launch it to get feedback. I just needed to wrap up a couple of technical details so other people could play with it, and I'd be all set, getting valuable user feedback!

Those technical details? Infrastructure, security, user management, payments, hosting, and a hundred other things that users never see but absolutely need for the product to work in the real world.

## The 20%: Bespoke learning plans to learn anything, affordably

This is the fun part. This is what gets you excited about building the product in the first place. For me, this included:

- **The opportunity**: I wanted a place that a user could describe what they wanted to learn and what they already know, and the system would generate a learning plan to get them from where they are to where they are going. No need to pay for an expensive course where you already know a quarter of the material. Or you pay for a course and it's too far beyond your current skillset to engage with. I want to give people a custom-tailored plan to accomplish their learning goals. And I want to do it for cheap. Don't pay for a course that you don't complete. Only pay for the portions that you work through. 
- **Technical Implementation**: I wanted to play with current A.I. technologies. Not just for doing my own work, but for help others. Sure, I want to "vibe code" to see what that's all about, but I want to create something that solves a real problem and helps real people.
- **User Experience**: I don't have a background in UI/UX, but I do love people in general. Whatever I build, I want it to be fun to use. I don't want to create frustration in the tool itself. Learning has it's own challenges and frustrations. The container for learning shouldn't add to those.

## The 80%: The Infrastructure Nobody Talks About

As I mentioned, it took me a couple of days to build the core functionality. I wanted to play with [Cursor](https://cursor.com), since I hadn't done that before. And I really wanted to keep my costs very low. I don't know if anyone other than me actually wants this platform. I don't want to spend hundreds of dollars if I'm the only one using it. I just want to build something and see if anyone else wants to use it.

But... since this is a personalized learning plan, I need to allow people to login to the site to see *their* specifc learning plans. That means...

### User Accounts! 

And if I have user accounts, that means that I need to also enable user registration, password changes, and password resets. Also, I'll need to restrict some pages to just be authenticaed pages, so people see just their specific content and no one else's. Thanks to Cursor, it only takes a couple more days to hammer these things out. I'm only working a couple of hours each on this project, since my family and my full-time job take precedeence over my side-project.

It sure would be nice to get *someone* into the system to take a look at it. So far, this is all just sitting on my local machine. I'll want to publish it somewhere so someone can look at it. That means...

### Hosting!

I'm familiar with AWS, so I started going down that path and cobbling together a solution. ChatGPT and Gemini were guiding me through this process, but luckily I reached out my buddy Nate with my implementation plan. He quickly informed me that what I was doing was fantastic and scalable to the enterprise level, but massively overkill for what I need. He pointed me to [Fly.io](https://fly.io/) for cheap and lightweight hosting. I signed up, figured out my database, backend, and frontend hosting solutions, registered a [adeptli.org](https://adeptli.org), which forced me to come up with a name, figure out SSL, point my DNS, create Docker containers and fly .toml files, build a CI/CD pipeline, and deploy my application to the world wide web. That was another two days of effort. It's never as easy as adverised...

I never actually coded in the user registration piece, so as of now, no one can create an account. I have to manually create an account for any new user, which at this point, I'm ok with. Why? The user experience is still terrible. This is still an *idea*, not a product. At this stage of the idea life cycle, I need cheerleaders, not critics. I need to be selective of who sees it. There will certainly be time for criticism later (and that's a very important time)!

I don't mind footing the bill for these initial users, because I value their feedback, and they're my friends. But eventually I'll want to open this up for more people, and allow anyone to create an account. From there, anyone could, in theory, start generating their own learning plans, which I'm still very excited about! Learning plans generated by A.I. agents to enable anyone to learn anything!

However, each one of those learning plans costs me some actual money. I don't want to just expose modern A.I. agents on the web for free, because if word gets around, I'll go bankrupt very quickly! So I need to charge something so it doesn't get abused. That means I need...

### Payment Processing!

I'll need testing accounts, production accounts, refunds management, PCI considerations, failed transaction handling, and a host of other concerns.

Fine, I can do that. [Lemon Squeezy](https://www.lemonsqueezy.com/) seems to make it pretty simple. They seem to cover everything. I can probably charge a few cents to the end user per request, and then bespoke education will be available to the masses! But Lemon Squeezy charges $.50 per transaction, plus a fee. And users probably don't want to have to go through another payment every time they want to load their next chapter. But maybe they do? If I charge a dollar per chapter, that really only brings in 45ish cents to cover the costs of the AI generation, hosting, domain name, and all that. If a person could agree to purchase more than one chapter at a time, that would save me a lot in transaction fees. So that means I can offer bulk discounts to the users, but then I have to have packages of chapters. The easiest way to do that is to implement a...

### Credit System!

Everyone these days is charging a subscription. ChatGPT, Claude, Gemini, Netflix, Disney, Amazon, t-shirts, food, basically anything you want, you can get more than you need via subscription. I don't want people to pay for more than they need, so I'm fairly anti-subscription. If I want to give volume discounting, that means I need to sell packages of "credits". So I come up with a set of packages to sell through Lemon Squeezy, a way for users to buy those packages, credit management, and charging credits for chapters (but not the first one!). That's all well and good, but I still want my friends to have free access for feedback. And I might want to gift some credits to people in the beginning to get early feedback. And maybe I need to disable an account for abuse or something. That means I need...

### Admin Interface!
Yes, I'll want to be able to add credits to users, disable accounts, manually create accounts, and other administrative tasks. Eventually I'll want some reporting to see how people are actually using the tools, but for now that should be fine. That one was simple. Just a couple hours of coding with Cursor knocked out an admin interface. Don't forget to secure it! Now I'll be able to serve the users better. Speaking of the users, once they go to [Adeptli.org](https://adeptli.org), they'll probably want to see what this is all about. That means I need...

### A Landing Page!
Something that shows what the heck this actually is! And while I'm at it, I'll probably also need a privacy policy and terms of service. And those will need contact information, but I don't want to just put my personal email address out there for the whole world to see. That means I need...

### Email Accounts!
Over to Google for $8 / mo for a "professional" account, and then hooking all that up. Jumping through all the security and authorization hoops there, and getting it set up on my phone. Say hello to admin@adeptli.org! (no really, say hello!) That's the email I'll want to use for any communication around this project, since, as I stated earlier, my family is my top priority so I want decent boundaries. I don't want server alerts going to my personal email account. Oh yeah! Server alerts! That means I need...

### Server Monitoring!
Luckily, [Fly.io](https://fly.io/) makes this pretty straightforward to handle, with their partnership with Sentry. I've never used Sentry, but getting it ingterated wasn't too bad. Just a few hours to get it up and running and reporting. May as well throw in some Google Analytics so I can see how people are using my site, beyond just what's going wrong. It is nice to know that now I'll be aware very quickly if my database goes down. I don't want people to lose the credits they paid for. That means I need...

### Database Backups!
Again [Fly.io](https://fly.io/) makes this easy. Oh wait, nope, I didn't choose managed Postgres for my DB at the beginning, since there was an extra charge. I'm on unmanaged, and I don't want to build my own database backup solution. So I'll have to create a managed Postgres DB that has automatic backups, then migrate all my existing content over there. That only took... half a day :( But hey, I get to learn a lot! And that's my goal! Enabling anyone to learn anything, the way they want! But if it's truly available to anyone, I have one last piece. That means I need...

### User registration!
Yes, that's the last piece of the puzzle. Pretty straightforward. Let people in, and let people use the application. But I don't want bots creating accounts, since I let people create lesson plans and go through their first chapter at no cost. The could incur significant fees if abused. So I'll have to enable one of those annoying "verify your email" mechanisms. That shouldn't be too hard, especially because I already created email accounts for the site. But once that is in place, I've built an MVP! And launched it!

## 80/20

<div style="display: flex; gap: 20px; margin: 20px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 300px;">
    {{< figure src="images/initial_commit.png" alt="Initial commit on April 28" caption="Initial commit - April 28" >}}
  </div>
  <div style="flex: 1; min-width: 300px;">
    {{< figure src="images/launch_commit.png" alt="Launch commit on July 9" caption="Launch commit - July 9" >}}
  </div>
</div>
So all in all, I wrote my first proof of concept in about two days. Then, to wrap the website "fundamentals" around it took me another *two months*. As mentioned, I have a lot of competing priorities and this was a fun side project for me. Will it gain any traction? Beats me. But I'm going to continue to refine it and hammer away at it. Now that I have the "admin" side of the project in a functional state, I can start iterating on the core functionality and improving it. 

## Conclusion

I'm pretty confident I did this The Hard Way. I'm sure there are boilerplate frameworks for sites with user registration, security, authentication, payments, etc. Likely, they do a better job than I did, and are more secure. I quite possibly could have saved myself a month or more of time and effort with a quick google search.

But I can look at this little project and say "I built this." Or rather, "I basically guided AI tools through the development process to build this." And I got to experiment with Cursor, Jules, Gemini, ChatGPT, Claude, Lovable, Bolt.new, and a host of other up and coming tools.

If I had to do it all over, I'd start by looking for a modern web boilerplate package to start from. Maybe I would replace it one day, if that became the best value-add action for my project, but it would certainly accelerate me to getting my idea in front of people.

Maybe no one will use this. If you're interested in checking it out, I'd love to have you register over at [adeptli.org](https://adeptli.org). I made a [discord](https://discord.gg/DFgjGagDtM) server so that I can chat with you and hear your feedback. I would really value any feedback that you have. If you read this whole post and singed up on Adeptli, drop me a message on the Discord and I'll credit your account a bit so you can really test out the functionality.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Building a SaaS Product: The Hidden 80% That Nobody Talks About",
  "description": "My journey building a software service website...",
  "author": {
    "@type": "Person",
    "name": "Your Name"
  },
  "datePublished": "2025-07-11"
}
</script>