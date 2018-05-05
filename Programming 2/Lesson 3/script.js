//     var matrix = [
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//  	 ];
// function setup() {
//     createCanvas(500,500);
//     background('#acacac');
//     noStroke();
// }
// var side=10;
// function draw() {
//     for(var y = 0; y < matrix.length; y++){
//     for(var x = 0; x < matrix[y].length; x++){
//        if(matrix[y][x] == 1){
//             fill(255,0,0);
//             rect(x*side, y*side, side, side);

//        }
//    }
// }

// }
// function setup() {
//     side = 25;
//     var size1 = 25;
//     var size2 = 25;
//     kanachQanak = 60;
//     dexinQanak = 50;
//     karmirQanak = 10;
//     createCanvas(size2 * side, size1 * side);
//     background('#acacac');
//     noStroke();
//     matrix = [];

//     var cound = 50;
//     for (var i = 0; i < size1; i++) {
//         matrix[i] = [];
//         for (var j = 0; j < size2; j++) {
//             matrix[i][j] = Math.round(random(0));
//         }
//     }
//     while (karmirQanak > 0) {
//         var x = Math.round(random(24));
//         var y = Math.round(random(24));
//         if (matrix[x][y] == 0) {
//             matrix[x][y] = 1;
//             karmirQanak--;
//         }
//     }
//     while (kanachQanak > 0) {
//         var x = Math.round(random(24));
//         var y = Math.round(random(24));
//         if (matrix[x][y] == 0) {
//             matrix[x][y] = 2;
//             kanachQanak--;
//         }
//     }
//     while (dexinQanak > 0) {
//         var x = Math.round(random(24));
//         var y = Math.round(random(24));
//         if (matrix[x][y] == 0) {
//             matrix[x][y] = 3;
//             dexinQanak--;
//         }
//     }



// }

// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 fill(255, 0, 0);
//                 ellipse(x * side, y * side, side, side);

//             }
//             else if (matrix[y][x] == 2) {
//                 fill(0, 255, 0);
//                 ellipse(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 3) {
//                 fill('yellow');
//                 ellipse(x * side, y * side, side, side);
//             }
//         }
//     }

// }

// function setup() {
//     side = 50;
//     var size1 = 8;
//     var size2 = 8;
 
//     createCanvas(size2 * side, size1 * side);
//     background('#acacac');
//     var n =8;
//     for (var y = 0; y < n; y++) {
//         for (var x = 0; x < n; x++) {
//             if((x+y)%2==0){
                
//                 fill('black');
               
//                 rect(x * side, y * side, side, side);
//             }
//             else{
//                 fill('white');
//                 rect(x * side, y * side, side, side);
//             }
//         }
//     }
// }
function setup() {
    side = 50;
    var size1 = 8;
    var size2 = 8;
 
    createCanvas(size2 * side, size1 * side);
    background('#acacac');
    var n =9;
    for (var y = 0; y <= n; y++) {
        for (var x = 0; x <= n; x++) {
            if(y==x){
                fill('black');
               
                rect(x * side, y * side, side, side);
            }
             else if(y==x+1){
                fill('black');
               
                rect(x * side, y * side, side, side);
            }
              else if(y==x-1){
                fill('black');
               
                rect(x * side, y * side, side, side);
            }
            
        }
    }
}
