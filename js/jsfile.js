var imgArray = new Array();
var emptySpot = '15'; // initial empty spot before shuffling
var lastPosition = 0;

function loadPuzzle(value) {
    var r = value;
    emptySpot = '15';
    for (var i = 0; i < 15; i++) {
        var temp = new Image();
        temp.src = "images/" + r + "/" + (i + 1) + ".png";
        temp.id = i;
        temp.puzzleposn = i;
        imgArray[i] = temp;
    }
    imgArray[15] = new Image();
    refreshImages();
}
;
function refreshImages() {
    $("#PuzzleTable td").each(function(index, ele) {
        $(ele).html('');                
        $(ele).append(imgArray[index]);
    });
    $("#PuzzleTable img").each(function(index, ele) {
        $(ele).attr('puzzleposn', index);
    });
    $("#PuzzleTable img").click(slidePiece);
}
;
function shuffle(x) {
    var temp = Math.floor(Math.random() * 15);

    for (var j = 0; j < 40; j++) {
        while (!isEmptyAdjacent(temp.toString()) || temp === lastPosition) {
            temp = Math.floor(Math.random() * 15);
        }
        lastPosition = temp;
        slidePiece0(temp.toString());
    }
    var y = x - 1;
    if (y > 0) {
        shuffle(y);
    }

}
;

function slidePiece0(pieceid) {
    if (isEmptyAdjacent(pieceid) && (pieceid !== emptySpot)) {
        var tempImg = new Image();
        imgArray[pieceid].puzzleposn = emptySpot;
        imgArray[emptySpot].puzzleposn = pieceid;
        tempImg = imgArray[pieceid];
        imgArray[pieceid] = imgArray[emptySpot];
        imgArray[emptySpot] = tempImg;
        emptySpot = pieceid;
        // alert("emptyspot is " + emptySpot);
        refreshImages();
    }
}
;
function slidePiece() {
    if ($(this).attr('puzzleposn')) {

        var pieceid = $(this).attr('puzzleposn');
        // alert('here' + pieceid);
        if (isEmptyAdjacent(pieceid) && (pieceid !== emptySpot)) {
            var tempImg = new Image();
            imgArray[pieceid].puzzleposn = emptySpot;
            imgArray[emptySpot].puzzleposn = pieceid;
            tempImg = imgArray[pieceid];
            imgArray[pieceid] = imgArray[emptySpot];
            imgArray[emptySpot] = tempImg;
            emptySpot = pieceid;
            // alert("emptyspot is " + emptySpot);
            refreshImages();
            checkVictory();
        }
    }
}
;
function checkVictory() {
    if (emptySpot === '15') {
        var x;
        var y;
        var checker = true;
        for (var i = 0; i < 14; i++) {
            x = (imgArray[i].id).toString();
            y = (imgArray[i].puzzleposn).toString();            
            if (x !== y) {
                checker = false;
            }
        }
        if (checker === true) {
            alert("Congratulations! You solved the puzzle. Feel free to play again!");
        }
    }
}
;

function isEmptyAdjacent(pieceid) {
    var temp = false;
    if (emptySpot === '0' && (pieceid === '1' || pieceid === '4'))
        temp = true;
    else if (emptySpot === '1' && (pieceid === '0' || pieceid === '2' || pieceid === '5'))
        temp = true;
    else if (emptySpot === '2' && (pieceid === '1' || pieceid === '3' || pieceid === '6'))
        temp = true;
    else if (emptySpot === '3' && (pieceid === '7' || pieceid === '2'))
        temp = true;
    else if (emptySpot === '4' && (pieceid === '0' || pieceid === '8' || pieceid === '5'))
        temp = true;
    else if (emptySpot === '5' && (pieceid === '1' || pieceid === '4' || pieceid === '6' || pieceid === '9'))
        temp = true;
    else if (emptySpot === '6' && (pieceid === '10' || pieceid === '7' || pieceid === '2' || pieceid === '5'))
        temp = true;
    else if (emptySpot === '7' && (pieceid === '3' || pieceid === '6' || pieceid === '11'))
        temp = true;
    else if (emptySpot === '8' && (pieceid === '4' || pieceid === '12' || pieceid === '9'))
        temp = true;
    else if (emptySpot === '9' && (pieceid === '8' || pieceid === '10' || pieceid === '13' || pieceid === '5'))
        temp = true;
    else if (emptySpot === '10' && (pieceid === '6' || pieceid === '9' || pieceid === '11' || pieceid === '14'))
        temp = true;
    else if (emptySpot === '11' && (pieceid === '10' || pieceid === '7' || pieceid === '15'))
        temp = true;
    else if (emptySpot === '12' && (pieceid === '8' || pieceid === '13'))
        temp = true;
    else if (emptySpot === '13' && (pieceid === '9' || pieceid === '12' || pieceid === '14'))
        temp = true;
    else if (emptySpot === '14' && (pieceid === '10' || pieceid === '13' || pieceid === '15'))
        temp = true;
    else if (emptySpot === '15' && (pieceid === '11' || pieceid === '14'))
        temp = true;

    return temp;

}
;

