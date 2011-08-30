### jquery.boilerplate.js

A boilerplate & sandbox to build & practice jQuery plugins

#### Further reading

* http://ejohn.org/blog/ultra-chaining-with-jquery/#postcomment
* http://api.jquery.com/end/
* http://www.engineyard.com/blog/2011/reuse-your-javascript-as-jquery-plugins/
* http://docs.jquery.com/Plugins/Authoring

#### Best Practices

Writing jQuery plugins allows you to make the most out of the library and abstract your most clever and useful functions out into reusable code that can save you time and make your development even more efficient. Here's a brief summary of the post and what to keep in mind when developing your next jQuery plugin:

* Always wrap your plugin in (function( $ ){ // plugin goes here })( jQuery );
* Don't redundantly wrap the this keyword in the immediate scope of your plugin's function
* Unless you're returning an intrinsic value from your plugin, always have your plugin's function return the this keyword to maintain chainability.
* Rather than requiring a lengthy amount of arguments, pass your plugin settings in an object literal that can be extended over the plugin's defaults.
* Don't clutter the jQuery.fn object with more than one namespace per plugin.
* Always namespace your methods, events and data.
* jQuery.fn is pronounced jQuery effin'

(used with thanks http://docs.jquery.com/Plugins/Authoring)

#### History

    v0.2
    - chaining & namespace examples
    - demo html
    
    v0.1
    - initial
