/**
 * Default linear gauge
 */
this.default = function () {
    var gauge = new ej.lineargauge.LinearGauge({
        orientation: 'Horizontal',
        axes: [{
            pointers: [{
                value: 10,
                height: 15,
                width: 15,
                placement: 'Near',
                offset: -50,
                markerType: 'Triangle'
            }],
            majorTicks: {
                interval: 10
            },
            minorTicks: {
                interval: 2
            },
            labelStyle: {
                offset: 48,
                font: {
                    fontFamily: 'Segoe UI'
                }
            }
        }],
        annotations: [{
            content: '<div id="pointer" style="width:70px;"><h1 style="font-size:14px;fontFamily: Segoe UI;">10 MPH</h1></div>',
            axisIndex: 0,
            axisValue: 10,
            x: 10,
            y: -70, zIndex: '1'
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
        // custom code end
    });
    gauge.appendTo('#defaultContainer');
};