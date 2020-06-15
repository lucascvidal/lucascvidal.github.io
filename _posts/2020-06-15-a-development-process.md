---
layout: post
title:  "A development process"
date:   2020-06-15 09:26:00 -0300
---
I believe developing any kind of product has 3 stages:
- Defining what should be built
- Building it
- Putting it to test

Each of these 3 stages has its own details and challenges and I believe the order in which they are executed is very important. It can seem very obvious that to test something it has to be built beforehand, but I have seen the other two stages being exchanged a lot of times and I have never seen a cost-effective functional outcome when it happened. In fact, I have seen projects getting nowhere near done when people involved started building stuff they haven't given thought about how it should be and used up all the budget for the 3 stages in the process.

Each and every time I started a project I had to answer three questions to actually be able to build something that worked:
- What is the problem I'm trying to solve?
- What will I do to solve it?
- Why will I do what I will do to solve it?

It took me a while to figure out this pattern, but it kept coming up and eventually I could see it more clearly. I think I could have seen this pattern earlier if I had actually searched for references on product design instead of just following what I had in mind. When these questions aren't fully answered, it becomes very hard to get the project going. This is what I believe should be addressed in the first stage of the development process, the one I called _defining what should be built_.

This 3-stage process I wrote about could be faced as a generalization of a _product development lifecycle_. If you do a quick search about the theme you will find a lot of information on books, courses, articles and videos. It can be overwhelming so I suggest narrowing down the search by the category of the product you are trying to develop, for instance, search for software development lifecyle instead of product development lifecycle to get a more detailed insight into a software product.

This doesn't mean the product development lifecycle content should be ignored. Actually, to me it makes more sense to start with this general top view of what a product and its lifecycle are and then get into the details of particular categories.

Along the next lines I will lay out what I have been doing in each of the 3 stages and what has worked for me until now personally, because when I'm working for somebody I usually follow what they believe to be the ideal development process.

# Defining what should be built

The main goal in this stage is to get a clear general view on what is going to be built. In this stage I investigate the problem I'm trying to solve and I come up with loose requirements of something that would solve this problem.

Business and UX tools help me map the needs of the user, which turn out to define the requirements of the product. Studying such tools is important to build something that is relevant to the user. I also find helpful to study the different economic views on value perception by people. That is relevant because if the user doesn't see value in the product I'm offering, it's quite simply useless.

I have been familiar with tools such as the Business Model Canvas and more traditional Business Plans, but they go way too deep into the operations of a business and for this particular stage I think it's just too much.

I came to know a tool called [Value Proposition Canvas](https://designabetterbusiness.com/2017/10/12/how-to-really-understand-your-customer-with-the-value-proposition-canvas/), which I believe is derived from the Business Model Canvas but focus solely on the value proposition to the user, and this tool has really helped me understand the needs of the user so that I could define the requirements of the product I would build.

In addition, writing scenarios and use cases for the product helps me get a general view of what the product should be and how it should behave when being used. I also like to use diagrams and drawings to refine these ideas. In this stage I also define the project management metrics and techniques that I'll be using, along with the tools to build the product.

An example, for most of my software projects I use git as versioning system, GitHub to store my remote git repository and a combination of Visual Studio Code and Vim to write code. These tools may change depending on what technology and language I'll use for the project. To manage such projects I use GitHub's project board feature with an automated kanban template and track backlog items as issues in the repository.

After these planning activities, I start to actually design the thing I want to build by exploring design patterns and also thinking about the user interface with the product.

# Building it

This stage is about creating what I have visualized, the way I have defined it in order to solve the problem I'm aiming to solve. This stage is highly coupled with the category of the product and the fabrication methods belonging to that knowledge area. I'm a mechanical engineer and when I'm involved in what could be called a mechanical project this stage is where the cutting, 3D printing, machining, forging, welding and so many other fabrication techniques are being used to create the product. I'm also a software developer and this is the stage where code is being written, deployed and validated internally.

In my software projects, I start by drafting the algorithm I want to implement. I literally write the steps in pseudo-code and then translate them to the language I'm writing code in. After that, I write unit tests for that algorithm. Sometimes I write the unit tests before, but that doesn't happen very often. I like to use the [GitHub flow](https://www.youtube.com/watch?v=PBI2Rz-ZOxU) as a workflow. GitHub Learning Lab has a [nice short course](https://lab.github.com/githubtraining/introduction-to-github) presenting it and a few other GitHub features.

My non-software projects are almost always an assembly of mechanisms and normally I don't have all the tools needed to get the job done, so in this stage I'm usually buying the base materials and components and transporting them to a shop. For instance, I once designed a trike and took all the metal tubing and bike parts to my university's shop to get it built.

# Putting it to test

This is the moment to put the product into users' hands and see if it helps them get the problem solved.

This should be pretty straight forward, and if it isn't, the product's usability probably should have been more thought out. For example, when the trike was built I took it for a ride like I would ride a normal bicycle and it behave pretty much as I was expecting it to, even though I miscalculated some suspension components and they were bent. An app's usage should be easy to discover as the trike's was.

It is very important to gather feedback from the users at this stage to improve the product. This 3-stage cycle can repeat itself every time a new feature or an improvement is thought for the product. It isn't static.

# Conclusion

The planning activities are essential to get to a working prototype and a succesful product. The first stage of the 3 was the most detailed in this post because of this. I truly believe planning is necessary to achieve the most out of the project's resources but that shouldn't be prioritized at the expense of user feedback. If I can plan enough to get a product up and running to gather feedback from the user, I believe I have found the ideal development process.

I also believe studying about the different details of the product's target audience is of huge importance to develop a product as free of bias as possible. The user should always be the center of the development process.

That said, sometimes a product is very simple and these stages are gone through once, maybe twice, with not a lot of time invested in them, and that's ok. Maybe a product can be developed even without following this 3-stage cycle and without any planning at all, and that's also ok. Nevertheless, I don't believe any product with a little bit of complexity can be designed and built without going through these stages, particularly the first one, at least 10 times.
