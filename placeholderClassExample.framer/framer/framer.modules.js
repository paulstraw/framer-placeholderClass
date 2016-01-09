require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"placeholderClass":[function(require,module,exports){
exports.Placeholder = (function() {
  function Placeholder(options) {
    var autoApply, base, base1, base10, base2, base3, base4, base5, base6, base7, base8, base9, blendMode, height, heightDefault, label, labelColor, mostRecentLayer, overlayColor, random, resolutionLabel, seededRandom, type, url, width, widthDefault;
    this.options = options != null ? options : {};
    autoApply = (base = this.options).autoApply != null ? base.autoApply : base.autoApply = true;
    if (autoApply === true) {
      mostRecentLayer = Framer.CurrentContext.getLayers()[Framer.CurrentContext.getLayers().length - 1];
      widthDefault = mostRecentLayer != null ? mostRecentLayer.width : void 0;
      heightDefault = mostRecentLayer != null ? mostRecentLayer.height : void 0;
    }
    if (widthDefault === void 0) {
      widthDefault = 500;
    }
    if (heightDefault === void 0) {
      heightDefault = 500;
    }
    type = (base1 = this.options).type != null ? base1.type : base1.type = "places";
    width = (base2 = this.options).width != null ? base2.width : base2.width = widthDefault;
    height = (base3 = this.options).height != null ? base3.height : base3.height = heightDefault;
    random = (base4 = this.options).random != null ? base4.random : base4.random = false;
    seededRandom = (base5 = this.options).seededRandom != null ? base5.seededRandom : base5.seededRandom = false;
    resolutionLabel = (base6 = this.options).resolutionLabel != null ? base6.resolutionLabel : base6.resolutionLabel = false;
    label = (base7 = this.options).label != null ? base7.label : base7.label = null;
    labelColor = (base8 = this.options).labelColor != null ? base8.labelColor : base8.labelColor = "BFFF";
    overlayColor = (base9 = this.options).overlayColor != null ? base9.overlayColor : base9.overlayColor = "ACACAC";
    blendMode = (base10 = this.options).blendMode != null ? base10.blendMode : base10.blendMode = "multiply";
    if (random === true) {
      random = 1;
    }
    if (seededRandom === true) {
      width += Utils.randomNumber(0, 999) / 100000;
      height += Utils.randomNumber(0, 999) / 100000;
      resolutionLabel = false;
      random = 1;
    }
    if (resolutionLabel === false && label === null || label === false) {
      label = "&txt=0";
    } else if (label) {
      label = "&txt=" + this.options.label;
    } else {
      label = "";
    }
    url = "https://placem.at/" + type + "?w=" + width + "&h=" + height + "&random=" + random + label + "&txtclr=" + labelColor + "&overlay_color=" + overlayColor + "&overlay_blend=" + blendMode;
    if (autoApply !== false) {
      if (mostRecentLayer != null) {
        mostRecentLayer.image = url;
      }
    }
    this.image = function() {
      return url;
    };
  }

  return Placeholder;

})();


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFyY2tyZW5uL0Ryb3Bib3gvZnJhbWVyX3Byb2plY3RzL2ZyYW1lci1wbGFjZWhvbGRlckNsYXNzL3BsYWNlaG9sZGVyQ2xhc3NFeGFtcGxlLmZyYW1lci9tb2R1bGVzL3BsYWNlaG9sZGVyQ2xhc3MuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDdUNNLE9BQU8sQ0FBQztFQUVBLHFCQUFDLE9BQUQ7QUFHWixRQUFBO0lBSGEsSUFBQyxDQUFBLDRCQUFELFVBQVM7SUFHdEIsU0FBQSxpREFBMkIsQ0FBQyxnQkFBRCxDQUFDLFlBQW1CO0lBRy9DLElBQUcsU0FBQSxLQUFhLElBQWhCO01BR0MsZUFBQSxHQUFrQixNQUFNLENBQUMsY0FBYyxDQUFDLFNBQXRCLENBQUEsQ0FBa0MsQ0FBQSxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQXRCLENBQUEsQ0FBaUMsQ0FBQyxNQUFsQyxHQUF5QyxDQUF6QztNQUVwRCxZQUFBLDZCQUFnQixlQUFlLENBQUU7TUFDakMsYUFBQSw2QkFBZ0IsZUFBZSxDQUFFLGdCQU5sQzs7SUFTQSxJQUF1QixZQUFBLEtBQWlCLE1BQXhDO01BQUEsWUFBQSxHQUFnQixJQUFoQjs7SUFDQSxJQUF1QixhQUFBLEtBQWlCLE1BQXhDO01BQUEsYUFBQSxHQUFnQixJQUFoQjs7SUFJQSxJQUFBLDhDQUEyQixDQUFDLFlBQUQsQ0FBQyxPQUFtQjtJQUMvQyxLQUFBLCtDQUEyQixDQUFDLGFBQUQsQ0FBQyxRQUFtQjtJQUMvQyxNQUFBLGdEQUEyQixDQUFDLGNBQUQsQ0FBQyxTQUFtQjtJQUMvQyxNQUFBLGdEQUEyQixDQUFDLGNBQUQsQ0FBQyxTQUFtQjtJQUMvQyxZQUFBLHNEQUEyQixDQUFDLG9CQUFELENBQUMsZUFBbUI7SUFDL0MsZUFBQSx5REFBMkIsQ0FBQyx1QkFBRCxDQUFDLGtCQUFtQjtJQUMvQyxLQUFBLCtDQUEyQixDQUFDLGFBQUQsQ0FBQyxRQUFtQjtJQUMvQyxVQUFBLG9EQUEyQixDQUFDLGtCQUFELENBQUMsYUFBbUI7SUFDL0MsWUFBQSxzREFBMkIsQ0FBQyxvQkFBRCxDQUFDLGVBQW1CO0lBQy9DLFNBQUEscURBQTJCLENBQUMsa0JBQUQsQ0FBQyxZQUFtQjtJQUcvQyxJQUFjLE1BQUEsS0FBVSxJQUF4QjtNQUFBLE1BQUEsR0FBUyxFQUFUOztJQUdBLElBQUcsWUFBQSxLQUFnQixJQUFuQjtNQUdDLEtBQUEsSUFBVSxLQUFLLENBQUMsWUFBTixDQUFtQixDQUFuQixFQUFxQixHQUFyQixDQUFBLEdBQTBCO01BQ3BDLE1BQUEsSUFBVSxLQUFLLENBQUMsWUFBTixDQUFtQixDQUFuQixFQUFxQixHQUFyQixDQUFBLEdBQTBCO01BQ3BDLGVBQUEsR0FBa0I7TUFDbEIsTUFBQSxHQUFTLEVBTlY7O0lBU0EsSUFBRyxlQUFBLEtBQW1CLEtBQW5CLElBQTZCLEtBQUEsS0FBUyxJQUF0QyxJQUE4QyxLQUFBLEtBQVMsS0FBMUQ7TUFDQyxLQUFBLEdBQVEsU0FEVDtLQUFBLE1BR0ssSUFBRyxLQUFIO01BQ0osS0FBQSxHQUFRLE9BQUEsR0FBVSxJQUFDLENBQUMsT0FBTyxDQUFDLE1BRHhCO0tBQUEsTUFBQTtNQUlKLEtBQUEsR0FBUSxHQUpKOztJQU9MLEdBQUEsR0FBTSxvQkFBQSxHQUF1QixJQUF2QixHQUE4QixLQUE5QixHQUFzQyxLQUF0QyxHQUE4QyxLQUE5QyxHQUFzRCxNQUF0RCxHQUErRCxVQUEvRCxHQUE0RSxNQUE1RSxHQUFxRixLQUFyRixHQUE2RixVQUE3RixHQUEwRyxVQUExRyxHQUF1SCxpQkFBdkgsR0FBMkksWUFBM0ksR0FBMEosaUJBQTFKLEdBQThLO0lBR3BMLElBQW9DLFNBQUEsS0FBYSxLQUFqRDs7UUFBQSxlQUFlLENBQUUsS0FBakIsR0FBeUI7T0FBekI7O0lBRUEsSUFBQyxDQUFDLEtBQUYsR0FBVSxTQUFBO0FBQ1QsYUFBTztJQURFO0VBM0RFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgJ3BsYWNlaG9sZGVyQ2xhc3MnIG1vZHVsZVxuIyBieSBNYXJjIEtyZW5uLCBKYW4uIDl0aCwgMjAxNSB8IG1hcmMua3Jlbm5AZ21haWwuY29tIHwgQG1hcmNfa3Jlbm5cbiNcbiMgJ3BsYWNlaG9sZGVyQ2xhc3MnIGZldGNoZXMgZHluYW1pYyBwbGFjZWhvbGRlciBpbWFnZXMgZnJvbSAncGxhY2VtLmF0Jy5cbiNcbiMgRm9yIGluc3RydWN0aW9ucyBvbiBob3cgdG8gdXNlIHRoaXMgbW9kdWxlLCBwbGVhc2UgcmVmZXIgdG8gdGhlICdwbGFjZWhvbGRlckNsYXNzRXhhbXBsZScuXG4jXG4jXG4jIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uXG4jICAgIHtQbGFjZWhvbGRlcn0gPSByZXF1aXJlICdwbGFjZWhvbGRlckNsYXNzJy4uLlxuI1xuIyBUaGFua3MgdG8gUGF1bCBTdHJhdyBmb3IgY3JlYXRpbmcgJ3BsYWNlbS5hdCchXG4jIFNwZWNpYWwgdGhhbmtzIHRvIEpvcmRvbiBEb2Jzb24uXG4jXG4jXG4jIEluaXQgd2l0aDpcbiMgcGxhY2Vob2xkZXJBID0gbmV3IFBsYWNlaG9sZGVyXG4jXG4jIENsYXNzIHByb3BlcnR5ICB8IFR5cGUgICAgfCBEZWZhdWx0ICAgIHwgQ29tbWVudHNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBhdXRvQXBwbHkgICAgICAgfCBCb29sZWFuIHwgdHJ1ZSAgICAgICB8IFBsYWNlaG9sZGVyIGdldHMgYXV0by1hcHBsaWVkIHRvIHRoZSBtb3N0IHJlY2VudGx5IGNyZWF0ZWQgbGF5ZXJcbiMgdHlwZSAgICAgICAgICAgIHwgU3RyaW5nICB8XCJwbGFjZXNcIiAgICB8IFZhbGlkIG9wdGlvbnM6IHRoaW5ncywgcGVvcGxlLCBwbGFjZXNcbiMgd2lkdGggICAgICAgICAgIHwgSW50ICAgICB8IDUwMCAgICAgICAgfCBvciBtb3N0UmVjZW50TGF5ZXIud2lkdGggaWYgYXV0b0FwcGx5IGlzIHRydWUgXG4jIGhlaWdodCAgICAgICAgICB8IEludCAgICAgfCA1MDAgICAgICAgIHwgb3IgbW9zdFJlY2VudExheWVyLmhlaWdodCBpZiBhdXRvQXBwbHkgaXMgdHJ1ZSBcbiMgcmFuZG9tICAgICAgICAgIHwgQm9vbGVhbiB8IGZhbHNlICAgICAgfCBMb2FkIGEgbmV3LCByYW5kb20gaW1hZ2Ugb24gcmVsb2FkXG4jIHNlZWRlZFJhbmRvbSAgICB8IEJvb2xlYW4gfCBmYWxzZSAgICAgIHwgTXVzdCBiZSB1c2VkIHRvIHJhbmRvbWl6ZSBtdWx0aXBsZSBwbGFjZWhvbGRlcnMgb2YgdGhlIHNhbWUgc2l6ZVxuIyByZXNvbHV0aW9uTGFiZWwgfCBTdHJpbmcgIHwgZmFsc2UgICAgICB8IExhYmVscyB0aGUgcGxhY2Vob2xkZXIgd2l0aCBpdHMgcmVzb2x1dGlvblxuIyBsYWJlbCAgICAgICAgICAgfCBTdHJpbmcgIHwgbnVsbCAgICAgICB8IG92ZXJ3cml0ZXMgcmVzb2x1dGlvbkxhYmVsLCBkb2Vzbid0IGxpa2UgXCIwXCIgYW5kIFwiJ1wiXG4jIGxhYmVsQ29sb3IgICAgICB8IFN0cmluZyAgfCBcIkJGRkZcIiAgICAgfCBhY2NlcHRzIDMvNi84LWRpZ2l0IGhleC1jb2xvcnNcbiMgb3ZlcmxheUNvbG9yICAgIHwgU3RyaW5nICB8IFwiQUNBQ0FDXCIgICB8IGFjY2VwdHMgMy82LzgtZGlnaXQgaGV4LWNvbG9yc1xuIyBibGVuZE1vZGUgICAgICAgfCBTdHJpbmcgIHwgXCJtdWx0aXBseVwiIHwgVmFsaWQgb3B0aW9uczogQ1NTIGJsZW5kLW1vZGVzXG4jXG4jIE1ldGhvZHMgfCBUeXBlIHwgQ29tbWVudHNcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBpbWFnZSgpIHwgU3RyaW5nIHwgcmV0dXJucyBVUkwgb2YgdGhlIGR5bmFtaWMgcGxhY2Vob2xkZXIgSW1hZ2UuXG5cblxuXG5cbmNsYXNzIGV4cG9ydHMuUGxhY2Vob2xkZXJcblx0XG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cblxuXHRcdGF1dG9BcHBseSAgICAgICA9IEAub3B0aW9ucy5hdXRvQXBwbHkgICAgICAgPz0gdHJ1ZVxuXG5cblx0XHRpZiBhdXRvQXBwbHkgaXMgdHJ1ZVxuXG5cdFx0XHQjIEdldCB0aGUgbW9zdCByZWNlbnRseSBjcmVhdGVkIExheWVyJ3MgLi4uXG5cdFx0XHRtb3N0UmVjZW50TGF5ZXIgPSBGcmFtZXIuQ3VycmVudENvbnRleHQuZ2V0TGF5ZXJzKClbRnJhbWVyLkN1cnJlbnRDb250ZXh0LmdldExheWVycygpLmxlbmd0aC0xXVxuXG5cdFx0XHR3aWR0aERlZmF1bHQgID0gbW9zdFJlY2VudExheWVyPy53aWR0aFxuXHRcdFx0aGVpZ2h0RGVmYXVsdCA9IG1vc3RSZWNlbnRMYXllcj8uaGVpZ2h0XG5cblxuXHRcdHdpZHRoRGVmYXVsdCAgPSA1MDAgaWYgd2lkdGhEZWZhdWx0ICBpcyB1bmRlZmluZWRcblx0XHRoZWlnaHREZWZhdWx0ID0gNTAwIGlmIGhlaWdodERlZmF1bHQgaXMgdW5kZWZpbmVkXG5cblxuXHRcdCMgRGVmYXVsdHNcblx0XHR0eXBlICAgICAgICAgICAgPSBALm9wdGlvbnMudHlwZSAgICAgICAgICAgID89IFwicGxhY2VzXCJcblx0XHR3aWR0aCAgICAgICAgICAgPSBALm9wdGlvbnMud2lkdGggICAgICAgICAgID89IHdpZHRoRGVmYXVsdFxuXHRcdGhlaWdodCAgICAgICAgICA9IEAub3B0aW9ucy5oZWlnaHQgICAgICAgICAgPz0gaGVpZ2h0RGVmYXVsdFxuXHRcdHJhbmRvbSAgICAgICAgICA9IEAub3B0aW9ucy5yYW5kb20gICAgICAgICAgPz0gZmFsc2Vcblx0XHRzZWVkZWRSYW5kb20gICAgPSBALm9wdGlvbnMuc2VlZGVkUmFuZG9tICAgID89IGZhbHNlXG5cdFx0cmVzb2x1dGlvbkxhYmVsID0gQC5vcHRpb25zLnJlc29sdXRpb25MYWJlbCA/PSBmYWxzZVxuXHRcdGxhYmVsICAgICAgICAgICA9IEAub3B0aW9ucy5sYWJlbCAgICAgICAgICAgPz0gbnVsbFxuXHRcdGxhYmVsQ29sb3IgICAgICA9IEAub3B0aW9ucy5sYWJlbENvbG9yICAgICAgPz0gXCJCRkZGXCJcblx0XHRvdmVybGF5Q29sb3IgICAgPSBALm9wdGlvbnMub3ZlcmxheUNvbG9yICAgID89IFwiQUNBQ0FDXCJcblx0XHRibGVuZE1vZGUgICAgICAgPSBALm9wdGlvbnMuYmxlbmRNb2RlICAgICAgID89IFwibXVsdGlwbHlcIlxuXG5cblx0XHRyYW5kb20gPSAxIGlmIHJhbmRvbSBpcyB0cnVlXG5cblxuXHRcdGlmIHNlZWRlZFJhbmRvbSBpcyB0cnVlXG5cblx0XHRcdCMgTWFrZSBzdXJlIHRvIGdldCByYW5kb20gaW1hZ2VzIGV2ZW4gZm9yIHNhbWUgc2l6ZWQgTGF5ZXJzXG5cdFx0XHR3aWR0aCAgKz0gVXRpbHMucmFuZG9tTnVtYmVyKDAsOTk5KS8xMDAwMDBcblx0XHRcdGhlaWdodCArPSBVdGlscy5yYW5kb21OdW1iZXIoMCw5OTkpLzEwMDAwMFxuXHRcdFx0cmVzb2x1dGlvbkxhYmVsID0gZmFsc2Vcblx0XHRcdHJhbmRvbSA9IDFcblxuXG5cdFx0aWYgcmVzb2x1dGlvbkxhYmVsIGlzIGZhbHNlIGFuZCBsYWJlbCBpcyBudWxsIG9yIGxhYmVsIGlzIGZhbHNlXG5cdFx0XHRsYWJlbCA9IFwiJnR4dD0wXCJcblxuXHRcdGVsc2UgaWYgbGFiZWxcblx0XHRcdGxhYmVsID0gXCImdHh0PVwiICsgQC5vcHRpb25zLmxhYmVsXG5cblx0XHRlbHNlXG5cdFx0XHRsYWJlbCA9IFwiXCJcblxuXG5cdFx0dXJsID0gXCJodHRwczovL3BsYWNlbS5hdC9cIiArIHR5cGUgKyBcIj93PVwiICsgd2lkdGggKyBcIiZoPVwiICsgaGVpZ2h0ICsgXCImcmFuZG9tPVwiICsgcmFuZG9tICsgbGFiZWwgKyBcIiZ0eHRjbHI9XCIgKyBsYWJlbENvbG9yICsgXCImb3ZlcmxheV9jb2xvcj1cIiArIG92ZXJsYXlDb2xvciArIFwiJm92ZXJsYXlfYmxlbmQ9XCIgKyBibGVuZE1vZGVcblxuXG5cdFx0bW9zdFJlY2VudExheWVyPy5pbWFnZSA9IHVybCB1bmxlc3MgYXV0b0FwcGx5IGlzIGZhbHNlXG5cblx0XHRALmltYWdlID0gLT5cblx0XHRcdHJldHVybiB1cmwiXX0=
