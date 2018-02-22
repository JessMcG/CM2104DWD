/**
 * Created by john on 10/03/2016.
 */

var cat = document.querySelector("img");
var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;

    var direction = 1; //1 is left, -1 is right
    if(cat.style.top > 0 && cat.style.bottom < screen.availHeight)
    {
      if(cat.style.left > 0 && cat.style.right <screen.availWidth)
      {
        cat.style.top = (Math.sin(angle) * 20) + "px";
        cat.style.left = (Math.cos(angle) * 200) + "px";
        requestAnimationFrame(animate);
      }
    }

}
requestAnimationFrame(animate);
