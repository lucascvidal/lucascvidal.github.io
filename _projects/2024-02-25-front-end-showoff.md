---
layout: post
title:  "Diving Deep into CSS: The Making of Front-End Showoff"
date:   2024-02-25 18:06:00 -0300
author: Lucas Cezere Vidal
permalink: /projects/:title
---
I have been wanting to dive deeper into CSS Animations for quite some time, and I figured this project was a good opportunity to do so. I’m a mechanical engineer that has shifted carreers towards software development, and since 2020, also software engineering. The stuff I studied the most before actually getting a job in the industry was front-end development, specially CSS.

When I started working as a software developer I had close to none real back-end experience. I knew a bit of web development, but just enough to get past the problem sets presented by the courses I took. I was lucky to work with very experienced and seasoned developers and engineers. Some of them took me under their wing and I learned a lot from those experiences. However, there was one thing I could do from the first day in the job that they couldn’t do. They could not code proper CSS and HTML. Not for their lives.

Then I realized I actually had the talent for coding everything the designers threw at me during the development of the products we were involved in. Since then, I became the front-end specialist in the team. As a specialist, I have to admit I felt ashamed of not understanding CSS animations at a deeper level.

That is were this project comes in. This is a Spotify clone, with a few touches of interesting bits I encountered during my days as a software developer. I wanted to mix stuff commonly present in applications development with animations, which are often left aside because of the extra time needed to implement them.

What sparked my mind into creating this project was that I needed an example implementation for students of my CSS course, something like a final project for them. The course is focused mostly on CSS for regular applications development, that means the target audience is usually a back-end developer or a full-stack developer that hasn't really studied CSS deeply and struggles with intermediate to more advanced topics, like using flexbox or grid, hover effects, pseudo-classes, and a few other CSS bits that go beyond changing text color and margin or padding.

I chose to implement a Spotify clone because it is a very successful application with some interesting bits, like small animations and lots of things on the screen, each of them respecting margins, padding, font-size, hovering transitions, anyway, the Spotify Web Player application is a plethora of CSS stuff, which was exactly what students need to be able to code as they approach the end of the course.

This project also helping me learn more about CSS animations was a nice addition.

I have used SCSS for the styling simply because of the easier syntax and nested classes features, but everything could have been written in plain CSS with ease, as I did not use advanced Sass features. The HTML is plain old HTML5, and the JavaScript is pure vanilla.

These 3 technologies are the pillars of web front-end development, and I didn't want to add any libraries to it because I wanted no abstractions that would make the students' life easier but would keep them trapped in the framework or library way of doing things, not really understading the building blocks of it.

For the CSS animations, which became quite an expensive topic on this project, I would like to highlight the Star Wars style opening, which has an interesting use of `position: relative` and `background: linear-gradient`, the cursor highlighting some of the text on the marketing callout section, the glimpse button movement and the equalizer animation on the track being played on Spotify's clone. The latter is a gif in Spotify's Web player, but an actual CSS animation in my implementation.

Coding these animations pointed out how far I was from understanding CSS animations intuitively, and after almost a month working on this project in my spare time, I have to say I feel more confident in tackling interaction designs than I was before. Another bonus I had with this project was that I finally used `display: grid` seriously. Before this project, I would always go with flexbox to place things on the screen, now I can see where I will still be using flexbox and where grid will be a better choice.

I'm happy with the way the project turned out. Nonetheless, there is still one thing that could be better: the audio player could actually play songs. This is totally possible with HTML5 audio API, and I have written what I would expect from such an implementation on the project's README.

This is all I wanted to write about this project here, now please go check out the [repository](https://github.com/lucascvidal/front-end-showoff), and the [actual page!](https://lucascvidal.github.io/front-end-showoff)
