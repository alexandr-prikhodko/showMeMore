# showMeMore
simple and lightweight jQuery plugin to show/hide tiles of content


##html structure:
```html
<ul class="my_tiles">
    <li>my tile 1</li>
    <li>my tile 2</li>
    <li>my tile 3</li>
    ...
</ul>
```

##init:
```javaScript
$('.my_tiles').showMeMore();
```
## all params:
you can see all default settings bellow.
```javaScript
current: 4, // number to be displayed at start
count: 4, // how many show in one click
fadeSpeed: 300, // animation speed
showButton: '', // show button (false / string)
hideButton: '', // hide button
showButtonText: 'showButton', //text at the showButton
hideButtonText: 'hideButton', //text at the showButton
enableHide: false, // allow to hide (true / false)
generateBtn: true,// auto generate buttons if they not added by default
list: 'li' //tile elements
```
Also you can configure plugin as you want by simply adding parameters at initialization. 

```javaScript
$('.my_tiles').showMeMore({
    showButtonText: 'show me more',
    hideButtonText: 'hide all tiles',
    fadeSpeed: 500,
    enableHide: true
});
```
