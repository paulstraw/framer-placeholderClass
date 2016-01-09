# 'placeholderClass' module
# by Marc Krenn, Jan. 9th, 2015 | marc.krenn@gmail.com | @marc_krenn
#
# 'placeholderClass' fetches dynamic placeholder images from 'placem.at'.
#
# For instructions on how to use this module, please refer to the 'placeholderClassExample'.
#
#
# Add the following line to your project in Framer Studio.
#    {Placeholder} = require 'placeholderClass'...
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
# Methods | Type | Comments
# ----------------------------------------------------------------------------------------------------------
# image() | String | returns URL of the dynamic placeholder Image.




class exports.Placeholder
	
	constructor: (@options={}) ->


		autoApply       = @.options.autoApply       ?= true


		if autoApply is true

			# Get the most recently created Layer's ...
			mostRecentLayer = Framer.CurrentContext.getLayers()[Framer.CurrentContext.getLayers().length-1]

			widthDefault  = mostRecentLayer?.width
			heightDefault = mostRecentLayer?.height


		widthDefault  = 500 if widthDefault  is undefined
		heightDefault = 500 if heightDefault is undefined


		# Defaults
		type            = @.options.type            ?= "places"
		width           = @.options.width           ?= widthDefault
		height          = @.options.height          ?= heightDefault
		random          = @.options.random          ?= false
		seededRandom    = @.options.seededRandom    ?= false
		resolutionLabel = @.options.resolutionLabel ?= false
		label           = @.options.label           ?= null
		labelColor      = @.options.labelColor      ?= "BFFF"
		overlayColor    = @.options.overlayColor    ?= "ACACAC"
		blendMode       = @.options.blendMode       ?= "multiply"


		random = 1 if random is true


		if seededRandom is true

			# Make sure to get random images even for same sized Layers
			width  += Utils.randomNumber(0,999)/100000
			height += Utils.randomNumber(0,999)/100000
			resolutionLabel = false
			random = 1


		if resolutionLabel is false and label is null or label is false
			label = "&txt=0"

		else if label
			label = "&txt=" + @.options.label

		else
			label = ""


		url = "https://placem.at/" + type + "?w=" + width + "&h=" + height + "&random=" + random + label + "&txtclr=" + labelColor + "&overlay_color=" + overlayColor + "&overlay_blend=" + blendMode


		mostRecentLayer?.image = url unless autoApply is false

		@.image = ->
			return url