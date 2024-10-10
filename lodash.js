var _ = require("lodash");  //"_"iski jagah hum kuch bhi ker sakte hein but jaise hum math pe sabse pehle let "x" kerte hein addat ho gayi hai sif let "x" kerne ki ,vaise hum kuch bhi ker sakte hein ussi tarah yahan bhi "_" hai
                             //"_" HAMESHA SE CHALA AAYA HAI TO HUM USI KO USE KAREIN YE HAMARI BEST PRACTICE HOGI
var data = ["ankita" ,2 ,5 ,2 ,6 ,"ankita", "code"];
var removeuniqelemnt = _.uniq(data);
console.log(removeuniqelemnt);



console.log(_.isString("ankita"));