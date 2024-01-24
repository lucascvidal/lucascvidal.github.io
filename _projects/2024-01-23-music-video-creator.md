---
layout: post
title:  "Music Video Creator"
date:   2024-01-23 18:06:00 -0300
author: Lucas Cezere Vidal
permalink: /projects/:title
---

Let me write about an interesting project that started out as a simple script to automate a few tasks and turned into a comprehensive bot that integrates with several APIs.

So, I created a YouTube Dark Channel with the goal of monetizing the audience through Google AdSense. However, I grew weary of manually producing videos, prompting me, as a developer, to contemplate automating the video creation process.

The process was pretty straightforward:
1. Create 10 tracks in [Soundful](https://soundful.com/) using a theme template;
1. Create an image related to the Soundful template using [SeaArt](https://seaart.ai/);
1. Create a video using [Clipchamp](https://clipchamp.com/) where the image is on a loop with the 10 tracks merged as one soundtrack;
1. Upload the video to YouTube using [Chat-GPT](https://chat.openai.com/) to generate the title, tags and description.

After following this process for about 5 times I decided I needed to automate these tasks. The first, and the most time consuming one, was the track creation in Soundful. I needed to choose a theme, configure BPM and key, create a preview, then turn that preview into a track, render the track and finally download it. Imagine doing that manually 10 times when I wanted to create a video! My original plan was to upload 2 videos per week to YouTube, so I was going to need to dedicate quite some time to these Soundful related tasks.

Soundful does not have a public API. They do run a single-page application, so with a little bit of tinkering around Dev Tools I was able to map the endpoints, payload, and authorization needed to generate previews, create tracks, render tracks and then download them. It was nothing fancy, authorization on HTTP request header, payloads were pretty much the information I saw in the UI or some data I got from a previous request in the flow, so it took some time but after everything was mapped out, it was fairly easy to update and maintain the scripts.

If you check the [repository for this project](https://github.com/lucascvidal/music-video-creator), the scripts that handle these Soundful tasks are:
- create_tasks.rb
- download_tasks.rb

I used Ruby to write them because I'm used to developing applications in Ruby on Rails and I quite like the development speed Ruby allows. Syntax is pretty simple, interpretation times are not that high, and it is, as Python is also, an effective tool for tasks automation.

First I wrote only the create_tasks.rb script, and left the task of downloading the tracks from Soundful to be manually performed. Then I moved on to the video creation step. For this I tried to write a Ruby script, but due to the nature of the tools I wanted to use (FFMPEG for those wondering) it made more sense to write a shell script, which is what I did. The create_video.sh script is responsible for concatenating the 10 audio files into one, and then creating a video with the image I generated using SeaArt as the background for the tracks. When I was using SeaArt I wasn't doing that programatically, as I couldn't find the endpoints and authorization information as easy as I did with Soundful.

So, at this point, the only tasks I had already automated were track preview, creation and rendering.

I thought it was ok and the last step I wanted to automate at this moment was the video upload to YouTube. I had already worked with the Google Analytics API for a professional project, and I was familiar with the OAuth flow for web applications Google uses. For this though, it made more sense to use the desktop app flow. So, I headed to Google Cloud Console, created a project, configured OAuth flow and credentials for my app, and started writing the upload_video.py script.

For this script I chose Python because of the Google libraries. I couldn't find them for Ruby, so I just set up configuration for my VS Code Dev Container to handle both Ruby and Python and got on with it.

When I was doing things manually I was using the web UI for Chat-GPT to come up with the video's title, description and tags. With this script I wanted to use OpenAI's Chat-GPT API to generate these. So, I did just that.

As I was studying the OpenAI Chat-GPT API I wandered around the docs a little, saw that I could use DALL-E to generate images instead of SeaArt and that I could do that easily using its API.

I then decided to write a new script, create_thumbnail.rb, to automate this step, replacing SeaArt with DALL-E. One interesting decision I took was to use Chat-GPT to generate the prompt DALL-E would receive based on the Soundful track theme. Another one was to use RMagick library to write texts to the DALL-E image, generating both the video background and the video thumbnail.

At this juncture, I had automated all the tasks but one, the tracks' download from Soundful. I couldn't leave it like that, so I create the download_tracks.rb script and adjusted a few things on the create_tasks.rb script so I could save track data and use it in this new script. Finally, All the process steps were automated, but I had to keep running different commands in a terminal window, so I decided to create a new shell script that would encapsulate all of these Ruby, Python and shell scripts into one, prompting the user for info and guiding it through the whole process. That is what the soundful_bot.sh script does.

This was the first time I steadily used AI tools to help me program, specially with languages I was not familiar, as it is with shell script. I was also careful to keep using my professional practices in this project. For instance, sensitive data, as Soundful's user ID and OpenAI's API key are set in an .env file, and I went through all the configuration process to run the project in a detailed README. The only thing I did not do here was to work with Pull Requests and code reviews from other developers.

I wrote all the scripts on a period of a week approximately, and I could say I had fun developing this project. It is very much aligned with what I have been doing professionally when it comes to back-end development: integrating with different APIs, using AI tools to automate tasks, and as I wrote previously, the first time I coded using Google Bard and OpenAI Chat-GPT as my rubber ducks. Good times.

I have set the repository for this project as public archive because YouTube started flagging my videos as spam and computer generated content. I wouldn't say it is spam, but for the computer generated part, they are probably right.
