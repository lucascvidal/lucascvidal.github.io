---
layout: post
title:  "A development process"
date:   2020-05-01 19:49:00 -0300
---
# A development process

I believe developing any piece of software has 3 stages:
- Defining what should be built
- Building it
- Putting it to test

Each of these 3 stages has its own details and challenges and I don't really see a difference in the goals of these stages whether I'm using an agile methodology or any other. Regarding the building stage, each and every time I started a project I had to answer three questions to actually be able to build something:
- What is the problem I'm trying to solve?
- What will I do to solve it?
- Why will I do what I will do to solve it?

It took me a while to figure out this pattern, but it kept coming up and eventually I could see it more clearly. When these questions aren't fully answered, it becomes very hard to get the project going.

This 3-stage process I wrote about was extended and thought out by a lot of smart people and there are a lot of books covering different software development lifecycle techniques and frameworks. Along the next lines I will lay out what I have been doing and what has worked for me until now personally, because when I'm working for somebody I usually follow what they believe to be the ideal development process.

## The development process phases
Each phase has its own processes and tools to get to the next phase.
### Requirement analysis
In this phase I investigate the problem I'm trying to solve and come up with the requirements of something that would solve this problem. I have been studying about UX and I believe it is of most importance here because the UX field has a lot of techniques to help us understand the needs of the user, which turn out to define the requirements of the software.
### Plan
Here I try to put into words and diagrams what I want to build to fulfill the requirements. Software engineering and architecture skills are essential here.
### Design
This is where I start to actually design the thing I want to build by refining the software architecture, exploring design patterns and doing UI design, if necessary.
### Build
This is where stuff actually gets built. I would draft the algorithm I want to implement and then start writing code.
### Test
This is the moment to test what was built. I like to write unit tests for the algorithms I implement into code, so in this phase I run all these unit tests and also test the software manually.
### Launch
Time to put the software to use, measure what's important in the usage and gather feedback for refinement. This phase could also be called deploy.

This cycle can repeat itself every time a new feature or an improvement is thought for the software. It isn't static.

I'll come back to this post and update it to include the tools and techniques I'm using while developing software, but for now I'll leave it as it is.
