
<body>
    <div id="burst">
    </div>
</body>

    <style>
        text{
            font-family: roboto;
            text-transform:uppercase;
            font-size: .7em;
        }
    </style>
<script>
    import { D3 } from 'd3';

    //********** QUICK TUNE VALUES ***************

    var vWidth = 500;
    var vHeight = vWidth;
    var vRadius = Math.min(vWidth, vHeight) / 2;

    var rootColor = "#ffffff";
    var winColor = "#a1d99b";
    var loseColor = "#e7969c";
    var pendingColor = "#c3dbee";

    //winRateString initialized to default, will change on hover
    var defaultWinRateString = "CLOSED";
    var subTextString = defaultWinRateString;
    var mainTextString = "";

    //tooltip returns to previous state after this long
    var toolTipHoverTimeoutInmS = "5000";

    //initialize vars for calculating stats
    var wonCount = 0;
    var lostCount = 0;
    var winRate = 0;

    //html ids and classes
    var subTextID = "subText";
    var mainTextID = "mainText";
    var chartID = "burst";

    var subTextIDHTML = "#" + subTextID;
    var mainTextIDHTML = "#" + mainTextID;
    var chartIDHTML = "#" + chartID;

    //*********************************************

    //.range[0] is root node and goes unused in sunburst coloring
    var vColor = d3.scaleOrdinal()
        .range([rootColor, winColor, loseColor, pendingColor]);

    var svg = d3.select(chartIDHTML).append("svg:svg")
        .attr('width', vWidth).attr('height', vHeight)

    // Prepare our physical space
    var g = svg.append('svg:g')
        .attr("id", "container")
        .attr('transform', 'translate(' + vWidth / 2 + ',' + vHeight / 2 + ')');
            
    // Declare d3 layout
    var vLayout = d3.partition().size([2 * Math.PI, vRadius]);
    var vArc = d3.arc()
        .startAngle(function (d) { return d.x0; })
        .endAngle(function (d) { return d.x1; })
        .innerRadius(function (d) { return d.y0 ; })
        .outerRadius(function (d) { return d.y1; });
    var vSlices;

    // Get the data from our JSON file
    d3.json('data-simple.json', function(error, vData) {
        if (error) throw error;
        drawSunburst(vData);
    });
    var json = {
    "id": "STATUS", "children": [{
        "id": "Closed",
        "children": [{"id": "FALL", "size": 9}, {"id": "CUT", "size": 1}, {"id": "STOCK", "size": 2},{"id": "SPILL", "size": 3}]
    }, {
        "id": "Litigation",
        "children": [{"id": "FALL", "size": 5}, {"id": "CUT", "size": 1}]
    }, {
        "id": "Open",
        "children": [{"id": "STOCK", "size": 4}, {"id": "SPILL", "size": 3}]
    }]

    // var json = {
    // "id": "STATUS", "children": [{
    //     "id": "Won",
    //     "children": [{"id": "CA", "size": 1}, {"id": "GD", "size": 1}, {"id": "NO", "size": 1}]
    // }, {
    //     "id": "Lost",
    //     "children": [{"id": "CA", "size": 5}, {"id": "HI", "size": 1}, {"id": "JK", "size": 2}]
    // }, {
    //     "id": "Pending",
    //     "children": [{"id": "CA", "size": 4}, {"id": "HI", "size": 3}, {"id": "JK", "size": 1 }, {"id": "NO", "size": 2 }, {"id": "LO", "size": 1 }, {"id": "BOO", "size": 4 }]
    // }]
};
drawSunburst(json);

    /**
     * Draw our sunburst
     * @param {object} data - Hierarchical data
     */
    function drawSunburst(data) {
        // Layout + Data
        var vRoot = d3.hierarchy(data).sum(function (d) { return d.size});
        var vNodes = vRoot.descendants();
        vLayout(vRoot);
        vSlices = g.selectAll('g').data(vNodes).enter().append('g')
            .on("mouseover", mouseover);

        // Draw on screen
        vSlices.append('path')
            .attr('display', function (d) { return d.depth ? null : 'none'; })
            .attr('d', vArc)
            .style('stroke', '#fff')
            .style('fill', function (d) { return vColor((d.children ? d : d.parent).data.id); })

        // Add text to slices
        vSlices.append('text')
            .filter(function(d) { return d.parent; })
            .attr('transform', function(d) {
                return 'translate(' + vArc.centroid(d) + ') rotate(' + computeTextRotation(d) + ')'; })
            .attr("text-anchor", "middle")
            .text(function(d) { return d.data.id });

        //calculate and display main text
        winRate = computeWinRate(data);
        mainTextString = winRate + "%"

        var mainText = svg.append("text:text")
            .attr("id", mainTextID)
            .style("font-size","3em")
            .style("font-weight","bold")
            .attr("font-family","lato")
            .attr("text-anchor", "middle")
            .attr("x", (vWidth/2))
            .attr("y", (vHeight/2))
            .text(mainTextString);

        svg.append("text:text")
            .attr("id", subTextID)
            .style("font-size","1.3em")
            .attr("font-family","lato")
            .attr("text-anchor", "middle")
            .attr("x", (vWidth/2))
            .attr("y", (vHeight/2 + 35))
            .text(subTextString);

    }

    //**********************************
    //*******  AFTER-LOAD EVENTS *******
    //**********************************

    // Fade all but the current sequence, and update the tooltip text
    function mouseover(d) {
        var sequenceArray = d.ancestors().reverse();
        // remove root node from the array
        sequenceArray.shift(); 

        //update text based on selected item
        svg.select(mainTextIDHTML)
            .text(d.value);
        svg.select(subTextIDHTML)
            .text(d.data.id);

        // Fade all the segments.
        d3.selectAll("path")
            .style("opacity", 0.3);

        // Then highlight only those that are an ancestor of the current segment.
        vSlices.selectAll("path")
            .filter(function(node) {
                    return (sequenceArray.indexOf(node) >= 0);
                    })
            .style("opacity", 1);
    }

    vSlices.on("mouseout", function(data, index, nodes) {
        // Remove fade from all the segments.
        d3.selectAll("path")
            .style("opacity", 1);

        // Reset text to default
        svg.select(mainTextIDHTML)
            .text(mainTextString);
        svg.select(subTextIDHTML)
            .text(subTextString);
        
    });

    /*
     * Calculate win percentage from hierarchial data
     * @param {object} Hierarchial plot data supplied to chart
     * @return {Int} Win percentage as int
     */
    function computeWinRate(d){
        wonCount, lostCount = 0;
        wonCount = json.children[0].children.reduce((acc, cur) => {
        return cur.size + acc
        }, 0)
        lostCount = json.children[1].children.reduce((acc, cur) => {
        return cur.size + acc
        }, 0)

        return winRate  = parseInt(((wonCount / (wonCount + lostCount)) * 100),);
    }
    /**
     * Calculate the rotation for each label based on its location in the sunburst.
     * @param {Node} d - the d3 node for which we're computing text rotation
     * @return {Number} the value that should populate the transform: rotate() statement
     */
    function computeTextRotation(d) {
        var angle = (d.x0 + d.x1) / Math.PI * 90;

        // Avoid upside-down labels
        //return (angle < 120 || angle > 270) ? angle : angle + 180;  // labels as rims
        return (angle < 180) ? angle - 90 : angle + 90;  // labels as spokes
    }
</script>
