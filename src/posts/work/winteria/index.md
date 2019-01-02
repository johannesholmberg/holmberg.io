---
layout: case
date: '2018'
title: 'Winteria'
featuredImage: './winteria.jpg'
website: http://winteria.se
---

## Background

Winteria is a newly founded company which innovates around welding in machinery. The rapidly growing company with its roots in the northern hemisphere of Sweden has already won several stipends by [Vinnova] and [Triple Steelix]. Now, they were looking to widen their online marketing and needed a hand to put together their website.

## Process

[Erik Carlsson], who acted as the Creative Director on the project, and I set out to find what was needed for Winteria’s new website. After an initial workshop with the client to gather their ideas and what they wanted to achieve with their website, we had a solid understanding of the scope of the project. With the requirements nailed down, we got busy getting to work. Erik defined the art direction, while I was putting together the UI and CMS integration.

### Components

On all new projects which needs an extensive frontend I use [PatternLab] as a base. With PatternLab I can focus on building out a robust user interface which is flexible and works with all types of content before I start doing any type of data fetching. This helps me in terms of thinking separately of the UI first.

At this part of the process I start picking out the similar components and naming them. I’m trying to find similarities in appearance and behavior, so it’s also common at this point to consolidate some of what has been established. The good thing about PatternLab is that it allows for isolating the components so that I can test them separately. This goes well with my philosophy to build “components, not screens”. Long headings? Short descriptions? News listing with or without images? Small screens, big screens? Mobile, desktop? How does it work? Thanks to PatternLab, this is a breeze to test. When the components are all coded to be resilient and withstand different types of input I can start to put them together. The lego pieces are made, time to make use of them.

![Some of the UI components made with PatternLab]
_Some of the UI components made with PatternLab_

![Testing the footer in PatternLab]
_Testing the footer in PatternLab_

### Content blocks

At this moment in the process I start putting together what I call the “content blocks”. These blocks are what the editors of the website will use to put together the screens they need for their website. Designing this way means we are not making rigid page templates, but we’re giving the client the “ingredients” to put together any screen they wish. It’s basically a drag and drop interface of the parts they’re needing for their website.

What works so well for me to build out the UI before I’m doing any CMS integration is that I can start thinking about the data layer ahead of time. This way I’m already aware of what content types would be needed and the attributes for each of them. Thanks to this I can customize the CMS to make it dead simple for the editors to add content to the website. I just give them the fields they need and no more. Nothing is more terrifying than putting a rich text editor in place and leave it up to the editors to “get it right”. We don’t open up this possibility so there can’t be any errors in the content editing process. Everybody is happy.

### Data layer

WordPress is my CMS of choice for my clients and I’ve developed for it over many, many years. Now I move over the UI code into a WordPress template and start making the bits and pieces dynamic. When the general parts of the interface has been transferred I start mapping out the different content types needed for the data structure. This could be “Cases”, “Products”, “Job listings” etc. In WordPress I’m also making use of the [Advanced Custom Fields plugin] to customize the CMS so we can create the proper field types for each content type.

![A couple of the content blocks available in the CMS]
_A couple of the content blocks available in the CMS_

During this process I sometimes need to go back and adjust the UI code a bit, depending on what parts of the frontend I don’t have control over. This could for instance be the way WordPress is handling menus and how it’s attaching the class names for each list item. I may need to adjust some of my class names or add some extra css. No problem at all, with Patternlab it’s so easy to export the code for any component and then I can use it in the WordPress template.

### Workshop

When I have the CMS set up and in working order I host a workshop together with the editors of the client team. I’m going through each aspect of how the solution is custom tailored from them and how they will be managing the content in the CMS. This is done way before all of the programming of the website is done, because during this process I can collect lots of input from the editors. So while they’re processing content, I can do the tweaks and adjustments accordingly. Even though I like all steps in the process, this is by far the most fun! Now I get to work together with other people and figuring out how I can make their lives easier. It’s a frequent back and forth dialog during this whole process.

### Wrapping Up

When the editors have added the content for the initial release, I’m doing a last check up before we are set to launch. During this process I’m checking that the url structure is looking okay, no content is broken, sitemaps are up and running, and analytics is in place. Time to go. Check out the result over at <http://winteria.se>

## Solution

I’m incredibly fortunate to work together with great people like Erik. It makes my job so easy and enjoyable to perform. For Winteria we delivered a resilient UI backed by a WordPress CMS, together with a design style guide that can help drive the development for this website over the years to come.

![The home page composited by the available components]
_The home page composited by the available components_
