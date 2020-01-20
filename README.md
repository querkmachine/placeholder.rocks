# [placeholder.rocks](https://placeholder.rocks)

A spin off of [placeponi.es](https://github.com/querkmachine/placeponi.es) for my other cartoon obsession, *[Steven Universe](https://en.wikipedia.org/wiki/Steven_Universe)*. You should watch it, it's great.

Source code made available as-is, with no guarantees as to quality or support. 

## URL parameters
URL parameters can be written in any order and are delimited by a forward slash (/). Numerical values must be defined in order of width, height, and variant; aka, the first integer is assumed to be width, the second height, and third variant. They do not need to be grouped, so URLs like `http://placeholder.rocks/400/g/300/regen/3` are perfectly valid. 

`http://placeholder.rocks/400/300`  
Generate a standard image 400 pixels wide and 300 pixels tall. Both values are capped between 1 and 5000 pixels. 

`http://placeholder.rocks/400/300/1`
Add a third number to use multiple images with the same dimensions. Values are capped between 0 and 9, allowing for up to 10 variants. 

`http://placeholder.rocks/400/300/g`
Add `/g/` anywhere in the URL to make the image grayscale. 

`http://placeholder.rocks/400/300/regen` 
Add `/regen/` anywhere in the URL to replace the existing image of this type.

## Changelog

* 2018-08-01: Go live, with just season one images and the most basic of websites.
* 2019-02-02: I finally add some season two images. I'm busy, okay?
* 2019-02-06: Finally a real website! No more barebones text, it's all shiny now.
* 2020-01-20: Added source images the first half of season three. I'm *really* busy, okay?!