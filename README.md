## framer-placeholderClass
‚nonlinearModulate’ fetches dynamic placeholder images from ‚placem.at‘.


Thanks to Paul Straw for creating ‚placem.at‘!

Special thanks to Jordan Dobson.


#### Demo

*Live Demo*: https://tr.im/placeholder

![Image of placeholderClass](http://i.imgur.com/h4CTOLg.png)


#### Getting started

```CoffeeScript
# Copy ‚placeholderClass’ into your project’s ‚modules‘-folder

# Include module
{Placeholder} = require ‚placeholderClass‘

# Init with:
placeholderA = new Placeholder

# Class property  | Type    | Default    | Comments
# —————————————————————————————————————————————————————
# autoApply       | Boolean | true       | Placeholder gets auto-applied to the most recently created layer
# type            | String  |“places“    | Valid options: things, people, places
# width           | Int     | 500        | or mostRecentLayer.width if autoApply is true 
# height          | Int     | 500        | or mostRecentLayer.height if autoApply is true 
# random          | Boolean | false      | Load a new, random image on reload
# seededRandom    | Boolean | false      | Must be used to randomize multiple placeholders of the same size
# resolutionLabel | String  | false      | Labels the placeholder with its resolution
# label           | String  | null       | overwrites resolutionLabel, doesn’t like „0“ and „’“
# labelColor      | String  | „BFFF“     | accepts 3/6/8-digit hex-colors
# overlayColor    | String  | „ACACAC“   | accepts 3/6/8-digit hex-colors
# blendMode       | String  | „multiply“ | Valid options: CSS blend-modes

# Methods | Type   | Comments
# —————————————————————————————————————————————————————
# image() | String | returns URL of the dynamic placeholder Image.

```