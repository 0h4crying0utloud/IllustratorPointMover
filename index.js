
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

// Math.trunc polyfill
if (!Math.trunc) {
	Math.trunc = function(v) {
		v = +v;
		return (v - v % 1)   ||   (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
	};
}

// Object.keys polyfill
if (!Object.keys) {
    Object.keys = (function() {
      'use strict';
      var hasOwnProperty = Object.prototype.hasOwnProperty,
          hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
          dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
          ],
          dontEnumsLength = dontEnums.length;
  
      return function(obj) {
        if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
          throw new TypeError('Object.keys called on non-object');
        }
  
        var result = [], prop, i;
  
        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }
  
        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }
        return result;
      };
    }());
}

// Simplified stringify polyfill
function stringify(val) {
    switch(typeof val) {
        case 'string':
        case 'number': 
        case 'boolean':
            return '"' + val + '"';
            break;
        case 'function':
            return '';
            break;
        case 'object':
            if (val instanceof Array) {                
                var arr_items = [];
                for (var i=0; i<val.length;i++) {
                    arr_items.push(stringify(val[i]));
                }
                return "[" + arr_items.join(',') + "]";
            } else if (val instanceof Date)  {
                return '';
            } else if (val === null) {
                return '';
            } else {
                var obj_keys = Object.keys(val);
                if (obj_keys.length > 0) {
                    var obj_params = [];
                    for (var i=0; i<obj_keys.length;i++) {
                        if (obj_keys[i] != "parent") {
                            obj_params.push('"' + obj_keys[i] + '":' + stringify(val[obj_keys[i]]));
                        }
                    }
                    return "{" + obj_params.join(',') + "}";
                } else {
                    return '"' + val + '"';
                }
            }
            break;
        default:
            return val;                      
    }
}

