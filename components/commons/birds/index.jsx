import { useEffect } from "react";
// import "./style.css";

const Butterflies = () => {
  useEffect(() => {
    /*
Butterfly (vector):

The CSS and HTML is prefixed by 'bflydo'.
Copyright (c) 2021 by Jean Fan (https://codepen.io/JEFworks/pen/XzKJmv)

Abstract butterflies:

The CSS and HTML is prefixed by 'bfya'.
Copyright (c) 2021 by Dmitri (https://codepen.io/xdknight/pen/yPORqb)

Rose:

The CSS and HTML is prefixed by 'rsea'.
Copyright (c) 2021 by Sven Balzer (https://codepen.io/svebal/pen/RVWJaj)

Flowers:

The CSS and HTML is prefixed by 'flwra'.
Copyright (c) 2021 by Irina (https://codepen.io/mayday1022/pen/ognxi)
*/
    var doOtherPagesHaveBackground = false;

    function SessIon() {}
    var session = new SessIon();

    session.doodles = [];

    var _Session_prototype = SessIon.prototype;

    /* where are the rules on a stylesheet object*/

    var stylesheetRulesType;

    var srtNoStylesheets = 0; //#BCON
    var srtCssRules = 1; //#BCON
    var srtRules = 2; //#BCON

    var $u;
    var firstStyleSheet;

    var documntStyleSheets = document.styleSheets;
    if (documntStyleSheets === $u) {
      stylesheetRulesType = srtNoStylesheets;
    } else {
      firstStyleSheet = documntStyleSheets[0];
      if (firstStyleSheet.cssRules) {
        stylesheetRulesType = srtCssRules;
      } else {
        stylesheetRulesType = srtRules;
      }
    }

    var $_ = (function () {
      var d = document;

      function gebi(eLement) {
        return d.getElementById(eLement);
      }

      return gebi;
    })();

    /* how does the browser add and remove events on an HTML element? 
   Does the browser add events with the W3C 'addEventListener' or
   is the browser Internet Explorer 9 or older and maybe use
   'attachEvent'? */

    //TODO: countdown
    var tceW3C = 0; //#BCON
    var tceIE = 1; //#BCON
    var tceOther = 2; //#BCON

    var myChangeEvent = (function () {
      var mtypeOfChangeEventThatBrowserSupports;

      function initialise() {
        var sampleHTMLElement = document.body;

        if (sampleHTMLElement.addEventListener) {
          // W3C DOM

          mtypeOfChangeEventThatBrowserSupports = tceW3C;
        } else if (sampleHTMLElement.attachEvent) {
          // IE DOM

          mtypeOfChangeEventThatBrowserSupports = tceIE;
        } else {
          mtypeOfChangeEventThatBrowserSupports = tceOther;
        }

        //TODO: rm
        //alert(mtypeOfChangeEventThatBrowserSupports);
      }

      function add(event, HTMLElement, func) {
        switch (mtypeOfChangeEventThatBrowserSupports) {
          case tceW3C:
            HTMLElement.addEventListener(event, func, false);
            break;
          case tceIE:
            HTMLElement.attachEvent("on" + event, func);
            break;
          default:
            HTMLElement["on" + event] = func;
            break;
        }
      }

      function remove(event, HTMLElement, func) {
        switch (mtypeOfChangeEventThatBrowserSupports) {
          case tceW3C:
            HTMLElement.removeEventListener(event, func, false);
            break;
          case tceIE:
            HTMLElement.detachEvent("on" + event, func);
            break;
          default:
            HTMLElement["on" + event] = null;
            break;
        }
      }

      initialise();

      return {
        add: add,
        remove: remove,
      };
    })();

    var _Array_prototype = Array.prototype;

    /**
     * @constructor
     */
    function IndexandElement(index, eLement) {
      this.index = index;
      this.element = eLement;
    }

    _Array_prototype.myGetRandomIndexAndElement = function () {
      var countElementsInArray = this.length;
      var randomIndexAndElement = null;

      switch (countElementsInArray) {
        case 0:
          randomIndexAndElement = null;
          break;
        case 1:
          randomIndexAndElement = new IndexandElement(0, this[0]);
          break;

        default:
          var randomIndexInArray = Math.floor(
            Math.random() * countElementsInArray
          );
          var randomElementInArray = this[randomIndexInArray];

          randomIndexAndElement = new IndexandElement(
            randomIndexInArray,
            randomElementInArray
          );
          break;
      }

      return randomIndexAndElement;
    };

    _Array_prototype.myGetRandomIndx = function () {
      var randomIndex;

      var randomIndexAndElement = this.myGetRandomIndexAndElement();

      if (randomIndexAndElement === null) {
        randomIndex = null;
      } else {
        randomIndex = randomIndexAndElement.index;
      }

      return randomIndex;
    };

    _Array_prototype.myGetRandomElemnt = function () {
      var randomElement;

      var randomIndexAndElement = this.myGetRandomIndexAndElement();

      if (randomIndexAndElement === null) {
        randomElement = null;
      } else {
        randomElement = randomIndexAndElement.element;
      }

      return randomElement;
    };

    function RandomNumbersFromSet(
      lowest,
      highest /*, numToExclude */
      /* or setOfNumbers (array) [ , copyArray (true/false) ] ) */
    ) {
      if (lowest instanceof Array) {
        var setOfNumbers = lowest;
        if (arguments.length > 1 && arguments[1] === false) {
          this.setOfNumbers = setOfNumbers;
        } else {
          this.setOfNumbers = [];
          this.setOfNumbers = this.setOfNumbers.concat(setOfNumbers);
        }
        this.countSetOfNumbers = this.setOfNumbers.length;
        return;
      }

      this.setOfNumbers = [];

      var excludeNum = false;
      var numToExclude;

      if (arguments.length > 2 && arguments[2] !== null && lowest !== highest) {
        excludeNum = true;
        numToExclude = arguments[2];
      }

      for (var i = lowest; i <= highest; i++) {
        if (excludeNum && i === numToExclude) {
          // skip
        } else {
          this.setOfNumbers.push(i);
        }
      }

      this.countSetOfNumbers = this.setOfNumbers.length;
    } /* end of RandomNumbersFromSet class */

    var RandomElementsFromSet = RandomNumbersFromSet;

    RandomNumbersFromSet.prototype.getnumber = function () {
      var number;

      if (this.countSetOfNumbers === 0) {
        number = null;
      } else if (this.countSetOfNumbers === 1) {
        number = this.setOfNumbers[0];
        this.setOfNumbers.length = 0;
        this.countSetOfNumbers--;
      } else {
        var index = Math.floor(Math.random() * this.countSetOfNumbers);
        number = this.setOfNumbers[index];
        this.setOfNumbers.splice(index, 1); // remove item
        this.countSetOfNumbers--;
      }

      return number;
    };

    RandomNumbersFromSet.prototype.getElmnt =
      RandomNumbersFromSet.prototype.getnumber;

    RandomNumbersFromSet.prototype.isEmpty = function () {
      return this.countSetOfNumbers === 0;
    };

    RandomNumbersFromSet.prototype.rnfsGetNumbersLeft = function () {
      return this.setOfNumbers;
    };

    /* class to get random numbers from a given set of numbers and not
   repeat a number. In fact, goes through all the numbers in the set
   and then starts afresh. Uses the class 'RandomNumbersFromSet' */

    /**
     * @constructor
     */
    function RandomElementsfromArrayWithNoRepeats(
      theArray /* or lowestNumber, highestNumber */
    ) {
      if (typeof theArray === "number" && arguments.length >= 2) {
        var lowest = theArray;
        var heighest = arguments[1];
        this.theArray = [];
        for (var i = lowest; i <= heighest; i++) {
          this.theArray.push(i);
        }
      } else {
        this.theArray = theArray;
      }

      this.randomNumbersFromSet = null;
      this.lastNumber = null;
      this.renrSetup();
    } /* end of RandomElementsfromArrayWithNoRepeats class */

    /**
     * @constructor
     */
    RandomElementsfromArrayWithNoRepeats.prototype.renrSetup = function () {
      this.randomNumbersFromSet = new RandomNumbersFromSet(
        0,
        this.theArray.length - 1,
        this.lastNumber
      );
    };

    RandomElementsfromArrayWithNoRepeats.prototype.getelement = function () {
      if (
        this.randomNumbersFromSet === null ||
        this.randomNumbersFromSet.isEmpty()
      ) {
        this.renrSetup();
      }

      var arrayIndex = this.randomNumbersFromSet.getnumber();
      this.lastNumber = arrayIndex;
      return this.theArray[arrayIndex];
    };

    RandomElementsfromArrayWithNoRepeats.prototype.isEmpty = function () {
      return this.randomNumbersFromSet.isEmpty();
    };

    _Array_prototype.toStringwithAnd = function () {
      var s = "";

      var countArrayElements = this.length;

      if (countArrayElements === 0) {
        return s;
      }

      s += this[0];

      var lastIndex = countArrayElements - 1;

      for (var i = 1; i < countArrayElements; i++) {
        if (i === lastIndex) {
          s += " and ";
        } else {
          s += ", ";
        }
        s += this[i];
      }

      return s;
    };

    _Array_prototype.mySetupGetRandomElementWithNoRepeats = function () {
      this.myRandomElementsFromArrayWithNoRepeats =
        new RandomElementsfromArrayWithNoRepeats(this);
    };

    _Array_prototype.myGetRandomElementWithNoRepeats = function () {
      if (this.myRandomElementsFromArrayWithNoRepeats === undefined) {
        this.mySetupGetRandomElementWithNoRepeats();
      }

      return this.myRandomElementsFromArrayWithNoRepeats.getelement();
    };

    /* a list of the CSS stylesheets objects in order of where they are
   in the code */

    var myStylesheets = [];

    var getStyleObjectOfRuleInStylesheet = (function () {
      var docStyleSheets = myStylesheets;

      function getstyleobjectofruleinstylesheet(
        numberOfStylesheet,
        numberOfRuleInStylesheet
      ) {
        var stylesHeet;
        var rules;
        var rule;
        var ruleStyle;
        var mygraphics = myg;

        if (docStyleSheets === undefined) {
          return null;
        }

        try {
          stylesHeet = docStyleSheets[numberOfStylesheet];
        } catch (e) {
          return null;
        }

        if (stylesHeet === null || stylesHeet === undefined) {
          return null;
        }

        rules = mygraphics.getStylesheetRules(stylesHeet);

        if (rules === null) {
          return null;
        }

        rule = rules[numberOfRuleInStylesheet];
        ruleStyle = rule.style;

        return ruleStyle;
      }

      return getstyleobjectofruleinstylesheet;
    })();

    _Session_prototype.getStylesheetObjects = function () {
      var docStyleSheets;
      var mystylesheets = myStylesheets;

      docStyleSheets = document.styleSheets;

      if (docStyleSheets === undefined) {
        return;
      }

      try {
        mystylesheets[0] = docStyleSheets[0];
        mystylesheets[1] = docStyleSheets[1];
        mystylesheets[2] = docStyleSheets[2];
        mystylesheets[3] = docStyleSheets[3];
      } catch (e) {}
    };

    function ValueAndPercentChance(value, percentChance) {
      this.value = value;
      this.percentChance = percentChance;
    }

    function getRandValueGivenPercentChances(
      valuesAndPercentChances
      /* [, maxValue] */
    ) {
      function getChanceMultiplyFactor(valuesAndPercentChances, maxValue) {
        var chanceMultiplyFactor;

        if (maxValue) {
          var chancesBeforeMaxValue = 0;
          var totalChances = 0;
          var countValuesAndPercentChances = valuesAndPercentChances.length;

          if (
            maxValue >
            valuesAndPercentChances[countValuesAndPercentChances - 1].value
          ) {
            return 1;
          }

          var valuesAndPercentChance;
          for (var i = 0; i < countValuesAndPercentChances; i++) {
            valuesAndPercentChance = valuesAndPercentChances[i];
            if (valuesAndPercentChance.value <= maxValue) {
              chancesBeforeMaxValue += valuesAndPercentChance.percentChance;
            }
            totalChances += valuesAndPercentChance.percentChance;
          }

          chanceMultiplyFactor = totalChances / chancesBeforeMaxValue;
        } else {
          // no maxValue given
          chanceMultiplyFactor = 1;
        }

        return chanceMultiplyFactor;
      } // end of getChanceMultiplyFactor()

      var maxValue = null;
      if (arguments.length >= 2) {
        maxValue = arguments[1];
      }

      if (maxValue && maxValue <= valuesAndPercentChances[0].value) {
        return valuesAndPercentChances[0].value;
      }

      var chanceMultiplyFactor = getChanceMultiplyFactor(
        valuesAndPercentChances,
        maxValue
      );

      var rand = Math.floor(Math.random() * 100) + 1;

      var countValuesAndPercentChances = valuesAndPercentChances.length;

      if (countValuesAndPercentChances === 0) {
        return null;
      }

      var valueAndPercentChance;
      var sumPercentChances = 0;

      for (var i = 0; i < countValuesAndPercentChances - 1; i++) {
        valueAndPercentChance = valuesAndPercentChances[i];
        sumPercentChances +=
          valueAndPercentChance.percentChance * chanceMultiplyFactor;
        if (rand <= sumPercentChances) {
          return valueAndPercentChance.value;
        }
      }

      var lastPercentChancesIndex = countValuesAndPercentChances - 1;
      return valuesAndPercentChances[lastPercentChancesIndex].value;
    }

    /* does the browser support linear gradients either through
   the standard syntax or by using Miscrosof visual filters? */

    var isLinearGradient = true;

    /* the browser-specific prefix, if any, needed to set a linear gradient.
   For example: '-webkit-'. This value is the empty string, '', if no 
   prefix is needed. This value is false if the browser does not
   support linear gradients, or at least linear gradients specified with
   a recent syntax */

    var browserPrefixForLinearGradient = false;

    var doesBrowserSupportLinearGradientWithSyntaxOfFirstAppleProposal = false;

    session.isBrowserInternetExplorer = false;

    /* the RGB value of a color above which a color is considered 'light'
   Used, for example, to get a random color that is not invisible */

    var colorValueAboveWhichIsLight = 150; //#BCON

    /* the RGB value of a color below which a color is considered 'dark'
   Used, for example, to get a random color that is not invisible */

    var colorValueBelowWhichIsDark = 50; //#BCON

    /* the RGB value of a color above which a color 
   is considered 'very light'. Used, for example, to get 
   a random light color that is not too light and so invisible */

    var colorValueAboveWhichIsVeryLight = 200; //#BCON

    var myGraphics = {
      getStylesheetRules: function (stylesheetObject) {
        var rules;

        switch (stylesheetRulesType) {
          case srtCssRules:
            rules = stylesheetObject.cssRules;
            break;
          case srtRules:
            rules = stylesheetObject.rules;
            break;
          case srtNoStylesheets:
          /* falls through */
          default:
            rules = null;
            break;
        }

        return rules;
      },

      RGBValuesToRGBStyleString: function (red, green, blue) {
        var RGBStyleString = "rgb(" + red + "," + green + "," + blue + ")";
        return RGBStyleString;
      },

      maxRGBValue: 255,

      /* !!! NEW !!! */

      randomColorNotLightAsRGB: function (asArray) {
        var maxColorValue = myGraphics.maxRGBValue;

        function getRandomColorValue() {
          var randColorValue = Math.round(Math.random() * maxColorValue);
          return randColorValue;
        }

        function getRandomDarkColorValue() {
          var randColorValue = Math.round(
            Math.random() * colorValueBelowWhichIsDark
          );
          return randColorValue;
        }

        var red = getRandomColorValue();
        var green = getRandomColorValue();
        var blue = getRandomColorValue();

        var countWaysToDarkenColor = 2;
        var wayToDarkenColor = Math.floor(
          Math.random() * countWaysToDarkenColor
        );

        switch (wayToDarkenColor) {
          case 0:
            if (
              green > colorValueAboveWhichIsLight &&
              blue > colorValueAboveWhichIsLight &&
              red > colorValueBelowWhichIsDark
            ) {
              red = getRandomDarkColorValue();
            }
            break;
          default:
            if (
              blue > colorValueAboveWhichIsLight &&
              red > colorValueAboveWhichIsLight &&
              green > colorValueBelowWhichIsDark
            ) {
              green = getRandomDarkColorValue();
            }
        }

        if (asArray) {
          return [red, green, blue];
        }

        var colorAsRGB = myGraphics.RGBValuesToRGBStyleString(red, green, blue);

        return colorAsRGB;
      },

      /* !!! NEW !!! */

      randomLightColorNotTooLightAsRGB: function (asArray) {
        var maxColorValue = myGraphics.maxRGBValue;

        function getRandomColorValue() {
          var intervalForColor = maxColorValue - colorValueAboveWhichIsLight;
          var randColorIncrement = Math.round(Math.random() * intervalForColor);

          var randColorValue = colorValueAboveWhichIsLight + randColorIncrement;

          return randColorValue;
        }

        function getRandomDarkerLightColorValue() {
          var intervalForColor =
            colorValueAboveWhichIsVeryLight - colorValueAboveWhichIsLight;

          var randColorIncrement = Math.round(Math.random() * intervalForColor);

          var randColorValue = colorValueAboveWhichIsLight + randColorIncrement;

          return randColorValue;
        }

        var red = getRandomColorValue();
        var green = getRandomColorValue();
        var blue = getRandomColorValue();

        if (
          red > colorValueAboveWhichIsVeryLight &&
          green > colorValueAboveWhichIsVeryLight &&
          blue > colorValueAboveWhichIsVeryLight
        ) {
          var darkerLightcolor = getRandomDarkerLightColorValue();

          var countWaysToDarkenColor = 3;

          var wayToDarkenColor = Math.floor(
            Math.random() * countWaysToDarkenColor
          );

          switch (wayToDarkenColor) {
            case 0:
              blue = darkerLightcolor;
              break;
            case 1:
              red = darkerLightcolor;
              break;
            default:
              green = darkerLightcolor;
          }
        }

        if (asArray) {
          return [red, green, blue];
        }

        var colorAsRGB = myGraphics.RGBValuesToRGBStyleString(red, green, blue);

        return colorAsRGB;
      },

      getPageSizeOnScreen: function () /* Notes: 
       - the ideas for this were taken from 3 scripts given as answers 
         to questions on the web */
      {
        var width = null;
        var height = null;

        var windowNode = window;

        /* modern browsers */
        if (typeof windowNode.innerWidth !== "undefined") {
          width = windowNode.innerWidth;
          height = windowNode.innerHeight;
        } else {
          var documentNode = document;
          var documentElementNode = documentNode.documentElement;
          var documentElementNodeClientWidth;

          /* IE in strict (standards compliant mode */
          if (
            typeof documentElementNode !== "undefined" &&
            typeof (documentElementNodeClientWidth =
              documentElementNode.clientWidth) !== "undefined" &&
            documentElementNodeClientWidth !== 0
          ) {
            width = documentElementNodeClientWidth;
            height = documentElementNode.clientHeight;
          } else {
            /* other older versions of IE */

            var documentBodyNode = documentNode.body;

            if (typeof documentBodyNode === "undefined") {
              documentBodyNode = documentNode.getElementsByTagName("body")[0];
            }

            if (typeof documentBodyNode !== "undefined") {
              width = documentBodyNode.clientWidth;
              if (typeof width !== "undefined") {
                height = document.body.clientHeight;
              }
            }
          } /* try method for other older versions of IE */
        } /* try method for modern browsers */

        var returnVAlue;
        if (height === null) {
          returnVAlue = null;
        } else {
          returnVAlue = { width: width, height: height };
        }

        return returnVAlue;
      } /* end function getPageSizeOnScreen() */,

      setAnimation: function (styleObject, animationValue) {
        styleObject.MozAnimation = animationValue;
        styleObject.WebkitAnimation = animationValue;
        styleObject.OAnimation = animationValue;
        styleObject.KhtmlAnimation = animationValue;
        styleObject.animation = animationValue;

        //TODO: rm
        //alert('setAnimation: ' + animationValue);
      },

      setTransition: function (styleObject, transitionValue) {
        styleObject.MozTransition = transitionValue;
        styleObject.WebkitTransition = transitionValue;
        styleObject.msTransition = transitionValue;
        styleObject.KhtmlTransition = transitionValue;
        styleObject.transition = transitionValue;
      },

      setTransform: function (styleObject, transformValue) {
        styleObject.MozTransform = transformValue;
        styleObject.WebkitTransform = transformValue;
        styleObject.msTransform = transformValue;
        styleObject.KhtmlTransform = transformValue;
        styleObject.transform = transformValue;
      },

      setAnimationDuration: function (styleObject, animationDurationValue) {
        styleObject.MozAnimationDuration = animationDurationValue;
        styleObject.WebkitAnimationDuration = animationDurationValue;
        styleObject.OAnimationDuration = animationDurationValue;
        styleObject.KhtmlAnimationDuration = animationDurationValue;
        styleObject.animationDuration = animationDurationValue;
      },

      /* !!! NEW !!! */

      /*
    setAnimationDelay : function(styleObject, animationDelayValue)
    {
        styleObject.MozAnimationDelay = animationDelayValue;
        styleObject.WebkitAnimationDelay = animationDelayValue;
        styleObject.OAnimationDelay = animationDelayValue;
        styleObject.KhtmlAnimationDelay = animationDelayValue;
        styleObject.animationDelay = animationDelayValue;
    },
    */

      setlinearGradient: function (
        styleObject,
        turnOn,
        startCOlor,
        endColOr,
        backgroundcolor,
        ///* TODO: prod: rm
        onborderValue,
        offborderValue
        //*/
      ) {
        var cssForGradient;

        //TODO: prod: rm
        if (onborderValue) {
          var borderValue = turnOn ? onborderValue : offborderValue;
          styleObject.border = borderValue;
        }

        if (isLinearGradient) {
          if (turnOn) {
            styleObject.backgroundColor = backgroundcolor;

            if (browserPrefixForLinearGradient !== false) {
              // e.g. '-webkit-linear-gradient(top, #ccc, #000)'

              cssForGradient =
                browserPrefixForLinearGradient +
                "linear-gradient(top," +
                startCOlor +
                "," +
                endColOr +
                ")";

              styleObject.backgroundImage = cssForGradient;

              alert(
                styleObject +
                  "," +
                  cssForGradient +
                  "," +
                  styleObject.backgroundImage
              );
            } else if (
              doesBrowserSupportLinearGradientWithSyntaxOfFirstAppleProposal
            ) {
              cssForGradient =
                "-webkit-gradient(linear, 0% 0%, 0% 100%, from(" +
                startCOlor +
                "), to(" +
                endColOr +
                "))";

              styleObject.backgroundImage = cssForGradient;
            } else if (session.isBrowserInternetExplorer) {
              cssForGradient =
                "progid:DXImageTransform.Microsoft.gradient(" +
                "GradientType=0, startColorstr=" +
                startCOlor +
                ", endColorstr=" +
                endColOr +
                ")";

              styleObject.filter = cssForGradient;

              styleObject.msFilter = cssForGradient;
            } else {
              cssForGradient =
                "linear-gradient(to bottom, " +
                startCOlor +
                ", " +
                endColOr +
                ")";

              styleObject.background = cssForGradient;
            }
          } /* if (turnOn) */ else {
            cssForGradient = "";

            styleObject.backgroundImage = cssForGradient;
            styleObject.background = cssForGradient;

            if (
              session.isBrowserInternetExplorer &&
              browserPrefixForLinearGradient === false
            ) {
              cssForGradient =
                "progid:DXImageTransform.Microsoft.gradient(" +
                "enabled=false)";

              styleObject.filter = cssForGradient;
              styleObject.msFilter = cssForGradient;
            }

            styleObject.backgroundColor = backgroundcolor;
          }
        } /* isLinearGradient */ else {
          styleObject.backgroundColor = backgroundcolor;
        }
      } /* end of function 'setlinearGradient' */,

      setBorderRadius: function (eLement, value, style) {
        if (eLement === undefined) {
          return;
        }

        var elementStyle;
        if (style !== undefined) {
          elementStyle = style;
        } else {
          elementStyle = eLement.style;
        }

        elementStyle.MozBorderRadius = value;
        elementStyle.WebkitBorderRadius = value;
        elementStyle.msBorderRadius = value;
        elementStyle.OBorderRadius = value;
        elementStyle.KhtmlBorderRadius = value;

        elementStyle.borderRadius = value;
      },
    }; /* end of object myGraphics */

    var myg = myGraphics;

    /* a different cursor to show you can tap or click on an element
   to see a tip */

    var canClickToSeeTipCursor = "pointer"; //#BCON

    /* different shades of green. Used, for example, for the color of 
   the stems of the flowers in the animation of clouds that is shown 
   during a game */

    var cGreenColors = [
      "rgb( 85,107, 47)",
      "rgb(143,188,143)",
      "rgb( 46,139, 87)",
      "rgb( 60,179,113)",
      "rgb(152,251,152)",
      "rgb(  0,255,127)",
      "rgb(124,252,  0)",
      "rgb(127,255,  0)",
      "rgb(173,255, 47)",
      "rgb( 50,205, 50)",
      "rgb(154,205, 50)",
      "rgb( 34,139, 34)",
      "rgb(107,142, 35)",
    ];

    /* does the color fade behind the numbers called so far 
   when the numbers are shown as balls? */

    var defaultDoesColorFadeofBallsCalledSoFar = true;

    var doesColorFadeofBallsCalledSoFar =
      defaultDoesColorFadeofBallsCalledSoFar;

    /* what are the dimensions of the butterfly flying up or down 
   the screen during a game?. The butterfly can be up to 150px high, 
   but it may twist and turn making it bigger */

    var cHeightOfButterflyInButterflyDoodle = 225; //#BCON

    /* how is the butterfly in the butterfly doodle placed just off the
   the top or bottom of the screen?. The butterfly may twist and turn */

    var cPositionOfButterflyInButterflyDoodleJustOffScreenAtTopOrBottom =
      "-225px"; //#BCON

    /* browsers need time to display the page with the starting state of 
   a CSS transition. Chrome and IE need just a 1 millisecond timeout. 
   But Firefox needs more, maybe 20 milliseconds */

    var cTimeToLetBrowserRefreshPageBeforeCSSTransition = 100; //#BCON

    /* a large value to move the butterflies in the butterfly animation 
   (shown during a game) off the screen. The butterflies may 
   move up or down the screen during the animation, so it is hard
   to know exactly how far to move across the birds */

    var cOffsetFromTheBottomOfScreenUsedToHideButterflyInButterfliesDoodle =
      "-9999px"; //#BCON

    /* how much does the size increase or decrease in the animation
   of a number of butterflies flying up or down the screen? 
   This may make the birds look as though they are getting nearer or
   further away */

    var cMaxScaleFactorForButterflyDoodle = 1.0; //#BCON

    var cMinScaleFactorForButterflyDoodle = 0.5; //#BCON

    /* how far does the butterfly go across the screen in the animation
   that may appear during a game? This is given as a fraction of
   the page width */

    var cFractionOfPageWidthButterflyGoesAcrossInButterflyDoodle = 0.25; //#BCON

    /* how far do the butterflies start across from the right of the screen
   in the animation that may appear during a game? This is given as 
   a fraction of the page width */

    var cFractionOfPageWidthButterflyStartsFromRightInButterflyDoodle = 0.25; //#BCON

    /* the time for the butterflies to fly up or down, or across, in 
   the animation shown during a game */

    var cMaxTransitionDurationForButterflyDoodle = 20; //#BCON

    var cMinTransitionDurationForButterflyDoodle = 10; //#BCON

    /* what is the lowest and highest number of butterflies in the
   animation that shows a number of butterflies flying up or down
   the screen ? This animation is shown during a game */

    var cMinNumberOfButterfliesForButterflyDoodle = 2; //#BCON

    var cMaxNumberOfButterfliesForButterflyDoodle = 5; //#BCON

    /* how likely is it that color of the wings of the butterflies
   fade to a lighter color? Otherwise the color transitions to another
   color. This is for the vector (SVG) butterfiles.
   This is for the animation that shows a number of butterflies
   flying up or down the screen. This animation is shown
   during a game */

    var cPercentChanceFadeToLighterColorForWingOfVectorButterflyInButterflyDoodle = 50; //#BCON

    /* how much lighter are the edges of the wings of the butterfiles?
   The color of the wings can be a simple lightening of a color,
   in addition to color gradients with many color stops.
   This is for the vector (SVG) butterfiles. This is for the animation
   that shows a number of butterflies flying up or down the screen
   This is a factor to apply to the red, green and blue parts of
   the color of the wings. The factor needs to be quite big to make
   the lightening of the color visible */

    var cFactorToMakeWingLighterForWingOfVectorButterflyInButterflyDoodle = 2; //#BCON

    /* how likely is it that color of the wings of the butterflies
   is a linear gradient of maybe many colors? Otherwise the color
   is a radial gradient. This is for the vector (SVG) butterfiles.
   This is for the animation that shows a number of butterflies
   flying up or down the screen. This animation is shown
   during a game */

    var cPercentChanceIsLinearGradientForWingOfVectorButterflyInButterflyDoodle = 50; //#BCON

    /* how likely is it that color of the wings of the butterflies
   is a vertial linear gradient of maybe many colors? Otherwise
   the color is a horizontal linear gradient. This is for 
   the vector (SVG) butterfiles.  This is for the animation that 
   shows a number of butterflies flying up or down the screen. 
   This animation is shown during a game */

    var cPercentChanceIsVerticalLinearGradientForWingOfVectorButterflyInButterflyDoodle = 50; //#BCON

    /* how likely is it that color of the wings of the butterflies
   is a radial gradient focused in the middle of the wing?
   The gradient may be of many colors. Otherwise the color is
   a radial gradient focused on the middle of the right hand size. 
   This is for the vector (SVG) butterfiles. This is for the animation
   that shows a number of butterflies flying up or down the screen.
   This animation is shown during a game */

    var cPercentChanceIsRadialGradientInCentreForWingOfVectorButterflyInButterflyDoodle = 50; //#BCON

    /* how fast is the flapping of the wings of the butterflies which are 
   a scalable vector graphic in the animation that is shown
   during a game. This is given in seconds. This time is for one cycle
   of movement */

    var cMinFlapDurationForVectorButterflyInDoodle = 0.5; //#BCON

    var cMaxFlapDurationForVectorButterflyInDoodle = 1.5; //#BCON

    /* how fast at spinning are the butterflies which are 
   a scalable vector graphic in the animation that is shown
   during a game. This is given in seconds. This time is for one cycle
   of movement. The butterflies spin around as they move up or down
   the screen */

    var cMinSpinDurationForVectorButterflyInDoodle = 5; //#BCON

    var cMaxSpinDurationForVectorButterflyInDoodle = 10; //#BCON

    /* what is the smallest and largest size of the SVG butterflies that
   fly up and down on the right of the screen?
   This is given in pixels */

    var cMinScaleForVectorButterfylInButterflyDoodle = 50;

    var cMaxScaleForVectorButterfylInButterflyDoodle = 150;

    /* various dark colors. Used, for example, for the 'bones' of the
   SVG butterflies in the the animation that is shown during a game */

    var cDarkColors = [
      "black",
      "rgb(100,0,0)",
      "rgb(0,100,0)",
      "rgb(0,0,100)",
      "rgb(100,100,100)",
      "rgb(50,50,50)",
      "rgb(100,100,0)",
      "rgb(0,100,100)",
      "rgb(100,0,100)",
      "rgb(101,67,33)" /* dark brown */,
      "rgb( 72, 61,139)" /* dark slate blue */,
      "rgb(143,188,143)" /* dark sea green */,
      "rgb(153, 50,204)" /* dark orchid */,
      "rgb(148,  0,211)" /* dark violet*/,
      "rgb(139,  0,139)" /* dark magenta */,
      "rgb(105,139,105)" /* DarkSeaGreen4 */,
      "rgb(110,139, 61)" /* DarkOliveGreen4 */,
      "rgb(139,101,  8)" /* DarkGoldenrod4 */,
      "rgb(139, 69,  0)" /* DarkOrange4 */,
      "rgb(104, 34,139)" /* DarkOrchid4 */,
    ];

    /* how many 'abstract' butterflies are shown in the animation 
   that is shown during a game? This is the count of the butterflies 
   that just have the rough shape of the wings */

    var cMinCountAbstractButterfliesForButterflyDoodle = 30; //#BCON

    var cMaxCountAbstractButterfliesForButterflyDoodle = 50; //#BCON

    /* how long do the 'abstract' butteflies take to fly up the screen
   in the animation that is shown during a game? This is where
   the butterflies just have the rough shape of the wings. The lowest
   value is given. How much the value can range over is also given.
   These values are given in millseconds */

    var cMinDurationOfFlyUpForForAbstractButterfliesInDoodle = 3000; //#BCON

    var cIntervalForDurationOfFlyUpForForAbstractButterfliesInDoodle = 1000; //#BCON

    /* how tall are the wings of the 'abstract' butteflies in the animation
   that is shown during a game? This is where the butterflies just have 
   the rough shape of the wings. The lowest value is given. How much 
   the value can range over is also given. These values are given 
   in pixels. The width of the wings is a fixed proportion of 
   the height*/

    var cMinHeightOfWingForAbstractButterfliesInDoodle = 60; //#BCON

    var cIntervalForHeightOfWingForAbstractButterfliesInDoodle = 60; //#BCON

    /* what were the original sizes of the wings before I decided to
   vary them? The wings are of the 'abstract' butteflies in 
   the animation that is shown during a game. This is where 
   the butterflies just have the rough shape of the wings. 
   These values are given in pixels. The last value is how far
   is the start of the left wing from the centre of the butterfly. 
   See the 'credits' page for details of the original animation */

    var cBaseWidthOfWingForAbstractButterfliesInDoodle = 70; //#BCON

    var cBaseHeightOfWingForAbstractButterfliesInDoodle = 90; //#BCON

    /* how far can the butterflies go back into the distance, moving along
   the negative 'z' axis? This is for the 'abstract' butteflies in
   the animation that is shown during a game. This is where 
   the butterflies just have the rough shape of the wings. This value
   is given in pixels */

    var cMaxGoBackAlongZAzixForAbstractButterfliesForButterflyDoodle = 500; //#BCON

    /* how far do the butterflies start from the centre of the screen?
   This is for the 'abstract' butteflies in the animation that is shown
   during a game. This is where the butterflies just have 
   the rough shape of the wings. This value is given as a fraction
   of the half the page width. The butterflies can start before or after
   the centre of the screen */

    var cStartPositionAsFractionOfHalfPageWidthForAbstractButterfliesInDoodle = 0.2; //#BCON

    /* how likely is it that there will be one, two or three extra 
   color stops for the gradient of colors for the wings of the
   butterflies. This is for the 'abstract' butteflies in the animation 
   that is shown during a game */

    var cPercentChanceCountWingColorStopsIsOneForAbstractButterfliesInDoodle = 34; //#BCON

    var cPercentChanceCountWingColorStopsIsTwoForAbstractButterfliesInDoodle = 33; //#BCON

    var cPercentChanceCountWingColorStopsIsThreeForAbstractButterfliesInDoodle = 33; //#BCON

    /* does the color on the wing of the butterfly fade to a lighter color
   or is there a color gradient with 2 or more stops? This is for 
   the 'abstract' butteflies in the animation that is shown 
   during a game */

    var cPercentChanceWingFadesToLighterColorForAbstractButterflyInDoodle = 25; //#BCON

    /* does the color on the wing of the butterfly fade with a linear or
   radial gradient?  This is for the 'abstract' butteflies in 
   the animation that is shown during a game */

    var cPercentChanceWingFadeIsLinearGradientForAbstractButterflyInDoodle = 50; //#BCON

    /* how many petals are there in the rose n the butterfly doodle 
   that is shown during a game */

    var cCountPetalsOfRoseInButterflyDoodle = 7; //#BCON

    /* how far from the bottom of the screen is the rose in the
   animation of butterfliees that is shown during a game. This puts
   the rose above the branding 000webhost puts in the 
   bottom right corner */

    var cPositionOfRoseFromBottomInButterflyDoodle = "40px"; //#BCON

    /* a large value to move the rose in the animation of butterflies 
   (shown during a game) off the screen */

    var cOffsetFromTheTopOfScreenUsedToHideRoseInButterflyDoodle = "-9999px"; //#BCON

    /* how long is the animation of the petals of the rose in
   the butterfly doodle that is shown during a game? This is 
   given in seconds */

    var cMinDurationForPetalAnimationOfRoseInButterflyDoodle = 2.5; //#BCON

    var cMaxDurationForPetalAnimationOfRoseInButterflyDoodle = 3.5; //#BCON

    /* how long does it take to fade in and fade away the rose
   in the butterfly doodle that is shown during a game? This is 
   given in seconds */

    var cMinDelayForPetalAnimationOfRoseInButterflyDoodle = 1.5; //#BCON

    var cMaxDelayForPetalAnimationOfRoseInButterflyDoodle = 2.5; //#BCON

    /* how far down is the half-way point when the petal falls from
   the rose in the butterfly doodle that is shown during a game? 
   The petal falls to the right and then half-way down changes direction
   and falls to the left (or vice-versa). This is given in pixels */

    var cMinYOfHalfWayOfPetalDropOfRoseInButterflyDoodle = 45; //#BCON

    var cMaxYOfHalfWayOfPetalDropOfRoseInButterflyDoodle = 95; //#BCON

    /* how far to the right is the half-way point when the petal falls from
   the rose in the butterfly doodle that is shown during a game? 
   The petal falls to the right and then half-way down changes direction
   and falls to the left (or vice-versa). This is given in pixels */

    var cMinXOfHalfWayOfPetalDropOfRoseInButterflyDoodle = 75; //#BCON

    var cMaxXOfHalfWayOfPetalDropOfRoseInButterflyDoodle = 125; //#BCON

    /* how far to the left is the end point when the petal falls from
   the rose in the butterfly doodle that is shown during a game? 
   The petal falls to the right and then half-way down changes direction
   and falls to the left (or vice-versa). This is given in pixels */

    var cMinXOfEndOfPetalDropOfRoseInButterflyDoodle = 20; //#BCON

    var cMaxXOfEndOfPetalDropOfRoseInButterflyDoodle = 40; //#BCON

    /* how large is the rose in the butterfly doodle that is shown 
   during a game? This value is a scale factor. Half size is 0.5 */

    var cMinScaleForRoseInButterflyDoodle = 0.3; //#BCON

    var cMaxScaleForRoseInButterflyDoodle = 1; //#BCON

    //        /* the colors of each petal vary a little from a 'base' color.
    //           Each of the red, green and blue parts of the color vary.
    //           How much darker can the color be? This is for the rose in the
    //           butterfly doodle that is shown during a game */
    //
    //        var cHowMuchToStartBelowWhenVaryingPartOfPetalColorOfRoseInButterflyDoodle = 25; //#BCON

    //        /* the colors of each petal vary a little from a 'base' color.
    //           Each of the red, green and blue parts of the color vary.
    //           How much lighter can the color be from the darkest possible color?
    //           This is for the rose in the butterfly doodle that is shown
    //           during a game */
    //
    //        var cRangeWhenVaryingPartOfPetalColorOfRoseInButterflyDoodle = 50; //#BCON

    /* how much lighter are the tips of the petals of the rose?
   This is for the rose in the butterfly doodle that is shown 
   during a game. This is a factor to apply to 
   the red, green and blue parts of the color of each petal */

    var cFactorToMakePetalLighterForRoseInButterflyDoodle = 1.5; /*1.25*/ //#BCON

    /* how likely is it that you see a mirror image of the rose?
   The rose is rotated 180 degrees around the 'y' axis.
   This is for the rose in the butterfly doodle that is shown
   during a game. This is given as a percentage */

    var cPercentChanceFlipRoseAroundYAxisInButterflyDoodle = 50; //#BCON

    /* how wide is the box containing the rose in the butterfly doodle 
   that is shown during a game? The rose overflows this box. 
   This value is in pixels */

    var cWidthOfRoseContainerInButterflyDoodle = 100; //#BCON

    /* factor to multiply the supposed width of the rose to get the real
   width. The width needs to include the leaf falling down to one side.
   The width of the rose is used to place the flowers away from the
   rose.  I could not calculate the width correctly so I use a 'fudge'.
   This is for the rose in the butterfly doodle that is shown
   during a game */

    var cMagicFactorToCalculateWithOfRoseInButterflyDoodle = 2.5; //#BCON

    /* a large value to move the flowers in the butterfly animation 
   (shown during a game) off the screen */

    var cOffsetFromTheBottomOfScreenUsedToHideFlowersInFlowersDoodle =
      "-9999px"; //#BCON

    /* the colors of each petal vary a little from a 'base' color.
   Each of the red, green and blue parts of the color vary.
   How much darker can the color be? This is for the rose in the 
   butterfly doodle that is shown during a game */

    var cHowMuchToStartBelowWhenVaryingPartOfPetalColorOfRoseInButterflyDoodle = 25; //#BCON

    /* the colors of each petal vary a little from a 'base' color.
   Each of the red, green and blue parts of the color vary.
   How much lighter can the color be from the darkest possible color? 
   This is for the rose in the butterfly doodle that is shown 
   during a game */

    var cRangeWhenVaryingPartOfPetalColorOfRoseInButterflyDoodle = 50; //#BCON

    /* how many thorns are on the stem of the rose in the butterfly doodle
   that is shown during a game */

    var countThornsOnRoseInButterflyDoodle = 4; //#BCON

    /* how likely is it that a thorn of the rose is shown? There are
   four thorns. This is for the rose in the butterfly doodle that 
   is shown during a game */

    //var cPercentChanceSeeThornOfRoseInButterflyDoodle = 75; //#BCON
    var cPercentChanceSeeThornOfRoseInButterflyDoodle = 50; //#BCON

    /* how much lighter are the tips of the petals of the flowers?
   This is for the flowers in the butterfly doodle that is shown 
   during a game. This is a factor to apply to 
   the red, green and blue parts of the color of each petal */

    var cFactorToMakePetalLighterForFlowerInButterflyDoodle = 1.25; //#BCON

    /* how much lighter are the tips of the pieces of the heads of 
   the flowers? This is for the flowers in the butterfly doodle that is
   shown during a game. This is a factor to apply to 
   the red, green and blue parts of the color of each petal */

    var cFactorToMakeHeadLighterForFlowerInButterflyDoodle = 1.25; //#BCON

    /* how much many flowers are there in the butterfly doodle 
   that is shown during a game? There are enough rules in the
   stylesheet for 15 flowers */

    var cMinFlowersInButterflyDoodle = 3; //#BCON
    var cMaxFlowersInButterflyDoodle = 15; //#BCON

    /* how much many petals does a flower have in the butterfly doodle 
   that is shown during a game? */

    var cMinPetalsInButterflyDoodle = 5; //#BCON
    var cMaxPetalsInButterflyDoodle = 10; //#BCON

    /* how much many pieces make up the head of a flower in 
   the butterfly doodle that is shown during a game? */

    var cMinHeadsInButterflyDoodle = 7; //#BCON
    var cMaxHeadsInButterflyDoodle = 10; //#BCON

    /* how likely is it that the petals of the flowers are slightly
   different colors in the butterfly doodle that is shown 
   during a game? */

    var cPercentChancePetalsOfFlowersAreDifferentColorsInButterflyDoodle = 50; //#BCON

    /* how likely is it that the color of the petals of the flowers fade
   from one color to another rather than just getting lighter at the
   tips of the petals? The flowers then look a bit exotic. This adds 
   variety to the flowers */

    var cPercentChancePetalEndColorAnotherColorOfFlowersInButterflyDoodle = 30; //#BCON

    /* how large can a flower be at the start of the animation of 
   the flowers in the butterfly doodle that is shown during a game? */

    var cMinStartScaleForFlowersInButterflyDoodle = 0.3; //#BCON
    var cMaxStartScaleForFlowersInButterflyDoodle = 0.6666666666; //#BCON

    /* how much can a flower grow in size during the butterfly doodle 
   that is shown during a game? The values are chosen so that 
   the largest scale factor is 1 at the end of the animation */

    var cMinScaleFactorForFlowersInButterflyDoodle = 1.25; //#BCON
    var cMaxScaleFactorForFlowersInButterflyDoodle = 1.5; //#BCON

    /* how wide is the box containing the flower in the butterfly doodle 
   that is shown during a game? The petals of the flower can overflow 
   this box. This is given is pixels */

    var cWidthOfFlowerContainerInButterflyDoodle = 228; //#BCON

    /* how high is the box containing the flower in the butterfly doodle 
   that is shown during a game? The petals of the flower can overflow 
   this box. This is given is pixels */

    var cHeightOfFlowerContainerInButterflyDoodle = 184; //#BCON

    /* how much do the petals of the flower go beyond their containing box 
   in the butterfly doodle? This is horizontally along the 'x' axis.
   This is given is pixels */

    var xOverflowOfFlowerInButterflyDoodle = 10; //#BCON

    /* how far from the bottom of the screen are the flowers in the
   butterfly doodle? This is to stop the petals going below the bottom
   of the screen. This is given is pixels */

    var cYIndentOfFlowerInButterflyDoodle = 40; //#BCON

    /* how far up from the bottom of the screen can the flowers be in the
   butterfly doodle? This is given is as a fraction of the 
   height of the page */

    var cYIndentFactorOfFlowerInButterflyDoodle = 0.1; //#BCON

    /* how round are the top-left and bottom-right corners of the petals of
   the flowers in the butterfly doodle? This changes the shape of the 
   petals from a rectangle to a curved shape. This is given is pixels */

    var cMinFlowerPetalTopLeftBotRightBorderRadiusInButterflyDoodle = 10; //#BCON

    var cMaxFlowerPetalTopLeftBotRightBorderRadiusInButterflyDoodle = 15; //#BCON

    /* how round are the top-right and bottom-left corners of the petals of
   the flowers in the butterfly doodle? This changes the shape of the 
   petals from a rectangle to a curved shape. This is given is pixels */

    var cMinFlowerPetalTopRightBotLeftBorderRadiusInButterflyDoodle = 70; //#BCON

    var cMaxFlowerPetalTopRightBotLeftBorderRadiusInButterflyDoodle = 90; //#BCON

    /* how round are the top-left and bottom-right corners of the heads of
   the flowers in the butterfly doodle? This changes the shape of the 
   heads from a rectangle to a curved shape. The 'head' is the middle
   part of the flower. This is given is pixels */

    var cMinFlowerHeadTopLeftBotRightBorderRadiusInButterflyDoodle = 10; //#BCON

    var cMaxFlowerHeadTopLeftBotRightBorderRadiusInButterflyDoodle = 100; //#BCON

    /* how round are the top-right and bottom-left corners of the heads of
   the flowers in the butterfly doodle? This changes the shape of the 
   heads from a rectangle to a curved shape. The 'head' is the middle
   part of the flower. This is given is pixels */

    var cMinFlowerHeadTopRightBotLeftBorderRadiusInButterflyDoodle = 2; //#BCON

    var cMaxFlowerHeadTopRightBotLeftBorderRadiusInButterflyDoodle = 5; //#BCON

    /* which is the stylesheet that sets the color and shape of the petals 
   and heads of the flowers in the butterfly doodle */

    var numberOfStylesheetOfPetalsAndHeadsOfFlowersInButterflyDoodle = 1; //#BCON

    /* which is the first rule in the stylesheet that sets the color
   and shape of the petals of the flowers in the butterfly doodle */

    var numberOfFirstRuleOfPetalsOfFlowersInButterflyDoodleInStylesheet = 60; //#BCON

    /* which is the first rule in the stylesheet that sets the color
   and shape of the heads of the flowers in the butterfly doodle */

    var numberOfFirstRuleOfHeadsOfFlowersInButterflyDoodleInStylesheet = 75; //#BCON

    _Session_prototype.setupButterflyDoodle = function (
      headelement /* The code below, for the 'vector butterflies' animation,
   has an 'MIT' license.
   The MIT license is at the top of this source code. 
   Copyright (c) 2021 by Jean Fan (https://codepen.io/JEFworks/pen/XzKJmv) */ /* The code below, for the 'abstract butterflies' animation,
   has an 'MIT' license.
   The MIT license is at the top of this source code. 
   Copyright (c) 2021 by Dmitri (https://codepen.io/xdknight/pen/yPORqb) */
    ) /* The code below, for the 'rose' animation, has an 'MIT' license.
   The MIT license is at the top of this source code. 
   Copyright (c) 2021 by Sven Balzer (https://codepen.io/svebal/pen/RVWJaj) */

    /* The code below, for the 'flowers' animation, has an 'MIT' license.
   The MIT license is at the top of this source code. 
   Copyright (c) 2021 by Irina (https://codepen.io/mayday1022/pen/ognxi) */

    {
      var butterflyDoodle;

      //            /* check filters for data URL */
      //            if (!gDoesBrowserSupportButterflyDoodle) {
      //                return;
      //            }

      this.ButterflyDoodle = butterflyDoodle = (function (tSession) {
        var cTips = [
          "The butterfly counts not months but moments, and has time enough",
          "If nothing ever changed, there'd be no butterflies",
          "The butterfly is a flying flower, The flower a tethered butterfly",
          "Flowers and butterflies drift in color, illuminating spring",
          "We are like butterflies who flutter for a day and think it is forever",
          "Butterflies are self propelled flowers",
          "And the case of butterflies so rich it looks As if all summer settled there and died",
          "The caterpillar does all the work but the butterfly gets all the publicity",
          "What the caterpillar calls the end of the world, the master calls a butterfly",
          "There is nothing in a caterpillar that tells you it's going to be a butterfly",
          "Love is like a butterfly: It goes where it pleases and it pleases wherever it goes",
          "And what's a butterfly? At best, He's but a caterpillar, at rest",
        ];

        var mCountBird;

        var mContainer1 = [];
        var mContainer2 = [];
        var mContainer3 = [];
        var mBox = [];

        var mXIndent = [];

        var mTimeoutIdForStartPart2;

        var mMyGraphics;
        var mMygraphicsGetPageSizeOnScreen;
        var mPageWidth;
        var mPageHeight;
        var mMygraphicsSetAnimation;
        var mMygraphicsSetTransition;
        var mMygraphicsSetTransform;
        var mMygraphicsSetAnimationDuration;
        var mMygraphicsSetlinearGradient;
        var mMygraphicsSetBorderRadius;
        var mGetStyleObjectOfRuleInStylesheet;
        var mMyChangeEvent;

        var cEasingFunctionsForMoves = [
          "linear",
          "ease",
          "ease-in",
          "ease-out",
          "ease-in-out",
          "cubic-bezier(0.47, 0, 0.745, 0.715)", //in sine
          "cubic-bezier(0.39, 0.575, 0.565, 1)", //out sine
          "cubic-bezier(0.445, 0.05, 0.55, 0.95)", //in out sine
          "cubic-bezier(0.55, 0.085, 0.68, 0.53)", // quad in
          "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // quad out
          "cubic-bezier(0.455, 0.03, 0.515, 0.955)", // qusd in out
        ];
        var cEasingFunctionsForMoveVertically =
          cEasingFunctionsForMoves.slice();

        //var mIsHoverDown;

        var mContainerForAbstractButterflies;
        var mMainElementForAbstractButterflies;

        var mStylesToColorButterflies = [];
        var mStyleOfBonesOfButterflies = [];

        var mFadeStylesToColorButterflies = [];
        var mFade2StylesToColorButterflies = [];

        var mRadialFadeStylesToColorButterflies = [];
        var mRadialFade2StylesToColorButterflies = [];

        var mHorizontalFadeStylesToColorButterflies = [];
        var mHorizontalFade2StylesToColorButterflies = [];

        var mRadialCornerFadeStylesToColorButterflies = [];
        var mRadialCornerFade2StylesToColorButterflies = [];

        var mFadeStyles3StopsToColorButterflies = [];
        var mFade2Styles3StopsToColorButterflies = [];
        var mFade3Styles3StopsToColorButterflies = [];

        var mFadeStyles4StopsToColorButterflies = [];
        var mFade2Styles4StopsToColorButterflies = [];
        var mFade3Styles4StopsToColorButterflies = [];
        var mFade4Styles4StopsToColorButterflies = [];

        var mRadialFadeStyles3StopsToColorButterflies = [];
        var mRadialFade2Styles3StopsToColorButterflies = [];
        var mRadialFade3Styles3StopsToColorButterflies = [];

        var mRadialFadeStyles4StopsToColorButterflies = [];
        var mRadialFade2Styles4StopsToColorButterflies = [];
        var mRadialFade3Styles4StopsToColorButterflies = [];
        var mRadialFade4Styles4StopsToColorButterflies = [];

        var mHorizontalFade3StopsStylesToColorButterflies = [];
        var mHorizontalFade3Stops2StylesToColorButterflies = [];
        var mHorizontalFade3Stops3StylesToColorButterflies = [];

        var mHorizontalFade4StopsStylesToColorButterflies = [];
        var mHorizontalFade4Stops2StylesToColorButterflies = [];
        var mHorizontalFade4Stops3StylesToColorButterflies = [];
        var mHorizontalFade4Stops4StylesToColorButterflies = [];

        var mRadialCorner3StopsFadeStylesToColorButterflies = [];
        var mRadialCorner3StopsFade2StylesToColorButterflies = [];
        var mRadialCorner3StopsFade3StylesToColorButterflies = [];

        var mRadialCorner4StopsFadeStylesToColorButterflies = [];
        var mRadialCorner4StopsFade2StylesToColorButterflies = [];
        var mRadialCorner4StopsFade3StylesToColorButterflies = [];
        var mRadialCorner4StopsFade4StylesToColorButterflies = [];

        var mFadeStyles5StopsToColorButterflies = [];
        var mFade2Styles5StopsToColorButterflies = [];
        var mFade3Styles5StopsToColorButterflies = [];
        var mFade4Styles5StopsToColorButterflies = [];
        var mFade5Styles5StopsToColorButterflies = [];

        var mRadialFadeStyles5StopsToColorButterflies = [];
        var mRadialFade2Styles5StopsToColorButterflies = [];
        var mRadialFade3Styles5StopsToColorButterflies = [];
        var mRadialFade4Styles5StopsToColorButterflies = [];
        var mRadialFade5Styles5StopsToColorButterflies = [];

        var mHorizontalFade5StopsStylesToColorButterflies = [];
        var mHorizontalFade5Stops2StylesToColorButterflies = [];
        var mHorizontalFade5Stops3StylesToColorButterflies = [];
        var mHorizontalFade5Stops4StylesToColorButterflies = [];
        var mHorizontalFade5Stops5StylesToColorButterflies = [];

        var mRadialCorner5StopsFadeStylesToColorButterflies = [];
        var mRadialCorner5StopsFade2StylesToColorButterflies = [];
        var mRadialCorner5StopsFade3StylesToColorButterflies = [];
        var mRadialCorner5StopsFade4StylesToColorButterflies = [];
        var mRadialCorner5StopsFade5StylesToColorButterflies = [];

        var svgDefs;

        var mRandomColorNotLightAsRGB = myGraphics.randomColorNotLightAsRGB;

        var mRandomLightColorNotTooLightAsRGB =
          myGraphics.randomLightColorNotTooLightAsRGB;

        var mButterflyStylesheet;
        var mHeadElement;

        var cCountRosePetals = cCountPetalsOfRoseInButterflyDoodle;

        var mDoc = document;

        var mRoseOuterContainerStyle;
        var mRosePetalElements;
        var mRoseStemElement;
        var mRoseLeafElement;
        var mRoseThornElements = [];

        var mGreenColors;

        var mRunNumber = 0;

        var mStageForFlowers;
        var mInnerStageForFlowers;
        var mAdjustedWidthOfRose;

        var mGetRandValueGivenPercentChances;

        var mValuesAndChancesForCountWingColorStops = [
          new ValueAndPercentChance(
            1,
            cPercentChanceCountWingColorStopsIsOneForAbstractButterfliesInDoodle
          ),
          new ValueAndPercentChance(
            2,
            cPercentChanceCountWingColorStopsIsTwoForAbstractButterfliesInDoodle
          ),
          new ValueAndPercentChance(
            3,
            cPercentChanceCountWingColorStopsIsThreeForAbstractButterfliesInDoodle
          ),
        ];

        var mColorsOfBonesOfVectorButterflies;

        var mIsHidden = false;

        function initialise(
          getElemById,
          mygraphics,
          mygraphicsGetPageSizeOnScreen,
          mygraphicsSetAnimation,
          mygraphicsSetTransition,
          mygraphicsSetTransform,
          mygraphicsSetAnimationDuration,
          mygraphicsSetlinearGradient,
          mygraphicsSetBorderRadius,
          mygetStyleObjectOfRuleInStylesheet,
          changeEvent,
          headElement,
          greenColors,
          getrandValueGivenPercentChances,
          cColorsOfBonesofVectorButterflies
        ) {
          mMyGraphics = mygraphics;

          mMygraphicsGetPageSizeOnScreen = mygraphicsGetPageSizeOnScreen;

          mMygraphicsSetAnimation = mygraphicsSetAnimation;
          mMygraphicsSetTransition = mygraphicsSetTransition;
          mMygraphicsSetTransform = mygraphicsSetTransform;
          mMygraphicsSetAnimationDuration = mygraphicsSetAnimationDuration;
          mMygraphicsSetlinearGradient = mygraphicsSetlinearGradient;
          mMygraphicsSetBorderRadius = mygraphicsSetBorderRadius;
          mGetStyleObjectOfRuleInStylesheet =
            mygetStyleObjectOfRuleInStylesheet;

          mMyChangeEvent = changeEvent;

          cEasingFunctionsForMoves.mySetupGetRandomElementWithNoRepeats();

          cEasingFunctionsForMoveVertically.mySetupGetRandomElementWithNoRepeats();

          mContainerForAbstractButterflies = getElemById("bfyaContainer");

          mHeadElement = headElement;

          mGetRandValueGivenPercentChances = getrandValueGivenPercentChances;

          svgDefs = getElemById("bfyvSVG");

          var moth = svgDefs.firstChild.firstChild;

          var firstChildOfMoth = moth.firstChild;

          var styleOfSvgDefs = firstChildOfMoth.style;

          mStylesToColorButterflies[1] = styleOfSvgDefs;

          var bones = firstChildOfMoth.nextSibling.nextSibling.nextSibling;

          mStyleOfBonesOfButterflies[1] = bones.style;

          var gradient = moth.nextSibling;

          var colorStop1 = gradient.firstChild;

          var fadeStyleOfSvgDefs = colorStop1.style;

          var colorStop2 = colorStop1.nextSibling;

          var fade2StyleOfSvgDefs = colorStop2.style;

          mFadeStylesToColorButterflies[1] = fadeStyleOfSvgDefs;
          mFade2StylesToColorButterflies[1] = fade2StyleOfSvgDefs;

          var radialGradient = gradient.nextSibling;

          var radialColorStop1 = radialGradient.firstChild;
          var radialFadeStyleOfSvgDefs = radialColorStop1.style;
          var radialColorStop2 = radialColorStop1.nextSibling;
          var radialFade2StyleOfSvgDefs = radialColorStop2.style;

          mRadialFadeStylesToColorButterflies[1] = radialFadeStyleOfSvgDefs;
          mRadialFade2StylesToColorButterflies[1] = radialFade2StyleOfSvgDefs;

          var horizontalGradient = radialGradient.nextSibling;
          var horizontalColorStop1 = horizontalGradient.firstChild;
          var horizontalFadeStyleOfSvgDefs = horizontalColorStop1.style;
          var horizontalColorStop2 = horizontalColorStop1.nextSibling;
          var horizontalFade2StyleOfSvgDefs = horizontalColorStop2.style;

          mHorizontalFadeStylesToColorButterflies[1] =
            horizontalFadeStyleOfSvgDefs;
          mHorizontalFade2StylesToColorButterflies[1] =
            horizontalFade2StyleOfSvgDefs;
          var radialCornerGradient = horizontalGradient.nextSibling;
          var radialCornerColorStop1 = radialCornerGradient.firstChild;
          var radialCornerFadeStyleOfSvgDefs = radialCornerColorStop1.style;
          var radialCornerColorStop2 = radialCornerColorStop1.nextSibling;
          var radialCornerFade2StyleOfSvgDefs = radialCornerColorStop2.style;

          mRadialCornerFadeStylesToColorButterflies[1] =
            radialCornerFadeStyleOfSvgDefs;
          mRadialCornerFade2StylesToColorButterflies[1] =
            radialCornerFade2StyleOfSvgDefs;

          var gradient3Stops = radialCornerGradient.nextSibling;

          var colorStop3Stops1 = gradient3Stops.firstChild;

          var fadeStyleOfSvgDefs3Stops = colorStop3Stops1.style;

          var colorStop3Stops2 = colorStop3Stops1.nextSibling;

          var fade2StyleOfSvgDefs3Stops = colorStop3Stops2.style;

          var colorStop3Stops3 = colorStop3Stops2.nextSibling;

          var fade3StyleOfSvgDefs3Stops = colorStop3Stops3.style;

          mFadeStyles3StopsToColorButterflies[1] = fadeStyleOfSvgDefs3Stops;
          mFade2Styles3StopsToColorButterflies[1] = fade2StyleOfSvgDefs3Stops;
          mFade3Styles3StopsToColorButterflies[1] = fade3StyleOfSvgDefs3Stops;

          var gradient4Stops = gradient3Stops.nextSibling;

          var colorStop4Stops1 = gradient4Stops.firstChild;

          var fadeStyleOfSvgDefs4Stops = colorStop4Stops1.style;

          var colorStop4Stops2 = colorStop4Stops1.nextSibling;

          var fade2StyleOfSvgDefs4Stops = colorStop4Stops2.style;

          var colorStop4Stops3 = colorStop4Stops2.nextSibling;

          var fade3StyleOfSvgDefs4Stops = colorStop4Stops3.style;

          var colorStop4Stops4 = colorStop4Stops3.nextSibling;

          var fade4StyleOfSvgDefs4Stops = colorStop4Stops4.style;

          mFadeStyles4StopsToColorButterflies[1] = fadeStyleOfSvgDefs4Stops;
          mFade2Styles4StopsToColorButterflies[1] = fade2StyleOfSvgDefs4Stops;
          mFade3Styles4StopsToColorButterflies[1] = fade3StyleOfSvgDefs4Stops;
          mFade4Styles4StopsToColorButterflies[1] = fade4StyleOfSvgDefs4Stops;

          var radialGradient3Stops = gradient4Stops.nextSibling;

          var radialColor3StopsStop1 = radialGradient3Stops.firstChild;
          var radialFadeStyle3StopsOfSvgDefs = radialColor3StopsStop1.style;
          var radialColor3StopsStop2 = radialColor3StopsStop1.nextSibling;
          var radialFade2Style3StopsOfSvgDefs = radialColor3StopsStop2.style;
          var radialColor3StopsStop3 = radialColor3StopsStop2.nextSibling;
          var radialFade3Style3StopsOfSvgDefs = radialColor3StopsStop3.style;

          mRadialFadeStyles3StopsToColorButterflies[1] =
            radialFadeStyle3StopsOfSvgDefs;
          mRadialFade2Styles3StopsToColorButterflies[1] =
            radialFade2Style3StopsOfSvgDefs;
          mRadialFade3Styles3StopsToColorButterflies[1] =
            radialFade3Style3StopsOfSvgDefs;

          var radialGradient4Stops = radialGradient3Stops.nextSibling;

          var radialColor4StopsStop1 = radialGradient4Stops.firstChild;
          var radialFadeStyle4StopsOfSvgDefs = radialColor4StopsStop1.style;
          var radialColor4StopsStop2 = radialColor4StopsStop1.nextSibling;
          var radialFade2Style4StopsOfSvgDefs = radialColor4StopsStop2.style;
          var radialColor4StopsStop3 = radialColor4StopsStop2.nextSibling;
          var radialFade3Style4StopsOfSvgDefs = radialColor4StopsStop3.style;
          var radialColor4StopsStop4 = radialColor4StopsStop3.nextSibling;
          var radialFade4Style4StopsOfSvgDefs = radialColor4StopsStop4.style;

          mRadialFadeStyles4StopsToColorButterflies[1] =
            radialFadeStyle4StopsOfSvgDefs;
          mRadialFade2Styles4StopsToColorButterflies[1] =
            radialFade2Style4StopsOfSvgDefs;
          mRadialFade3Styles4StopsToColorButterflies[1] =
            radialFade3Style4StopsOfSvgDefs;
          mRadialFade4Styles4StopsToColorButterflies[1] =
            radialFade4Style4StopsOfSvgDefs;

          var horizontalGradient3Stops = radialGradient4Stops.nextSibling;
          var horizontalColor3StopsStop1 = horizontalGradient3Stops.firstChild;
          var horizontalFade3StopsStyleOfSvgDefs =
            horizontalColor3StopsStop1.style;
          var horizontalColor3StopsStop2 =
            horizontalColor3StopsStop1.nextSibling;
          var horizontalFade3Stops2StyleOfSvgDefs =
            horizontalColor3StopsStop2.style;
          var horizontalColor3StopsStop3 =
            horizontalColor3StopsStop2.nextSibling;
          var horizontalFade3Stops3StyleOfSvgDefs =
            horizontalColor3StopsStop3.style;

          mHorizontalFade3StopsStylesToColorButterflies[1] =
            horizontalFade3StopsStyleOfSvgDefs;
          mHorizontalFade3Stops2StylesToColorButterflies[1] =
            horizontalFade3Stops2StyleOfSvgDefs;
          mHorizontalFade3Stops3StylesToColorButterflies[1] =
            horizontalFade3Stops3StyleOfSvgDefs;

          var horizontalGradient4Stops = horizontalGradient3Stops.nextSibling;
          var horizontalColor4StopsStop1 = horizontalGradient4Stops.firstChild;
          var horizontalFade4StopsStyleOfSvgDefs =
            horizontalColor4StopsStop1.style;
          var horizontalColor4StopsStop2 =
            horizontalColor4StopsStop1.nextSibling;
          var horizontalFade4Stops2StyleOfSvgDefs =
            horizontalColor4StopsStop2.style;
          var horizontalColor4StopsStop3 =
            horizontalColor4StopsStop2.nextSibling;
          var horizontalFade4Stops3StyleOfSvgDefs =
            horizontalColor4StopsStop3.style;
          var horizontalColor4StopsStop4 =
            horizontalColor4StopsStop3.nextSibling;
          var horizontalFade4Stops4StyleOfSvgDefs =
            horizontalColor4StopsStop4.style;

          mHorizontalFade4StopsStylesToColorButterflies[1] =
            horizontalFade4StopsStyleOfSvgDefs;
          mHorizontalFade4Stops2StylesToColorButterflies[1] =
            horizontalFade4Stops2StyleOfSvgDefs;
          mHorizontalFade4Stops3StylesToColorButterflies[1] =
            horizontalFade4Stops3StyleOfSvgDefs;
          mHorizontalFade4Stops4StylesToColorButterflies[1] =
            horizontalFade4Stops4StyleOfSvgDefs;

          var radialCornerGradient3Stops = horizontalGradient4Stops.nextSibling;
          var radialCornerColor3StopsStop1 =
            radialCornerGradient3Stops.firstChild;
          var radialCorner3StopsFadeStyleOfSvgDefs =
            radialCornerColor3StopsStop1.style;
          var radialCornerColor3StopsStop2 =
            radialCornerColor3StopsStop1.nextSibling;
          var radialCorner3StopsFade2StyleOfSvgDefs =
            radialCornerColor3StopsStop2.style;
          var radialCornerColor3StopsStop3 =
            radialCornerColor3StopsStop2.nextSibling;
          var radialCorner3StopsFade3StyleOfSvgDefs =
            radialCornerColor3StopsStop3.style;

          mRadialCorner3StopsFadeStylesToColorButterflies[1] =
            radialCorner3StopsFadeStyleOfSvgDefs;
          mRadialCorner3StopsFade2StylesToColorButterflies[1] =
            radialCorner3StopsFade2StyleOfSvgDefs;
          mRadialCorner3StopsFade3StylesToColorButterflies[1] =
            radialCorner3StopsFade3StyleOfSvgDefs;

          var radialCornerGradient4Stops =
            radialCornerGradient3Stops.nextSibling;
          var radialCornerColor4StopsStop1 =
            radialCornerGradient4Stops.firstChild;
          var radialCorner4StopsFadeStyleOfSvgDefs =
            radialCornerColor4StopsStop1.style;
          var radialCornerColor4StopsStop2 =
            radialCornerColor4StopsStop1.nextSibling;
          var radialCorner4StopsFade2StyleOfSvgDefs =
            radialCornerColor4StopsStop2.style;
          var radialCornerColor4StopsStop3 =
            radialCornerColor4StopsStop2.nextSibling;
          var radialCorner4StopsFade3StyleOfSvgDefs =
            radialCornerColor4StopsStop3.style;
          var radialCornerColor4StopsStop4 =
            radialCornerColor4StopsStop3.nextSibling;
          var radialCorner4StopsFade4StyleOfSvgDefs =
            radialCornerColor4StopsStop4.style;

          mRadialCorner4StopsFadeStylesToColorButterflies[1] =
            radialCorner4StopsFadeStyleOfSvgDefs;
          mRadialCorner4StopsFade2StylesToColorButterflies[1] =
            radialCorner4StopsFade2StyleOfSvgDefs;
          mRadialCorner4StopsFade3StylesToColorButterflies[1] =
            radialCorner4StopsFade3StyleOfSvgDefs;
          mRadialCorner4StopsFade4StylesToColorButterflies[1] =
            radialCorner4StopsFade4StyleOfSvgDefs;

          var gradient5Stops = radialCornerGradient4Stops.nextSibling;

          var colorStop5Stops1 = gradient5Stops.firstChild;

          var fadeStyleOfSvgDefs5Stops = colorStop5Stops1.style;

          var colorStop5Stops2 = colorStop5Stops1.nextSibling;

          var fade2StyleOfSvgDefs5Stops = colorStop5Stops2.style;

          var colorStop5Stops3 = colorStop5Stops2.nextSibling;

          var fade3StyleOfSvgDefs5Stops = colorStop5Stops3.style;

          var colorStop5Stops4 = colorStop5Stops3.nextSibling;

          var fade4StyleOfSvgDefs5Stops = colorStop5Stops4.style;

          var colorStop5Stops5 = colorStop5Stops4.nextSibling;

          var fade5StyleOfSvgDefs5Stops = colorStop5Stops5.style;

          mFadeStyles5StopsToColorButterflies[1] = fadeStyleOfSvgDefs5Stops;
          mFade2Styles5StopsToColorButterflies[1] = fade2StyleOfSvgDefs5Stops;
          mFade3Styles5StopsToColorButterflies[1] = fade3StyleOfSvgDefs5Stops;
          mFade4Styles5StopsToColorButterflies[1] = fade4StyleOfSvgDefs5Stops;
          mFade5Styles5StopsToColorButterflies[1] = fade5StyleOfSvgDefs5Stops;

          var radialGradient5Stops = gradient5Stops.nextSibling;

          var radialColor5StopsStop1 = radialGradient5Stops.firstChild;
          var radialFadeStyle5StopsOfSvgDefs = radialColor5StopsStop1.style;
          var radialColor5StopsStop2 = radialColor5StopsStop1.nextSibling;
          var radialFade2Style5StopsOfSvgDefs = radialColor5StopsStop2.style;
          var radialColor5StopsStop3 = radialColor5StopsStop2.nextSibling;
          var radialFade3Style5StopsOfSvgDefs = radialColor5StopsStop3.style;
          var radialColor5StopsStop4 = radialColor5StopsStop3.nextSibling;
          var radialFade4Style5StopsOfSvgDefs = radialColor5StopsStop4.style;
          var radialColor5StopsStop5 = radialColor5StopsStop4.nextSibling;
          var radialFade5Style5StopsOfSvgDefs = radialColor5StopsStop5.style;

          mRadialFadeStyles5StopsToColorButterflies[1] =
            radialFadeStyle5StopsOfSvgDefs;
          mRadialFade2Styles5StopsToColorButterflies[1] =
            radialFade2Style5StopsOfSvgDefs;
          mRadialFade3Styles5StopsToColorButterflies[1] =
            radialFade3Style5StopsOfSvgDefs;
          mRadialFade4Styles5StopsToColorButterflies[1] =
            radialFade4Style5StopsOfSvgDefs;
          mRadialFade5Styles5StopsToColorButterflies[1] =
            radialFade5Style5StopsOfSvgDefs;

          var horizontalGradient5Stops = radialGradient5Stops.nextSibling;
          var horizontalColor5StopsStop1 = horizontalGradient5Stops.firstChild;
          var horizontalFade5StopsStyleOfSvgDefs =
            horizontalColor5StopsStop1.style;
          var horizontalColor5StopsStop2 =
            horizontalColor5StopsStop1.nextSibling;
          var horizontalFade5Stops2StyleOfSvgDefs =
            horizontalColor5StopsStop2.style;
          var horizontalColor5StopsStop3 =
            horizontalColor5StopsStop2.nextSibling;
          var horizontalFade5Stops3StyleOfSvgDefs =
            horizontalColor5StopsStop3.style;
          var horizontalColor5StopsStop4 =
            horizontalColor5StopsStop3.nextSibling;
          var horizontalFade5Stops4StyleOfSvgDefs =
            horizontalColor5StopsStop4.style;
          var horizontalColor5StopsStop5 =
            horizontalColor5StopsStop4.nextSibling;
          var horizontalFade5Stops5StyleOfSvgDefs =
            horizontalColor5StopsStop5.style;

          mHorizontalFade5StopsStylesToColorButterflies[1] =
            horizontalFade5StopsStyleOfSvgDefs;
          mHorizontalFade5Stops2StylesToColorButterflies[1] =
            horizontalFade5Stops2StyleOfSvgDefs;
          mHorizontalFade5Stops3StylesToColorButterflies[1] =
            horizontalFade5Stops3StyleOfSvgDefs;
          mHorizontalFade5Stops4StylesToColorButterflies[1] =
            horizontalFade5Stops4StyleOfSvgDefs;
          mHorizontalFade5Stops5StylesToColorButterflies[1] =
            horizontalFade5Stops5StyleOfSvgDefs;

          var radialCornerGradient5Stops = horizontalGradient5Stops.nextSibling;
          var radialCornerColor5StopsStop1 =
            radialCornerGradient5Stops.firstChild;
          var radialCorner5StopsFadeStyleOfSvgDefs =
            radialCornerColor5StopsStop1.style;
          var radialCornerColor5StopsStop2 =
            radialCornerColor5StopsStop1.nextSibling;
          var radialCorner5StopsFade2StyleOfSvgDefs =
            radialCornerColor5StopsStop2.style;
          var radialCornerColor5StopsStop3 =
            radialCornerColor5StopsStop2.nextSibling;
          var radialCorner5StopsFade3StyleOfSvgDefs =
            radialCornerColor5StopsStop3.style;
          var radialCornerColor5StopsStop4 =
            radialCornerColor5StopsStop3.nextSibling;
          var radialCorner5StopsFade4StyleOfSvgDefs =
            radialCornerColor5StopsStop4.style;
          var radialCornerColor5StopsStop5 =
            radialCornerColor5StopsStop4.nextSibling;
          var radialCorner5StopsFade5StyleOfSvgDefs =
            radialCornerColor5StopsStop5.style;

          mRadialCorner5StopsFadeStylesToColorButterflies[1] =
            radialCorner5StopsFadeStyleOfSvgDefs;
          mRadialCorner5StopsFade2StylesToColorButterflies[1] =
            radialCorner5StopsFade2StyleOfSvgDefs;
          mRadialCorner5StopsFade3StylesToColorButterflies[1] =
            radialCorner5StopsFade3StyleOfSvgDefs;
          mRadialCorner5StopsFade4StylesToColorButterflies[1] =
            radialCorner5StopsFade4StyleOfSvgDefs;
          mRadialCorner5StopsFade5StylesToColorButterflies[1] =
            radialCorner5StopsFade5StyleOfSvgDefs;

          mColorsOfBonesOfVectorButterflies = cColorsOfBonesofVectorButterflies;

          var roseOuterContainer = getElemById("rseaOutercoNtaIner");
          var roseOuterContainerStyle = roseOuterContainer.style;
          mRoseOuterContainerStyle = roseOuterContainerStyle;

          var rosePetalElements = [];
          var pi;
          var rosePetalId;

          for (pi = 1; pi <= cCountRosePetals; pi++) {
            rosePetalId = "rseaRosePetal" + pi;
            rosePetalElements[pi] = getElemById(rosePetalId);
          }

          mRosePetalElements = rosePetalElements;

          mRoseStemElement = getElemById("rseaRose-stem");

          mRoseLeafElement = getElemById("rseaRose-leaf");

          var countThorns = countThornsOnRoseInButterflyDoodle;

          var ti;
          var thornElement;

          var thornParentElement = getElemById("rseaThorns");
          var childrenOfThornParent = thornParentElement.childNodes;

          for (ti = 0; ti < countThorns; ti++) {
            thornElement = childrenOfThornParent[ti];
            mRoseThornElements[ti + 1] = thornElement;
          }

          mGreenColors = greenColors;

          mStageForFlowers = getElemById("flwraStage");
        }

        function start() {
          function getRandomNumberOfBird() {
            var maxNumberOfBird = cMaxNumberOfButterfliesForButterflyDoodle;

            var minNumberOfBird = cMinNumberOfButterfliesForButterflyDoodle;

            var intervalForNumberOfBird = maxNumberOfBird - minNumberOfBird;

            var valueInIntervalForNumberOfBird = Math.round(
              Math.random() * intervalForNumberOfBird
            );

            var numberOfBird = minNumberOfBird + valueInIntervalForNumberOfBird;

            return numberOfBird;
          }

          function createContainers(countBird) {
            var container1;
            var container2;
            var container3;
            var box;
            var i;

            for (i = 0; i < countBird; i++) {
              container1 = doc.createElement("div");
              container2 = doc.createElement("div");
              container3 = doc.createElement("div");
              box = doc.createElement("div");

              mContainer1[i] = container1;
              mContainer2[i] = container2;
              mContainer3[i] = container3;
              mBox[i] = box;

              container2.className = "bflydoContainer2";
              container3.className = "bflydoContainer3";
              box.className = "bflydoBox";

              container1.appendChild(box);
              container2.appendChild(container1);
              container3.appendChild(container2);

              doc.body.appendChild(container3);
            }
          }

          var doc = mDoc;

          var countBird = getRandomNumberOfBird();

          mCountBird = countBird;

          createContainers(countBird, mMyChangeEvent);

          mButterflyStylesheet = null;

          mMainElementForAbstractButterflies = null;

          mTimeoutIdForStartPart2 = setTimeout(
            startPart2,
            cTimeToLetBrowserRefreshPageBeforeCSSTransition
          );
        } // end of function start()

        function startPart2() {
          var cssObj = { css: "" };

          var headElement = mHeadElement;

          var doc = mDoc;

          var pageSizeDetails =
            mMygraphicsGetPageSizeOnScreen.call(mMyGraphics);

          mPageWidth = pageSizeDetails.width;
          mPageHeight = pageSizeDetails.height;

          function setTip(box) {
            var tip = cTips.myGetRandomElemnt();

            box.title = tip;
          }

          function getScaleFactor() {
            var maxScaleFactor = cMaxScaleFactorForButterflyDoodle;

            var minScaleFactor = cMinScaleFactorForButterflyDoodle;

            var intervalForScaleFactor = maxScaleFactor - minScaleFactor;

            var valueInIntervalForScaleFactor =
              Math.random() * intervalForScaleFactor;

            var scaleFactor = minScaleFactor + valueInIntervalForScaleFactor;

            return scaleFactor;
          }

          function getTransitionDuration() {
            var maxTransitionDuration =
              cMaxTransitionDurationForButterflyDoodle;

            var minTransitionDuration =
              cMinTransitionDurationForButterflyDoodle;

            var intervalForTransitionDuration =
              maxTransitionDuration - minTransitionDuration;

            var valueInIntervalForTransitionDuration =
              Math.random() * intervalForTransitionDuration;

            var transitionDuration =
              minTransitionDuration + valueInIntervalForTransitionDuration;

            return transitionDuration;
          }

          function setStartingPositionAndDirectionFacing(
            isHoverDown,
            container3,
            isFaceRight,
            box,
            mygraphics,
            mygraphicsSetTransform,
            pagewidth,
            adjustforScale,
            birdIndex,
            container2
          ) {
            var container3Style = container3.style;

            if (isHoverDown) {
              container3Style.top =
                cPositionOfButterflyInButterflyDoodleJustOffScreenAtTopOrBottom;
            } else {
              container3Style.bottom =
                cPositionOfButterflyInButterflyDoodleJustOffScreenAtTopOrBottom;
            }

            if (isFaceRight) {
              mygraphicsSetTransform.call(
                mygraphics,
                box.style,
                "rotate3d(0,1,0,180deg)"
              );
            }

            var xIndent = Math.round(
              Math.random() *
                pagewidth *
                adjustforScale *
                cFractionOfPageWidthButterflyStartsFromRightInButterflyDoodle
            );

            var xIndentWithPx = xIndent + "px";

            if (isHoverDown) {
              container2.style.right = xIndentWithPx;
            }

            mXIndent[birdIndex] = xIndent;
          }

          function getStyleToColorButterfly(butterflyNumber) {
            var style;
            var styleOfBones;

            var fadeStyle;
            var fade2Style;

            var radialFadeStyle;
            var radialFade2Style;

            var radialCornerFadeStyle;
            var radialCornerFade2Style;

            var fadeStyle3Stops;
            var fade2Style3Stops;
            var fade3Style3Stops;

            var fadeStyle4Stops;
            var fade2Style4Stops;
            var fade3Style4Stops;
            var fade4Style4Stops;

            var radialFadeStyle3Stops;
            var radialFade2Style3Stops;
            var radialFade3Style3Stops;

            var radialFadeStyle4Stops;
            var radialFade2Style4Stops;
            var radialFade3Style4Stops;
            var radialFade4Style4Stops;

            var horizontalFadeStyle;
            var horizontalFade2Style;

            var radialCorner3StopsFadeStyle;
            var radialCorner3StopsFade2Style;
            var radialCorner3StopsFade3Style;

            var radialCorner4StopsFadeStyle;
            var radialCorner4StopsFade2Style;
            var radialCorner4StopsFade3Style;
            var radialCorner4StopsFade4Style;

            var fadeStyle5Stops;
            var fade2Style5Stops;
            var fade3Style5Stops;
            var fade4Style5Stops;
            var fade5Style5Stops;

            var radialFadeStyle5Stops;
            var radialFade2Style5Stops;
            var radialFade3Style5Stops;
            var radialFade4Style5Stops;
            var radialFade5Style5Stops;

            var horizontalFade3StopsStyle;
            var horizontalFade3Stops2Style;
            var horizontalFade3Stops3Style;

            var horizontalFade4StopsStyle;
            var horizontalFade4Stops2Style;
            var horizontalFade4Stops3Style;
            var horizontalFade4Stops4Style;

            var horizontalFade5StopsStyle;
            var horizontalFade5Stops2Style;
            var horizontalFade5Stops3Style;
            var horizontalFade5Stops4Style;
            var horizontalFade5Stops5Style;

            var radialCorner5StopsFadeStyle;
            var radialCorner5StopsFade2Style;
            var radialCorner5StopsFade3Style;
            var radialCorner5StopsFade4Style;
            var radialCorner5StopsFade5Style;

            style = mStylesToColorButterflies[butterflyNumber];

            if (style) {
              styleOfBones = mStyleOfBonesOfButterflies[butterflyNumber];
            }

            if (style && isFade) {
              fadeStyle = mFadeStylesToColorButterflies[butterflyNumber];
              fade2Style = mFade2StylesToColorButterflies[butterflyNumber];

              radialFadeStyle =
                mRadialFadeStylesToColorButterflies[butterflyNumber];
              radialFade2Style =
                mRadialFade2StylesToColorButterflies[butterflyNumber];

              horizontalFadeStyle =
                mHorizontalFadeStylesToColorButterflies[butterflyNumber];
              horizontalFade2Style =
                mHorizontalFade2StylesToColorButterflies[butterflyNumber];
              radialCornerFadeStyle =
                mRadialCornerFadeStylesToColorButterflies[butterflyNumber];
              radialCornerFade2Style =
                mRadialCornerFade2StylesToColorButterflies[butterflyNumber];

              fadeStyle3Stops =
                mFadeStyles3StopsToColorButterflies[butterflyNumber];
              fade2Style3Stops =
                mFade2Styles3StopsToColorButterflies[butterflyNumber];
              fade3Style3Stops =
                mFade3Styles3StopsToColorButterflies[butterflyNumber];

              fadeStyle4Stops =
                mFadeStyles4StopsToColorButterflies[butterflyNumber];
              fade2Style4Stops =
                mFade2Styles4StopsToColorButterflies[butterflyNumber];
              fade3Style4Stops =
                mFade3Styles4StopsToColorButterflies[butterflyNumber];
              fade4Style4Stops =
                mFade4Styles4StopsToColorButterflies[butterflyNumber];

              radialFadeStyle3Stops =
                mRadialFadeStyles3StopsToColorButterflies[butterflyNumber];
              radialFade2Style3Stops =
                mRadialFade2Styles3StopsToColorButterflies[butterflyNumber];
              radialFade3Style3Stops =
                mRadialFade3Styles3StopsToColorButterflies[butterflyNumber];

              radialFadeStyle4Stops =
                mRadialFadeStyles4StopsToColorButterflies[butterflyNumber];
              radialFade2Style4Stops =
                mRadialFade2Styles4StopsToColorButterflies[butterflyNumber];
              radialFade3Style4Stops =
                mRadialFade3Styles4StopsToColorButterflies[butterflyNumber];
              radialFade4Style4Stops =
                mRadialFade4Styles4StopsToColorButterflies[butterflyNumber];

              horizontalFade3StopsStyle =
                mHorizontalFade3StopsStylesToColorButterflies[butterflyNumber];
              horizontalFade3Stops2Style =
                mHorizontalFade3Stops2StylesToColorButterflies[butterflyNumber];
              horizontalFade3Stops3Style =
                mHorizontalFade3Stops3StylesToColorButterflies[butterflyNumber];

              horizontalFade4StopsStyle =
                mHorizontalFade4StopsStylesToColorButterflies[butterflyNumber];
              horizontalFade4Stops2Style =
                mHorizontalFade4Stops2StylesToColorButterflies[butterflyNumber];
              horizontalFade4Stops3Style =
                mHorizontalFade4Stops3StylesToColorButterflies[butterflyNumber];
              horizontalFade4Stops4Style =
                mHorizontalFade4Stops4StylesToColorButterflies[butterflyNumber];

              radialCorner3StopsFadeStyle =
                mRadialCorner3StopsFadeStylesToColorButterflies[
                  butterflyNumber
                ];
              radialCorner3StopsFade2Style =
                mRadialCorner3StopsFade2StylesToColorButterflies[
                  butterflyNumber
                ];
              radialCorner3StopsFade3Style =
                mRadialCorner3StopsFade3StylesToColorButterflies[
                  butterflyNumber
                ];

              radialCorner4StopsFadeStyle =
                mRadialCorner4StopsFadeStylesToColorButterflies[
                  butterflyNumber
                ];
              radialCorner4StopsFade2Style =
                mRadialCorner4StopsFade2StylesToColorButterflies[
                  butterflyNumber
                ];
              radialCorner4StopsFade3Style =
                mRadialCorner4StopsFade3StylesToColorButterflies[
                  butterflyNumber
                ];
              radialCorner4StopsFade4Style =
                mRadialCorner4StopsFade4StylesToColorButterflies[
                  butterflyNumber
                ];

              fadeStyle5Stops =
                mFadeStyles5StopsToColorButterflies[butterflyNumber];
              fade2Style5Stops =
                mFade2Styles5StopsToColorButterflies[butterflyNumber];
              fade3Style5Stops =
                mFade3Styles5StopsToColorButterflies[butterflyNumber];
              fade4Style5Stops =
                mFade4Styles5StopsToColorButterflies[butterflyNumber];
              fade5Style5Stops =
                mFade5Styles5StopsToColorButterflies[butterflyNumber];

              radialFadeStyle5Stops =
                mRadialFadeStyles5StopsToColorButterflies[butterflyNumber];
              radialFade2Style5Stops =
                mRadialFade2Styles5StopsToColorButterflies[butterflyNumber];
              radialFade3Style5Stops =
                mRadialFade3Styles5StopsToColorButterflies[butterflyNumber];
              radialFade4Style5Stops =
                mRadialFade4Styles5StopsToColorButterflies[butterflyNumber];
              radialFade5Style5Stops =
                mRadialFade5Styles5StopsToColorButterflies[butterflyNumber];

              horizontalFade5StopsStyle =
                mHorizontalFade5StopsStylesToColorButterflies[butterflyNumber];
              horizontalFade5Stops2Style =
                mHorizontalFade5Stops2StylesToColorButterflies[butterflyNumber];
              horizontalFade5Stops3Style =
                mHorizontalFade5Stops3StylesToColorButterflies[butterflyNumber];
              horizontalFade5Stops4Style =
                mHorizontalFade5Stops4StylesToColorButterflies[butterflyNumber];
              horizontalFade5Stops5Style =
                mHorizontalFade5Stops5StylesToColorButterflies[butterflyNumber];

              radialCorner5StopsFadeStyle =
                mRadialCorner5StopsFadeStylesToColorButterflies[
                  butterflyNumber
                ];
              radialCorner5StopsFade2Style =
                mRadialCorner5StopsFade2StylesToColorButterflies[
                  butterflyNumber
                ];
              radialCorner5StopsFade3Style =
                mRadialCorner5StopsFade3StylesToColorButterflies[
                  butterflyNumber
                ];
              radialCorner5StopsFade4Style =
                mRadialCorner5StopsFade4StylesToColorButterflies[
                  butterflyNumber
                ];
              radialCorner5StopsFade5Style =
                mRadialCorner5StopsFade5StylesToColorButterflies[
                  butterflyNumber
                ];
            } // if style and isFade

            if (!style) {
              var cloneOfSvgDefs = svgDefs.cloneNode(true);
              var moth = cloneOfSvgDefs.firstChild.firstChild;
              moth.id = "bfyvShape-moth" + butterflyNumber;

              var gradient = moth.nextSibling;
              var radialGradient = gradient.nextSibling;
              var horizontalGradient = radialGradient.nextSibling;
              var radialCornerGradient = horizontalGradient.nextSibling;
              var gradient3Stops = radialCornerGradient.nextSibling;
              var gradient4Stops = gradient3Stops.nextSibling;
              var radialGradient3Stops = gradient4Stops.nextSibling;
              var radialGradient4Stops = radialGradient3Stops.nextSibling;
              var horizontalGradient3Stops = radialGradient4Stops.nextSibling;
              var horizontalGradient4Stops =
                horizontalGradient3Stops.nextSibling;
              var radialCorner3StopsGradient =
                horizontalGradient4Stops.nextSibling;
              var radialCorner4StopsGradient =
                radialCorner3StopsGradient.nextSibling;
              var gradient5Stops = radialCorner4StopsGradient.nextSibling;
              var radialGradient5Stops = gradient5Stops.nextSibling;
              var horizontalGradient5Stops = radialGradient5Stops.nextSibling;
              var radialCorner5StopsGradient =
                horizontalGradient5Stops.nextSibling;

              gradient.id = "bfyvGradient" + butterflyNumber;
              radialGradient.id = "bfyvRadialGradient" + butterflyNumber;
              horizontalGradient.id =
                "bfyvHorizontalGradient" + butterflyNumber;
              radialCornerGradient.id =
                "bfyvRaDialGraDientFromCorner" + butterflyNumber;
              gradient3Stops.id = "bfyvGradIent3Stops" + butterflyNumber;
              gradient4Stops.id = "bfyvGradiEnt4Stops" + butterflyNumber;
              radialGradient3Stops.id =
                "bfyvRadiaLGradIent3Stops" + butterflyNumber;
              radialGradient4Stops.id =
                "bfyvRadiAlGraDient4Stops" + butterflyNumber;
              horizontalGradient3Stops.id =
                "bfyvHorizoNtalGradiEnt3Stops" + butterflyNumber;
              horizontalGradient4Stops.id =
                "bfyvHoriZontalGRadient4Stops" + butterflyNumber;
              radialCorner3StopsGradient.id =
                "bfyvRaDiaLGraDienTFromCorner3Stops" + butterflyNumber;
              radialCorner4StopsGradient.id =
                "bfyvRaDIalGraDienTFromCorner4Stops" + butterflyNumber;
              gradient5Stops.id = "bfyvGrADient5Stops" + butterflyNumber;
              radialGradient5Stops.id =
                "bfyvRadiAlGrAdient5Stops" + butterflyNumber;
              horizontalGradient5Stops.id =
                "bfyvHorizonTAlGradieNT5Stops" + butterflyNumber;
              radialCorner5StopsGradient.id =
                "bfyvRaDiaLGrADientFrOmCorner5Stops" + butterflyNumber;

              doc.body.appendChild(cloneOfSvgDefs);

              var firstChildOfMoth = moth.firstChild;

              style = firstChildOfMoth.style;

              styleOfBones =
                firstChildOfMoth.nextSibling.nextSibling.nextSibling.style;

              mStylesToColorButterflies[butterflyNumber] = style;

              mStyleOfBonesOfButterflies[butterflyNumber] = styleOfBones;

              var colorStop1 = gradient.firstChild;
              fadeStyle = colorStop1.style;
              var colorStop2 = colorStop1.nextSibling;
              fade2Style = colorStop2.style;

              var radialColorStop1 = radialGradient.firstChild;
              radialFadeStyle = radialColorStop1.style;
              var radialColorStop2 = radialColorStop1.nextSibling;
              radialFade2Style = radialColorStop2.style;

              var horizontalColorStop1 = horizontalGradient.firstChild;
              horizontalFadeStyle = horizontalColorStop1.style;
              var horizontalColorStop2 = horizontalColorStop1.nextSibling;
              horizontalFade2Style = horizontalColorStop2.style;

              var radialCornerColorStop1 = radialCornerGradient.firstChild;
              radialCornerFadeStyle = radialCornerColorStop1.style;
              var radialCornerColorStop2 = radialCornerColorStop1.nextSibling;
              radialCornerFade2Style = radialCornerColorStop2.style;

              var colorStop1For3Stops = gradient3Stops.firstChild;
              fadeStyle3Stops = colorStop1For3Stops.style;
              var colorStop2For3Stops = colorStop1For3Stops.nextSibling;
              fade2Style3Stops = colorStop2For3Stops.style;
              var colorStop3For3Stops = colorStop2For3Stops.nextSibling;
              fade3Style3Stops = colorStop3For3Stops.style;

              var colorStop1For4Stops = gradient4Stops.firstChild;
              fadeStyle4Stops = colorStop1For4Stops.style;
              var colorStop2For4Stops = colorStop1For4Stops.nextSibling;
              fade2Style4Stops = colorStop2For4Stops.style;
              var colorStop3For4Stops = colorStop2For4Stops.nextSibling;
              fade3Style4Stops = colorStop3For4Stops.style;
              var colorStop4For4Stops = colorStop3For4Stops.nextSibling;
              fade4Style4Stops = colorStop4For4Stops.style;

              var radialColor3StopsStop1 = radialGradient3Stops.firstChild;
              radialFadeStyle3Stops = radialColor3StopsStop1.style;
              var radialColor3StopsStop2 = radialColor3StopsStop1.nextSibling;
              radialFade2Style3Stops = radialColor3StopsStop2.style;
              var radialColor3StopsStop3 = radialColor3StopsStop2.nextSibling;
              radialFade3Style3Stops = radialColor3StopsStop3.style;

              var radialColor4StopsStop1 = radialGradient4Stops.firstChild;
              radialFadeStyle4Stops = radialColor4StopsStop1.style;
              var radialColor4StopsStop2 = radialColor4StopsStop1.nextSibling;
              radialFade2Style4Stops = radialColor4StopsStop2.style;
              var radialColor4StopsStop3 = radialColor4StopsStop2.nextSibling;
              radialFade3Style4Stops = radialColor4StopsStop3.style;
              var radialColor4StopsStop4 = radialColor4StopsStop3.nextSibling;
              radialFade4Style4Stops = radialColor4StopsStop4.style;

              var horizontalColor3StopsStop1 =
                horizontalGradient3Stops.firstChild;
              horizontalFade3StopsStyle = horizontalColor3StopsStop1.style;
              var horizontalColor3StopsStop2 =
                horizontalColor3StopsStop1.nextSibling;
              horizontalFade3Stops2Style = horizontalColor3StopsStop2.style;
              var horizontalColor3StopsStop3 =
                horizontalColor3StopsStop2.nextSibling;
              horizontalFade3Stops3Style = horizontalColor3StopsStop3.style;

              var horizontalColor4StopsStop1 =
                horizontalGradient4Stops.firstChild;
              horizontalFade4StopsStyle = horizontalColor4StopsStop1.style;
              var horizontalColor4StopsStop2 =
                horizontalColor4StopsStop1.nextSibling;
              horizontalFade4Stops2Style = horizontalColor4StopsStop2.style;
              var horizontalColor4StopsStop3 =
                horizontalColor4StopsStop2.nextSibling;
              horizontalFade4Stops3Style = horizontalColor4StopsStop3.style;
              var horizontalColor4StopsStop4 =
                horizontalColor4StopsStop3.nextSibling;
              horizontalFade4Stops4Style = horizontalColor4StopsStop4.style;

              var radialCornerColor3StopsStop1 =
                radialCorner3StopsGradient.firstChild;
              radialCorner3StopsFadeStyle = radialCornerColor3StopsStop1.style;
              var radialCornerColor3StopsStop2 =
                radialCornerColor3StopsStop1.nextSibling;
              radialCorner3StopsFade2Style = radialCornerColor3StopsStop2.style;
              var radialCornerColor3StopsStop3 =
                radialCornerColor3StopsStop2.nextSibling;
              radialCorner3StopsFade3Style = radialCornerColor3StopsStop3.style;

              var radialCornerColor4StopsStop1 =
                radialCorner4StopsGradient.firstChild;
              radialCorner4StopsFadeStyle = radialCornerColor4StopsStop1.style;
              var radialCornerColor4StopsStop2 =
                radialCornerColor4StopsStop1.nextSibling;
              radialCorner4StopsFade2Style = radialCornerColor4StopsStop2.style;
              var radialCornerColor4StopsStop3 =
                radialCornerColor4StopsStop2.nextSibling;
              radialCorner4StopsFade3Style = radialCornerColor4StopsStop3.style;
              var radialCornerColor4StopsStop4 =
                radialCornerColor4StopsStop3.nextSibling;
              radialCorner4StopsFade4Style = radialCornerColor4StopsStop4.style;

              var colorStop1For5Stops = gradient5Stops.firstChild;
              fadeStyle5Stops = colorStop1For5Stops.style;
              var colorStop2For5Stops = colorStop1For5Stops.nextSibling;
              fade2Style5Stops = colorStop2For5Stops.style;
              var colorStop3For5Stops = colorStop2For5Stops.nextSibling;
              fade3Style5Stops = colorStop3For5Stops.style;
              var colorStop4For5Stops = colorStop3For5Stops.nextSibling;
              fade4Style5Stops = colorStop3For5Stops.style;
              var colorStop5For5Stops = colorStop4For5Stops.nextSibling;
              fade5Style5Stops = colorStop5For5Stops.style;

              var radialColor5StopsStop1 = radialGradient5Stops.firstChild;
              radialFadeStyle5Stops = radialColor5StopsStop1.style;
              var radialColor5StopsStop2 = radialColor5StopsStop1.nextSibling;
              radialFade2Style5Stops = radialColor5StopsStop2.style;
              var radialColor5StopsStop3 = radialColor5StopsStop2.nextSibling;
              radialFade3Style5Stops = radialColor5StopsStop3.style;
              var radialColor5StopsStop4 = radialColor5StopsStop3.nextSibling;
              radialFade4Style5Stops = radialColor5StopsStop4.style;
              var radialColor5StopsStop5 = radialColor5StopsStop4.nextSibling;
              radialFade5Style5Stops = radialColor5StopsStop5.style;

              var horizontalColor5StopsStop1 =
                horizontalGradient5Stops.firstChild;
              horizontalFade5StopsStyle = horizontalColor5StopsStop1.style;
              var horizontalColor5StopsStop2 =
                horizontalColor5StopsStop1.nextSibling;
              horizontalFade5Stops2Style = horizontalColor5StopsStop2.style;
              var horizontalColor5StopsStop3 =
                horizontalColor5StopsStop2.nextSibling;
              horizontalFade5Stops3Style = horizontalColor5StopsStop3.style;
              var horizontalColor5StopsStop4 =
                horizontalColor5StopsStop3.nextSibling;
              horizontalFade5Stops4Style = horizontalColor5StopsStop4.style;
              var horizontalColor5StopsStop5 =
                horizontalColor5StopsStop4.nextSibling;
              horizontalFade5Stops5Style = horizontalColor5StopsStop5.style;

              var radialCornerColor5StopsStop1 =
                radialCorner5StopsGradient.firstChild;
              radialCorner5StopsFadeStyle = radialCornerColor5StopsStop1.style;
              var radialCornerColor5StopsStop2 =
                radialCornerColor5StopsStop1.nextSibling;
              radialCorner5StopsFade2Style = radialCornerColor5StopsStop2.style;
              var radialCornerColor5StopsStop3 =
                radialCornerColor5StopsStop2.nextSibling;
              radialCorner5StopsFade3Style = radialCornerColor5StopsStop3.style;
              var radialCornerColor5StopsStop4 =
                radialCornerColor5StopsStop3.nextSibling;
              radialCorner5StopsFade4Style = radialCornerColor5StopsStop4.style;
              var radialCornerColor5StopsStop5 =
                radialCornerColor5StopsStop4.nextSibling;
              radialCorner5StopsFade5Style = radialCornerColor5StopsStop5.style;

              mFadeStylesToColorButterflies[butterflyNumber] = fadeStyle;
              mFade2StylesToColorButterflies[butterflyNumber] = fade2Style;

              mRadialFadeStylesToColorButterflies[butterflyNumber] =
                radialFadeStyle;
              mRadialFade2StylesToColorButterflies[butterflyNumber] =
                radialFade2Style;

              mHorizontalFadeStylesToColorButterflies[butterflyNumber] =
                horizontalFadeStyle;
              mHorizontalFade2StylesToColorButterflies[butterflyNumber] =
                horizontalFade2Style;

              mRadialCornerFadeStylesToColorButterflies[butterflyNumber] =
                radialCornerFadeStyle;
              mRadialCornerFade2StylesToColorButterflies[butterflyNumber] =
                radialCornerFade2Style;

              mFadeStyles3StopsToColorButterflies[butterflyNumber] =
                fadeStyle3Stops;
              mFade2Styles3StopsToColorButterflies[butterflyNumber] =
                fade2Style3Stops;
              mFade3Styles3StopsToColorButterflies[butterflyNumber] =
                fade3Style3Stops;

              mFadeStyles4StopsToColorButterflies[butterflyNumber] =
                fadeStyle4Stops;
              mFade2Styles4StopsToColorButterflies[butterflyNumber] =
                fade2Style4Stops;
              mFade3Styles4StopsToColorButterflies[butterflyNumber] =
                fade3Style4Stops;
              mFade4Styles4StopsToColorButterflies[butterflyNumber] =
                fade4Style4Stops;

              mRadialFadeStyles3StopsToColorButterflies[butterflyNumber] =
                radialFadeStyle3Stops;
              mRadialFade2Styles3StopsToColorButterflies[butterflyNumber] =
                radialFade2Style3Stops;
              mRadialFade3Styles3StopsToColorButterflies[butterflyNumber] =
                radialFade3Style3Stops;

              mRadialFadeStyles4StopsToColorButterflies[butterflyNumber] =
                radialFadeStyle4Stops;
              mRadialFade2Styles4StopsToColorButterflies[butterflyNumber] =
                radialFade2Style4Stops;
              mRadialFade3Styles4StopsToColorButterflies[butterflyNumber] =
                radialFade3Style4Stops;
              mRadialFade4Styles4StopsToColorButterflies[butterflyNumber] =
                radialFade4Style4Stops;

              mFadeStylesToColorButterflies[butterflyNumber] = fadeStyle;
              mFade2StylesToColorButterflies[butterflyNumber] = fade2Style;

              mRadialFadeStylesToColorButterflies[butterflyNumber] =
                radialFadeStyle;
              mRadialFade2StylesToColorButterflies[butterflyNumber] =
                radialFade2Style;

              mHorizontalFade3StopsStylesToColorButterflies[butterflyNumber] =
                horizontalFade3StopsStyle;
              mHorizontalFade3Stops2StylesToColorButterflies[butterflyNumber] =
                horizontalFade3Stops2Style;
              mHorizontalFade3Stops3StylesToColorButterflies[butterflyNumber] =
                horizontalFade3Stops3Style;

              mHorizontalFade4StopsStylesToColorButterflies[butterflyNumber] =
                horizontalFade4StopsStyle;
              mHorizontalFade4Stops2StylesToColorButterflies[butterflyNumber] =
                horizontalFade4Stops2Style;
              mHorizontalFade4Stops3StylesToColorButterflies[butterflyNumber] =
                horizontalFade4Stops3Style;
              mHorizontalFade4Stops4StylesToColorButterflies[butterflyNumber] =
                horizontalFade4Stops4Style;

              mRadialCorner3StopsFadeStylesToColorButterflies[butterflyNumber] =
                radialCorner3StopsFadeStyle;
              mRadialCorner3StopsFade2StylesToColorButterflies[
                butterflyNumber
              ] = radialCorner3StopsFade2Style;
              mRadialCorner3StopsFade3StylesToColorButterflies[
                butterflyNumber
              ] = radialCorner3StopsFade3Style;

              mRadialCorner4StopsFadeStylesToColorButterflies[butterflyNumber] =
                radialCorner4StopsFadeStyle;
              mRadialCorner4StopsFade2StylesToColorButterflies[
                butterflyNumber
              ] = radialCorner4StopsFade2Style;
              mRadialCorner4StopsFade3StylesToColorButterflies[
                butterflyNumber
              ] = radialCorner4StopsFade3Style;
              mRadialCorner4StopsFade4StylesToColorButterflies[
                butterflyNumber
              ] = radialCorner4StopsFade4Style;

              mFadeStyles5StopsToColorButterflies[butterflyNumber] =
                fadeStyle5Stops;
              mFade2Styles5StopsToColorButterflies[butterflyNumber] =
                fade2Style5Stops;
              mFade3Styles5StopsToColorButterflies[butterflyNumber] =
                fade3Style5Stops;
              mFade4Styles5StopsToColorButterflies[butterflyNumber] =
                fade4Style5Stops;
              mFade5Styles5StopsToColorButterflies[butterflyNumber] =
                fade5Style5Stops;

              mRadialFadeStyles5StopsToColorButterflies[butterflyNumber] =
                radialFadeStyle5Stops;
              mRadialFade2Styles5StopsToColorButterflies[butterflyNumber] =
                radialFade2Style5Stops;
              mRadialFade3Styles5StopsToColorButterflies[butterflyNumber] =
                radialFade3Style5Stops;
              mRadialFade4Styles5StopsToColorButterflies[butterflyNumber] =
                radialFade4Style5Stops;
              mRadialFade5Styles5StopsToColorButterflies[butterflyNumber] =
                radialFade5Style5Stops;

              mHorizontalFade5StopsStylesToColorButterflies[butterflyNumber] =
                horizontalFade5StopsStyle;
              mHorizontalFade5Stops2StylesToColorButterflies[butterflyNumber] =
                horizontalFade5Stops2Style;
              mHorizontalFade5Stops3StylesToColorButterflies[butterflyNumber] =
                horizontalFade5Stops3Style;
              mHorizontalFade5Stops4StylesToColorButterflies[butterflyNumber] =
                horizontalFade5Stops4Style;
              mHorizontalFade5Stops5StylesToColorButterflies[butterflyNumber] =
                horizontalFade5Stops5Style;

              mRadialCorner5StopsFadeStylesToColorButterflies[butterflyNumber] =
                radialCorner5StopsFadeStyle;
              mRadialCorner5StopsFade2StylesToColorButterflies[
                butterflyNumber
              ] = radialCorner5StopsFade2Style;
              mRadialCorner5StopsFade3StylesToColorButterflies[
                butterflyNumber
              ] = radialCorner5StopsFade3Style;
              mRadialCorner5StopsFade4StylesToColorButterflies[
                butterflyNumber
              ] = radialCorner5StopsFade4Style;
              mRadialCorner5StopsFade5StylesToColorButterflies[
                butterflyNumber
              ] = radialCorner5StopsFade5Style;
            }

            return [
              style,
              fadeStyle,
              fade2Style,
              radialFadeStyle,
              radialFade2Style,
              horizontalFadeStyle,
              horizontalFade2Style,
              radialCornerFadeStyle,
              radialCornerFade2Style,
              fadeStyle3Stops,
              fade2Style3Stops,
              fade3Style3Stops,
              fadeStyle4Stops,
              fade2Style4Stops,
              fade3Style4Stops,
              fade4Style4Stops,
              radialFadeStyle3Stops,
              radialFade2Style3Stops,
              radialFade3Style3Stops,
              radialFadeStyle4Stops,
              radialFade2Style4Stops,
              radialFade3Style4Stops,
              radialFade4Style4Stops,
              horizontalFade3StopsStyle,
              horizontalFade3Stops2Style,
              horizontalFade3Stops3Style,
              horizontalFade4StopsStyle,
              horizontalFade4Stops2Style,
              horizontalFade4Stops3Style,
              horizontalFade4Stops4Style,
              radialCorner3StopsFadeStyle,
              radialCorner3StopsFade2Style,
              radialCorner3StopsFade3Style,
              radialCorner4StopsFadeStyle,
              radialCorner4StopsFade2Style,
              radialCorner4StopsFade3Style,
              radialCorner4StopsFade4Style,
              fadeStyle5Stops,
              fade2Style5Stops,
              fade3Style5Stops,
              fade4Style5Stops,
              fade5Style5Stops,
              radialFadeStyle5Stops,
              radialFade2Style5Stops,
              radialFade3Style5Stops,
              radialFade4Style5Stops,
              radialFade5Style5Stops,
              horizontalFade5StopsStyle,
              horizontalFade5Stops2Style,
              horizontalFade5Stops3Style,
              horizontalFade5Stops4Style,
              horizontalFade5Stops5Style,
              radialCorner5StopsFadeStyle,
              radialCorner5StopsFade2Style,
              radialCorner5StopsFade3Style,
              radialCorner5StopsFade4Style,
              radialCorner5StopsFade5Style,
              styleOfBones,
            ];
          }

          function getFlapDuration() {
            var maxFlapDuration = cMaxFlapDurationForVectorButterflyInDoodle;

            var minFlapDuration = cMinFlapDurationForVectorButterflyInDoodle;

            var intervalForFlapDuration = maxFlapDuration - minFlapDuration;

            var valueInIntervalForFlapDuration =
              Math.random() * intervalForFlapDuration;

            var flapDuration = minFlapDuration + valueInIntervalForFlapDuration;

            return flapDuration;
          }

          function getSpinDuration() {
            var maxSpinDuration = cMaxSpinDurationForVectorButterflyInDoodle;

            var minSpinDuration = cMinSpinDurationForVectorButterflyInDoodle;

            var intervalForSpinDuration = maxSpinDuration - minSpinDuration;

            var valueInIntervalForSpinDuration =
              Math.random() * intervalForSpinDuration;

            var flapDuration = minSpinDuration + valueInIntervalForSpinDuration;

            return flapDuration;
          }

          function createAbstractButterflies(
            slowestTransitionDuration,
            cssObj,
            isFade
          ) {
            function getNumberOfButterflies() {
              var maxButterflies =
                cMaxCountAbstractButterfliesForButterflyDoodle;

              var minButterflies =
                cMinCountAbstractButterfliesForButterflyDoodle;

              var intervalForCountButterflies = maxButterflies - minButterflies;

              var valueInIntervalForCountButterflies = Math.round(
                Math.random() * intervalForCountButterflies
              );

              var butterfliesCount =
                minButterflies + valueInIntervalForCountButterflies;

              return butterfliesCount;
            }

            var getrandValueGivenPercentChances =
              mGetRandValueGivenPercentChances;

            var valuesAndChancesForCountWingColorStops =
              mValuesAndChancesForCountWingColorStops;

            var doc = mDoc;

            var butterfliesNum = getNumberOfButterflies();

            var randomColornotLightAsRGB = mRandomColorNotLightAsRGB;

            var butterflyContainer;

            var mainElement = doc.createElement("div");
            mainElement.id = "bfyaMain";

            mMygraphicsSetAnimationDuration.call(
              mMyGraphics,
              mainElement.style,
              slowestTransitionDuration + "s"
            );

            mMainElementForAbstractButterflies = mainElement;

            for (i = 0; i < butterfliesNum; i++) {
              butterflyContainer = doc.createElement("div");
              butterflyContainer.className = "bfyaButterfly";
              mainElement.appendChild(butterflyContainer);
            }

            var pageWidth = mPageWidth;
            var halfPageWidth = Math.round(pageWidth / 2);
            var pageHeight = mPageHeight;

            var totalTimeForAnimation;
            var maxDelay;
            var i;
            var delay;
            var flapDuration;
            var flapDelay;
            var butterflyNthChildCss;
            var afterColor;
            var beforeColor;
            var afterColorInParts;
            var pi;
            var lighterAfterColor;
            var lighterAfterColorPart;
            var lighterAfterColorInParts = [];
            var countWingColorStops;
            var listOfWingColors;
            var wingColor;
            var si;
            var isWingLinearGradient;
            var angleOfGradient;
            var beforeAngleOfGradient;
            var xPercentOfSpot;
            var beforeXPercentOfSpot;
            var yPercentOfSpot;

            var backgroundProperty;
            var beforeBackgroundProperty;
            var rand;

            var beforeAfterAnimDuration;
            var beforeAfterAnimDelay;
            var initialLeftOfCentre;
            var durationOfFlyUp;

            var verticalMove;
            var xMove;
            var zMove;

            var widthOfWing;
            var heightOfWing;
            var leftOfLeftWing;

            var ratio;

            totalTimeForAnimation = slowestTransitionDuration * 1000;

            maxDelay =
              totalTimeForAnimation -
              cMinDurationOfFlyUpForForAbstractButterfliesInDoodle -
              cIntervalForDurationOfFlyUpForForAbstractButterfliesInDoodle;

            for (i = 1; i <= butterfliesNum; i++) {
              butterflyNthChildCss = ".bfyaButterfly:nth-child(" + i + ")";
              cssObj.css += butterflyNthChildCss + " { ";

              delay = Math.round(Math.random() * maxDelay);

              flapDuration = 300 + Math.round(Math.random() * 200);
              flapDelay = -Math.round(Math.random() * flapDuration);

              initialLeftOfCentre = Math.round(
                Math.random() *
                  halfPageWidth *
                  cStartPositionAsFractionOfHalfPageWidthForAbstractButterfliesInDoodle
              );

              if (Math.random() < 0.5) {
                initialLeftOfCentre *= -1;
              }

              durationOfFlyUp =
                cMinDurationOfFlyUpForForAbstractButterfliesInDoodle +
                Math.round(
                  Math.random() *
                    cIntervalForDurationOfFlyUpForForAbstractButterfliesInDoodle
                );

              heightOfWing =
                cMinHeightOfWingForAbstractButterfliesInDoodle +
                Math.round(
                  Math.random() *
                    cIntervalForHeightOfWingForAbstractButterfliesInDoodle
                );

              ratio =
                heightOfWing / cBaseHeightOfWingForAbstractButterfliesInDoodle;

              widthOfWing = Math.round(
                cBaseWidthOfWingForAbstractButterfliesInDoodle * ratio
              );

              leftOfLeftWing = -widthOfWing;

              cssObj.css += "bottom: -" + heightOfWing + "px; ";
              cssObj.css += "margin-left: " + initialLeftOfCentre + "px; ";
              cssObj.css +=
                "animation: " +
                durationOfFlyUp +
                "ms ease-in " +
                delay +
                "ms bfyaFadeAway infinite forwards, " +
                durationOfFlyUp +
                "ms linear " +
                delay +
                "ms bfyaFlyUp-" +
                i +
                " infinite forwards; ";

              cssObj.css += "} ";

              cssObj.css += butterflyNthChildCss + "::after { ";

              afterColorInParts = randomColornotLightAsRGB(true /* asArray */);

              afterColor =
                "rgb(" +
                afterColorInParts[0] +
                "," +
                afterColorInParts[1] +
                "," +
                afterColorInParts[2] +
                ")";

              if (isFade) {
                rand = Math.floor(Math.random() * 100) + 1;

                var doesWingFadeToLighterColor =
                  rand <=
                  cPercentChanceWingFadesToLighterColorForAbstractButterflyInDoodle;

                if (doesWingFadeToLighterColor) {
                  for (pi = 0; pi < 3; pi++) {
                    lighterAfterColorPart = Math.round(
                      afterColorInParts[pi] *
                        cFactorToMakePetalLighterForFlowerInButterflyDoodle
                    );

                    if (lighterAfterColorPart > 255) {
                      lighterAfterColorPart = 255;
                    }
                    lighterAfterColorInParts[pi] = lighterAfterColorPart;
                  } // for each color part

                  lighterAfterColor =
                    "rgb(" +
                    lighterAfterColorInParts[0] +
                    "," +
                    lighterAfterColorInParts[1] +
                    "," +
                    lighterAfterColorInParts[2] +
                    ")";
                  listOfWingColors = afterColor + ", " + lighterAfterColor;
                } else {
                  countWingColorStops = getrandValueGivenPercentChances(
                    valuesAndChancesForCountWingColorStops
                  );

                  listOfWingColors = afterColor;

                  for (si = 0; si < countWingColorStops; si++) {
                    wingColor = randomColornotLightAsRGB();
                    listOfWingColors += ", " + wingColor;
                  }
                } // doesWingFadeToLighterColor

                rand = Math.floor(Math.random() * 100) + 1;

                isWingLinearGradient =
                  rand <=
                  cPercentChanceWingFadeIsLinearGradientForAbstractButterflyInDoodle;

                if (isWingLinearGradient) {
                  if (doesWingFadeToLighterColor) {
                    angleOfGradient = -Math.random() * 90;
                  } else {
                    angleOfGradient = Math.random() * 360;
                  }
                  beforeAngleOfGradient = -angleOfGradient;

                  backgroundProperty =
                    "linear-gradient(" +
                    angleOfGradient +
                    "deg, " +
                    listOfWingColors +
                    ")";

                  beforeBackgroundProperty =
                    "linear-gradient(" +
                    beforeAngleOfGradient +
                    "deg, " +
                    listOfWingColors +
                    ")";
                } else {
                  xPercentOfSpot = Math.random() * 100;
                  yPercentOfSpot = Math.random() * 100;

                  beforeXPercentOfSpot = 100 - xPercentOfSpot;

                  backgroundProperty =
                    "radial-gradient(at " +
                    xPercentOfSpot +
                    "% " +
                    yPercentOfSpot +
                    "%, " +
                    listOfWingColors +
                    ")";

                  beforeBackgroundProperty =
                    "radial-gradient(at " +
                    beforeXPercentOfSpot +
                    "% " +
                    yPercentOfSpot +
                    "%, " +
                    listOfWingColors +
                    ")";
                }
              } // if isFade

              cssObj.css += "background-color: " + afterColor + "; ";
              if (isFade) {
                cssObj.css += "background: " + backgroundProperty + "; ";
              }
              beforeAfterAnimDuration =
                "animation-duration: " + flapDuration + "ms; ";
              beforeAfterAnimDelay = "animation-delay: " + flapDelay + "ms; ";
              cssObj.css += beforeAfterAnimDuration;
              cssObj.css += beforeAfterAnimDelay;
              cssObj.css += "width: " + widthOfWing + "px; ";
              cssObj.css += "height: " + heightOfWing + "px; ";
              cssObj.css += "left: " + leftOfLeftWing + "px; ";
              cssObj.css += "} ";

              cssObj.css += butterflyNthChildCss + "::before { ";
              beforeColor = randomColornotLightAsRGB();
              cssObj.css += "background-color: " + beforeColor + "; ";

              if (isFade) {
                cssObj.css += "background: " + beforeBackgroundProperty + "; ";
              }

              cssObj.css += beforeAfterAnimDuration;
              cssObj.css += beforeAfterAnimDelay;
              cssObj.css += "width: " + widthOfWing + "px; ";
              cssObj.css += "height: " + heightOfWing + "px; ";
              cssObj.css += "} ";

              xMove =
                Math.round(Math.random() * (pageWidth - widthOfWing)) -
                halfPageWidth;

              zMove = -Math.round(
                Math.random() *
                  cMaxGoBackAlongZAzixForAbstractButterfliesForButterflyDoodle
              );

              verticalMove = pageHeight + 2 * heightOfWing;

              cssObj.css +=
                "@keyframes bfyaFlyUp-" +
                i +
                " { " +
                "0% { " +
                "transform: translate3d(0,0,0) scale3d(0,0,0); " +
                "} " +
                "100% { " +
                "transform: translate3d(" +
                xMove +
                "px,-" +
                verticalMove +
                "px," +
                zMove +
                "px) scale3d(1,1,1); " +
                " } " +
                " } ";
            } // butterflies i

            mContainerForAbstractButterflies.appendChild(mainElement);
          } // end function createAbstractButterflies()

          function createRose(durationOfParentAnimation, cssObj, isFade) {
            function getDurationOfPetalAnimation() {
              var maxDuration =
                cMaxDurationForPetalAnimationOfRoseInButterflyDoodle;

              var minDuration =
                cMinDurationForPetalAnimationOfRoseInButterflyDoodle;

              var intervalForDuration = maxDuration - minDuration;

              var valueInIntervalForDuration =
                Math.random() * intervalForDuration;

              var duration = minDuration + valueInIntervalForDuration;

              return duration;
            }

            function getDelayOfPetalAnimation() {
              var maxDelay = cMaxDelayForPetalAnimationOfRoseInButterflyDoodle;

              var minDelay = cMinDelayForPetalAnimationOfRoseInButterflyDoodle;

              var intervalForDelay = maxDelay - minDelay;

              var valueInIntervalForDelay = Math.random() * intervalForDelay;

              var delay = minDelay + valueInIntervalForDelay;

              return delay;
            }

            function getYOfHalfWayOfPetalDrop() {
              var maxY = cMaxYOfHalfWayOfPetalDropOfRoseInButterflyDoodle;

              var minY = cMinYOfHalfWayOfPetalDropOfRoseInButterflyDoodle;

              var intervalForY = maxY - minY;

              var valueInIntervalForY = Math.round(
                Math.random() * intervalForY
              );

              var y = minY + valueInIntervalForY;

              return y;
            }

            function getXOfHalfWayOfPetalDrop() {
              var maxX = cMaxXOfHalfWayOfPetalDropOfRoseInButterflyDoodle;

              var minX = cMinXOfHalfWayOfPetalDropOfRoseInButterflyDoodle;

              var intervalForX = maxX - minX;

              var valueInIntervalForX = Math.round(
                Math.random() * intervalForX
              );

              var x = minX + valueInIntervalForX;

              return x;
            }

            function getXOfEndOfPetalDrop() {
              var maxX = cMaxXOfEndOfPetalDropOfRoseInButterflyDoodle;

              var minX = cMinXOfEndOfPetalDropOfRoseInButterflyDoodle;

              var intervalForX = maxX - minX;

              var valueInIntervalForX = Math.round(
                Math.random() * intervalForX
              );

              var x = minX + valueInIntervalForX;

              return x;
            }

            function getScaleOfRose() {
              var maxScale = cMaxScaleForRoseInButterflyDoodle;

              var minScale = cMinScaleForRoseInButterflyDoodle;

              var intervalForScale = maxScale - minScale;

              var valueInIntervalForScale = Math.random() * intervalForScale;

              var scale = minScale + valueInIntervalForScale;

              return scale;
            }

            function getVariedPartOfPetalColor(petalColorPart) {
              var startBelow =
                cHowMuchToStartBelowWhenVaryingPartOfPetalColorOfRoseInButterflyDoodle;

              var range =
                cRangeWhenVaryingPartOfPetalColorOfRoseInButterflyDoodle;

              var variedPart =
                petalColorPart - startBelow + Math.round(Math.random() * range);

              if (variedPart < 0) {
                variedPart = 0;
              }
              if (variedPart > 255) {
                variedPart = 255;
              }

              return variedPart;
            }

            var runRemainder = mRunNumber % 2;

            var mygraphics = mMyGraphics;
            var mygraphicsSetTransform = mMygraphicsSetTransform;
            var mygraphicsSetAnimationDuration =
              mMygraphicsSetAnimationDuration;
            var mygraphicsSetAnimation = mMygraphicsSetAnimation;
            var mygraphicsSetlinearGradient = mMygraphicsSetlinearGradient;

            var outerContainerStyle = mRoseOuterContainerStyle;
            var petalElements = mRosePetalElements;

            var durationOfPetalAnimation = getDurationOfPetalAnimation();
            var delayOfPetalAnimation = getDelayOfPetalAnimation();

            var totalTimeForPetalAnimation =
              durationOfPetalAnimation + delayOfPetalAnimation * 2;
            var delayOfPetalAsPercentOfTotalTime =
              (delayOfPetalAnimation * 100) / totalTimeForPetalAnimation;
            var percentOfTotalTimeMinusDelayOfPetal =
              100 - delayOfPetalAsPercentOfTotalTime;

            mygraphicsSetAnimationDuration.call(
              mygraphics,
              outerContainerStyle,
              totalTimeForPetalAnimation + "s"
            );

            cssObj.css +=
              "@keyframes rseaFadeAllAway { " +
              " 0% { " +
              " opacity: 0;" +
              " } " +
              " " +
              delayOfPetalAsPercentOfTotalTime +
              "% { " +
              " opacity: 1;" +
              " } " +
              " " +
              percentOfTotalTimeMinusDelayOfPetal +
              "% { " +
              " opacity: 1;" +
              " } " +
              " 100% { " +
              " opacity: 0;" +
              " } " +
              "} ";

            var delayFromParentAnimation =
              (durationOfParentAnimation - totalTimeForPetalAnimation) / 2;
            if (delayFromParentAnimation < 0) {
              delayFromParentAnimation = 0;
            }

            delayOfPetalAnimation += delayFromParentAnimation;

            outerContainerStyle.animationDelay = delayFromParentAnimation + "s";

            var pi;
            var petalElement;
            var styleOfPetalElement;

            var basePetalColor = myGraphics.randomColorNotLightAsRGB(
              true /* asArray */
            );
            var pci;
            var petalColorArray;
            var petalLighterColorArray;
            var petalColorPart;
            var petalLighterColorPart;
            var petalColor;
            var petalLighterColor;
            var petalAnimation;

            for (pi = 1; pi <= cCountRosePetals; pi++) {
              petalElement = petalElements[pi];

              petalColorArray = [];
              petalLighterColorArray = [];

              for (pci = 0; pci < 3; pci++) {
                petalColorPart = getVariedPartOfPetalColor(basePetalColor[pci]);

                if (petalColorPart < 0) {
                  petalColorPart = 0;
                }
                if (petalColorPart > 255) {
                  petalColorPart = 255;
                }

                petalColorArray[pci] = petalColorPart;

                if (isFade) {
                  petalLighterColorPart = Math.round(
                    petalColorPart *
                      cFactorToMakePetalLighterForRoseInButterflyDoodle
                  );

                  if (petalLighterColorPart > 255) {
                    petalLighterColorPart = 255;
                  }

                  petalLighterColorArray[pci] = petalLighterColorPart;
                }
              }

              petalColor =
                "rgb(" +
                petalColorArray[0] +
                "," +
                petalColorArray[1] +
                "," +
                petalColorArray[2] +
                ")";

              styleOfPetalElement = petalElement.style;

              if (isFade) {
                petalLighterColor =
                  "rgb(" +
                  petalLighterColorArray[0] +
                  "," +
                  petalLighterColorArray[1] +
                  "," +
                  petalLighterColorArray[2] +
                  ")";

                styleOfPetalElement.background = "";
                styleOfPetalElement.backgroundImage = "";

                styleOfPetalElement.backgroundColor = "";
                styleOfPetalElement.msFilter = "";

                mygraphicsSetlinearGradient.call(
                  mygraphics,
                  styleOfPetalElement,
                  true /* turnOn */,
                  petalLighterColor,
                  petalColor,
                  petalColor
                );
              } else {
                styleOfPetalElement.background = "";
                styleOfPetalElement.backgroundImage = "";
                styleOfPetalElement.msFilter = "";

                styleOfPetalElement.backgroundColor = petalColor;
              }

              if (pi > 1) {
                petalAnimation =
                  "rseaOpenRose" +
                  pi +
                  runRemainder +
                  " " +
                  durationOfPetalAnimation +
                  "s" +
                  " " +
                  delayOfPetalAnimation +
                  "s forwards";

                mygraphicsSetAnimation.call(
                  mygraphics,
                  styleOfPetalElement,
                  petalAnimation
                );
              }
            } // for each petal

            var yOfHalfWayOfPetalDrop = getYOfHalfWayOfPetalDrop();
            var xOfHalfWayOfPetalDrop = getXOfHalfWayOfPetalDrop();

            var xOfEndOfPetalDrop = getXOfEndOfPetalDrop();

            cssObj.css +=
              " @keyframes rseaOpenRose2" +
              runRemainder +
              " { " +
              " 50% { " +
              " transform: translate3d(" +
              xOfHalfWayOfPetalDrop +
              "px," +
              yOfHalfWayOfPetalDrop +
              "px,0) rotate3d(0,0,1,-90deg) ; " +
              " } " +
              " 100% { " +
              " transform: translate3d(-" +
              xOfEndOfPetalDrop +
              "px,200px,0) rotate3d(0,0,1,-60deg) ; " +
              " } " +
              " } ";

            var stemElement = mRoseStemElement;

            var greenColors = mGreenColors;

            var stemColor = greenColors.myGetRandomElemnt();

            stemElement.style.backgroundColor = stemColor;

            var countThorns = countThornsOnRoseInButterflyDoodle;

            var ti;
            var thornElement;
            var rand;
            var showThorn;

            var doOtherPageshaveBackground = doOtherPagesHaveBackground;

            for (ti = 1; ti <= countThorns; ti++) {
              thornElement = mRoseThornElements[ti];
              thornElement.style.backgroundColor = stemColor;

              rand = Math.floor(Math.random() * 100) + 1;

              showThorn =
                !doOtherPageshaveBackground &&
                rand <= cPercentChanceSeeThornOfRoseInButterflyDoodle;

              thornElement.style.display = showThorn ? "block" : "none";
            }

            var leafElement = mRoseLeafElement;

            var leafColor = greenColors.myGetRandomElemnt();

            leafElement.style.backgroundColor = leafColor;

            var transformOnOuterContainer;

            rand = Math.floor(Math.random() * 100) + 1;

            if (rand <= cPercentChanceFlipRoseAroundYAxisInButterflyDoodle) {
              transformOnOuterContainer = "rotate3d(0,1,0,180deg) ";
            } else {
              transformOnOuterContainer = "";
            }

            var overallScale = getScaleOfRose();

            mAdjustedWidthOfRose =
              Math.round(
                cWidthOfRoseContainerInButterflyDoodle -
                  (cWidthOfRoseContainerInButterflyDoodle -
                    cWidthOfRoseContainerInButterflyDoodle * overallScale) /
                    2
              ) * cMagicFactorToCalculateWithOfRoseInButterflyDoodle;

            transformOnOuterContainer +=
              "scale3d(" + overallScale + ", " + overallScale + ", 1)";

            mygraphicsSetTransform.call(
              mygraphics,
              outerContainerStyle,
              transformOnOuterContainer
            );
          } // end function createRose

          function createFlowers(animatonDuration, cssObj, isFade) {
            function getCountFlowers() {
              var maxFlowers = cMaxFlowersInButterflyDoodle;

              var minFlowers = cMinFlowersInButterflyDoodle;

              var intervalForCountFlowers = maxFlowers - minFlowers;

              var valueInIntervalForCountFlowers = Math.round(
                Math.random() * intervalForCountFlowers
              );

              var countFlowers = minFlowers + valueInIntervalForCountFlowers;

              return countFlowers;
            }

            function getCountPetals() {
              var maxPetals = cMaxPetalsInButterflyDoodle;

              var minPetals = cMinPetalsInButterflyDoodle;

              var intervalForCountPetals = maxPetals - minPetals;

              var valueInIntervalForCountPetals = Math.round(
                Math.random() * intervalForCountPetals
              );

              var countPetals = minPetals + valueInIntervalForCountPetals;

              return countPetals;
            }

            function getCountHeads() {
              var maxHeads = cMaxHeadsInButterflyDoodle;

              var minHeads = cMinHeadsInButterflyDoodle;

              var intervalForCountHeads = maxHeads - minHeads;

              var valueInIntervalForCountHeads = Math.round(
                Math.random() * intervalForCountHeads
              );

              var countHeads = minHeads + valueInIntervalForCountHeads;

              return countHeads;
            }

            function getStartScale() {
              var maxStartScale = cMaxStartScaleForFlowersInButterflyDoodle;

              var minStartScale = cMinStartScaleForFlowersInButterflyDoodle;

              var intervalForStartScale = maxStartScale - minStartScale;

              var valueInIntervalForStartScale =
                Math.random() * intervalForStartScale;

              var startScale = minStartScale + valueInIntervalForStartScale;

              return startScale;
            }

            function getScaleFactor() {
              var maxScaleFactor = cMaxScaleFactorForFlowersInButterflyDoodle;

              var minScaleFactor = cMinScaleFactorForFlowersInButterflyDoodle;

              var intervalForScaleFactor = maxScaleFactor - minScaleFactor;

              var valueInIntervalForScaleFactor =
                Math.random() * intervalForScaleFactor;

              var scaleFactor = minScaleFactor + valueInIntervalForScaleFactor;

              return scaleFactor;
            }

            function getVariedPartOfPetalColor(petalColorPart) {
              var startBelow =
                cHowMuchToStartBelowWhenVaryingPartOfPetalColorOfRoseInButterflyDoodle;

              var range =
                cRangeWhenVaryingPartOfPetalColorOfRoseInButterflyDoodle;

              var variedPart =
                petalColorPart - startBelow + Math.round(Math.random() * range);

              if (variedPart < 0) {
                variedPart = 0;
              }
              if (variedPart > 255) {
                variedPart = 255;
              }

              return variedPart;
            }

            function getPetalTopLeftBotRightBorderRadius() {
              var maxPetalTopLeftBotRightBorderRadius =
                cMaxFlowerPetalTopLeftBotRightBorderRadiusInButterflyDoodle;

              var minPetalTopLeftBotRightBorderRadius =
                cMinFlowerPetalTopLeftBotRightBorderRadiusInButterflyDoodle;

              var intervalForPetalTopLeftBotRightBorderRadius =
                maxPetalTopLeftBotRightBorderRadius -
                minPetalTopLeftBotRightBorderRadius;

              var valueInIntervalForTopLeftBotRightBorderRadius = Math.round(
                Math.random() * intervalForPetalTopLeftBotRightBorderRadius
              );

              var petalTopLeftBotRightBorderRadius =
                minPetalTopLeftBotRightBorderRadius +
                valueInIntervalForTopLeftBotRightBorderRadius;

              return petalTopLeftBotRightBorderRadius;
            }

            function getPetalTopRightBotLeftBorderRadius() {
              var maxPetalTopRightBotLeftBorderRadius =
                cMaxFlowerPetalTopRightBotLeftBorderRadiusInButterflyDoodle;

              var minPetalTopRightBotLeftBorderRadius =
                cMinFlowerPetalTopRightBotLeftBorderRadiusInButterflyDoodle;

              var intervalForPetalTopRightBotLeftBorderRadius =
                maxPetalTopRightBotLeftBorderRadius -
                minPetalTopRightBotLeftBorderRadius;

              var valueInIntervalForTopRightBotLeftBorderRadius = Math.round(
                Math.random() * intervalForPetalTopRightBotLeftBorderRadius
              );

              var petalTopRightBotLeftBorderRadius =
                minPetalTopRightBotLeftBorderRadius +
                valueInIntervalForTopRightBotLeftBorderRadius;

              return petalTopRightBotLeftBorderRadius;
            }

            function getHeadTopLeftBotRightBorderRadius() {
              var maxHeadTopLeftBotRightBorderRadius =
                cMaxFlowerHeadTopLeftBotRightBorderRadiusInButterflyDoodle;

              var minHeadTopLeftBotRightBorderRadius =
                cMinFlowerHeadTopLeftBotRightBorderRadiusInButterflyDoodle;

              var intervalForHeadTopLeftBotRightBorderRadius =
                maxHeadTopLeftBotRightBorderRadius -
                minHeadTopLeftBotRightBorderRadius;

              var valueInIntervalForTopLeftBotRightBorderRadius = Math.round(
                Math.random() * intervalForHeadTopLeftBotRightBorderRadius
              );

              var headTopLeftBotRightBorderRadius =
                minHeadTopLeftBotRightBorderRadius +
                valueInIntervalForTopLeftBotRightBorderRadius;

              return headTopLeftBotRightBorderRadius;
            }

            function getHeadTopRightBotLeftBorderRadius() {
              var maxHeadTopRightBotLeftBorderRadius =
                cMaxFlowerHeadTopRightBotLeftBorderRadiusInButterflyDoodle;

              var minHeadTopRightBotLeftBorderRadius =
                cMinFlowerHeadTopRightBotLeftBorderRadiusInButterflyDoodle;

              var intervalForHeadTopRightBotLeftBorderRadius =
                maxHeadTopRightBotLeftBorderRadius -
                minHeadTopRightBotLeftBorderRadius;

              var valueInIntervalForTopRightBotLeftBorderRadius = Math.round(
                Math.random() * intervalForHeadTopRightBotLeftBorderRadius
              );

              var headTopRightBotLeftBorderRadius =
                minHeadTopRightBotLeftBorderRadius +
                valueInIntervalForTopRightBotLeftBorderRadius;

              return headTopRightBotLeftBorderRadius;
            }

            var mygraphics = mMyGraphics;
            var mygraphicsSetAnimation = mMygraphicsSetAnimation;
            var mygraphicsSetTransform = mMygraphicsSetTransform;
            var mygraphicsSetlinearGradient = mMygraphicsSetlinearGradient;
            var mygraphicsSetBorderRadius = mMygraphicsSetBorderRadius;

            var getStyleObjectofRuleInStylesheet =
              mGetStyleObjectOfRuleInStylesheet;

            var myGraphicsRandomColorNotLightAsRGB = mRandomColorNotLightAsRGB;
            var myGraphicsRandomLightColorNotTooLightAsRGB =
              mRandomLightColorNotTooLightAsRGB;

            var doc = mDoc;

            var isPetalEndColorAnotherColor = false;
            var isPetalEndColorAnotherColorForFlowers = [];

            var ri;
            var ruleStyle;
            var headRuleStyle;
            var flowerColorInParts;
            var flowerEndColorInParts;
            var headColorInParts;
            var lighterFlowerColorInParts = [];
            var flowerColor;
            var lighterFlowerColorPart;
            var lighterFlowerColor;
            var lighterHeadColorInParts = [];
            var headColor;
            var lighterHeadColorPart;
            var lighterHeadColor;
            var pi;
            var backgroundProperty;

            var petalTopLeftBotRightBorderRadius;
            var petalTopRightBotLeftBorderRadius;
            var petalBorderRadius;

            var headTopLeftBotRightBorderRadius;
            var headTopRightBotLeftBorderRadius;
            var headBorderRadius;

            var flowerColors = [];
            var flowerEndColors = [];

            var countFlowers = getCountFlowers();

            var arePetalsDifferentColors = false;

            var rand = Math.floor(Math.random() * 100) + 1;

            if (
              rand <=
              cPercentChancePetalsOfFlowersAreDifferentColorsInButterflyDoodle
            ) {
              arePetalsDifferentColors = true;
            }

            for (ri = 0; ri < countFlowers; ri++) {
              ruleStyle = getStyleObjectofRuleInStylesheet(
                numberOfStylesheetOfPetalsAndHeadsOfFlowersInButterflyDoodle,
                numberOfFirstRuleOfPetalsOfFlowersInButterflyDoodleInStylesheet +
                  ri /* numberOfRule*/
              );
              //}

              headRuleStyle = getStyleObjectofRuleInStylesheet(
                numberOfStylesheetOfPetalsAndHeadsOfFlowersInButterflyDoodle,
                numberOfFirstRuleOfHeadsOfFlowersInButterflyDoodleInStylesheet +
                  ri /* numberOfRule*/
              );

              flowerColorInParts = myGraphicsRandomColorNotLightAsRGB(
                true /* asArray */
              );

              flowerColors[ri + 1] = flowerColorInParts;

              if (isFade) {
                rand = Math.floor(Math.random() * 100) + 1;

                if (
                  rand <=
                  cPercentChancePetalEndColorAnotherColorOfFlowersInButterflyDoodle
                ) {
                  isPetalEndColorAnotherColor = true;
                }
              }

              if (arePetalsDifferentColors) {
                isPetalEndColorAnotherColorForFlowers[ri + 1] =
                  isPetalEndColorAnotherColor;
              }

              if (isPetalEndColorAnotherColor) {
                flowerEndColorInParts = myGraphicsRandomColorNotLightAsRGB(
                  true /* asArray */
                );

                if (arePetalsDifferentColors) {
                  flowerEndColors[ri + 1] = flowerEndColorInParts;
                }
              }

              headColorInParts = myGraphicsRandomLightColorNotTooLightAsRGB(
                true /* asArray */
              );

              for (pi = 0; pi < 3; pi++) {
                if (!arePetalsDifferentColors && !isPetalEndColorAnotherColor) {
                  lighterFlowerColorPart = Math.round(
                    flowerColorInParts[pi] *
                      cFactorToMakePetalLighterForFlowerInButterflyDoodle
                  );

                  if (lighterFlowerColorPart > 255) {
                    lighterFlowerColorPart = 255;
                  }
                  lighterFlowerColorInParts[pi] = lighterFlowerColorPart;
                }

                lighterHeadColorPart = Math.round(
                  headColorInParts[pi] *
                    cFactorToMakeHeadLighterForFlowerInButterflyDoodle
                );

                if (lighterHeadColorPart > 255) {
                  lighterHeadColorPart = 255;
                }
                lighterHeadColorInParts[pi] = lighterHeadColorPart;
              } // for each color part

              if (!arePetalsDifferentColors) {
                flowerColor =
                  "rgb(" +
                  flowerColorInParts[0] +
                  "," +
                  flowerColorInParts[1] +
                  "," +
                  flowerColorInParts[2] +
                  ")";
              }

              headColor =
                "rgb(" +
                headColorInParts[0] +
                "," +
                headColorInParts[1] +
                "," +
                headColorInParts[2] +
                ")";

              if (isFade) {
                if (!arePetalsDifferentColors) {
                  if (isPetalEndColorAnotherColor) {
                    lighterFlowerColor =
                      "rgb(" +
                      flowerEndColorInParts[0] +
                      "," +
                      flowerEndColorInParts[1] +
                      "," +
                      flowerEndColorInParts[2] +
                      ")";
                  } else {
                    lighterFlowerColor =
                      "rgb(" +
                      lighterFlowerColorInParts[0] +
                      "," +
                      lighterFlowerColorInParts[1] +
                      "," +
                      lighterFlowerColorInParts[2] +
                      ")";
                  }
                }
              }

              lighterHeadColor =
                "rgb(" +
                lighterHeadColorInParts[0] +
                "," +
                lighterHeadColorInParts[1] +
                "," +
                lighterHeadColorInParts[2] +
                ")";

              if (isFade) {
                if (!arePetalsDifferentColors) {
                  backgroundProperty =
                    "linear-gradient(135deg, " +
                    flowerColor +
                    "," +
                    lighterFlowerColor +
                    ")";
                }
              }

              //                            if (!arePetalsDifferentColors) {
              //                                if (isFade) {
              //                                    ruleStyle.background = backgroundProperty;
              //                                } else {
              //                                    ruleStyle.background = '';
              //                                }
              //                                ruleStyle.backgroundColor = flowerColor;
              //                            } else {
              //                                ruleStyle.background = '';
              //                                ruleStyle.backgroundColor = '';
              //                            }
              //
              //                            headRuleStyle.background = '';
              //                            headRuleStyle.backgroundImage = '';
              //                            headRuleStyle.msFilter = '';
              //
              //                            if (isFade) {
              //
              //                                headRuleStyle.backgroundColor = '';
              //
              //                                mygraphicsSetlinearGradient.call(
              //                                    mygraphics, headRuleStyle,
              //                                    true /* turnOn */,
              //                                    lighterHeadColor, headColor,
              //                                    headColor);
              //
              //                            } else {
              //
              //                                headRuleStyle.backgroundColor = headColor;
              //                            }
              //
              //                            petalTopLeftBotRightBorderRadius =
              //                                          getPetalTopLeftBotRightBorderRadius();
              //                            petalTopRightBotLeftBorderRadius =
              //                                          getPetalTopRightBotLeftBorderRadius();
              //
              //                            petalBorderRadius =
              //                                petalTopLeftBotRightBorderRadius + 'px ' +
              //                                petalTopRightBotLeftBorderRadius + 'px';
              //
              //                            mygraphicsSetBorderRadius.call(
              //                                mygraphics, null /* eLement */,
              //                                petalBorderRadius, ruleStyle);
              //
              //                            headTopLeftBotRightBorderRadius =
              //                                           getHeadTopLeftBotRightBorderRadius();
              //                            headTopRightBotLeftBorderRadius =
              //                                           getHeadTopRightBotLeftBorderRadius();
              //
              //                            headBorderRadius =
              //                                headTopLeftBotRightBorderRadius + 'px ' +
              //                                headTopRightBotLeftBorderRadius + 'px';
              //
              //                            mygraphicsSetBorderRadius.call(
              //                                mygraphics, null /* eLement */,
              //                                headBorderRadius, headRuleStyle);
            } // for each flower

            var fi;
            var startScale;
            var scaleFactor;
            var endScale;

            var xPos;
            var gapOnSideOfFlower;
            var gapOnBottomOfFlower;
            var availablePageWidth;
            var widthTakenByRose = mAdjustedWidthOfRose;
            var yFromBottom;
            var containerStyle;

            var flower;

            var innerMid;
            var baseFlowerColorAsRGB;

            var innerPetal;

            var hi;
            var innerHead;
            var innerHeadStyle;

            var innerContainer;
            var container;

            var petalElement;
            var basePetalColor;
            var basePetalEndColor;
            var petalColorArray;
            var petalLighterColorArray;
            var petalLighterColorPart;
            var petalEndColorPart;
            var pci;
            var petalColor;
            var petalLighterColor;
            var petalGradient;
            var petalCSSClass;

            var countPetals;
            var countHeads;
            var petalAngleStep;
            var petalAngle;
            var headAngleStep;
            var headAngle;
            var petalColorPart;

            var flowerBaseZIndex;
            var headZIndex;

            var innerPetalStyle;

            var realWidthOfFlowerOutline;

            var pageWidth = mPageWidth;
            var pageHeight = mPageHeight;

            var innerStage = doc.createElement("div");
            innerStage.id = "flrwaInnerStage";
            mygraphicsSetAnimation.call(
              mygraphics,
              innerStage.style,
              "flwraFadeAllAway " + animatonDuration + "s 1 forwards"
            );
            mInnerStageForFlowers = innerStage;

            for (fi = 1; fi <= countFlowers; fi++) {
              flowerBaseZIndex = fi * 1000;

              isPetalEndColorAnotherColor =
                isPetalEndColorAnotherColorForFlowers[fi];

              flower = doc.createElement("div");
              flower.className = "flwraFlower";

              basePetalColor = flowerColors[fi];

              innerMid = doc.createElement("span");
              innerMid.className = "flwraMid";

              baseFlowerColorAsRGB =
                "rgb(" +
                basePetalColor[0] +
                "," +
                basePetalColor[1] +
                "," +
                basePetalColor[2] +
                ")";

              innerMid.style.backgroundColor = baseFlowerColorAsRGB;
              innerMid.style.zIndex = flowerBaseZIndex;

              flower.appendChild(innerMid);

              if (isPetalEndColorAnotherColor) {
                basePetalEndColor = flowerEndColors[fi];
              }

              countPetals = getCountPetals();
              countHeads = getCountHeads();

              petalAngleStep = 360 / countPetals;
              petalAngle = Math.random() * petalAngleStep;

              headAngleStep = 360 / countHeads;
              headAngle = Math.random() * headAngleStep;

              for (pi = 0; pi < countPetals; pi++) {
                innerPetal = doc.createElement("span");
                petalCSSClass = "flwraPetal";
                petalCSSClass += " flwraColorAndShape" + fi;
                innerPetal.className = petalCSSClass;

                innerPetalStyle = innerPetal.style;

                mygraphicsSetTransform.call(
                  mygraphics,
                  innerPetalStyle,
                  "rotate(" + petalAngle + "deg)"
                );

                innerPetalStyle.zIndex =
                  flowerBaseZIndex + 500 + Math.round(Math.random() * 100);

                petalAngle += petalAngleStep;

                if (arePetalsDifferentColors) {
                  petalElement = innerPetal;

                  petalColorArray = [];
                  petalLighterColorArray = [];

                  for (pci = 0; pci < 3; pci++) {
                    petalColorPart = getVariedPartOfPetalColor(
                      basePetalColor[pci]
                    );

                    if (petalColorPart < 0) {
                      petalColorPart = 0;
                    }
                    if (petalColorPart > 255) {
                      petalColorPart = 255;
                    }

                    petalColorArray[pci] = petalColorPart;

                    if (isFade) {
                      if (isPetalEndColorAnotherColor) {
                        petalEndColorPart = getVariedPartOfPetalColor(
                          basePetalEndColor[pci]
                        );

                        petalLighterColorArray[pci] = petalEndColorPart;
                      } else {
                        petalLighterColorPart = Math.round(
                          petalColorPart *
                            cFactorToMakePetalLighterForFlowerInButterflyDoodle
                        );

                        if (petalLighterColorPart > 255) {
                          petalLighterColorPart = 255;
                        }
                        petalLighterColorArray[pci] = petalLighterColorPart;
                      } // if isPetalEndColorAnotherColor
                    } // if isFade
                  } // for each color part

                  petalColor =
                    "rgb(" +
                    petalColorArray[0] +
                    "," +
                    petalColorArray[1] +
                    "," +
                    petalColorArray[2] +
                    ")";

                  if (isFade) {
                    petalLighterColor =
                      "rgb(" +
                      petalLighterColorArray[0] +
                      "," +
                      petalLighterColorArray[1] +
                      "," +
                      petalLighterColorArray[2] +
                      ")";

                    petalGradient =
                      "linear-gradient(135deg," +
                      petalColor +
                      "," +
                      petalLighterColor +
                      ")";

                    petalElement.style.backgroundImage = petalGradient;
                  } // if color fade (gradient)

                  petalElement.style.backgroundColor = petalColor;
                } // if arePetalsDifferentColors

                flower.appendChild(innerPetal);
              } // for each petal

              headZIndex = flowerBaseZIndex + 900;

              for (hi = 0; hi < countHeads; hi++) {
                innerHead = doc.createElement("span");
                innerHead.className = "flwraHead flWraHeAdCoLor" + fi;

                innerHeadStyle = innerHead.style;

                mygraphicsSetTransform.call(
                  mygraphics,
                  innerHeadStyle,
                  "rotate(" + headAngle + "deg)"
                );

                innerHeadStyle.zIndex = headZIndex;

                headAngle += headAngleStep;

                flower.appendChild(innerHead);
              } // for each head

              innerContainer = doc.createElement("div");
              innerContainer.className = "flwraInnerContainer";
              container = doc.createElement("div");
              container.className = "flwraContainer";
              containerStyle = container.style;

              mygraphicsSetAnimation.call(
                mygraphics,
                containerStyle,
                "flwraScale" + fi + " " + animatonDuration + "s 1 both"
              );

              innerContainer.appendChild(flower);
              container.appendChild(innerContainer);

              innerStage.appendChild(container);

              startScale = getStartScale();
              scaleFactor = getScaleFactor();
              endScale = startScale * scaleFactor;

              cssObj.css +=
                "@keyframes flwraScale" +
                fi +
                " { " +
                "     0% { " +
                "  transform: scale3d(" +
                startScale +
                "," +
                startScale +
                ",1); " +
                "} " +
                "    100% { " +
                "  transform: scale3d(" +
                endScale +
                "," +
                endScale +
                ",1); " +
                " " +
                "    } " +
                "} ";

              realWidthOfFlowerOutline =
                cWidthOfFlowerContainerInButterflyDoodle +
                2 * xOverflowOfFlowerInButterflyDoodle;

              gapOnSideOfFlower = Math.floor(
                (cWidthOfFlowerContainerInButterflyDoodle -
                  endScale * cWidthOfFlowerContainerInButterflyDoodle) /
                  2
              );

              gapOnBottomOfFlower = Math.floor(
                (cHeightOfFlowerContainerInButterflyDoodle -
                  endScale * cHeightOfFlowerContainerInButterflyDoodle) /
                  2
              );

              availablePageWidth =
                pageWidth -
                realWidthOfFlowerOutline +
                gapOnSideOfFlower -
                widthTakenByRose -
                xOverflowOfFlowerInButterflyDoodle;

              xPos =
                Math.round(Math.random() * availablePageWidth) +
                xOverflowOfFlowerInButterflyDoodle;

              yFromBottom =
                cYIndentOfFlowerInButterflyDoodle -
                gapOnBottomOfFlower +
                Math.round(
                  Math.random() *
                    cYIndentFactorOfFlowerInButterflyDoodle *
                    pageHeight
                );

              containerStyle.left = xPos + "px";
              containerStyle.bottom = yFromBottom + "px";
            } // for each flower

            var stage = mStageForFlowers;
            stage.appendChild(innerStage);

            stage.style.display = "block";
          } // end function createFlowers()

          function createVectorButterfly(
            loopIndex,
            box,
            cssObj,
            randomcolornotlightasRGB,
            isfadE,
            colorsOfBones
          ) {
            function getScale() {
              var maxScale = cMaxScaleForVectorButterfylInButterflyDoodle;

              var minScale = cMinScaleForVectorButterfylInButterflyDoodle;

              var intervalForScale = maxScale - minScale;

              var valueInIntervalForScale = Math.round(
                Math.random() * intervalForScale
              );

              var scale = minScale + valueInIntervalForScale;

              return scale;
            }

            var doc = mDoc;

            var butterflyNumber = loopIndex + 1;

            var colorStyles = getStyleToColorButterfly(butterflyNumber);

            var colorStyle = colorStyles[0];

            var styleOfBones = colorStyles[57];

            if (!isfadE) {
              colorStyle.fill = randomcolornotlightasRGB();
            } else {
              var fadeColorStyle = colorStyles[1];
              var fade2ColorStyle = colorStyles[2];

              var radialFadeColorStyle = colorStyles[3];
              var radialFade2ColorStyle = colorStyles[4];

              var horizontalFadeColorStyle = colorStyles[5];
              var horizontalFade2ColorStyle = colorStyles[6];

              var radialCornerFadeColorStyle = colorStyles[7];
              var radialCornerFade2ColorStyle = colorStyles[8];

              var fadeColor3StopsStyle = colorStyles[9];
              var fade2Color3StopsStyle = colorStyles[10];
              var fade3Color3StopsStyle = colorStyles[11];

              var fadeColor4StopsStyle = colorStyles[12];
              var fade2Color4StopsStyle = colorStyles[13];
              var fade3Color4StopsStyle = colorStyles[14];
              var fade4Color4StopsStyle = colorStyles[15];

              var radialFadeColor3StopsStyle = colorStyles[16];
              var radialFade2Color3StopsStyle = colorStyles[17];
              var radialFade3Color3StopsStyle = colorStyles[18];

              var radialFadeColor4StopsStyle = colorStyles[19];
              var radialFade2Color4StopsStyle = colorStyles[20];
              var radialFade3Color4StopsStyle = colorStyles[21];
              var radialFade4Color4StopsStyle = colorStyles[22];

              var horizontalFade3StopsColorStyle = colorStyles[23];
              var horizontalFade3Stops2ColorStyle = colorStyles[24];
              var horizontalFade3Stops3ColorStyle = colorStyles[25];

              var horizontalFade4StopsColorStyle = colorStyles[26];
              var horizontalFade4Stops2ColorStyle = colorStyles[27];
              var horizontalFade4Stops3ColorStyle = colorStyles[28];
              var horizontalFade4Stops4ColorStyle = colorStyles[29];

              var radialCorner3StopsFadeColorStyle = colorStyles[30];
              var radialCorner3StopsFade2ColorStyle = colorStyles[31];
              var radialCorner3StopsFade3ColorStyle = colorStyles[32];

              var radialCorner4StopsFadeColorStyle = colorStyles[33];
              var radialCorner4StopsFade2ColorStyle = colorStyles[34];
              var radialCorner4StopsFade3ColorStyle = colorStyles[35];
              var radialCorner4StopsFade4ColorStyle = colorStyles[36];

              var fadeColor5StopsStyle = colorStyles[37];
              var fade2Color5StopsStyle = colorStyles[38];
              var fade3Color5StopsStyle = colorStyles[39];
              var fade4Color5StopsStyle = colorStyles[40];
              var fade5Color5StopsStyle = colorStyles[41];

              var radialFadeColor5StopsStyle = colorStyles[42];
              var radialFade2Color5StopsStyle = colorStyles[43];
              var radialFade3Color5StopsStyle = colorStyles[44];
              var radialFade4Color5StopsStyle = colorStyles[45];
              var radialFade5Color5StopsStyle = colorStyles[46];

              var horizontalFade5StopsColorStyle = colorStyles[47];
              var horizontalFade5Stops2ColorStyle = colorStyles[48];
              var horizontalFade5Stops3ColorStyle = colorStyles[49];
              var horizontalFade5Stops4ColorStyle = colorStyles[50];
              var horizontalFade5Stops5ColorStyle = colorStyles[51];

              var radialCorner5StopsFadeColorStyle = colorStyles[52];
              var radialCorner5StopsFade2ColorStyle = colorStyles[53];
              var radialCorner5StopsFade3ColorStyle = colorStyles[54];
              var radialCorner5StopsFade4ColorStyle = colorStyles[55];
              var radialCorner5StopsFade5ColorStyle = colorStyles[56];

              var rand;

              var countColorStops = 2 + Math.round(Math.random() * 3);

              var fill;

              var colors = [];

              var randomColorNotLightasRGB = randomcolornotlightasRGB;

              var myGraphicsRandomColorNotLightAsRGB = randomcolornotlightasRGB;

              rand = Math.floor(Math.random() * 100) + 1;

              var fadeToLighterColor =
                countColorStops === 2 &&
                rand <=
                  cPercentChanceFadeToLighterColorForWingOfVectorButterflyInButterflyDoodle;

              if (fadeToLighterColor) {
                var strongColorInParts = myGraphicsRandomColorNotLightAsRGB(
                  true /* asArray */
                );

                var pi;
                var lighterColorPart;
                var lighterColorInParts = [];

                for (pi = 0; pi < 3; pi++) {
                  lighterColorPart = Math.round(
                    strongColorInParts[pi] *
                      cFactorToMakeWingLighterForWingOfVectorButterflyInButterflyDoodle
                  );

                  if (lighterColorPart > 255) {
                    lighterColorPart = 255;
                  }
                  lighterColorInParts[pi] = lighterColorPart;
                }

                colors[1] =
                  "rgb(" +
                  lighterColorInParts[0] +
                  "," +
                  lighterColorInParts[1] +
                  "," +
                  lighterColorInParts[2] +
                  ")";
                colors[2] =
                  "rgb(" +
                  strongColorInParts[0] +
                  "," +
                  strongColorInParts[1] +
                  "," +
                  strongColorInParts[2] +
                  ")";
              } else {
                var ci;

                for (ci = 1; ci <= countColorStops; ci++) {
                  colors[ci] = randomColorNotLightasRGB();
                }
              }

              rand = Math.floor(Math.random() * 100) + 1;

              var isLinearGradient =
                rand <=
                cPercentChanceIsLinearGradientForWingOfVectorButterflyInButterflyDoodle;

              if (isLinearGradient) {
                rand = Math.floor(Math.random() * 100) + 1;

                var isVerticalLinearGradient =
                  rand <=
                  cPercentChanceIsVerticalLinearGradientForWingOfVectorButterflyInButterflyDoodle;

                if (isVerticalLinearGradient) {
                  if (countColorStops === 2) {
                    fill = "url('#bfyvGradient" + butterflyNumber + "')";
                    fadeColorStyle.stopColor = colors[1];
                    fade2ColorStyle.stopColor = colors[2];
                  } else if (countColorStops === 3) {
                    fill = "url('#bfyvGradIent3Stops" + butterflyNumber + "')";

                    fadeColor3StopsStyle.stopColor = colors[1];
                    fade2Color3StopsStyle.stopColor = colors[2];
                    fade3Color3StopsStyle.stopColor = colors[3];
                  } else if (countColorStops === 4) {
                    fill = "url('#bfyvGradiEnt4Stops" + butterflyNumber + "')";

                    fadeColor4StopsStyle.stopColor = colors[1];
                    fade2Color4StopsStyle.stopColor = colors[2];
                    fade3Color4StopsStyle.stopColor = colors[3];
                    fade4Color4StopsStyle.stopColor = colors[4];
                  } else if (countColorStops === 5) {
                    fill = "url('#bfyvGrADient5Stops" + butterflyNumber + "')";

                    fadeColor5StopsStyle.stopColor = colors[1];
                    fade2Color5StopsStyle.stopColor = colors[2];
                    fade3Color5StopsStyle.stopColor = colors[3];
                    fade4Color5StopsStyle.stopColor = colors[4];
                    fade5Color5StopsStyle.stopColor = colors[5];
                  }
                } /* is horizontal linear gradient */ else {
                  if (countColorStops === 2) {
                    fill =
                      "url('#bfyvHorizontalGradient" + butterflyNumber + "')";
                    horizontalFadeColorStyle.stopColor = colors[1];
                    horizontalFade2ColorStyle.stopColor = colors[2];
                  } else if (countColorStops === 3) {
                    fill =
                      "url('#bfyvHorizoNtalGradiEnt3Stops" +
                      butterflyNumber +
                      "')";
                    horizontalFade3StopsColorStyle.stopColor = colors[1];
                    horizontalFade3Stops2ColorStyle.stopColor = colors[2];
                    horizontalFade3Stops3ColorStyle.stopColor = colors[3];
                  } else if (countColorStops === 4) {
                    fill =
                      "url('#bfyvHoriZontalGRadient4Stops" +
                      butterflyNumber +
                      "')";
                    horizontalFade4StopsColorStyle.stopColor = colors[1];
                    horizontalFade4Stops2ColorStyle.stopColor = colors[2];
                    horizontalFade4Stops3ColorStyle.stopColor = colors[3];
                    horizontalFade4Stops4ColorStyle.stopColor = colors[4];
                  } else if (countColorStops === 5) {
                    fill =
                      "url('#bfyvHorizonTAlGradieNT5Stops" +
                      butterflyNumber +
                      "')";
                    horizontalFade5StopsColorStyle.stopColor = colors[1];
                    horizontalFade5Stops2ColorStyle.stopColor = colors[2];
                    horizontalFade5Stops3ColorStyle.stopColor = colors[3];
                    horizontalFade5Stops4ColorStyle.stopColor = colors[4];
                    horizontalFade5Stops5ColorStyle.stopColor = colors[5];
                  }
                }
              } /* is radial gradient */ else {
                rand = Math.floor(Math.random() * 100) + 1;

                var isRadialGradientInCenter =
                  rand <=
                  cPercentChanceIsRadialGradientInCentreForWingOfVectorButterflyInButterflyDoodle;

                if (isRadialGradientInCenter) {
                  if (countColorStops === 2) {
                    fill = "url('#bfyvRadialGradient" + butterflyNumber + "')";
                    radialFadeColorStyle.stopColor = colors[2];
                    radialFade2ColorStyle.stopColor = colors[1];
                  } else if (countColorStops === 3) {
                    fill =
                      "url('#bfyvRadiaLGradIent3Stops" + butterflyNumber + "')";
                    radialFadeColor3StopsStyle.stopColor = colors[1];
                    radialFade2Color3StopsStyle.stopColor = colors[2];
                    radialFade3Color3StopsStyle.stopColor = colors[3];
                  } else if (countColorStops === 4) {
                    fill =
                      "url('#bfyvRadiAlGraDient4Stops" + butterflyNumber + "')";
                    radialFadeColor4StopsStyle.stopColor = colors[1];
                    radialFade2Color4StopsStyle.stopColor = colors[2];
                    radialFade3Color4StopsStyle.stopColor = colors[3];
                    radialFade4Color4StopsStyle.stopColor = colors[4];
                  } else if (countColorStops === 5) {
                    fill =
                      "url('#bfyvRadiAlGrAdient5Stops" + butterflyNumber + "')";
                    radialFadeColor5StopsStyle.stopColor = colors[1];
                    radialFade2Color5StopsStyle.stopColor = colors[2];
                    radialFade3Color5StopsStyle.stopColor = colors[3];
                    radialFade4Color5StopsStyle.stopColor = colors[4];
                    radialFade5Color5StopsStyle.stopColor = colors[5];
                  }
                } /* is radial gradient in middle 
                              on right hand size */ else {
                  if (countColorStops === 2) {
                    fill =
                      "url('#bfyvRaDialGraDientFromCorner" +
                      butterflyNumber +
                      "')";
                    radialCornerFadeColorStyle.stopColor = colors[2];
                    radialCornerFade2ColorStyle.stopColor = colors[1];
                  } else if (countColorStops === 3) {
                    fill =
                      "url('#bfyvRaDiaLGraDienTFromCorner3Stops" +
                      butterflyNumber +
                      "')";
                    radialCorner3StopsFadeColorStyle.stopColor = colors[1];
                    radialCorner3StopsFade2ColorStyle.stopColor = colors[2];
                    radialCorner3StopsFade3ColorStyle.stopColor = colors[3];
                  } else if (countColorStops === 4) {
                    fill =
                      "url('#bfyvRaDIalGraDienTFromCorner4Stops" +
                      butterflyNumber +
                      "')";
                    radialCorner4StopsFadeColorStyle.stopColor = colors[1];
                    radialCorner4StopsFade2ColorStyle.stopColor = colors[2];
                    radialCorner4StopsFade3ColorStyle.stopColor = colors[3];
                    radialCorner4StopsFade4ColorStyle.stopColor = colors[4];
                  } else if (countColorStops === 5) {
                    fill =
                      "url('#bfyvRaDiaLGrADientFrOmCorner5Stops" +
                      butterflyNumber +
                      "')";

                    radialCorner5StopsFadeColorStyle.stopColor = colors[1];
                    radialCorner5StopsFade2ColorStyle.stopColor = colors[2];
                    radialCorner5StopsFade3ColorStyle.stopColor = colors[3];
                    radialCorner5StopsFade4ColorStyle.stopColor = colors[4];
                    radialCorner5StopsFade5ColorStyle.stopColor = colors[5];
                  }
                }
              } /* if is linear or radial gradient */

              colorStyle.fill = fill;
            } // if isFade

            styleOfBones.fill = colorsOfBones.myGetRandomElemnt();

            var outercontainer = doc.createElement("div");
            outercontainer.className = "bfyvButtErflY-ouTercoNtaiNer";
            outercontainer.style.cursor = canClickToSeeTipCursor;

            var container = doc.createElement("div");
            container.className = "bfyvButTerFly-coNtaIner";

            var spinPart = doc.createElement("div");
            spinPart.className = "bfyvSpinPartCommon";
            spinPart.style.animation =
              "bfyvSpin" + butterflyNumber + " linear infinite";

            var spinPart2 = doc.createElement("div");
            spinPart2.className = "bfyvSpinPartCommon";
            spinPart2.style.animation =
              "bfyvSpin" + butterflyNumber + "2 linear infinite";

            var spinPart3 = doc.createElement("div");
            spinPart3.className = "bfyvSpinPartCommon";
            spinPart3.style.animation =
              "bfyvSpin" + butterflyNumber + "3 linear infinite";

            var spinPart4 = doc.createElement("div");
            spinPart4.className = "bfyvSpinPartCommon";
            spinPart4.style.animation =
              "bfyvSpin" + butterflyNumber + "4 linear infinite";

            var butterfly = doc.createElement("div");
            butterfly.className = "bfyvButterfly";

            var lwsContainer = doc.createElement("div");

            var leftWingSVG = doc.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            lwsContainer.className = "bfyvWing bfyvLeft";
            leftWingSVG.setAttribute("viewBox", "0 0 119.744 148.477");

            var leftWingUse = doc.createElementNS(
              "http://www.w3.org/2000/svg",
              "use"
            );
            leftWingUse.className = "bfyvUse";
            leftWingUse.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              "#bfyvShape-moth" + butterflyNumber
            );

            var rightWingSVG = doc.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );

            var rwsContainer = doc.createElement("div");

            rwsContainer.className = "bfyvWing bfyvRight";
            rightWingSVG.setAttribute("viewBox", "0 0 119.744 148.477");

            var rightWingUse = doc.createElementNS(
              "http://www.w3.org/2000/svg",
              "use"
            );
            rightWingUse.className = "bfyvUse";
            rightWingUse.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              "#bfyvShape-moth" + butterflyNumber
            );

            var sizeOfButterfly = getScale();
            var halfSizeOfButterfly = Math.round(sizeOfButterfly / 2);
            var sizeOfButterflyWithPx = sizeOfButterfly + "px";
            var halfSizeOfButterflyWithPx = halfSizeOfButterfly + "px";
            var transformOriginOfButterfly =
              halfSizeOfButterflyWithPx + " " + halfSizeOfButterflyWithPx;

            outercontainer.style.width = sizeOfButterflyWithPx;
            outercontainer.style.height = sizeOfButterflyWithPx;

            container.style.width = sizeOfButterflyWithPx;
            container.style.height = sizeOfButterflyWithPx;

            spinPart.style.width = sizeOfButterflyWithPx;
            spinPart.style.height = sizeOfButterflyWithPx;

            spinPart2.style.width = sizeOfButterflyWithPx;
            spinPart2.style.height = sizeOfButterflyWithPx;

            spinPart3.style.width = sizeOfButterflyWithPx;
            spinPart3.style.height = sizeOfButterflyWithPx;

            spinPart4.style.width = sizeOfButterflyWithPx;
            spinPart4.style.height = sizeOfButterflyWithPx;

            butterfly.style.width = sizeOfButterflyWithPx;
            butterfly.style.height = sizeOfButterflyWithPx;

            lwsContainer.style.width = halfSizeOfButterflyWithPx;
            lwsContainer.style.height = sizeOfButterflyWithPx;

            rwsContainer.style.width = halfSizeOfButterflyWithPx;
            rwsContainer.style.height = sizeOfButterflyWithPx;

            lwsContainer.style.transformOrigin = transformOriginOfButterfly;
            rwsContainer.style.transformOrigin = transformOriginOfButterfly;

            leftWingSVG.appendChild(leftWingUse);
            rightWingSVG.appendChild(rightWingUse);

            lwsContainer.appendChild(leftWingSVG);
            rwsContainer.appendChild(rightWingSVG);

            butterfly.appendChild(lwsContainer);
            butterfly.appendChild(rwsContainer);

            spinPart4.appendChild(butterfly);
            spinPart3.appendChild(spinPart4);
            spinPart2.appendChild(spinPart3);
            spinPart.appendChild(spinPart2);

            container.appendChild(spinPart);
            outercontainer.appendChild(container);

            box.appendChild(outercontainer);

            var xRot = Math.random();
            var yRot = Math.random();
            var zRot = Math.random();
            var spinRot =
              "transform: rotate3d(" +
              xRot +
              ", " +
              yRot +
              ", " +
              zRot +
              ", 90deg); ";
            var noSpinRot = "transform: rotate3d(1,0,0,0); ";

            cssObj.css +=
              "@keyframes bfyvSpin" +
              butterflyNumber +
              " { " +
              "0% { " +
              noSpinRot +
              "} " +
              "25% { " +
              spinRot +
              "} " +
              "100% { " +
              spinRot +
              "} " +
              "} ";

            cssObj.css +=
              "@keyframes bfyvSpin" +
              butterflyNumber +
              "2 { " +
              "0% { " +
              noSpinRot +
              "} " +
              "25% { " +
              noSpinRot +
              "} " +
              "50% { " +
              spinRot +
              "} " +
              "100% { " +
              spinRot +
              "} " +
              "} ";

            cssObj.css +=
              "@keyframes bfyvSpin" +
              butterflyNumber +
              "3 { " +
              "0% { " +
              noSpinRot +
              "} " +
              "50% { " +
              noSpinRot +
              "} " +
              "75% { " +
              spinRot +
              "} " +
              "100% { " +
              spinRot +
              "} " +
              "} ";

            cssObj.css +=
              "@keyframes bfyvSpin" +
              butterflyNumber +
              "4 { " +
              "0% { " +
              noSpinRot +
              "} " +
              "75% { " +
              noSpinRot +
              "} " +
              "100% { " +
              spinRot +
              "} " +
              "} ";

            var leftWing = lwsContainer;
            var rightWing = rwsContainer;

            var flapDuration = getFlapDuration();
            var flapDurationWithSec = flapDuration + "s";
            leftWing.style.animationDuration = flapDurationWithSec;
            rightWing.style.animationDuration = flapDurationWithSec;

            var flapDelay = flapDuration * Math.random();
            var flapDelayWithSec = -flapDelay + "s";
            leftWing.style.animationDelay = flapDelayWithSec;
            rightWing.style.animationDelay = flapDelayWithSec;

            var spinDuration = getSpinDuration();
            var spinDurationWithSec = spinDuration + "s";
            spinPart.style.animationDuration = spinDurationWithSec;
            spinPart2.style.animationDuration = spinDurationWithSec;
            spinPart3.style.animationDuration = spinDurationWithSec;
            spinPart4.style.animationDuration = spinDurationWithSec;

            var spinDelay = spinDuration * Math.random();
            var spinDelayWithSec = -spinDelay + "s";
            spinPart.style.animationDelay = spinDelayWithSec;
            spinPart2.style.animationDelay = spinDelayWithSec;
            spinPart3.style.animationDelay = spinDelayWithSec;
            spinPart4.style.animationDelay = spinDelayWithSec;

            var isReverse = Math.random() < 0.5;
            if (isReverse) {
              spinPart.style.animationDirection = "reverse";
              spinPart2.style.animationDirection = "reverse";
              spinPart3.style.animationDirection = "reverse";
              spinPart4.style.animationDirection = "reverse";
            }
          } // end function createVectorButterfly()

          function setYTransition(
            transitionduration,
            container1,
            animationheight,
            adjustforScale,
            isHoverDown,
            mygraphics,
            mygraphicsSetTransition,
            mygraphicsSetTransform
          ) {
            var container1Style = container1.style;

            var easingFunction =
              cEasingFunctionsForMoveVertically.myGetRandomElementWithNoRepeats();

            var transitionPropertyValue =
              "transform " + transitionduration + "s " + easingFunction;

            mygraphicsSetTransition.call(
              mygraphics,
              container1Style,
              transitionPropertyValue
            );

            var yMove = Math.round(animationheight * adjustforScale);

            if (!isHoverDown) {
              yMove = -yMove;
            }

            yMove = (yMove / mPageHeight) * 100;

            var transformPropertyValue = "translate3d(0, " + yMove + "vh, 0)";

            mygraphicsSetTransform.call(
              mygraphics,
              container1Style,
              transformPropertyValue
            );
          }

          function setXTransition(
            pagewidth,
            adjustforScale,
            transitionduration,
            container2,
            mygraphics,
            mygraphicsSetTransition,
            mygraphicsSetTransform,
            isHoverDown,
            birdIndex
          ) {
            var container2Style = container2.style;

            var easingFunction =
              cEasingFunctionsForMoves.myGetRandomElementWithNoRepeats();

            var transitionPropertyValue =
              "transform " + transitionduration + "s " + easingFunction;

            mygraphicsSetTransition.call(
              mygraphics,
              container2Style,
              transitionPropertyValue
            );

            var xMove = -Math.round(
              Math.random() *
                pagewidth *
                adjustforScale *
                cFractionOfPageWidthButterflyGoesAcrossInButterflyDoodle
            );

            if (!isHoverDown) {
              xMove *= -1;
              container2Style.right = xMove + mXIndent[birdIndex] + "px";
            }

            var transformPropertyValue = "translate3d(" + xMove + "px, 0, 0)";

            mygraphicsSetTransform.call(
              mygraphics,
              container2Style,
              transformPropertyValue
            );
          }

          function setScaleTransition(
            transitionduration,
            container3,
            scalefactor,
            mygraphics,
            mygraphicsSetTransition,
            mygraphicsSetTransform
          ) {
            var container3Style = container3.style;

            var transitionPropertyValue =
              "transform " + transitionduration + "s linear";

            mygraphicsSetTransition.call(
              mygraphics,
              container3Style,
              transitionPropertyValue
            );

            var transformPropertyValue =
              "scale3d(" + scalefactor + "," + scalefactor + ",1)";

            mygraphicsSetTransform.call(
              mygraphics,
              container3Style,
              transformPropertyValue
            );
          }

          mRunNumber++;

          var isFade = doesColorFadeofBallsCalledSoFar;

          mTimeoutIdForStartPart2 = null;

          var pageWidth = mPageWidth;
          var pageHeight = mPageHeight;

          var animationHeight =
            pageHeight + cHeightOfButterflyInButterflyDoodle;

          var countBird = mCountBird;

          var scaleFactor;
          var adjustForScale;
          var adjustforScaleWithFudge;
          var transitionDuration;
          var slowestTransitionDuration;
          var container1ForSlowestTransitionDuration;

          var isHoverDown;
          var isFaceRight;

          var container1;
          var container2;
          var container3;
          var box;

          var myChangeEvent = mMyChangeEvent;

          function setupEachBird(
            i,
            randomcolornotLightasRGB,
            isfade,
            colorofbones
          ) {
            function callEndEach() {
              endEach(i);
            }

            container1 = mContainer1[i];
            container2 = mContainer2[i];
            container3 = mContainer3[i];
            box = mBox[i];

            scaleFactor = getScaleFactor();

            adjustForScale = 1 + (1 / scaleFactor - 1) / 2;

            if (scaleFactor < 1) {
              adjustforScaleWithFudge = 1.5 / scaleFactor;
            } else {
              adjustforScaleWithFudge = 1;
            }

            transitionDuration = getTransitionDuration();

            if (
              !slowestTransitionDuration ||
              transitionDuration > slowestTransitionDuration
            ) {
              container1ForSlowestTransitionDuration = container1;
              slowestTransitionDuration = transitionDuration;
            }

            isHoverDown = /*mIsHoverDown =*/ Math.random() > 0.5;

            isFaceRight = Math.random() > 0.5;

            box.style.display = "block";

            setTip(box);

            setStartingPositionAndDirectionFacing(
              isHoverDown,
              container3,
              isFaceRight,
              box,
              mMyGraphics,
              mMygraphicsSetTransform,
              pageWidth,
              adjustForScale,
              i,
              container2
            );

            createVectorButterfly(
              i,
              box,
              cssObj,
              randomcolornotLightasRGB,
              isfade,
              colorofbones
            );

            setYTransition(
              transitionDuration,
              container1,
              animationHeight,
              adjustforScaleWithFudge,
              isHoverDown,
              mMyGraphics,
              mMygraphicsSetTransition,
              mMygraphicsSetTransform
            );

            setXTransition(
              pageWidth,
              adjustForScale,
              transitionDuration,
              container2,
              mMyGraphics,
              mMygraphicsSetTransition,
              mMygraphicsSetTransform,
              isHoverDown,
              i
            );

            setScaleTransition(
              transitionDuration,
              container3,
              scaleFactor,
              mMyGraphics,
              mMygraphicsSetTransition,
              mMygraphicsSetTransform
            );

            myChangeEvent.add("transitionend", container1, callEndEach);
          } // end function setupEachBird()

          var randomColornotLightasRGB = mRandomColorNotLightAsRGB;
          var colorOFbones = mColorsOfBonesOfVectorButterflies;

          var j;
          for (j = 0; j < countBird; j++) {
            setupEachBird(j, randomColornotLightasRGB, isFade, colorOFbones);
          }

          myChangeEvent.add(
            "transitionend",
            container1ForSlowestTransitionDuration,
            endeachLast
          );

          createAbstractButterflies(slowestTransitionDuration, cssObj, isFade);

          createRose(slowestTransitionDuration, cssObj, isFade);

          createFlowers(slowestTransitionDuration, cssObj, isFade);

          var butflyStylesheet = doc.createElement("style");
          butflyStylesheet.innerHTML = cssObj.css;

          mButterflyStylesheet = butflyStylesheet;

          headElement.appendChild(butflyStylesheet);

          mRoseOuterContainerStyle.display = "block";
        } // end of function startPart2()

        function endEach(i) {
          var doc = mDoc;

          var container3 = mContainer3[i];
          if (container3) {
            doc.body.removeChild(container3);
            mContainer3[i] = null;
          }
        }

        function endeachLast() {
          clearAbstractButterflies();

          clearFlowers();

          mRoseOuterContainerStyle.display = "none";

          if (mIsHidden) {
            mContainerForAbstractButterflies.style.right = "";

            var outerContainerStyle = mRoseOuterContainerStyle;
            outerContainerStyle.top = "";
            outerContainerStyle.bottom =
              cPositionOfRoseFromBottomInButterflyDoodle;

            mStageForFlowers.style.right = "";

            mIsHidden = false;
          }

          tSession.doodle = null;
        }

        function stop() {
          var timeoutIdForStartPart2 = mTimeoutIdForStartPart2;
          if (timeoutIdForStartPart2) {
            clearTimeout(timeoutIdForStartPart2);
          }

          clear();
        }

        function clearAbstractButterflies() {
          var mainElementForAbstractButterflies =
            mMainElementForAbstractButterflies;

          if (mainElementForAbstractButterflies) {
            mContainerForAbstractButterflies.removeChild(
              mainElementForAbstractButterflies
            );
            mainElementForAbstractButterflies = null;
          }

          var butterflyStylesheet = mButterflyStylesheet;
          if (butterflyStylesheet) {
            mHeadElement.removeChild(butterflyStylesheet);
            mButterflyStylesheet = null;
          }
        }

        function clearFlowers() {
          var stage = mStageForFlowers;
          var innerStage = mInnerStageForFlowers;

          if (innerStage) {
            stage.removeChild(innerStage);
            mInnerStageForFlowers = null;
          }

          stage.style.display = "none";
        }

        function clear() {
          var container3s = mContainer3;
          var container3;
          var doc = mDoc;
          var countBird = mCountBird;
          var i;

          for (i = 0; i < countBird; i++) {
            container3 = container3s[i];
            if (container3) {
              doc.body.removeChild(container3);
              mContainer3[i] = null;
            }
          }

          clearAbstractButterflies();

          clearFlowers();

          if (mIsHidden) {
            mContainerForAbstractButterflies.style.right = "";

            var outerContainerStyle = mRoseOuterContainerStyle;
            outerContainerStyle.top = "";
            outerContainerStyle.bottom =
              cPositionOfRoseFromBottomInButterflyDoodle;

            mStageForFlowers.style.right = "";

            mIsHidden = false;
          }

          tSession.doodle = null;

          mRoseOuterContainerStyle.display = "none";
        }

        function hide() {
          var container3s = mContainer3;
          var container3;

          var countBird = mCountBird;
          var i;

          for (i = 0; i < countBird; i++) {
            container3 = container3s[i];
            if (container3) {
              container3.style.right =
                cOffsetFromTheBottomOfScreenUsedToHideButterflyInButterfliesDoodle;
            }
          }

          mContainerForAbstractButterflies.style.right =
            cOffsetFromTheBottomOfScreenUsedToHideButterflyInButterfliesDoodle;

          var outerContainerStyle = mRoseOuterContainerStyle;
          outerContainerStyle.top =
            cOffsetFromTheTopOfScreenUsedToHideRoseInButterflyDoodle;
          outerContainerStyle.bottom = "";

          mStageForFlowers.style.right =
            cOffsetFromTheBottomOfScreenUsedToHideFlowersInFlowersDoodle;

          mIsHidden = true;
        }

        function showAfterHide() {
          var container3s = mContainer3;
          var container3;

          var countBird = mCountBird;
          var i;

          for (i = 0; i < countBird; i++) {
            container3 = container3s[i];
            if (container3) {
              container3.style.right = "0";
            }
          }

          mContainerForAbstractButterflies.style.right = "";

          var outerContainerStyle = mRoseOuterContainerStyle;
          outerContainerStyle.top = "";
          outerContainerStyle.bottom =
            cPositionOfRoseFromBottomInButterflyDoodle;

          mStageForFlowers.style.right = "";

          mIsHidden = false;
        }

        return {
          initialise: initialise,
          start: start,
          stop: stop,
          hide: hide,
          showAfterHide: showAfterHide,
        };
      })(this);

      var myG = myGraphics;

      butterflyDoodle.initialise(
        $_,
        myG,
        myG.getPageSizeOnScreen,
        myG.setAnimation,
        myG.setTransition,
        myG.setTransform,
        myG.setAnimationDuration,
        myG.setlinearGradient,
        myG.setBorderRadius,
        getStyleObjectOfRuleInStylesheet,
        myChangeEvent,
        headelement,
        cGreenColors,
        getRandValueGivenPercentChances,
        cDarkColors
      );

      var doodles = this.doodles;
      doodles[doodles.length] = butterflyDoodle;
    }; // end of Session setupButterflyDoodle function

    var headElement = document.getElementsByTagName("head")[0];

    session.setupButterflyDoodle(headElement);

    session.ButterflyDoodle.start();
  }, []);

  return (
    <>
      <svg
        id="bfyvSVG"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        className="bfyvSvg-defs"
      >
        <defs>
          <g id="bfyvShape-moth1">
            <path
              id="bfyvMain"
              style={{ fill: "#1cb1f2" }}
              d="M2.457,32.759c6.752,15.757,12.862,9.004,19.615,31.513 c4.96,16.533,12.703,21.434,25.763,19.562c-8.291,5.666-11.245,14.512-2.29,30.097c10.611,18.467,29.262,32.338,38.587,34.268 s19.615-6.431,21.866-18.328c2.251-11.898,3.216-13.185,11.255-50.485V66.202v-8.039c0,0-44.054-38.266-73.637-42.767 C14.033,10.894-4.296,17.003,2.457,32.759z"
            />
            <g id="bfyvGray">
              <path
                style={{ opacity: "0.25", fill: "#231F20" }}
                d="M117.253,66.202v-8.039c0,0-18.092-15.715-38.874-28.188 c-0.713,0.005-1.426,0.019-2.138,0.05c-0.845,0.037-1.785,0.136-2.336,0.776c-1.082,1.255,0.241,3.104,1.484,4.2 c-4.664-1.523-9.341-3.008-14.03-4.454c-1.262-0.389-2.927-0.643-3.646,0.465c-0.371,0.571-0.322,1.319-0.153,1.979 c0.788,3.075,3.667,5.073,6.336,6.792c-5.27-1.066-10.64-1.636-16.017-1.699c1.343,2.093,3.594,3.397,5.774,4.592 c4.539,2.487,9.149,4.844,13.822,7.068c-1.256,0.657-2.719,0.767-4.077,1.175c-1.358,0.408-2.751,1.292-3.027,2.682 c-0.142,0.715,0.038,1.456,0.289,2.141c1.25,3.41,4.231,5.957,7.526,7.483s6.92,2.161,10.498,2.781 c-4.233,0.646-8.466,1.291-12.698,1.936c-1.283,0.195-2.896,0.742-2.924,2.04c-0.013,0.59,0.345,1.123,0.742,1.56 c3.252,3.581,8.933,3.011,13.693,2.153c6.792-1.224,13.584-2.448,20.377-3.672C109.057,67.539,117.253,66.202,117.253,66.202z"
              />
              <path
                style={{ opacity: "0.25", fill: "#231F20" }}
                d="M112.228,67.787c-2.598-0.367-5.221,0.297-7.739,1.031 c-7.427,2.165-14.659,4.994-21.583,8.444c-1.494,0.744-3.216,1.968-2.936,3.613c-1.226,3.942,15.291-3.223,22.495-6.209 c-7.234,3.414-14.403,7.708-18.865,14.346c-0.658,0.979-1.243,2.321-0.531,3.262c0.523,0.691,1.508,0.802,2.375,0.781 c6.148-0.141,11.579-3.836,16.54-7.471c-3.057,2.861-5.321,6.561-6.478,10.584c-0.418,1.455-0.608,3.244,0.496,4.279 c1.373,1.287,3.636,0.439,5.126-0.711c2.406-1.856,4.297-4.375,5.408-7.204c-0.626,2.171-2.066,6.066-0.944,6.688 c1.771,1.537,3.293-1.535,4.463-2.938c4.365-5.225,6.148-12.076,7.745-18.695c0.418-1.735,0.831-3.565,0.336-5.28 C117.41,69.788,114.825,68.153,112.228,67.787z"
              />
            </g>
            <g id="bfyvWhite">
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M22.137,40.268c-0.849,0-1.726,0.543-1.769,1.475 c-0.037,0.815,0.565,1.768,1.475,1.768c0.849,0,1.727-0.542,1.769-1.475C23.648,41.22,23.047,40.268,22.137,40.268z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M24.262,24.568c-1.179,0-1.399,1.843-0.204,1.843 C25.237,26.411,25.458,24.568,24.262,24.568z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M14.231,25.278c0.04-0.037,0.072-0.081,0.107-0.123 c0.309-0.319,0.476-0.754,0.291-1.183c-0.003,0.003-0.005,0.005-0.008,0.008c-0.141-0.572-0.65-1.052-1.262-1.052 c-0.448,0.315-0.896,0.631-1.344,0.947c-0.293,0.838,0.385,1.732,1.244,1.765c0.055,0.002,0.111-0.01,0.168-0.017 c0.058,0.023,0.177-0.003,0.358-0.081C13.955,25.494,14.104,25.406,14.231,25.278z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M20.52,21.826c0.084-0.715-0.407-1.361-1.148-1.382 c-0.707-0.021-1.308,0.59-1.226,1.314c0.005,0.047,0.01,0.095,0.016,0.142c0.146,1.277,2.176,1.467,2.337,0.1 C20.506,21.942,20.513,21.884,20.52,21.826z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M15.237,34.119c-0.91,0-1.784,0.802-1.741,1.741c0.042,0.943,0.767,1.742,1.741,1.742 c0.91,0,1.784-0.802,1.741-1.741C16.936,34.917,16.212,34.119,15.237,34.119z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M42.191,72.243c-2.578,0-2.182,3.992,0.384,3.992 C45.153,76.234,44.757,72.243,42.191,72.243z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M44.656,29.401c-0.554,0-0.545,0.859,0.009,0.859S45.209,29.401,44.656,29.401z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M25.514,36.061c-1.595,0-1.91,2.492-0.295,2.492 C26.814,38.553,27.129,36.061,25.514,36.061z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M33.376,61.474c-1.237,0-2.44,1.016-2.413,2.311c0.027,1.257,0.991,2.413,2.312,2.413 c1.237,0,2.44-1.016,2.413-2.311C35.661,62.629,34.696,61.474,33.376,61.474z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M35.116,16.812c-1.552,0-1.267,2.404,0.277,2.404 C36.945,19.215,36.66,16.812,35.116,16.812z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M77.376,51.331c2.442,0,1.936-3.77-0.477-3.77 C74.458,47.561,74.963,51.331,77.376,51.331z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M48.942,50.548c-0.15-0.651-0.902-1.142-1.562-0.848 c-0.025,0.011-0.051,0.022-0.076,0.034c-0.979,0.437-0.932,1.75-0.107,2.144c-0.044-0.004-0.017,0.01,0.078,0.042 c0.036,0.013,0.071,0.025,0.11,0.035c0.031,0.009,0.058,0.018,0.095,0.03c0.07,0.009,0.139,0.002,0.208,0.004 c0.037,0,0.066,0.014,0.105,0.012c-0.018-0.004-0.03-0.007-0.047-0.01c0.054,0,0.108,0.008,0.163,0.003 C48.624,51.952,49.095,51.211,48.942,50.548z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M101.91,58.289c0.253-0.486,0.505-0.972,0.758-1.458 c0.034-0.763-0.689-1.408-1.424-1.402c-0.741,0.006-1.44,0.658-1.402,1.424c0.03,0.596,0.211,0.955,0.646,1.349 C100.833,58.516,101.529,58.617,101.91,58.289z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M72.562,61.389c1.71,0,1.868-2.664,0.146-2.664 C70.999,58.726,70.841,61.389,72.562,61.389z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M53.266,34.617c0.824,0,1.694-0.446,1.77-1.371c0.062-0.766-0.486-1.77-1.372-1.77 c-0.824,0-1.694,0.446-1.77,1.371C51.832,33.613,52.38,34.617,53.266,34.617z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M71.696,72.52c0.085-0.071,0.17-0.143,0.255-0.214 c0.561-0.472,0.552-1.399,0.071-1.917c-0.443-0.478-1.453-0.644-1.917-0.071c-0.132,0.157-0.265,0.314-0.397,0.471 c-0.421,0.5-0.216,1.346,0.241,1.731C70.459,72.952,71.178,72.955,71.696,72.52z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M32.988,54.343c0.024-0.008,0.048-0.017,0.072-0.024 c0.581-0.197,1.025-0.667,1.039-1.307c0.013-0.607-0.404-1.171-0.983-1.349c-0.05-0.015-0.1-0.03-0.149-0.045 c-0.885-0.271-1.785,0.486-1.778,1.376C31.195,53.875,32.11,54.64,32.988,54.343z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M55.757,99.48c-0.062,0-0.069,0.097-0.007,0.097S55.82,99.48,55.757,99.48z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M68.578,103.393c1.381,0,2.629-1.404,2.498-2.771 c-0.143-1.484-1.292-2.498-2.772-2.498c-1.381,0-2.629,1.404-2.498,2.771C65.948,102.377,67.097,103.393,68.578,103.393z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M97.476,104.439c-0.519,0-0.992,0.33-1.038,0.878 c-0.041,0.485,0.356,1.038,0.878,1.038c0.519,0,0.992-0.33,1.038-0.879C98.395,104.992,97.997,104.439,97.476,104.439z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M77.346,122.857c-1.629,0-1.901,2.542-0.255,2.542 C78.719,125.399,78.991,122.857,77.346,122.857z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M84.572,96.312c-1.757,0-1.841,2.734-0.077,2.734 C86.252,99.047,86.336,96.312,84.572,96.312z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M83.437,132.299c0,0.205,0.011,0.285,0.164,0.428c0.06,0.056,0.183,0.063,0.247,0.009 c0.139-0.12,0.175-0.196,0.175-0.379C84.022,131.981,83.437,131.921,83.437,132.299z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M80.15,134.337c-0.739,0-1.384,0.575-1.406,1.329 c-0.021,0.725,0.587,1.406,1.329,1.406c0.739,0,1.384-0.576,1.406-1.33C81.5,135.018,80.893,134.337,80.15,134.337z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M82.279,94.513c0.062,0,0.069-0.097,0.007-0.097S82.217,94.513,82.279,94.513z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M89.774,137.776c-1.996,0-2.44,3.115-0.423,3.115 C91.346,140.892,91.791,137.776,89.774,137.776z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M50.268,102.34c-2.577,0-2.182,3.991,0.384,3.991 C53.23,106.331,52.834,102.34,50.268,102.34z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M102.567,87.297c-1.773,0-1.832,2.758-0.053,2.758 C104.288,90.055,104.346,87.297,102.567,87.297z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M91.979,86.034c-1.742,0-1.851,2.712-0.101,2.712 C93.621,88.746,93.73,86.034,91.979,86.034z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M100.904,128.99c-1.151,0-2.121,1.31-1.964,2.402c0.184,1.274,1.173,1.963,2.401,1.963 c1.151,0,2.121-1.309,1.964-2.4C103.122,129.68,102.132,128.99,100.904,128.99z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M60.562,25.956c0.293-0.054,0.386-0.217,0.573-0.419 c-0.012-1.532-0.375-2.137-1.09-1.813c-0.129,0.038-0.243,0.106-0.34,0.204c-0.197,0.185-0.324,0.468-0.329,0.738 c-0.002,0.112,0.027,0.219,0.061,0.324c-0.02,0.045,0.003,0.146,0.081,0.317c0.102,0.165,0.219,0.317,0.353,0.458 C60.031,25.953,60.335,25.998,60.562,25.956z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M56.924,108.887c-2.75,0-3.264,4.301-0.475,4.301 C59.199,113.188,59.713,108.887,56.924,108.887z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M53.242,59.583c-0.476,0-0.826,0.542-0.776,0.977c0.06,0.517,0.499,0.776,0.977,0.776 c0.476,0,0.826-0.542,0.776-0.977C54.159,59.842,53.72,59.583,53.242,59.583z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M54.099,91.461c-0.221-0.949-1.727-1.088-1.975-0.074 c-0.011,0.045-0.022,0.09-0.033,0.135c-0.162,0.658,0.298,1.334,0.999,1.342c0.683,0.008,1.185-0.65,1.031-1.311 C54.113,91.521,54.106,91.491,54.099,91.461z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M64.819,117.838c-3.99,0-4.358,6.216-0.343,6.216 C68.466,124.054,68.834,117.838,64.819,117.838z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M69.296,111.33c-2.578,0-2.182,3.992,0.384,3.992 C72.257,115.322,71.861,111.33,69.296,111.33z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M60.58,105.219c-1.366,0-1.376,2.126-0.004,2.126 C61.941,107.345,61.952,105.219,60.58,105.219z"
              />
              <path
                style={{ opacity: "0.25", fill: "#FFFFFF" }}
                d="M76.1,126.199c-0.632-0.469-1.275-0.611-2.06-0.611c-0.675,0-1.48,0.521-1.889,1.024 c-0.434,0.535-0.715,1.368-0.611,2.061c0.108,0.719,0.423,1.442,1.024,1.889c0.632,0.47,1.275,0.612,2.06,0.612 c0.675,0,1.48-0.521,1.889-1.025c0.434-0.534,0.715-1.367,0.611-2.06C77.017,127.37,76.701,126.646,76.1,126.199z"
              />
            </g>
            <path
              id="black"
              style={{ fill: "#2A0E07" }}
              d="M119.744,44.906c-0.432,0-0.834,0.038-1.212,0.105 C111.203,25.333,94.966,3.371,94.218,2.517c-0.767-0.877-1.425-3.234-2.521-2.302c-1.096,0.932,1.37,2.138,1.37,2.138 S92.929,3.372,94,3.503c0,0,5.938,7.827,10.25,14.964c6.474,10.715,11.965,22.628,13.779,26.68 c-3.596,0.985-4.503,5.059-3.919,8.202l-2.333-1.103C98.575,41.592,67.056,17.901,43.774,14.358 c-6.339-0.964-12.222-1.454-17.484-1.454c-12.627,0-21.129,2.773-24.588,8.019c-2.196,3.33-2.266,7.452-0.209,12.25 c3.013,7.032,5.939,9.746,8.77,12.371c0.7,0.648,1.392,1.292,2.08,1.995c0.094,0.257,0.285,0.479,0.555,0.6 c0.009,0.004,0.019,0.007,0.027,0.011c1.989,2.152,3.956,4.984,5.989,10.133c0.001,0.003,0.002,0.005,0.003,0.008 c0.708,1.792,1.423,3.858,2.15,6.283c4.352,14.506,10.892,20.695,21.869,20.696c0,0,0.001,0,0.001,0c0.481,0,0.975-0.017,1.477-0.04 c-2.246,2.095-3.779,4.438-4.62,7.069c-1.897,5.936-0.312,13.184,4.842,22.155c1.815,3.158,3.898,6.22,6.15,9.136 c0.008,0.014,0.021,0.024,0.029,0.037c10.451,13.517,24.587,23.839,33.105,25.601c0.958,0.198,1.948,0.299,2.94,0.299 c9.246,0,18.105-8.548,20.169-19.461c1.029-5.438,1.804-8.716,3.087-14.144c1.128-4.771,2.685-11.36,5.195-22.707 c0.665,10.199,2.016,24.19,4.432,24.19V44.906z M35.848,16.16c2.901-0.106,5.809,0.058,8.682,0.469 c5.109,0.908,10.638,2.792,16.295,5.3c2.278,1.205,4.466,2.579,6.525,4.13c3.193,2.406,6.108,5.209,9.566,7.216 c3.327,1.93,7.053,3.062,10.5,4.767c5.238,2.591,9.825,6.489,14.729,9.652l-8.689-4.105C74.52,34.644,53.71,24.818,31.831,19.668 c-0.585-0.471-1.17-0.941-1.755-1.412C31.372,16.582,33.732,16.238,35.848,16.16z M7.962,22.743c0.506-1.92,2.278-3.303,4.18-3.875 c0.289-0.087,0.581-0.153,0.875-0.211c28.333,2.646,55.462,15.455,79.543,26.832l17.997,8.502c1.438,1.156,2.657,2.153,3.607,2.941 C92.849,46.826,70.211,40.173,46.782,37.124c-0.111-0.131-0.243-0.245-0.414-0.311c-9.86-3.759-21.037-8.019-32.449-8.131 c-1.068-0.01-2.144,0.017-3.218,0.043C8.729,27.372,7.361,25.018,7.962,22.743z M114.475,59.41 c-0.161,0.835-0.293,1.815-0.348,2.904c-22.391-2.471-29.897-5.986-34.008-7.915l-0.104-0.049 C66.1,47.824,55.373,42.562,50.079,39.689C72.464,42.968,94.086,49.593,114.475,59.41z M19.93,47.952 c-4.349-2.468-7.875-6.399-9.753-11.04c-0.639-1.58-0.967-3.685,0.375-4.736c0.571-0.448,1.321-0.58,2.037-0.699 c1.227-0.203,2.454-0.406,3.681-0.609c9.823,0.581,19.239,4.056,28.373,7.534c0.216,0.518,1.243,1.429,6.299,4.121 c-5.771-0.006-13.403,0.936-16.787,2.813C29.875,47.713,24.792,48.597,19.93,47.952z M21.549,51.725 c-0.064-0.533,0.15-1.08,0.495-1.495c0.327,0.013,0.653,0.025,0.98,0.025c4.229,0,8.463-1.036,12.15-3.083 c3.792-2.104,15.472-3.124,20.442-2.236c2.401,1.21,5.336,2.655,8.898,4.376c-11.647,4.124-24.023,6.564-36.906,7.283 c-1.359-0.519-2.661-1.187-3.862-2.009C22.722,53.885,21.697,52.957,21.549,51.725z M29.097,67.986 c-2.48-1.302-4.213-4.392-2.97-6.876c0.626-1.252,1.781-2.007,3.108-2.504c13.216-0.876,25.899-3.546,37.814-7.973 c0.035-0.013,0.059-0.041,0.092-0.057c3.445,1.651,7.401,3.526,11.981,5.674l0.104,0.049c3.789,1.778,10.391,4.869,28.149,7.299 c-12.303,0.856-25.29,1.494-37.933,2.11C55.979,66.364,42.113,67.041,29.097,67.986z M34.109,77.414 c-1.649-0.75-3.422-1.818-3.808-3.588c-0.327-1.499,0.528-3.003,1.773-3.943c12.166-0.841,24.986-1.47,37.472-2.078 c12.259-0.597,24.84-1.215,36.82-2.033C90.1,68.265,61.841,75.749,52.503,80.04c-0.798,0.367-1.556,0.746-2.281,1.135 C44.674,80.967,39.165,79.712,34.109,77.414z M64.548,80.374c8.236-2.934,17.275-5.436,25.518-7.447 c-12.694,5.347-25.45,10.878-38.037,16.489c-1.942-0.222-2.836-2.7-1.326-4.068c0.495-0.448,1.016-0.864,1.55-1.265 C55.78,83.282,59.811,82.062,64.548,80.374z M56.848,80.527c3.792-1.427,8.941-3.056,14.663-4.678 c-2.6,0.809-5.17,1.658-7.667,2.547c-2.188,0.779-4.215,1.454-6.109,2.034L56.848,80.527z M45.697,95.204 c0.23-0.316,0.478-0.62,0.731-0.918c0.986-0.51,1.978-0.96,2.894-1.37C63.976,86.35,78.913,79.871,93.72,73.661 c3.257-1.366,6.775-2.831,10.436-3.905c2.466-0.511,4.681-0.948,6.563-1.307C99.836,74.044,89.121,80.017,78.74,85.826 c-3.084,1.725-6.175,3.454-9.282,5.181c-7.016,1.443-13.792,4.04-19.988,7.634c-0.431,0.154-0.86,0.314-1.293,0.463 c-1.027,0.35-2.221,0.098-2.899-0.749C44.431,97.295,45.031,96.119,45.697,95.204z M49.318,109.789 c-0.971,0.438-1.994,0.631-2.883,0.115c-0.782-0.453-1.205-1.358-1.338-2.252c-0.238-1.594,0.32-3.201,1.253-4.536 c6.237-4.29,13.226-7.491,20.56-9.369C60.84,100.435,53.764,106.32,49.318,109.789z M57.649,115.376 c-0.745,0.335-1.52,0.589-2.332,0.608c-1.274,0.029-2.647-0.633-3.069-1.836c-0.299-0.854-0.081-1.797,0.215-2.65 c0.29-0.835,0.662-1.641,1.095-2.411c4.966-4.053,11.554-9.89,16.951-16.264c3.098-1.721,6.18-3.444,9.255-5.165 c9.997-5.595,20.305-11.337,30.758-16.745L93.576,93.461c-2.318,3.085-4.943,6.547-8.361,8.708c-0.291-0.178-0.6-0.284-0.88-0.36 c-5.963-1.614-11.762,1.988-17.141,6.117c-0.869,0.666-1.737,1.321-2.601,1.973C62.191,111.71,59.857,113.478,57.649,115.376z M61.09,126.312c-1.117-0.712-1.74-2.008-1.749-3.332c-0.019-2.774,0.722-5.521,2.035-7.957c1.456-1.159,2.952-2.295,4.48-3.448 c0.868-0.654,1.741-1.313,2.614-1.983c4.613-3.541,9.982-7.196,15.316-5.756c0.247,0.066,0.321,0.106,0.333,0.111 c0.026,0.057,0.043,0.349-0.204,0.931c-2.182,5.168-6.292,9.436-10.267,13.564c-1.296,1.346-2.603,2.707-3.859,4.109 c-1.375,1.052-2.781,2.064-4.22,3.027C64.254,126.459,62.72,127.351,61.09,126.312z M71.552,134.313 c-1.399,0.11-2.929-0.459-3.607-1.688c-0.667-1.209-0.377-2.71,0.047-4.024c0.111-0.344,0.234-0.683,0.361-1.021 c1.971-2.655,4.352-5.133,6.808-7.684c4.107-4.266,8.355-8.676,10.688-14.203c0.282-0.668,0.386-1.222,0.379-1.682 c3.448-2.145,6.055-5.364,8.341-8.385c-0.961,2.862-1.778,5.873-2.573,8.851c-1.159,4.337-2.254,8.435-3.748,11.866 c-2.532,5.816-6.853,10.396-11.428,15.244c-0.215,0.229-0.434,0.462-0.65,0.691c-0.249,0.167-0.487,0.349-0.74,0.508 C74.242,133.533,72.951,134.203,71.552,134.313z M82.993,137.979c-0.45,0.44-0.907,0.872-1.376,1.292 c-1.084,0.971-2.655,1.328-3.959,0.683c-2.012-0.996-1.775-3.246-0.991-5.137c0.561-0.601,1.123-1.197,1.681-1.788 c4.497-4.767,9.148-9.694,11.826-15.848c1.557-3.576,2.671-7.747,3.851-12.162c1.766-6.606,3.591-13.438,6.976-17.941l12.134-16.143 C105.305,94.079,96.936,117.654,82.993,137.979z M109.489,107.959c-0.035,0.629-0.068,1.26-0.1,1.89 c-0.501,2.148-0.933,3.975-1.315,5.591c-1.29,5.457-2.068,8.75-3.106,14.236c-0.224,1.182-0.539,2.331-0.924,3.442 c-0.42,0.758-0.856,1.507-1.328,2.233c-0.839,1.293-1.949,2.662-3.672,2.398c-1.159-0.178-2.065-1.103-2.415-2.223 c-0.117-0.374-0.172-0.742-0.198-1.108c4.904-11.366,9.504-22.899,13.757-34.546C109.845,102.563,109.636,105.278,109.489,107.959z M114.246,81.893C107.2,103.03,99,123.926,89.818,144.188c-0.26,0.211-0.542,0.398-0.858,0.546c-0.733,0.344-1.603,0.416-2.335,0.07 c-1.352-0.639-1.526-2.199-1.474-3.557c0.042-1.106,0.165-2.175,0.368-3.22c13.18-19.612,21.321-42.033,28.834-64.154 c0.141,0.504,0.364,1.033,0.713,1.581C115.066,75.455,112.771,78.854,114.246,81.893z"
            />
          </g>
          <linearGradient id="bfyvGradient1" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="gold" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
          <radialGradient id="bfyvRadialGradient1">
            <stop offset="0%" stopColor="magenta" />
            <stop offset="100%" stopColor="yellow" />
          </radialGradient>
          <linearGradient id="bfyvHorizontalGradient1">
            <stop offset="0%" stopColor="gold" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
          <radialGradient
            id="bfyvRaDialGraDientFromCorner1"
            fx="100%"
            fy="50%"
            cx="100%"
            cy="50%"
            r="70%"
          >
            <stop offset="0%" stopColor="gold" />
            <stop offset="100%" stopColor="red" />
          </radialGradient>
          <linearGradient
            id="bfyvGradIent3Stops1"
            gradientTransform="rotate(90)"
          >
            <stop offset="0%" stopColor="gold" />
            <stop offset="50%" stopColor="blue" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
          <linearGradient
            id="bfyvGradiEnt4Stops1"
            gradientTransform="rotate(90)"
          >
            <stop offset="0%" stopColor="gold" />
            <stop offset="33.3333%" stopColor="green" />
            <stop offset="66.6666%" stopColor="blue" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
          <radialGradient id="bfyvRadiaLGradIent3Stops1">
            <stop offset="0%" stopColor="magenta" />
            <stop offset="50%" stopColor="blue" />
            <stop offset="100%" stopColor="yellow" />
          </radialGradient>
          <radialGradient id="bfyvRadiAlGraDient4Stops1">
            <stop offset="0%" stopColor="magenta" />
            <stop offset="33.3333%" stopColor="blue" />
            <stop offset="66.6666%" stopColor="green" />
            <stop offset="100%" stopColor="yellow" />
          </radialGradient>
          <linearGradient id="bfyvHorizoNtalGradiEnt3Stops1">
            <stop offset="0%" stopColor="gold" />
            <stop offset="50%" stopColor="blue" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
          <linearGradient id="bfyvHoriZontalGRadient4Stops1">
            <stop offset="0%" stopColor="gold" />
            <stop offset="33.3333%" stopColor="blue" />
            <stop offset="66.666%" stopColor="green" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
          <radialGradient
            id="bfyvRaDiaLGraDienTFromCorner3Stops1"
            fx="100%"
            fy="50%"
            cx="100%"
            cy="50%"
            r="70%"
          >
            <stop offset="0%" stopColor="gold" />
            <stop offset="50%" stopColor="blue" />
            <stop offset="100%" stopColor="red" />
          </radialGradient>
          <radialGradient
            id="bfyvRaDIalGraDienTFromCorner4Stops1"
            fx="100%"
            fy="50%"
            cx="100%"
            cy="50%"
            r="70%"
          >
            <stop offset="0%" stopColor="gold" />
            <stop offset="33.333%" stopColor="blue" />
            <stop offset="66.6666%" stopColor="green" />
            <stop offset="100%" stopColor="red" />
          </radialGradient>
          <linearGradient
            id="bfyvGrADient5Stops1"
            gradientTransform="rotate(90)"
          >
            <stop offset="0%" stopColor="gold" />
            <stop offset="25%" stopColor="green" />
            <stop offset="50%" stopColor="blue" />
            <stop offset="75%" stopColor="yellow" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
          <radialGradient id="bfyvRadiAlGrAdient5Stops1">
            <stop offset="0%" stopColor="magenta" />
            <stop offset="25%" stopColor="blue" />
            <stop offset="50%" stopColor="green" />
            <stop offset="75%" stopColor="red" />
            <stop offset="100%" stopColor="yellow" />
          </radialGradient>
          <linearGradient id="bfyvHorizonTAlGradieNT5Stops1">
            <stop offset="0%" stopColor="gold" />
            <stop offset="25%" stopColor="blue" />
            <stop offset="50%" stopColor="green" />
            <stop offset="75%" stopColor="yellow" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
          <radialGradient
            id="bfyvRaDiaLGrADientFrOmCorner5Stops1"
            fx="100%"
            fy="50%"
            cx="100%"
            cy="50%"
            r="70%"
          >
            <stop offset="0%" stopColor="gold" />
            <stop offset="25%" stopColor="green" />
            <stop offset="50%" stopColor="blue" />
            <stop offset="75%" stopColor="yellow" />
            <stop offset="100%" stopColor="red" />
          </radialGradient>
        </defs>
      </svg>
      <div id="bfyaContainer" />
      <div id="rseaOutercoNtaIner" className="rseaOuterContainer">
        <div className="rseaContainer">
          <div id="rseaThorns" className="rseaThorns">
            <div id="rseaThorn1" />
            <div id="rseaThorn2" />
            <div id="rseaThorn3" />
            <div id="rseaThorn4" />
          </div>
          <div className="rseaRose-leaves">
            <div id="rseaRose-stem" />
            <div id="rseaRose-leaf" />
          </div>
          <div className="rseaRose-petals">
            <div id="rseaRosePetal1" />
            <div id="rseaRosePetal2" />
            <div id="rseaRosePetal3" />
            <div id="rseaRosePetal4" />
            <div id="rseaRosePetal5" />
            <div id="rseaRosePetal6" />
            <div id="rseaRosePetal7" />
          </div>
        </div>
      </div>
      <div id="flwraStage" />
    </>
  );
};

export default Butterflies;
