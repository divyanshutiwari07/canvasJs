export default class DrawFreeHandSection {
    private ctx: CanvasRenderingContext2D;
    private canvas: any;
    private storePointsCoordinates = [];
    private pointSize = 3;

    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
    }

    // When the canvas is clicked
    // add new particle
    private getPosition(e) {

        var mouseXpos, mouseYpos;

        if (e.offsetX) {
            mouseXpos = e.offsetX;
            mouseYpos = e.offsetY;
        } else if (e.layerX) {
            mouseXpos = e.layerX;
            mouseYpos = e.layerY;
        }
        this.create_points(mouseXpos, mouseYpos);

    }

    public init() {
        
        let _this = this;
        this.canvas.addEventListener('click', function(e) {
            _this.getPosition(e);
        }, false);
    }

    // Return a particle object
    private create_points(xPos, yPos) {
        
        let x, y ;
        // Position
        if (xPos == false && yPos == false) {
            x = Math.random() * this.canvas.width;
            y = Math.random() * this.canvas.height;
        } else {
            x = xPos;
            y = yPos;
        }
        this.storePointsCoordinates.push({x : x, y : y});
        this.drawLine();
        this.drawPoints();

    }

    //draw coordinates
    private drawPoints(){	
        this.ctx.beginPath();
            
        for(let i = 0; i < this.storePointsCoordinates.length; i++ ){
            this.ctx.arc(this.storePointsCoordinates[i].x , this.storePointsCoordinates[i].y , this.pointSize, 0, Math.PI * 2, true);
            this.ctx.fill();
            this.ctx.closePath()
        }
    
    }

    private drawLine() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.storePointsCoordinates[0].x ,this.storePointsCoordinates[0].y);
        for(let i = 1; i < this.storePointsCoordinates.length; i++ ){
            this.ctx.lineTo(this.storePointsCoordinates[i].x , this.storePointsCoordinates[i].y )
        }
        this.closeLine();
        this.ctx.stroke();
    }

    //close path 
    private closeLine() {
        if (this.storePointsCoordinates.length > 2) {
            //let firstCordinate = this.storePointsCoordinates[0];
            //let lastCordinate = this.storePointsCoordinates[this.storePointsCoordinates.length - 1];
            this.ctx.closePath();
            this.redraw();
        } 
    }

    private redraw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    

    
}