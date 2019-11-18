export default function drawFreeHandSectionJs(ctx, canvas) {
    const storePointsCoordinates = [];
    let pointSize = 3;

    // Return a particle object
    function create_points(xPos, yPos) {
        console.log(storePointsCoordinates);
        let x, y ;
        // Position
        if (xPos == false && yPos == false) {
            x = Math.random() * canvas.width;
            y = Math.random() * canvas.height;
        } else {
            x = xPos;
            y = yPos;
        }
        storePointsCoordinates.push({x : x, y : y});
        drawLine();
        drawPoints(x , y);

    }

    //draw coordinates
    function drawPoints(){	
        ctx.beginPath();
            
        for(let i = 0; i < storePointsCoordinates.length; i++ ){
            ctx.arc(storePointsCoordinates[i].x , storePointsCoordinates[i].y , pointSize, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.closePath()
        }
    
    }

    function drawLine() {
        ctx.beginPath();
        ctx.moveTo(storePointsCoordinates[0].x ,storePointsCoordinates[0].y);
        for(let i = 1; i < storePointsCoordinates.length; i++ ){
            ctx.lineTo(storePointsCoordinates[i].x , storePointsCoordinates[i].y )
        }
        closeLine();
        ctx.stroke();
    }

    //close path 
    function closeLine() {
        if (storePointsCoordinates.length > 2) {
            ctx.closePath((storePointsCoordinates[0].x ,storePointsCoordinates[0].y), (storePointsCoordinates[storePointsCoordinates.length -1].x ,storePointsCoordinates[storePointsCoordinates.length -1].y)  );
            redraw();
        } 
    }

    function redraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // When the canvas is clicked
    // add new particle
    function getPosition(e) {

        var mouseXpos, mouseYpos;

        if (e.offsetX) {
            mouseXpos = e.offsetX;
            mouseYpos = e.offsetY;
        } else if (e.layerX) {
            mouseXpos = e.layerX;
            mouseYpos = e.layerY;
        }
        create_points(mouseXpos, mouseYpos);

    }

    canvas.addEventListener('click', function(e) {
        getPosition(e);
    }, false);
}