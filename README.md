# showMeMore
simple plugin to show/hide tiles of content

<p>
html structure:<br/>
&lt;ul class="my_tiles"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;my tile 1&lt;/li&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;my tile 2&lt;/li&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;my tile 3&lt;/li&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;...<br/>
&lt;/ul&gt;<br/>
&lt;div class="show"&gt;show all&lt;/div&gt;</p>

init:<br/>
$('.my_tiles').showMeMore({showButton: '.show'});
