var app = angular.module('myModule',[]);


app.controller('myController', function($scope){
  $scope.headerText = "Camping Checklist!!";
  $scope.headerImg = "https://image.flaticon.com/icons/png/512/28/28757.png";


  $scope.showButton = "+";
  $scope.hideButton = "-";
// $scope.campingList = ["Tent", "Sleeping Bag", "Lantern"];
$scope.colorList =["AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"Chocolate",
"Coral",
"CornflowerBlue",
"Cornsilk",
"Crimson",
"Cyan",
"DarkBlue",
"DarkCyan",
"DarkGoldenRod",
"DarkGray",
"DarkGrey",
"DarkGreen",
"DarkKhaki",
"DarkMagenta",
"DarkOliveGreen",
"DarkOrange",
"DarkOrchid",
"DarkRed",
"DarkSalmon",
"DarkSeaGreen",
"DarkSlateBlue",
"DarkSlateGray",
"DarkSlateGrey",
"DarkTurquoise",
"DarkViolet",
"DeepPink",
"DeepSkyBlue",
"DimGray",
"DimGrey",
"DodgerBlue",
"FireBrick",
"FloralWhite",
"ForestGreen",
"Fuchsia",
"Gainsboro",
"GhostWhite",
"Gold",
"GoldenRod",
"Gray",
"Grey",
"Green",
"GreenYellow",
"HoneyDew",
"HotPink",
"IndianRed",
"Indigo",
"Ivory",
"Khaki",
"Lavender",
"LavenderBlush",
"LawnGreen",
"LemonChiffon",
"LightBlue",
"LightCoral",
"LightCyan",
"LightGoldenRodYellow",
"LightGray",
"LightGrey",
"LightGreen",
"LightPink",
"LightSalmon",
"LightSeaGreen",
"LightSkyBlue",
"LightSlateGray",
"LightSlateGrey",
"LightSteelBlue",
"LightYellow",
"Lime",
"LimeGreen",
"Linen",
"Magenta",
"Maroon",
"MediumAquaMarine",
"MediumBlue",
"MediumOrchid",
"MediumPurple",
"MediumSeaGreen",
"MediumSlateBlue",
"MediumSpringGreen",
"MediumTurquoise",
"MediumVioletRed",
"MidnightBlue",
"MintCream",
"MistyRose",
"Moccasin",
"NavajoWhite",
"Navy",
"OldLace",
"Olive",
"OliveDrab",
"Orange",
"OrangeRed",
"Orchid",
"PaleGoldenRod",
"PaleGreen",
"PaleTurquoise",
"PaleVioletRed",
"PapayaWhip",
"PeachPuff",
"Peru",
"Pink",
"Plum",
"PowderBlue",
"Purple",
"RebeccaPurple",
"Red",
"RosyBrown",
"RoyalBlue",
"SaddleBrown",
"Salmon",
"SandyBrown",
"SeaGreen",
"SeaShell",
"Sienna",
"Silver",
"SkyBlue",
"SlateBlue",
"SlateGray",
"SlateGrey",
"Snow",
"SpringGreen",
"SteelBlue",
"Tan",
"Teal",
"Thistle",
"Tomato",
"Turquoise",
"Violet",
"Wheat",
"White",
"WhiteSmoke",
"Yellow",
"YellowGreen"];

$scope.campingList = ["Tent (with stakes and guylines)",
 "Tent footprint",
 "Sun shade, tarp or screen house",
 "Sleeping bags (with optional liners)",
 "Sleeping pads",
 "Air mattresses",
 "Pump for air mattresses",
"Pillows",
 "Multi-tool or knife",
 "Trekking poles",
 "Folding chairs",
 "Folding table",
 "Cots",
 "Mallet or hammer (for tent stakes)",
 "Headlamps (with extra batteries)",
 "Flashlights (with extra batteries, bulbs)",
 "Lanterns (with mantles, if needed)",
 "Lantern fuel or batteries",
 "Water filter or treatment tablets",
 "Bikes",
 "Fishing gear (and license)",
 "Canoeing/kayaking gear",
 "Toilet paper",
"Sunscreen",
"Lip balm",
"Insect repellent",
"Hand sanitizer",
"Alcohol or antiseptic wipes",
"Spare eyeglasses/contact lenses",
"Mirror",
"First-aid kit (see First-Aid Checklist)",
"Toothbrush, toiletry kit",
"Brush/comb",
"Biodegradable soap",
"Shower water bag"]

 $scope.addItem = function(){

   $scope.campingList.push($scope.toDoItem);
   //$scope.toDoItem.reset();

 };

 $scope.randomColor = function(){

$scope.randomColorNumber = Math.floor((Math.random()*140)+1);

console.log($scope.randomColorNumber);
console.log($scope.colorList[$scope.randomColorNumber]);
return $scope.colorList[$scope.randomColorNumber];

 };

$scope.randomColorAssign = function(){
 $scope.selectedColor = $scope.randomColor();
 $scope.textColor = $scope.randomColor();
 $scope.oddListColor = $scope.randomColor();
 $scope.borderColor = $scope.randomColor();

};

$scope.clearList = function(){

// var camplist = angular.element( document.querySelector('.campingListClass') );
//console.log(camplist);
// camplist.remove();
$scope.campingList.length = 0;

};

$scope.remove = function(item){

  var index = $scope.campingList.indexOf(item);
  $scope.campingList.splice(index,1)
}

});
