
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

var mock =  [{"closed":"true","area":"580.540292347658","length":"160.463631778381","guides":"false","filled":"true","fillColor":{"red":"255","green":"255","blue":"255","typename":"RGBColor"},"fillOverprint":"false","stroked":"true","strokeColor":{"red":"0","green":"0","blue":"0","typename":"RGBColor"},"strokeOverprint":"false","strokeWidth":"0.25","strokeDashes":[],"strokeDashOffset":"0","strokeCap":"StrokeCap.BUTTENDCAP","strokeJoin":"StrokeJoin.MITERENDJOIN","strokeMiterLimit":"10","clipping":"false","evenodd":"false","resolution":"800","selectedPathPoints":[{"anchor":["467.0743707325","-123.012114395462"],"leftDirection":["467.0743707325","-123.012114395462"],"rightDirection":["465.639815213186","-124.040447728796"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["459.470823597328","-124.295114395462"],"leftDirection":["462.097815302668","-124.915447728794"],"rightDirection":["457.722259857652","-123.882003284351"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["458.1417042915","-120.627781062132"],"leftDirection":["457.274156930664","-121.827781062131"],"rightDirection":["462.618815289505","-114.436225506583"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["452.848037758567","-120.123669951021"],"leftDirection":["449.398815623485","-113.866114395472"],"rightDirection":["454.529482160533","-123.174003284352"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["451.143482246074","-123.902669951018"],"leftDirection":["452.345148882383","-123.73600328435"],"rightDirection":["449.559037841658","-124.122447728796"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.980371341189","-123.012114395462"],"leftDirection":["444.969712486232","-123.388558839908"],"rightDirection":["442.980371341189","-123.012114395462"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.980371341189","-123.012114395462"],"leftDirection":["442.980371341189","-123.012114395462"],"rightDirection":["442.980371341189","-123.012114395462"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.980371341189","-123.011336617687"],"leftDirection":["442.980371341189","-123.011336617687"],"rightDirection":["442.980371341189","-123.011336617687"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.980371341189","-123.011336617687"],"leftDirection":["442.980371341189","-123.011336617687"],"rightDirection":["443.356815776124","-121.022114395466"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["443.871037985355","-114.848558839914"],"leftDirection":["444.090704646473","-116.432781062136"],"rightDirection":["443.704482434006","-113.646669951027"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["440.092260303041","-113.143669951029"],"leftDirection":["443.142482448206","-111.462336617697"],"rightDirection":["433.834371572246","-116.59322550658"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["440.5961491792","-107.849781062145"],"leftDirection":["434.404704891171","-103.372447728816"],"rightDirection":["441.796260259993","-108.71744772881"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["444.263593530994","-106.520669951035"],"leftDirection":["443.850482430318","-108.269447728811"],"rightDirection":["444.883704626438","-103.894003284371"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.980371341189","-98.9173366177092"],"leftDirection":["444.008704648544","-100.352003284374"],"rightDirection":["442.980371341189","-98.9173366177092"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.980823597345","-98.9173366177092"],"leftDirection":["442.980823597345","-98.9173366177092"],"rightDirection":["444.41592686048","-97.8891143954879"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["450.584371149089","-97.6342255065993"],"leftDirection":["447.957490264009","-97.0141143954879"],"rightDirection":["452.333371104904","-98.0472255065979"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["451.913482226622","-101.301225506597"],"leftDirection":["452.781148871369","-100.101447728819"],"rightDirection":["447.436482339725","-107.493114395478"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["457.207259870662","-101.805558839927"],"leftDirection":["460.65692645018","-108.063114395478"],"rightDirection":["455.526037690914","-98.7552255065984"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["458.912259827588","-98.0267810621554"],"leftDirection":["457.710148746846","-98.1932255065985"],"rightDirection":["460.496259787573","-97.8070032843771"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.074815176933","-98.9173366177092"],"leftDirection":["465.085593004964","-98.5404477288212"],"rightDirection":["467.074815176933","-98.9173366177092"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.074815176933","-98.9173366177092"],"leftDirection":["467.074815176933","-98.9173366177092"],"rightDirection":["467.074815176933","-98.9173366177092"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.0743707325","-98.9173366177092"],"leftDirection":["467.0743707325","-98.9173366177092"],"rightDirection":["467.0743707325","-98.9173366177092"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.0743707325","-98.9173366177092"],"leftDirection":["467.0743707325","-98.9173366177092"],"rightDirection":["466.697926297566","-100.90666995104"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["466.183704088333","-107.080447728811"],"leftDirection":["465.964037427217","-105.496225506593"],"rightDirection":["466.350259639681","-108.2823366177"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["469.962592881757","-108.785336617699"],"leftDirection":["466.912259625484","-110.466669951031"],"rightDirection":["476.220370501444","-105.33589217326"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["469.458704005598","-114.079225506583"],"leftDirection":["475.650037182519","-118.55633661769"],"rightDirection":["468.258481813697","-113.211558839917"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["465.791148542696","-115.408336617693"],"leftDirection":["466.204259643369","-113.659558839918"],"rightDirection":["465.17103744725","-118.035336617691"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.0743707325","-123.011892173241"],"leftDirection":["466.046037425145","-121.577114395464"],"rightDirection":["467.0743707325","-123.011892173241"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"}],"polarity":"PolarityValues.POSITIVE","typename":"PathItem","uRL":"","note":"","layer":{"visible":"true","locked":"false","printable":"true","hasSelectedArtwork":"true","preview":"true","dimPlacedImages":"false","color":{"red":"255","green":"78.6926070038911","blue":"78.6926070038911","typename":"RGBColor"},"name":"foundation","opacity":"100","zOrderPosition":"3","absoluteZOrderPosition":"159","sliced":"false","blendingMode":"BlendModes.NORMAL","isIsolated":"false","artworkKnockout":"KnockoutState.INHERITED","typename":"Layer","parent":"[REF]"},"locked":"false","hidden":"false","selected":"true","position":["435.66702706555","-97.4272891306391"],"width":"38.720715874837","height":"27.0748816010018","geometricBounds":["435.66702706555","-97.4272891306391","474.387742940387","-124.502170731641"],"visibleBounds":["435.54202706555","-97.3022891306391","474.512742940387","-124.627170731641"],"controlBounds":["433.834371572246","-97.0141143954879","476.220370501444","-124.915447728794"],"name":"","blendingMode":"BlendModes.NORMAL","opacity":"100","isIsolated":"false","artworkKnockout":"KnockoutState.DISABLED","zOrderPosition":"31","absoluteZOrderPosition":"158","editable":"true","sliced":"false","top":"-97.3022891306391","left":"435.54202706555","visibilityVariable":null,"pixelAligned":"false","wrapped":"false","wrapOffset":"[NOT_SUPPORTED]","wrapInside":"[NOT_SUPPORTED]","parent":"[REF]"},{"closed":"true","area":"580.535196486568","length":"128.421938677481","guides":"false","filled":"true","fillColor":{"red":"255","green":"255","blue":"255","typename":"RGBColor"},"fillOverprint":"false","stroked":"true","strokeColor":{"red":"0","green":"0","blue":"0","typename":"RGBColor"},"strokeOverprint":"false","strokeWidth":"0.25","strokeDashes":[],"strokeDashOffset":"0","strokeCap":"StrokeCap.BUTTENDCAP","strokeJoin":"StrokeJoin.MITERENDJOIN","strokeMiterLimit":"10","clipping":"false","evenodd":"false","resolution":"800","selectedPathPoints":[{"anchor":["442.97991847644","-147.105558839883"],"leftDirection":["442.97991847644","-147.105558839883"],"rightDirection":["441.951585169085","-145.670781062106"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["441.696696286635","-139.502003284337"],"leftDirection":["441.076585191191","-142.129003284332"],"rightDirection":["442.109807387311","-137.753225506558"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["445.364140638429","-138.173003284337"],"leftDirection":["444.163918446528","-137.305225506561"],"rightDirection":["451.555584926458","-142.650003284331"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["445.868029514588","-132.879003284339"],"leftDirection":["452.125926896735","-129.429558839902"],"rightDirection":["442.817807369423","-134.560447728785"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.089260230079","-131.174114395457"],"leftDirection":["442.255807383623","-132.376003284342"],"rightDirection":["441.869474060049","-129.589892173235"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.97991847644","-123.011336617687"],"leftDirection":["442.603474041505","-125.000558839904"],"rightDirection":["442.97991847644","-123.011336617687"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.97991847644","-123.011336617687"],"leftDirection":["442.97991847644","-123.011336617687"],"rightDirection":["442.97991847644","-123.011336617687"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.980371341189","-123.011336617687"],"leftDirection":["442.980371341189","-123.011336617687"],"rightDirection":["442.980371341189","-123.011336617687"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.980371341189","-123.011336617687"],"leftDirection":["442.980371341189","-123.011336617687"],"rightDirection":["444.969585092842","-123.387781062129"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["451.143473825759","-123.902003284351"],"leftDirection":["449.558918310235","-124.121669951019"],"rightDirection":["452.345140462068","-123.735225506571"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["452.848029338251","-120.122892173244"],"leftDirection":["454.529695962434","-123.173114395464"],"rightDirection":["449.398807203168","-113.865336617695"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["458.141918093401","-120.627003284353"],"leftDirection":["462.619029091406","-114.435447728805"],"rightDirection":["457.274362559761","-121.827003284354"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["459.471029170934","-124.294225506572"],"leftDirection":["457.722593563396","-123.881225506573"],"rightDirection":["462.098029104567","-124.914669951018"],"pointType":"PointType.SMOOTH","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.074584534401","-123.011336617687"],"leftDirection":["465.640029015085","-124.039669951017"],"rightDirection":["467.074584534401","-123.011336617687"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.074584534401","-123.011781062129"],"leftDirection":["467.074584534401","-123.011781062129"],"rightDirection":["467.074584534401","-123.011336617687"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.074584534401","-147.106003284325"],"leftDirection":["467.074140089966","-147.105336617658"],"rightDirection":["467.074584534401","-147.106003284325"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.074584534401","-147.106003284325"],"leftDirection":["467.074584534401","-147.106003284325"],"rightDirection":["467.074584534401","-147.106003284325"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.074140089966","-147.105336617658"],"leftDirection":["467.074140089966","-147.105336617658"],"rightDirection":["467.074140089966","-147.105336617658"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["467.074140089966","-147.105336617658"],"leftDirection":["467.074140089966","-147.105336617658"],"rightDirection":["467.074140089966","-147.105336617658"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"},{"anchor":["442.97991847644","-147.105336617658"],"leftDirection":["442.97991847644","-147.105336617658"],"rightDirection":["442.97991847644","-147.105336617658"],"pointType":"PointType.CORNER","selected":"PathPointSelection.ANCHORPOINT","typename":"PathPoint","parent":"[REF]"}],"polarity":"PolarityValues.POSITIVE","typename":"PathItem","uRL":"","note":"","layer":{"visible":"true","locked":"false","printable":"true","hasSelectedArtwork":"true","preview":"true","dimPlacedImages":"false","color":{"red":"255","green":"78.6926070038911","blue":"78.6926070038911","typename":"RGBColor"},"name":"foundation","opacity":"100","zOrderPosition":"3","absoluteZOrderPosition":"159","sliced":"false","blendingMode":"BlendModes.NORMAL","isIsolated":"false","artworkKnockout":"KnockoutState.INHERITED","typename":"Layer","parent":"[REF]"},"locked":"false","hidden":"false","selected":"true","position":["441.489761292807","-115.697853105067"],"width":"25.5848232415938","height":"31.408150179258","geometricBounds":["441.489761292807","-115.697853105067","467.074584534401","-147.106003284325"],"visibleBounds":["441.364761292807","-115.572853105067","467.199589024338","-147.231006742953"],"controlBounds":["441.076585191191","-113.865336617695","467.199589024338","-147.231006742953"],"name":"","blendingMode":"BlendModes.NORMAL","opacity":"100","isIsolated":"false","artworkKnockout":"KnockoutState.DISABLED","zOrderPosition":"6","absoluteZOrderPosition":"133","editable":"true","sliced":"false","top":"-115.572853105067","left":"441.364761292807","visibilityVariable":null,"pixelAligned":"false","wrapped":"false","wrapOffset":"[NOT_SUPPORTED]","wrapInside":"[NOT_SUPPORTED]","parent":"[REF]"}];
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
    try {
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
                    return null;
                } else if (val === null) {
                    return null;
                } else {
                    var obj_keys = Object.keys(val);
                    if (obj_keys.length > 0) {
                        var obj_params = [];
                        for (var i=0; i<obj_keys.length;i++) {
                            try {
                                if (obj_keys[i] != "parent") {
                                    obj_params.push('"' + obj_keys[i] + '":' + stringify(val[obj_keys[i]]));
                                } else {
                                    obj_params.push('"' + obj_keys[i] + '":"[REF]"');
                                }
                            } catch(e) {
                                obj_params.push('"' + obj_keys[i] + '":"[NOT_SUPPORTED]"');
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
    } catch (e) {
        //alert('stringify: ' + e);
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

function getSideGroups(selectedPaths)  {
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

    //alert("selectedPaths.length:" + selectedPaths.length);

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
    return curveGroups;
}

var AI_SelectedPaths = mock;
try {
    AI_SelectedPaths = app.activeDocument.selection;
} catch (e) {
    AI_SelectedPaths = mock;
}


var curveGroups = getSideGroups(AI_SelectedPaths);

//console.log("curveGroups.length" + curveGroups.length);
//console.log(JSON.stringify(combineOverlaps(mock)));

alert("curveGroups.length" + curveGroups.length);
alert(stringify(combineOverlaps(curveGroups)));


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
