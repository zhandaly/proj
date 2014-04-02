<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>15Puzzle</title>       
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css">
        <script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>        
        <script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
        <script src="js/jsfile.js"></script>
    </head>
    <body>
        <div data-role="page" id="welcomePage">
            <h1>Welcome to 15Puzzle.</h1>
            <p>Select a puzzle and difficulty.</p>
            <div data-role="content">                
                <h2>Choose a type of puzzle:</h2>
                <a href="#pagetwo" data-role="button" onclick="loadPuzzle(1);">Numbers (1-15)</a>
                <a href="#chooseImage" data-role="button">Images (3)</a>                  
            </div>
        </div>
        <div data-role="page" id="chooseImage">
            <h1>Welcome to 15Puzzle.</h1>
            <p>Please select an image or return to menu.</p>
            <a href="#pagetwo"><img src="images/2.jpg" onclick="loadPuzzle(2);" /></a>
            <a href="#pagetwo"><img src="images/3.jpg" onclick="loadPuzzle(3);" /></a>
            <a href="#pagetwo"><img src="images/4.jpg" onclick="loadPuzzle(4);" /></a>
            <a href="#welcomePage" data-role="button">Return Home</a>

        </div>
        <div data-role="page" id="pagetwo">
            <h1>Welcome to 15Puzzle.</h1>
            <p>Please select a difficulty.</p>
            <a href="#PuzzlePage" data-role="button" onclick="shuffle(1);">Sweet</a>
            <a href="#PuzzlePage" data-role="button" onclick="shuffle(2);">Mild</a>
            <a href="#PuzzlePage" data-role="button" onclick="shuffle(3);">Spicy</a>
            <a href="#PuzzlePage" data-role="button" onclick="shuffle(5);">Blazin' HOT!</a>
            <a href="#welcomePage" data-role="button">Return Home</a>
        </div>
        <div data-role="page" id="PuzzlePage">
            <h1>Good luck!</h1>
            <table id="PuzzleTable">   
                <thead></thead>
                <tbody>
                    <tr><td></td><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td><td></td></tr>    
                    <tr><td></td><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td> <td> </td> <td></td></tr>
                </tbody>
            </table>
            <a href="#welcomePage" data-role="button">Start New Puzzle</a>
        </div>
    </body>
</html>
