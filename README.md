## to Run!

optimized index.html, js, css and img are in /dist. Run gulp default task

use localhost:[portnumber]/dist/index.html

Screenshots of pagespeed are in root project directory. mobile-result.png & desktop-result.png

## Steps i've done!

### Part 1 Critical rendering path

Used ngrok and page speed insights for testing and checking and finally came to this.. Finalized files in /dist.

1. removed the link to google font while it was render blocking
2. added font ref to style.css
3. read this <a href="http://www.filamentgroup.com/lab/font-events.html">article</a>
4. used <a href="https://github.com/bramstein/fontfaceobserver">this</a> script and added custom script to observe the font
5. minified it online <a href="http://jscompress.com/">here</a> and added it inline in index.html
6. used <a href="http://cssminifier.com/">css minifier</a> and inlined total css in the head
7. made google analytics script async by changing the script
8. made perfmatters.js script async
9. added media="print" to print.css to remove it from crp
10. minified print.css via gulp task
11. minified the html via htmlmin as a gulp task
12. optimized images with gulp task
13. root images show my result with ngrok. It might be faster with github pages

#### to make it better

1. testing inline script vs references
2. test and work with http cashing.

### 60 frames per second

1. started with tracing what causes low frame rate
2. noticed updatePositions() was slow on scrolling
3. made some modifications to the script. In a way that some dom calls and other calculations aren't called at each scroll event (which is expensive)
4. saved timeline data
5. refreshed the browser , started recording and scrolled many times.
6. i noticed a lot of recalculate style and was because of the scroll event and DOM manipulation however some frame rates were closer to 30 than to 60 so i needed more investigation
7. added native styles to css and removed from main.js
8. used transform to position the .mover element (only transform not specific browser implementations). + added some css
9. moved dom manipultation out of loops
10. investigated the timeline data again and noticed i was more close to 60fps. However in some details were i was not i noticed 2 paints happening for big sizes. I tried some things but did not find a solution for that problem.
11 recreate the event after domContentLoaded for adding the images.

