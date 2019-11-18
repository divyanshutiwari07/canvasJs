import DrawFreeHandSection from './DrawFreeHandSection';
export default class Canvas {

    static drawFreeHandSection(ctx: CanvasRenderingContext2D) {
        //console.log(ctx)
        let drawObj = new DrawFreeHandSection(ctx, ctx.canvas);
        drawObj.init();
    }
}