// filter polyfill
if (!Array.prototype.filter){
    Array.prototype.filter = function(func, thisArg) {
      'use strict';
      if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
          throw new TypeError();
     
      var len = this.length >>> 0,
          res = new Array(len), // preallocate array
          t = this, c = 0, i = -1;
      if (thisArg === undefined){
        while (++i !== len){
          // checks to see if the key was set
          if (i in this){
            if (func(t[i], i, t)){
              res[c++] = t[i];
            }
          }
        }
      }
      else{
        while (++i !== len){
          // checks to see if the key was set
          if (i in this){
            if (func.call(thisArg, t[i], i, t)){
              res[c++] = t[i];
            }
          }
        }
      }
     
      res.length = c; // shrink down array to proper size
      return res;
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
    return {"id":Math.random(), "x": x, "y": y, "group": group, "ref": ref};
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


/**
 * Checks to see if two points are overlapped
 * @param (point object) point1 
 * @param (point object) point2
 * @return (boolean) 
 */
function isOverlapped(point1, point2) {
    return  point1 && point2 &&
            point1.id !== point2.id &&
            Math.trunc(point1.x) == Math.trunc(point2.x) &&
            Math.trunc(point1.y) == Math.trunc(point2.y);
}

function findAndRemoveOverlap(pointObj, sideGroups) {
    var currentPoint;
    var sidePoints;
    for(var i=0; i<sideGroups.length; i++) {
        sidePoints = sideGroups[i];
        for(var j=0; j<sidePoints.length; j++) {
            if (sidePoints[j]) {
                currentPoint = sidePoints[j][0];
                if (isOverlapped(pointObj, currentPoint)) {
                    //console.log("overlap found:  sideGroups[" + i + "][" + j + "]");
                    sidePoints[j] = null;
                    return currentPoint;
                }
            }
        }
        sideGroups[i] = sideGroups[i].filter( function(x) {return x})
    }
    return null;
}

function combineOverlaps(sideGroups) {
    // var sidePoints;
    var overlapPoint;
    for(var i=0; i<sideGroups.length; i++) {
        sidePoints = sideGroups[i];
        for(var j=0; j<sidePoints.length; j++) {
            if (sidePoints[j]) {
                overlapPoint = findAndRemoveOverlap(sidePoints[j][0], sideGroups);
                //overlapPoint = null;
                if (overlapPoint) {
                    sidePoints[j].push(overlapPoint);
                }
            } 
        }

    }
    return sideGroups;
}


/////////////////////////////////////////////
// Grab all the selcted points 
/////////////////////////////////////////////

var selectedPaths = app.activeDocument.selection;
var allPoints = [];
var currentSelectedPath;
var tmpAnchor;
var allPointsStr = "";
var testStr = "selectedPaths.length: " + selectedPaths.length;
var currentPointType;

var curveGroups = [];
var isNewGroup = false;
var currentGroup = [];
var point;

alert("selectedPaths.length:" + selectedPaths.length);

for(var i=0; i<selectedPaths.length; i++) {
    selectedPathPoints = selectedPaths[i].selectedPathPoints;
    allPointsStr = allPointsStr + "\n";
    testStr += "\n------------------------------------------"
    testStr += "\nselectedPaths[" + i + "].selectedPathPoints.length:" + selectedPaths[i].selectedPathPoints.length;
    testStr += "\n------------------------------------------"
    for(var j=0, k=0; j<selectedPathPoints.length; j++) {
        tmpAnchor = selectedPathPoints[j].anchor;
        currentPointType = selectedPathPoints[j].pointType.toString().charAt(10)

        if (currentPointType === 'C') {
            testStr += '\n------'
            isNewGroup = true;
            if (currentGroup.length > 0) {
                //alert("currgroup:" + currentGroup);
                curveGroups.push(currentGroup);
                currentGroup = [];
            }
        }

        if (currentPointType === 'S') {
            testStr += "\n selectedPathPoints[" + j + "]:";
            testStr +=  tmpAnchor[0] + "," + tmpAnchor[1] + " - " + currentPointType;
            point = createPoint(tmpAnchor[0], tmpAnchor[1], i, selectedPathPoints[j]);
            allPoints.push(point);
            currentGroup.push([point]);
            allPointsStr = allPointsStr + "\n" + tmpAnchor[0] + "," + tmpAnchor[1] + " - " + currentPointType;
            isNewGroup = false;
        }
    }
    if (currentGroup.length > 0) {
        curveGroups.push(currentGroup);
    }

}   
//alert(allPoints.length + allPointsStr);

alert("curveGroups.length" + curveGroups.length);
alert(stringify(combineOverlaps(curveGroups)));


// curveGroups: [
//     sideGroup.0: [
//         point.0: {...},
//         point.1: {...},
//         point.2: {...},
//         point.3: {...} 
//     ]
// ]

// curveGroups: [
//     sideGroup.0: [
//         points: [
//             point.0: {...},
//             point.1: {...},
//             point.2: {...},
//             point.3: {...} 
//         ]
//     ]
// ]


/////////////////////////////////////////////
// Find groups of overlapped points
/////////////////////////////////////////////

// var allPointGroups = [];
// var currentPoint;
// var allPointGroupsStr = "";
// for(i=0; i<allPoints.length; i++) { 
//     if (allPoints[i] !== null) {
//         currentPoint = allPoints[i];
//         allPointGroups.push([currentPoint]);  
//         allPointGroupsStr = allPointGroupsStr + "\n\n" + currentPoint.ref.anchor[0] + "," + currentPoint.ref.anchor[1] + " - " + currentPoint.ref.pointType + "\n";
//         for (j=(i+1); j<allPoints.length; j++) {
//             if (allPoints[j] !== null) {
//                 if (isOverlapped(currentPoint, allPoints[j] ) ) {
//                     allPointGroups[allPointGroups.length-1].push(allPoints[j]);
//                     allPointGroupsStr = allPointGroupsStr + allPoints[j].ref.anchor[0] + "," + allPoints[j].ref.anchor[1] + " - " + allPoints[j].ref.pointType   + "\n";
//                     allPoints[j] = null;
//                 }
//             }
//         }
//     }
// }


/////////////////////////////////////////////
// Now just move them around!
/////////////////////////////////////////////

//alert("test1: " + printPointGroupList(allPointGroups));
//movePoints(allPointGroups)
//alert("test1: " + printPointGroupList(allPointGroups));