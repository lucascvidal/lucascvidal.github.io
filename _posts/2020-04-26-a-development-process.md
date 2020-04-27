---
layout: post
title:  "A development process"
date:   2020-04-26 21:12:00 -0300
---
# A development process

I have designed and built a few things over the years. Some of these things were small vehicles, like a [reverse trike](https://media-exp1.licdn.com/dms/image/C4E2DAQGxb_2Uz3X0FA/profile-treasury-image-shrink_1280_1280/0?e=1588035600&v=beta&t=ZLXlqOxNjHFHhD8sCb96eIL6TYZRLnx3U3fyyt6ykMw), some were machine parts and most recently these things were pieces of software.

Each and every time I started a project I had to answer three questions:
- What is the problem I'm trying to solve?
- What will I do to solve it?
- Why will I do what I will do to solve it?

It took me a while to figure out this pattern, but it kept coming up and eventually I could see it more clearly. When these questions aren't fully answered, it becomes very hard to get the project going.

When I started writing code for a living (which wasn't that long ago) I kind of forgot these principles. I think maybe I was confused and thought this process only worked for what I have been doing before. The very first project I worked on as a software engineer had problems during the development phase because these questions were partially answered.

So, this pattern I kept crossing paths with is part of a bigger thing called the product development lifecycle. When building software as a product, there is a detailed process called the software development lifecycle. There are a lot of books covering different software development lifecycle techniques and frameworks, along the next lines I will lay out what I have been doing and what has worked for me until now.

## The development process phases
Each phase has its own processes and tools to get to the next phase.
### Requirement analysis
In this phase I investigate the problem I'm trying to solve and come up with the requirements of something that would solve this problem.
### Plan
Here I try to put into words and diagrams what I want to build to fulfill the requirements.
### Design
This is where I start to actually design the thing I want to build. If it were the reverse trike, this is where I start drawing the parts, doing calculations and selecting materials. If it were a piece of software, this is the moment I define the architecture and UI design if needed.
### Build
This is where stuff actually gets built. If it is something like a machine part, this is where material is bought, cut and machined to form the part. If it is software, this is the phase I would draft the algorithm I want to implement and then start writing code.
### Test
This is the moment we test our design. When I built the reverse trike, this is when I first took it for a ride down the street. Regarding software, I like to write unit tests for all the algorithms I implement into code, so in this phase I run all these unit tests and also test the software manually.
### Launch
Time to put the product to use, measure what's important in the usage and gather feedback for product refinement. This phase could be called deploy in terms of software.

This cycle can repeat itself every time a new feature or an improvement is thought for the product. It isn't static.

I'll come back to this post and update it to include the tools and techniques I'm using while developing software, but for now I'll leave it as it is.
