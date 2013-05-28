<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=MacRoman">
        <script src="./js/lib/jquery.js"></script>
        <script src="./js/lib/three.js"></script>
        <title></title>
    </head>
    <body>
        
        <script src="./js/app/main.js"></script>
        <script>
            $(document).ready(function() {
                (function(){Math.clamp=function(a,b,c){return Math.max(b,Math.min(c,a));}})(); // add clamp(val, min, max) to Math obj
                Template.Main.init();
            });
        </script>
    </body>
</html>
