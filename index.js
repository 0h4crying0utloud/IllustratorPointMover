/**
 * @fileoverview A simple script and utilities for moving selected point in Adobe Illustrator.
 * WARNING: ADOBE SCRIPTS ONLY SUPPORT ~JAVASCRIPT 1.5!! Worse yet the support script software
 * is dead (probably useful for debugging?). This will explain so weirdness.  
 * Don't judge me!!!  
 * @author 0h4crying0utloud
 * 
 * @dependencies
 * - JAVASCRIPT 1.5 or less only!
 * - Adobe Script runner for VS code (https://github.com/rendertom/VSCode-Adobe-Script-Runner)
 * - Adobe Illustrator 
 */

var SPREAD_AMT = 1;

///////////////////////////
// Polyfills
///////////////////////////

 if (!Math.trunc) {
	Math.trunc = function(v) {
		v = +v;
		return (v - v % 1)   ||   (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
	};
}


///////////////////////////
// Utilities
///////////////////////////

/**
 * Creates a point object useful for my project purposes
 * TODO: may be able to use the AI native point now 
 * @param (float) x 
 * @param (float) y 
 * @param (int) group - number reprented a path group
 * @param (int) ref - pointer to PointItem object in AI DOM
 * @return point object
 */
function createPoint(x, y, group, ref) {
    return {"x": x, "y": y, "group": group, "ref": ref};
}

/**
 * Checks to see if two points are overlapped
 * @param (point object) point1 
 * @param (point object) point2
 * @return (boolean) 
 */
function isOverlapped(point1, point2) {
    return  Math.trunc(point1.x) == Math.trunc(point2.x) &&
            Math.trunc(point1.y) == Math.trunc(point2.y);
}

/**
 * Gets a random float within a range
 * @param (number) min
 * @param (number) max
 * @return (float) 
 */
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * For convenience, this just give my a randome number for my chosen range
 * @param (number) min
 * @param (number) max
 * @return (float) 
 */
function stdRandRange() {
    return getRandom(SPREAD_AMT*-1, SPREAD_AMT);
}


/**
 * Debugging with AI DOM is terrible, I've been alerting tranformations until
 * I can figure out a better way. There's no console. Script supporting software is not 
 * compatible with modern macOS. 
 * @param (array) groupList - a list of point groups
 * @return (String) that represents the state of the groupList
 */
function printPointGroupList(groupList) {
    var currentPoint;
    var groupStr = "";
    for(i=0; i<groupList.length; i++) {
        groupStr = groupStr + "\n";
        for (j=0; j<groupList[i].length; j++) {
            currentPoint = groupList[i][j];
            groupStr = groupStr + "\n" + 
                currentPoint.ref.anchor[0] + "," + currentPoint.ref.anchor[1] + " - " + currentPoint.ref.pointType.toString().charAt(10) + "\n" +
                "group:" + currentPoint.group + "\n";    
                
            // just keepint this handy for various debugging.
            // currentPoint.ref.anchor[0] + "," + currentPoint.ref.anchor[1] + " - " + currentPoint.ref.pointType.toString().charAt(10) + "\n" +
            // "left:" + currentPoint.ref.leftDirection[0] + "," + currentPoint.ref.leftDirection[1] + "\n" +
            // "rigt:" + currentPoint.ref.rightDirection[0] + "," + currentPoint.ref.rightDirection[1] + "\n" +
            // "group:" + currentPoint.group + "\n" + 
            // "polarity:" + currentPoint.ref.parent.polarity + "\n";

            }
    }
    return groupStr;
}


/**
 * This is mainly what I wanted from this script - just move each non-corner point and angle handles 
 * by some random amount. Points in the same group must move together. 
 * @param (array) groupList - a list of point groups
 * @return SIDE_EFFECT
 */
function movePoints(groupList) {
    var currentPoint, firstPoint, secondPoint;
    var groupStr = "";
    var xoffset, yoffset, first_anchor, first_leftDirection, first_rightDirection;
    for(i=0; i<groupList.length; i++) {
        firstPoint = groupList[i][0];

        if (firstPoint.ref.pointType == "PointType.SMOOTH") {
            secondPoint = groupList[i][1];
            xoffset = stdRandRange();
            yoffset = stdRandRange();

            first_anchor = [firstPoint.ref.anchor[0] + xoffset, firstPoint.ref.anchor[1] + yoffset];
            first_leftDirection = [firstPoint.ref.leftDirection[0] + xoffset, firstPoint.ref.leftDirection[1] + yoffset];
            first_rightDirection = [firstPoint.ref.rightDirection[0] + xoffset, firstPoint.ref.rightDirection[1] + yoffset]

            firstPoint.ref.anchor =  first_anchor;
            firstPoint.ref.leftDirection = first_leftDirection;
            firstPoint.ref.rightDirection = first_rightDirection;

            if (secondPoint) {
                secondPoint.ref.anchor =  first_anchor;
                secondPoint.ref.leftDirection = first_rightDirection;
                secondPoint.ref.rightDirection = first_leftDirection;
            } 

        }
    }
    return groupStr;
}




/////////////////////////////////////////////
// Grab all the selcted points 
/////////////////////////////////////////////

var selectedPaths = app.activeDocument.selection;
var allPoints = [];
var currentSelectedPath;
var tmpAnchor;
var allPointsStr = "";
for(var i=0; i<selectedPaths.length; i++) {
    selectedPathPoints = selectedPaths[i].selectedPathPoints;
    allPointsStr = allPointsStr + "\n";
    for(var j=0; j<selectedPathPoints.length; j++) {
        tmpAnchor = selectedPathPoints[j].anchor;
        allPoints.push(createPoint(tmpAnchor[0], tmpAnchor[1], i, selectedPathPoints[j]));
        allPointsStr = allPointsStr + "\n" + tmpAnchor[0] + "," + tmpAnchor[1] + " - " + selectedPathPoints[j].pointType.toString().charAt(10);
    }
}   
//alert(allPoints.length + allPointsStr);

/////////////////////////////////////////////
// Find groups of overlapped points
/////////////////////////////////////////////

var allPointGroups = [];
var currentPoint;
var allPointGroupsStr = "";
for(i=0; i<allPoints.length; i++) { 
    if (allPoints[i] !== null) {
        currentPoint = allPoints[i];
        allPointGroups.push([currentPoint]);  
        allPointGroupsStr = allPointGroupsStr + "\n\n" + currentPoint.ref.anchor[0] + "," + currentPoint.ref.anchor[1] + " - " + currentPoint.ref.pointType + "\n";
        for (j=(i+1); j<allPoints.length; j++) {
            if (allPoints[j] !== null) {
                if (isOverlapped(currentPoint, allPoints[j] ) ) {
                    allPointGroups[allPointGroups.length-1].push(allPoints[j]);
                    allPointGroupsStr = allPointGroupsStr + allPoints[j].ref.anchor[0] + "," + allPoints[j].ref.anchor[1] + " - " + allPoints[j].ref.pointType   + "\n";
                    allPoints[j] = null;
                }
            }
        }
    }
}


/////////////////////////////////////////////
// Now just move them around!
/////////////////////////////////////////////

//alert("test1: " + printPointGroupList(allPointGroups));
movePoints(allPointGroups)
//alert("test1: " + printPointGroupList(allPointGroups));