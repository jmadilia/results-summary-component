# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](/results-summary-component.png)

### Links

- Solution URL: [https://github.com/jmadilia/results-summary-component](https://github.com/jmadilia/results-summary-component)
- Live Site URL: [https://jmadilia.github.io/results-summary-component/](https://jmadilia.github.io/results-summary-component/)

## My process

### Built with

- Tailwind CSS
- Mobile-first design
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

Employing a mobile-first design with Tailwind can be very simple if approached with the correct scaffolding for the DOM. Just a few media query utility classes and the design is configured for larger screen sizes.

### Continued development

I tried to figure out a way to dynamically read in the JSON data but couldn't quite work it out. My understanding is that it might take some reworking of the results -- creating an interface and/or class for a Results object, mapping over the parsed JSON to define the objects I need, etc. For now, I've only parsed the JSON and referenced the data points with hardcoded values.

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/) - Lots of helpful examples.

## Author

- Frontend Mentor - [@jmadilia](https://www.frontendmentor.io/profile/jmadilia)
