
class Chart {

    constructor(canvas, chartData, chartType, xName, yName) {
        this.canvasArea = { width: canvas.width, height: canvas.height };
        this.data = chartData;

        this.x = new Axis('x', xName, this.data); // TODO - only pass in necessary data from this.data
        this.x.setLineSpacing(this.canvasArea.width, 16);

        this.y = new Axis('y', yName, this.data, [10]);
        this.y.setLineSpacing(this.canvasArea.height, 16);

        if (!!~['line', 'bar'].indexOf(chartType)) {
            this.chartType = chartType;
        } else {
            console.log('Chart Type not yet implemented.');
        }
    }
}

class Axis {

    constructor(type, axisDataKey, chartData, intervals) {
        this.type = type;

        // axis values are text labels
        this.values = chartData.map((data) => {
            return data[axisDataKey];
        });

        if (isNaN(this.values[0])) {
            this.primaryLineInterval = this.values.length;
            this.lineCount = this.values.length;
        } else {
            this.min = this.values.reduce((a, b) => {
                return a < b ? a : b;
            });
            this.max = this.values.reduce((a, b) => {
                return a > b ? a : b;
            });
            // Set a minimum grid line resolution
            this.lineCount = Math.ceil(this.max / intervals[0]);

            // Set Intervals
            this.primaryLineInterval = intervals[0] !== undefined ? intervals[0] : this.values.length;

            if (intervals[1] !== undefined) {
                this.secondaryLineInterval = intervals[1];
                // Calculate total lines without overlaps.
                this.lineCount = (this.max / this.secondaryLineInterval) + ((this.max / this.primaryLineInterval) % this.secondaryLineInterval);
            }
        }
    }

    setLineSpacing(range, padding) {
        this.padding = padding;
        this.length = range - padding;
        this.lineSpacing = Math.floor(this.length / this.lineCount, 2);
    }

}
