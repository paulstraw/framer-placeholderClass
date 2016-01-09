# 'placeholderClass' module
# by Marc Krenn, Jan. 9th, 2015 | marc.krenn@gmail.com | @marc_krenn
#
# 'placeholderClass' fetches dynamic placeholder images from 'placem.at'.
#
# Thanks to Paul Straw for creating 'placem.at'!
# Special thanks to Jordon Dobson.
#
#
# Init with:
# placeholderA = new Placeholder
#
# Class property  | Type    | Default    | Comments
# ----------------------------------------------------------------------------------------------------------
# autoApply       | Boolean | true       | Placeholder gets auto-applied to the most recently created layer
# type            | String  |"places"    | Valid options: things, people, places
# width           | Int     | 500        | or mostRecentLayer.width if autoApply is true 
# height          | Int     | 500        | or mostRecentLayer.height if autoApply is true 
# random          | Boolean | false      | Load a new, random image on reload
# seededRandom    | Boolean | false      | Must be used to randomize multiple placeholders of the same size
# resolutionLabel | String  | false      | Labels the placeholder with its resolution
# label           | String  | null       | overwrites resolutionLabel, doesn't like "0" and "'"
# labelColor      | String  | "BFFF"     | accepts 3/6/8-digit hex-colors
# overlayColor    | String  | "ACACAC"   | accepts 3/6/8-digit hex-colors
# blendMode       | String  | "multiply" | Valid options: CSS blend-modes
#
# Methods | Type   | Comments
# ----------------------------------------------------------------------------------------------------------
# image() | String | returns URL of the dynamic placeholder Image.


# Add placeholderClass Module
{Placeholder} = require 'placeholderClass'





 
# Traditional usage: Init first ...
placeholderTop = new Placeholder
	height:          250
	width:           400
	type:            "things"
	random:          true
	resolutionLabel: true
	#label:          "Label me!"
	labelColor:      "FFFFFF"
	overlayColor:    "30333B"
	blendMode:       "multiply"



# Meanwhile in BackgroundLand
bg = new BackgroundLayer

# Works like Magic(tm): Placeholders get auto-applied to the most recently created layer ...
placeholderBg = new Placeholder {type:"places"} 

# ... unless you tell them not to
placeholderBg = new Placeholder {type:"people", autoApply: false}




topLayer = new Layer
	height:       250
	width:        400
	y:            150
	borderRadius: 20
	shadowColor:  "rgba(0,0,0,0.5)"
	shadowY:      10
	shadowBlur:   20
	image:        placeholderTop.image() # ... apply later


topLayer.centerX()




# Works great with loops:
avatarCount = 5

for i in [0...avatarCount]

	avatarSize = 100
	placeEvery = (Screen.width - 50) / avatarCount

	avatar = new Layer
		name:          "avatar#{i}"
		maxY:          Screen.height - avatarSize/2
		x:             avatarSize/2 + placeEvery*i
		borderRadius: "100%"
		shadowColor:  "rgba(0,0,0,0.8)"
		shadowY:      5
		shadowBlur:   15

	# For multiple random placeholders of the same size use 'seededRandom'
	avatarPlaceholders = new Placeholder {type: "people", seededRandom: true}