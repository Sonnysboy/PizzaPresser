//==========================
// XP and Leveling Section  |                                                                                   
//==========================

var xpMars = 0;
var trainedMartian = 0;
var xpNeededMars = 20;


function getXP(amount){
    if (capturedMartian >= 1){  
    xpMars = xpMars + martianTrainer;
    document.getElementById('xpMars').innerHTML = xpMars; 
    if(xpMars>=xpNeededMars){
        capturedMartian = capturedMartian - 1;
        trainedMartian = trainedMartian = trainedMartian + 1;
        xpMars = 0;
        xpNeededMars=Math.round(xpNeededMars + 1);
        document.getElementById('xpNeededMars').innerHTML = xpNeededMars; 
        document.getElementById('trainedMartian').innerHTML = trainedMartian; 
        document.getElementById('xpMars').innerHTML = xpMars; 
        document.getElementById('martianTrainer').innerHTML = martianTrainer; 
        document.getElementById('capturedMartian').innerHTML = capturedMartian;
    }
    }
    else {
         document.getElementById("button2").disabled=true;
    }

    
}

var i = 60;
var capturedMartian = 0;
    
    function increment() {
    if (i <= 0){
    i = 60;
    capturedMartian = capturedMartian + martianHunter;
    document.getElementById('capturedMartian').innerHTML = capturedMartian;
    if (capturedMartian >= 1){
         document.getElementById("button2").disabled=false;
         }; 
    }
        i--;
        document.getElementById('nextHunt').innerHTML = i;
        
    }
    setInterval('increment()', 1000);


//==========================
// Floating Click Actions   |                                                                                   
//==========================


/*Pleae refer to Floating.txt for a full description on this lesson*/

function Float() { //The basic structure for our floating text display
    this.id = 0;
    this.timer = FloatTimer;
    this.opacity = 100;
}

//Timer Related Variables
var FloatTimer = 3; //The time floats will stay on screen in seconds
var RefreshSpeed = 10; //The number of milliseconds between refreshes
var FloatIncrement = (1000 / RefreshSpeed) * FloatTimer; //The number of resfreshes per float
var FadeSpeed = 250 / FloatIncrement; //The percentage at which floats fade per refresh

//Float Related Variables
var FloatText = "Pizza!"; //The text for floats
var Floats = []; //This array will hold all our floating text information

//Timers
var Timer = window.setInterval(function(){Tick()}, 1000); //A per second timer
var Timer2 = window.setInterval(function(){Refresh()},RefreshSpeed); //A faster timer for display updates

function CreateFloat() { //Create a new floating text div
    //Find the lowest float ID. We start with 0 to keep with array standards. Since we will splice in later, we can simply look for
    //a location that has a higher ID than its array location.
    for (var i=0;i<Floats.length;i++) {
        if (Floats[i].id > i) {break;}
    }
    
    //Note that if the array has a length of 0, i will return as 0
    
    //Create the new float class structure and assign the ID
    var NewFloat = new Float();
    NewFloat.id = i;
    Floats.splice(i,0,NewFloat); //Add the new element into its appropriate place in the array

    //Create the new div
    var NewDiv = document.createElement("div");
    NewDiv.innerHTML = FloatText;
    NewDiv.className = "floaty-text";
    NewDiv.id = "Float" + i;
    
    //Get the max left and top as the width and height of the Clickables container
    //Note the 50 and 20 are the width and height of the floating divs as set in the CSS file
    var MaxLeft = document.getElementById("floaty-text-wrapper").offsetWidth - 50;
    var MaxHeight = document.getElementById("floaty-text-wrapper").offsetHeight - 20;
    
    //Randomly create a left and top value for the new div
    var Left = Math.round(Math.random() * MaxLeft);
    var Top = Math.round(Math.random() * MaxHeight);
    
    //Readjust for the maximum left and top positions
    if (Left > MaxLeft) {Left = MaxLeft;}
    if (Top > MaxHeight) {Top = MaxHeight;}
    
    //Apply the left and top figures
    NewDiv.style.left = Left + "px";
    NewDiv.style.top = Top + "px";
    
    document.getElementById("floaty-text-wrapper").appendChild(NewDiv);
}

function Tick() {
    for (var i=0;i<Floats.length;i++) {
        Floats[i].timer--;
        
        //Get the element and store it in a variable for ease of use later
        var element = document.getElementById("Float" + Floats[i].id);

        if (Floats[i].timer <= 0) {
            //Remove the element from the display
            element.parentNode.removeChild(element);
            
            //Remove the item from the array. Since we're shifting a number down, we need to decrement i to cycle this particular number again.
            Floats.splice(i,1);
            i--;
        }
    }
}

function Refresh() {
    for (var i=0;i<Floats.length;i++) {
        //Get the element and store it in a variable for ease of use later
        var element = document.getElementById("Float" + Floats[i].id);

        //Modify the display of the float by lifting it up slightly
        element.style.top = (element.offsetTop - 1) + "px";
        
        //Calculate the new opacity value
        Floats[i].opacity -= FadeSpeed;
        
        //Apply the new opacity
        element.style.opacity = Math.floor(Floats[i].opacity) / 100;
        element.style.filter = "alpha(opacity=" + Math.floor(Floats[i].opacity) + ")";
    }
}



//==================================================
// Making Pizza and Selling Pizza for moneyMars Section |                                                                                   
//==================================================

document.getElementById("button1").disabled=true;
document.getElementById("button2").disabled=true;
  
var pizzaMars = 0;
var totalMartianPizza = 0;

function pizzaClickMars(number){
    pizzaMars = pizzaMars + number;
    totalMartianPizza = totalMartianPizza + number;
    document.getElementById("pizzaMars").innerHTML = addCommas(pizzaMars);
    document.getElementById("totalMartianPizza").innerHTML = addCommas(totalMartianPizza);
    if (pizzaMars >= 1){
    document.getElementById("button1").disabled=false;
    updateColours();
    };
};

var moneyMars = 0;

function sellClickMars(number){
    moneyMars = moneyMars + pizzaMars;    
    pizzaMars = 0;
    document.getElementById("moneyMars").innerHTML = addCommas(moneyMars);
    document.getElementById("pizzaMars").innerHTML = addCommas(pizzaMars);
    document.getElementById("totalMartianPizza").innerHTML = addCommas(totalMartianPizza);
    document.getElementById("button1").disabled=true;
    updateColours();
};

var secondMars = 0;

function pizzaPerSecondMars() {

    var secondMars = (martian * 2)+(marsRover * 8)+(marsMine * 30)+(marsPark * 160)+(marsBrewery * 800)+(marsHotel * 3000)+(marsEcosystem * 10000)+(marsHarvester * 200000)+(marsExcavator * 1500000)+(marsExtractor * 10000000)+(marsAtmosphere * 185000000);
    document.getElementById("secondMars").innerHTML = addCommas(secondMars);
};

function updateColours() {

    // Pizza Makers //
    var martianCost = Math.floor(100 * Math.pow(1.05, martian));
    var marsRoverCost = Math.floor(300 * Math.pow(1.05, marsRover)); 
    var marsMineCost = Math.floor(800 * Math.pow(1.05, marsMine)); 
    var marsParkCost = Math.floor(10000 * Math.pow(1.05, marsPark));  
    var marsBreweryCost = Math.floor(50000 * Math.pow(1.05, marsBrewery));  
    var marsHotelCost = Math.floor(300000 * Math.pow(1.05, marsHotel));
    var marsEcosystemCost = Math.floor(1000000 * Math.pow(1.05, marsEcosystem));
    var marsHarvesterCost = Math.floor(25000000 * Math.pow(1.05, marsHarvester));
    var marsExcavatorCost = Math.floor(300000000 * Math.pow(1.05, marsExcavator)); 
    var marsExtractorCost = Math.floor(4000000000 * Math.pow(1.05, marsExtractor)); 
    var marsAtmosphereCost = Math.floor(100000000000 * Math.pow(1.05, marsAtmosphere));
    var martianHunterCost = Math.floor(20 * Math.pow(1.05, totalMartianHunter));
    document.getElementById("moneyMars").innerHTML = addCommas(moneyMars);

    // Martian
    if (moneyMars >= martianCost){
         document.getElementById("martianCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < martianCost){
        document.getElementById("martianCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= martianCostTrainedMartian){
         document.getElementById("martianCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < martianCostTrainedMartian){
        document.getElementById("martianCostTrainedMartian").style.color = "#DB2929"; 
    }
    // Pizza Cart
    if (moneyMars >= marsRoverCost){
         document.getElementById("marsRoverCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < marsRoverCost){
         document.getElementById("marsRoverCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= marsRoverCostTrainedMartian){
         document.getElementById("marsRoverCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < marsRoverCostTrainedMartian){
         document.getElementById("marsRoverCostTrainedMartian").style.color = "#DB2929"; 
    }
    if (rover >= marsRoverCostRover){
         document.getElementById("marsRoverCostRover").style.color = "#4DBD33"; 
    }
    if (rover < marsRoverCostRover){
         document.getElementById("marsRoverCostRover").style.color = "#DB2929"; 
    }
    // Pizza Van
    if (moneyMars >= marsMineCost){
         document.getElementById("marsMineCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < marsMineCost){
         document.getElementById("marsMineCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= marsMineCostTrainedMartian){
         document.getElementById("marsMineCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < marsMineCostTrainedMartian){
         document.getElementById("marsMineCostTrainedMartian").style.color = "#DB2929"; 
    }
    if (taskmaster >= marsMineCostTaskmaster){
         document.getElementById("marsMineCostTaskmaster").style.color = "#4DBD33"; 
    }
    if (taskmaster < marsMineCostTaskmaster){
         document.getElementById("marsMineCostTaskmaster").style.color = "#DB2929"; 
    }
    if (mine >= marsMineCostMine){
         document.getElementById("marsMineCostMine").style.color = "#4DBD33"; 
    }
    if (mine < marsMineCostMine){
         document.getElementById("marsMineCostMine").style.color = "#DB2929"; 
    }
    // Pizza Parlour
    if (moneyMars >= marsParkCost){
         document.getElementById("marsParkCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < marsParkCost){
         document.getElementById("marsParkCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= marsParkCostTrainedMartian){
         document.getElementById("marsParkCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < marsParkCostTrainedMartian){
         document.getElementById("marsParkCostTrainedMartian").style.color = "#DB2929"; 
    }
    if (taskmaster >= marsParkCostTaskmaster){
         document.getElementById("marsParkCostTaskmaster").style.color = "#4DBD33"; 
    }
    if (taskmaster < marsParkCostTaskmaster){
         document.getElementById("marsParkCostTaskmaster").style.color = "#DB2929"; 
    }
    if (park >= marsParkCostPark){
         document.getElementById("marsParkCostPark").style.color = "#4DBD33"; 
    }
    if (park < marsParkCostPark){
         document.getElementById("marsParkCostPark").style.color = "#DB2929"; 
    }
    // Pizza Restaurant
    if (moneyMars >= marsBreweryCost){
         document.getElementById("marsBreweryCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < marsBreweryCost){
         document.getElementById("marsBreweryCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= marsBreweryCostTrainedMartian){
         document.getElementById("marsBreweryCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < marsBreweryCostTrainedMartian){
         document.getElementById("marsBreweryCostTrainedMartian").style.color = "#DB2929"; 
    }
    if (taskmaster >= marsBreweryCostTaskmaster){
         document.getElementById("pizzaBreweryCostTaskmaster").style.color = "#4DBD33"; 
    }
    if (taskmaster < marsBreweryCostTaskmaster){
         document.getElementById("pizzaBreweryCostTaskmaster").style.color = "#DB2929"; 
    }
    if (brewery >= marsBreweryCostBrewery){
         document.getElementById("marsBreweryCostBrewery").style.color = "#4DBD33"; 
    }
    if (brewery < marsBreweryCostBrewery){
         document.getElementById("marsBreweryCostBrewery").style.color = "#DB2929"; 
    }
    // Pizza Palace
    if (moneyMars >= marsHotelCost){
         document.getElementById("marsHotelCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < marsHotelCost){
         document.getElementById("marsHotelCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= marsHotelCostTrainedMartian){
         document.getElementById("marsHotelCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < marsHotelCostTrainedMartian){
         document.getElementById("marsHotelCostTrainedMartian").style.color = "#DB2929"; 
    }
    if (taskmaster >= marsHotelCostTaskmaster){
         document.getElementById("marsHotelCostTaskmaster").style.color = "#4DBD33"; 
    }
    if (taskmaster < marsHotelCostTaskmaster){
         document.getElementById("marsHotelCostTaskmaster").style.color = "#DB2929"; 
    }
    if (hotel >= marsHotelCostHotel){
         document.getElementById("marsHotelCostHotel").style.color = "#4DBD33"; 
    }
    if (hotel < marsHotelCostHotel){
         document.getElementById("marsHotelCostHotel").style.color = "#DB2929"; 
    }
    // Pizza Factory
    if (moneyMars >= marsEcosystemCost){
         document.getElementById("marsEcosystemCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < marsEcosystemCost){
         document.getElementById("marsEcosystemCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= marsEcosystemCostTrainedMartian){
         document.getElementById("marsEcosystemCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < marsEcosystemCostTrainedMartian){
         document.getElementById("marsEcosystemCostTrainedMartian").style.color = "#DB2929"; 
    }
    if (taskmaster >= marsEcosystemCostTaskmaster){
         document.getElementById("marsEcosystemCostTaskmaster").style.color = "#4DBD33"; 
    }
    if (taskmaster < marsEcosystemCostTaskmaster){
         document.getElementById("marsEcosystemCostTaskmaster").style.color = "#DB2929"; 
    }
    if (overseer >= marsEcosystemCostOverseer){
         document.getElementById("marsEcosystemCostOverseer").style.color = "#4DBD33"; 
    }
    if (overseer < marsEcosystemCostOverseer){
         document.getElementById("marsEcosystemCostOverseer").style.color = "#DB2929"; 
    }
    if (ecosystem >= marsEcosystemCostEcosystem){
         document.getElementById("marsEcosystemCostEcosystem").style.color = "#4DBD33"; 
    }
    if (ecosystem < marsEcosystemCostEcosystem){
         document.getElementById("marsEcosystemCostEcosystem").style.color = "#DB2929"; 
    }
    // Pizza Converter
    if (moneyMars >= marsHarvesterCost){
         document.getElementById("marsHarvesterCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < marsHarvesterCost){
         document.getElementById("marsHarvesterCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= marsHarvesterCostTrainedMartian){
         document.getElementById("marsHarvesterCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < marsHarvesterCostTrainedMartian){
         document.getElementById("marsHarvesterCostTrainedMartian").style.color = "#DB2929"; 
    }
    if (taskmaster >= marsHarvesterCostTaskmaster){
         document.getElementById("marsHarvesterCostTaskmaster").style.color = "#4DBD33"; 
    }
    if (taskmaster < marsHarvesterCostTaskmaster){
         document.getElementById("marsHarvesterCostTaskmaster").style.color = "#DB2929"; 
    }
    if (overseer >= marsHarvesterCostOverseer){
         document.getElementById("marsHarvesterCostOverseer").style.color = "#4DBD33"; 
    }
    if (overseer < marsHarvesterCostOverseer){
         document.getElementById("marsHarvesterCostOverseer").style.color = "#DB2929"; 
    }
    if (technician >= marsHarvesterCostTechnician){
         document.getElementById("marsHarvesterCostTechnician").style.color = "#4DBD33"; 
    }
    if (technician < marsHarvesterCostTechnician){
         document.getElementById("marsHarvesterCostTechnician").style.color = "#DB2929"; 
    }
    if (martianMetal >= marsHarvesterCostMartianMetal){
         document.getElementById("marsHarvesterCostMartianMetal").style.color = "#4DBD33"; 
    }
    if (martianMetal < marsHarvesterCostMartianMetal){
         document.getElementById("marsHarvesterCostMartianMetal").style.color = "#DB2929"; 
    }
    if (harvester >= marsHarvesterCostHarvester){
         document.getElementById("marsHarvesterCostHarvester").style.color = "#4DBD33"; 
    }
    if (harvester < marsHarvesterCostHarvester){
         document.getElementById("marsHarvesterCostHarvester").style.color = "#DB2929"; 
    }
    // Pizza Weather Machine
    if (moneyMars >= marsExcavatorCost){
         document.getElementById("marsExcavatorCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < marsExcavatorCost){
         document.getElementById("marsExcavatorCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= marsExcavatorCostTrainedMartian){
         document.getElementById("marsExcavatorCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < marsExcavatorCostTrainedMartian){
         document.getElementById("marsExcavatorCostTrainedMartian").style.color = "#DB2929"; 
    }
    if (taskmaster >= marsExcavatorCostTaskmaster){
         document.getElementById("marsExcavatorCostTaskmaster").style.color = "#4DBD33"; 
    }
    if (taskmaster < marsExcavatorCostTaskmaster){
         document.getElementById("marsExcavatorCostTaskmaster").style.color = "#DB2929"; 
    }
    if (overseer >= marsExcavatorCostOverseer){
         document.getElementById("marsExcavatorCostOverseer").style.color = "#4DBD33"; 
    }
    if (overseer < marsExcavatorCostOverseer){
         document.getElementById("marsExcavatorCostOverseer").style.color = "#DB2929"; 
    }
    if (technician >= marsExcavatorCostTechnician){
         document.getElementById("marsExcavatorCostTechnician").style.color = "#4DBD33"; 
    }
    if (technician < marsExcavatorCostTechnician){
         document.getElementById("marsExcavatorCostTechnician").style.color = "#DB2929"; 
    }
    if (martianMetal >= marsExcavatorCostMartianMetal){
         document.getElementById("marsExcavatorCostMartianMetal").style.color = "#4DBD33"; 
    }
    if (martianMetal < marsExcavatorCostMartianMetal){
         document.getElementById("marsExcavatorCostMartianMetal").style.color = "#DB2929"; 
    }
    if (excavator >= marsExcavatorCostExcavator){
         document.getElementById("marsExcavatorCostExcavator").style.color = "#4DBD33"; 
    }
    if (excavator < marsExcavatorCostExcavator){
         document.getElementById("marsExcavatorCostExcavator").style.color = "#DB2929"; 
    }
    // Pizza Super Drill
    if (moneyMars >= marsExtractorCost){
         document.getElementById("marsExtractorCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < marsExtractorCost){
         document.getElementById("marsExtractorCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= marsExtractorCostTrainedMartian){
         document.getElementById("marsExtractorCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < marsExtractorCostTrainedMartian){
         document.getElementById("marsExtractorCostTrainedMartian").style.color = "#DB2929"; 
    }
    if (taskmaster >= marsExtractorCostTaskmaster){
         document.getElementById("marsExtractorCostTaskmaster").style.color = "#4DBD33"; 
    }
    if (taskmaster < marsExtractorCostTaskmaster){
         document.getElementById("marsExtractorCostTaskmaster").style.color = "#DB2929"; 
    }
    if (overseer >= marsExtractorCostOverseer){
         document.getElementById("marsExtractorCostOverseer").style.color = "#4DBD33"; 
    }
    if (overseer < marsExtractorCostOverseer){
         document.getElementById("marsExtractorCostOverseer").style.color = "#DB2929"; 
    }
    if (technician >= marsExtractorCostTechnician){
         document.getElementById("marsExtractorCostTechnician").style.color = "#4DBD33"; 
    }
    if (technician < marsExtractorCostTechnician){
         document.getElementById("marsExtractorCostTechnician").style.color = "#DB2929"; 
    }
    if (martianMetal >= marsExtractorCostMartianMetal){
         document.getElementById("marsExtractorCostMartianMetal").style.color = "#4DBD33"; 
    }
    if (martianMetal < marsExtractorCostMartianMetal){
         document.getElementById("marsExtractorCostMartianMetal").style.color = "#DB2929"; 
    }
    if (extractor >= marsExtractorCostExtractor){
         document.getElementById("marsExtractorCostExtractor").style.color = "#4DBD33"; 
    }
    if (extractor < marsExtractorCostExtractor){
         document.getElementById("marsExtractorCostExtractor").style.color = "#DB2929"; 
    }
    // Pizza Moon Base
    if (moneyMars >= marsAtmosphereCost){
         document.getElementById("marsAtmosphereCost").style.color = "#4DBD33"; 
    }
    if (moneyMars < marsAtmosphereCost){
         document.getElementById("marsAtmosphereCost").style.color = "#DB2929"; 
    }
    if (trainedMartian >= marsAtmosphereCostTrainedMartian){
         document.getElementById("marsAtmosphereCostTrainedMartian").style.color = "#4DBD33"; 
    }
    if (trainedMartian < marsAtmosphereCostTrainedMartian){
         document.getElementById("marsAtmosphereCostTrainedMartian").style.color = "#DB2929"; 
    }
    if (taskmaster >= marsAtmosphereCostTaskmaster){
         document.getElementById("marsAtmosphereCostTaskmaster").style.color = "#4DBD33"; 
    }
    if (taskmaster < marsAtmosphereCostTaskmaster){
         document.getElementById("marsAtmosphereCostTaskmaster").style.color = "#DB2929"; 
    }
    if (overseer >= marsAtmosphereCostOverseer){
         document.getElementById("marsAtmosphereCostOverseer").style.color = "#4DBD33"; 
    }
    if (overseer < marsAtmosphereCostOverseer){
         document.getElementById("marsAtmosphereCostOverseer").style.color = "#DB2929"; 
    }
    if (technician >= marsAtmosphereCostTechnician){
         document.getElementById("marsAtmosphereCostTechnician").style.color = "#4DBD33"; 
    }
    if (technician < marsAtmosphereCostTechnician){
         document.getElementById("marsAtmosphereCostTechnician").style.color = "#DB2929"; 
    }
    if (martianMetal >= marsAtmosphereCostMartianMetal){
         document.getElementById("marsAtmosphereCostMartianMetal").style.color = "#4DBD33"; 
    }
    if (martianMetal < marsAtmosphereCostMartianMetal){
         document.getElementById("marsAtmosphereCostMartianMetal").style.color = "#DB2929"; 
    }
    if (atmosphere >= marsAtmosphereCostAtmosphere){
         document.getElementById("marsAtmosphereCostAtmosphere").style.color = "#4DBD33"; 
    }
    if (atmosphere < marsAtmosphereCostAtmosphere){
         document.getElementById("marsAtmosphereCostAtmosphere").style.color = "#DB2929"; 
    }

    // Resources //
    if (moneyMars >= martianHunterCost){
         document.getElementById("martianHunterCost").style.color = "#4DBD33";
    }
    if (moneyMars < martianHunterCost){
         document.getElementById("martianHunterCost").style.color = "#DB2929";
    }
    // Cleaner
    if (moneyMars >= martianTrainerCost){
         document.getElementById("martianTrainerCost").style.color = "#4DBD33";
    }
    if (moneyMars < martianTrainerCost){
         document.getElementById("martianTrainerCost").style.color = "#DB2929";
    }
    // Manager
    if (moneyMars >= taskmasterCost){
         document.getElementById("taskmasterCost").style.color = "#4DBD33";
    }
    if (moneyMars < taskmasterCost){
         document.getElementById("taskmasterCost").style.color = "#DB2929";
    }
    // Operator
    if (moneyMars >= overseerCost){
         document.getElementById("overseerCost").style.color = "#4DBD33";
    }
    if (moneyMars < overseerCost){
         document.getElementById("overseerCost").style.color = "#DB2929";
    }
    // Scientist
    if (moneyMars >= technicianCost){
         document.getElementById("technicianCost").style.color = "#4DBD33";
    }
    if (moneyMars < technicianCost){
         document.getElementById("technicianCost").style.color = "#DB2929";
    }
    // Astronaut
    if (moneyMars >= roverCost){
         document.getElementById("roverCost").style.color = "#4DBD33";
    }
    if (moneyMars < roverCost){
         document.getElementById("roverCost").style.color = "#DB2929";
    }
    // Cart
    if (moneyMars >= mineCost){
         document.getElementById("mineCost").style.color = "#4DBD33";
    }
    if (moneyMars < mineCost){
         document.getElementById("mineCost").style.color = "#DB2929";
    }
    // Van
    if (moneyMars >= parkCost){
         document.getElementById("parkCost").style.color = "#4DBD33";
    }
    if (moneyMars < parkCost){
         document.getElementById("parkCost").style.color = "#DB2929";
    }
    // Parlour
    if (moneyMars >= breweryCost){
         document.getElementById("breweryCost").style.color = "#4DBD33";
    }
    if (moneyMars < breweryCost){
         document.getElementById("breweryCost").style.color = "#DB2929";
    }
    // Restaurant
    if (moneyMars >= hotelCost){
         document.getElementById("hotelCost").style.color = "#4DBD33";
    }
    if (moneyMars < hotelCost){
         document.getElementById("hotelCost").style.color = "#DB2929";
    }
    // Palace
    if (moneyMars >= ecosystemCost){
         document.getElementById("ecosystemCost").style.color = "#4DBD33";
    }
    if (moneyMars < ecosystemCost){
         document.getElementById("ecosystemCost").style.color = "#DB2929";
    }
    // Factory
    if (moneyMars >= harvesterCost){
         document.getElementById("harvesterCost").style.color = "#4DBD33";
    }
    if (moneyMars < harvesterCost){
         document.getElementById("harvesterCost").style.color = "#DB2929";
    }
    // Converter
    if (moneyMars >= excavatorCost){
         document.getElementById("excavatorCost").style.color = "#4DBD33";
    }
    if (moneyMars < excavatorCost){
         document.getElementById("excavatorCost").style.color = "#DB2929";
    }
    // Weather Machine
    if (moneyMars >= extractorCost){
         document.getElementById("extractorCost").style.color = "#4DBD33";
    }
    if (moneyMars < extractorCost){
         document.getElementById("extractorCost").style.color = "#DB2929";
    }
    // Super Drill
    if (moneyMars >= atmosphereCost){
         document.getElementById("atmosphereCost").style.color = "#4DBD33";
    }
    if (moneyMars < atmosphereCost){
         document.getElementById("atmosphereCost").style.color = "#DB2929";
    }
    // Moon Base
    if (moneyMars >= martianMetalCost){
         document.getElementById("martianMetalCost").style.color = "#4DBD33";
    }
    if (moneyMars < martianMetalCost){
         document.getElementById("martianMetalCost").style.color = "#DB2929";
    }

    // Upgrades //
    if (moneyMars >= convenienceCost){
         document.getElementById("convenienceCost").style.color = "#4DBD33";
    }
    if (moneyMars < convenienceCost){
         document.getElementById("convenienceCost").style.color = "#DB2929";
    }
    // Convenience 1 
    if (moneyMars >= convenience2Cost){
         document.getElementById("convenience2Cost").style.color = "#4DBD33";
    }
    if (moneyMars < convenience2Cost){
         document.getElementById("convenience2Cost").style.color = "#DB2929";
    }
    // Convenience 2 
    if (moneyMars >= convenience3Cost){
         document.getElementById("convenience3Cost").style.color = "#4DBD33";
    }
    if (moneyMars < convenience3Cost){
         document.getElementById("convenience3Cost").style.color = "#DB2929";
    }
    // Convenience 3 
    if (moneyMars >= automaticTrainersCost){
         document.getElementById("automaticTrainersCost").style.color = "#4DBD33";
    }
    if (moneyMars < automaticTrainersCost){
         document.getElementById("automaticTrainersCost").style.color = "#DB2929";
    }
    // Click 1
    if (moneyMars >= automaticTrainers2Cost){
         document.getElementById("automaticTrainers2Cost").style.color = "#4DBD33";
    }
    if (moneyMars < automaticTrainers2Cost){
         document.getElementById("automaticTrainers2Cost").style.color = "#DB2929";
    }
}

//=======================
// Pizza Makers Section |                                                                                   
//=======================

// Start of Martian Section

document.getElementById("mybox18").style.display = "none";

var martian = 0;
var martianCost = Math.floor(100 * Math.pow(1.05, martian));  
var martianCostTrainedMartian = 1;
function buyMartian(){
    var martianCost = Math.floor(100 * Math.pow(1.05, martian));  
    var martianCostTrainedMartian = 1;  
    if(moneyMars >= martianCost && trainedMartian >= 1){
        document.getElementById("mybox19").style.display = "block"; 
        document.getElementById("mybox6").style.display = "block";                                  
        martian = martian + 1;                                 
        moneyMars = moneyMars - martianCost;   
        trainedMartian = trainedMartian - martianCostTrainedMartian;                    
        document.getElementById('martian').innerHTML = martian;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);  
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian); //trained martian
        updateColours();
    };
    var nextMartianCost = Math.floor(100 * Math.pow(1.05, martian));       //works out the cost of the next worker
    document.getElementById('martianCost').innerHTML = addCommas(nextMartianCost);  //updates the worker cost for the user
    document.getElementById('martianCostTT').innerHTML = addCommas(nextMartianCost); //updates the worker cost in the tooltip
};

window.setInterval(function(){
    
    pizzaClickMars(martian * 2 );
    
}, 1000);

function loadMartian(){
    var martianCost = Math.floor(100 * Math.pow(1.05, martian));
    var nextMartianCost = Math.floor(100 * Math.pow(1.05, martian));      
    document.getElementById('martianCost').innerHTML = addCommas(nextMartianCost);  
    document.getElementById('martianCostTT').innerHTML = addCommas(nextMartianCost);
    if (martian >= 1){
        document.getElementById("mybox19").style.display = "block"; 
        document.getElementById("mybox6").style.display = "block";  
    }
};

// End of Martian Section

// Start of Pizza Cart Section

document.getElementById("mybox19").style.display = "none";

var marsRover = 0;
var marsRoverCost = Math.floor(300 * Math.pow(1.05, marsRover)); 
var marsRoverCostTrainedMartian = 2 
var marsRoverCostRover = 1
function buyMarsRover(){
    var marsRoverCost = Math.floor(300 * Math.pow(1.05, marsRover)); 
    var marsRoverCostTrainedMartian = 2 
    var marsRoverCostRover = 1
    if(moneyMars >= marsRoverCost && trainedMartian >= marsRoverCostTrainedMartian && rover >= marsRoverCostRover){
        document.getElementById("mybox20").style.display = "block"; 
        document.getElementById("mybox7").style.display = "block";
        document.getElementById("mybox2").style.display = "block";                                        
        marsRover = marsRover + 1;                                  
        moneyMars = moneyMars - marsRoverCost;  
        trainedMartian = trainedMartian - marsRoverCostTrainedMartian;
        rover = rover - marsRoverCostRover;                        
        document.getElementById('marsRover').innerHTML = marsRover;  
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
        document.getElementById('rover').innerHTML = rover;
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars); 
        updateColours(); 
    };
    var nextMarsRoverCost = Math.floor(300 * Math.pow(1.05, marsRover));       
    document.getElementById('marsRoverCost').innerHTML = addCommas(nextMarsRoverCost); 
    document.getElementById('marsRoverCostTT').innerHTML = addCommas(nextMarsRoverCost); 
};

window.setInterval(function(){
    
    pizzaClickMars(marsRover * 8 );
    
}, 1000);

function loadRover(){
    var marsRoverCost = Math.floor(300 * Math.pow(1.05, marsRover));
    var nextMarsRoverCost = Math.floor(300 * Math.pow(1.05, marsRover));      
    document.getElementById('marsRoverCost').innerHTML = addCommas(nextMarsRoverCost);  
    document.getElementById('marsRoverCostTT').innerHTML = addCommas(nextMarsRoverCost);
    if (marsRover >= 1){
        document.getElementById("mybox20").style.display = "block"; 
        document.getElementById("mybox7").style.display = "block";
        document.getElementById("mybox2").style.display = "block"; 
    }
};

//End of Pizza Cart Section 

//Start of Pizza Van Section

document.getElementById("mybox20").style.display = "none";

var marsMine = 0;
var marsMineCost = Math.floor(800 * Math.pow(1.05, marsMine)); 
var marsMineCostTrainedMartian = 5 
var marsMineCostTaskmaster = 1 
var marsMineCostMine = 1
function buyMarsMine(){
    var marsMineCost = Math.floor(800 * Math.pow(1.05, marsMine)); 
    var marsMineCostTrainedMartian = 5 
    var marsMineCostTaskmaster = 1 
    var marsMineCostMine = 1
    if(moneyMars >= marsMineCost && trainedMartian >= marsMineCostTrainedMartian && taskmaster >= marsMineCostTaskmaster && mine >= marsMineCostMine){
        document.getElementById("mybox21").style.display = "block"; 
        document.getElementById("mybox8").style.display = "block";                                    
        marsMine = marsMine + 1;                                  
        moneyMars = moneyMars - marsMineCost;  
        trainedMartian = trainedMartian - marsMineCostTrainedMartian;
        taskmaster = taskmaster - marsMineCostTaskmaster;
        mine = mine - marsMineCostMine;                        
        document.getElementById('marsMine').innerHTML = marsMine;  
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
        document.getElementById('taskmaster').innerHTML = taskmaster;
        document.getElementById('mine').innerHTML = mine;
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();
        if (marsMine === 1){
            document.getElementById("mybox35").style.display = "block";
        }   
    };
    var nextMarsMineCost = Math.floor(800 * Math.pow(1.05, marsMine));       
    document.getElementById('marsMineCost').innerHTML = addCommas(nextMarsMineCost);
    document.getElementById('marsMineCostTT').innerHTML = addCommas(nextMarsMineCost);  
};

window.setInterval(function(){
    
    pizzaClickMars(marsMine * 30 );
    
}, 1000);

function loadMine(){
    var marsMineCost = Math.floor(800 * Math.pow(1.05, marsMine));
    var nextMarsMineCost = Math.floor(800 * Math.pow(1.05, marsMine));      
    document.getElementById('marsMineCost').innerHTML = addCommas(nextMarsMineCost);  
    document.getElementById('marsMineCostTT').innerHTML = addCommas(nextMarsMineCost);
    if (marsMine >= 1 && convenience === 0){
            document.getElementById("mybox35").style.display = "block";
        } 

    if (marsMine >= 1 && convenience >= 1){
            document.getElementById("smallbox10").style.display = "inline-block";
            document.getElementById("smallbox100").style.display = "inline-block";
            document.getElementById("smallbox1000").style.display = "inline-block";
            document.getElementById("1smallbox10").style.display = "inline-block";
            document.getElementById("1smallbox100").style.display = "inline-block";
            document.getElementById("1smallbox1000").style.display = "inline-block";
        } 

    if (marsMine >= 1) {
        document.getElementById("mybox21").style.display = "block"; 
        document.getElementById("mybox8").style.display = "block";
    }    
};

//End of Pizza Cart Section

//Start of Pizza Parlour Section

document.getElementById("mybox21").style.display = "none";

var marsPark = 0;
var marsParkCost = Math.floor(10000 * Math.pow(1.05, marsPark)); 
var marsParkCostTrainedMartian = 15 
var marsParkCostTaskmaster = 3
var marsParkCostPark = 1
function buyMarsPark(){
    var marsParkCost = Math.floor(10000 * Math.pow(1.05, marsPark)); 
    var marsParkCostTrainedMartian = 15 
    var marsParkCostTaskmaster = 3
    var marsParkCostPark = 1
    if(moneyMars >= marsParkCost && trainedMartian >= marsParkCostTrainedMartian && taskmaster >= marsParkCostTaskmaster && park >= marsParkCostPark){
        document.getElementById("mybox22").style.display = "block"; 
        document.getElementById("mybox9").style.display = "block";                                   
        marsPark = marsPark + 1;                                  
        moneyMars = moneyMars - marsParkCost;  
        trainedMartian = trainedMartian - marsParkCostTrainedMartian;
        taskmaster = taskmaster - marsParkCostTaskmaster;
        park = park - marsParkCostPark;                      
        document.getElementById('marsPark').innerHTML = marsPark;  
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
        document.getElementById('park').innerHTML = addCommas(park);
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();
        if (marsPark === 1){
            document.getElementById("mybox33").style.display = "block";
        }     
    };
    var nextMarsParkCost = Math.floor(10000 * Math.pow(1.05, marsPark));       
    document.getElementById('marsParkCost').innerHTML = addCommas(nextMarsParkCost); 
    document.getElementById('marsParkCostTT').innerHTML = addCommas(nextMarsParkCost); 
};

window.setInterval(function(){
    
    pizzaClickMars(marsPark * 160 );
    
}, 1000);

function loadPark(){
    var marsParkCost = Math.floor(10000 * Math.pow(1.05, marsPark));
    var nextMarsParkCost = Math.floor(10000 * Math.pow(1.05, marsPark));      
    document.getElementById('marsParkCost').innerHTML = addCommas(nextMarsParkCost);  
    document.getElementById('marsParkCostTT').innerHTML = addCommas(nextMarsParkCost);
    if (marsPark >= 1){
            document.getElementById("mybox33").style.display = "block";
        }
    if (marsPark >=1 && automaticTrainers >= 1){
         window.setInterval(function(){
    
    getXP(martianTrainer * 1);
    
    }, 1000);
    }     
    if (marsPark >= 1) {
        document.getElementById("mybox22").style.display = "block"; 
        document.getElementById("mybox9").style.display = "block";  
    }    
};

//End of Pizza Parlour Section

//Start of Pizza Restaurant Section

document.getElementById("mybox22").style.display = "none";

var marsBrewery = 0;
var marsBreweryCost = Math.floor(50000 * Math.pow(1.05, marsBrewery)); 
var marsBreweryCostTrainedMartian = 40 
var marsBreweryCostTaskmaster = 8 
var marsBreweryCostBrewery = 1
function buyMarsBrewery(){
    var marsBreweryCost = Math.floor(50000 * Math.pow(1.05, marsBrewery)); 
    var marsBreweryCostTrainedMartian = 40 
    var marsBreweryCostTaskmaster = 8 
    var marsBreweryCostBrewery = 1
    if(moneyMars >= marsBreweryCost && trainedMartian >= marsBreweryCostTrainedMartian && taskmaster >= marsBreweryCostTaskmaster && brewery >= marsBreweryCostBrewery){
        document.getElementById("mybox23").style.display = "block"; 
        document.getElementById("mybox10").style.display = "block";                                     
        marsBrewery = marsBrewery + 1;                                  
        moneyMars = moneyMars - marsBreweryCost;  
        trainedMartian = trainedMartian - marsBreweryCostTrainedMartian;
        taskmaster = taskmaster - marsBreweryCostTaskmaster;
        brewery = brewery - marsBreweryCostBrewery;                  
        document.getElementById('marsBrewery').innerHTML = marsBrewery;  
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);
        document.getElementById('brewery').innerHTML = addCommas(brewery);
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextMarsBreweryCost = Math.floor(50000 * Math.pow(1.05, marsBrewery));       
    document.getElementById('marsBreweryCost').innerHTML = addCommas(nextMarsBreweryCost);
    document.getElementById('marsBreweryCostTT').innerHTML = addCommas(nextMarsBreweryCost);  
};

window.setInterval(function(){
    
    pizzaClickMars(marsBrewery * 800 );
    
}, 1000);

function loadBrewery(){
    var marsBreweryCost = Math.floor(50000 * Math.pow(1.05, marsBrewery));
    var nextMarsBreweryCost = Math.floor(50000 * Math.pow(1.05, marsBrewery));      
    document.getElementById('marsBreweryCost').innerHTML = addCommas(nextMarsBreweryCost);  
    document.getElementById('marsBreweryCostTT').innerHTML = addCommas(nextMarsBreweryCost);
    if (marsBrewery >= 1){
        document.getElementById("mybox23").style.display = "block"; 
        document.getElementById("mybox10").style.display = "block";  
    }
};

//End of Pizza Restaurant Section

//Start of Pizza Palace Section

document.getElementById("mybox23").style.display = "none";

var marsHotel = 0;
var marsHotelCost = Math.floor(300000 * Math.pow(1.05, marsHotel)); 
var marsHotelCostTrainedMartian = 100 
var marsHotelCostTaskmaster = 20 
var marsHotelCostHotel = 1
function buyMarsHotel(){
    var marsHotelCost = Math.floor(300000 * Math.pow(1.05, marsHotel)); 
    var marsHotelCostTrainedMartian = 100 
    var marsHotelCostTaskmaster = 20 
    var marsHotelCostHotel = 1
    if(moneyMars >= marsHotelCost && trainedMartian >= marsHotelCostTrainedMartian && taskmaster >= marsHotelCostTaskmaster && hotel >= marsHotelCostHotel){
        document.getElementById("mybox24").style.display = "block"; 
        document.getElementById("mybox11").style.display = "block";
        document.getElementById("mybox3").style.display = "block";                                     
        marsHotel = marsHotel + 1;                                  
        moneyMars = moneyMars - marsHotelCost;  
        trainedMartian = trainedMartian - marsHotelCostTrainedMartian;
        taskmaster = taskmaster - marsHotelCostTaskmaster;
        hotel = hotel - marsHotelCostHotel;                        
        document.getElementById('marsHotel').innerHTML = marsHotel;  
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);
        document.getElementById('hotel').innerHTML = hotel;
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours(); 
        if (marsHotel === 1){
            document.getElementById("mybox36").style.display = "block";
        }    
    };
    var nextMarsHotelCost = Math.floor(300000 * Math.pow(1.05, marsHotel));       
    document.getElementById('marsHotelCost').innerHTML = addCommas(nextMarsHotelCost); 
    document.getElementById('marsHotelCostTT').innerHTML = addCommas(nextMarsHotelCost);  
};

window.setInterval(function(){
    
    pizzaClickMars(marsHotel * 3000 );
    
}, 1000);

function loadHotel(){
    var marsHotelCost = Math.floor(300000 * Math.pow(1.05, marsHotel));
    var nextMarsHotelCost = Math.floor(300000 * Math.pow(1.05, marsHotel));      
    document.getElementById('marsHotelCost').innerHTML = addCommas(nextMarsHotelCost);  
    document.getElementById('marsHotelCostTT').innerHTML = addCommas(nextMarsHotelCost);
    if (marsHotel >= 1 && convenience2 === 0){
            document.getElementById("mybox36").style.display = "block";
        }
    if (marsHotel >= 1 && convenience2 >= 1) {
            document.getElementById("2smallbox10").style.display = "inline-block";
            document.getElementById("2smallbox100").style.display = "inline-block";
            document.getElementById("2smallbox1000").style.display = "inline-block";
    }    
    if (marsHotel >= 1){
        document.getElementById("mybox24").style.display = "block"; 
        document.getElementById("mybox11").style.display = "block";
        document.getElementById("mybox3").style.display = "block";   
    }
};

//End of Pizza Palace Section

//Start of Pizza Factory Section

document.getElementById("mybox24").style.display = "none";

var marsEcosystem = 0;
var marsEcosystemCost = Math.floor(1000000 * Math.pow(1.05, marsEcosystem)); 
var marsEcosystemCostTrainedMartian = 250; 
var marsEcosystemCostTaskmaster = 50; 
var marsEcosystemCostOverseer = 10;
var marsEcosystemCostEcosystem = 1;
function buyMarsEcosystem(){
    var marsEcosystemCost = Math.floor(1000000 * Math.pow(1.05, marsEcosystem)); 
    var marsEcosystemCostTrainedMartian = 250 
    var marsEcosystemCostTaskmaster = 50 
    var marsEcosystemCostOverseer = 10
    var marsEcosystemCostEcosystem = 1
    if(moneyMars >= marsEcosystemCost && trainedMartian >= marsEcosystemCostTrainedMartian && ecosystem >= marsEcosystemCostEcosystem && taskmaster >= marsEcosystemCostTaskmaster && overseer >= marsEcosystemCostOverseer){                                   
        document.getElementById("mybox25").style.display = "block"; 
        document.getElementById("mybox12").style.display = "block";
        document.getElementById("mybox4").style.display = "block";
        document.getElementById("mybox17").style.display = "block";
        marsEcosystem = marsEcosystem + 1;                                  
        moneyMars = moneyMars - marsEcosystemCost;  
        trainedMartian = trainedMartian - marsEcosystemCostTrainedMartian;
        taskmaster = taskmaster - marsEcosystemCostTaskmaster;
        overseer = overseer - marsEcosystemCostOverseer;
        ecosystem = ecosystem - marsEcosystemCostEcosystem;                        
        document.getElementById('marsEcosystem').innerHTML = marsEcosystem;  
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);
        document.getElementById('overseer').innerHTML = addCommas(overseer);
        document.getElementById('ecosystem').innerHTML = ecosystem;
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();
        if (marsEcosystem === 1){
            document.getElementById("mybox37").style.display = "block";
        }    
         if (marsEcosystem === 1){
            document.getElementById("mybox34").style.display = "block";
        }      
    };
    var nextMarsEcosystemCost = Math.floor(1000000 * Math.pow(1.05, marsEcosystem));       
    document.getElementById('marsEcosystemCost').innerHTML = addCommas(nextMarsEcosystemCost); 
    document.getElementById('marsEcosystemCostTT').innerHTML = addCommas(nextMarsEcosystemCost); 
};

window.setInterval(function(){
    
    pizzaClickMars(marsEcosystem * 10000 );
    
}, 1000);

function loadEcosystem(){
    var marsEcosystemCost = Math.floor(1000000 * Math.pow(1.05, marsEcosystem));
    var nextMarsEcosystemCost = Math.floor(1000000 * Math.pow(1.05, marsEcosystem));      
    document.getElementById('marsEcosystemCost').innerHTML = addCommas(nextMarsEcosystemCost);  
    document.getElementById('marsEcosystemCostTT').innerHTML = addCommas(nextMarsEcosystemCost);
    if (marsEcosystem >= 1 && convenience3 === 0){
            document.getElementById("mybox37").style.display = "block";
        } 
     if (marsEcosystem >= 1 && convenience3 >= 1){
            document.getElementById("3smallbox10").style.display = "inline-block";
            document.getElementById("3smallbox100").style.display = "inline-block";
            document.getElementById("3smallbox1000").style.display = "inline-block";
            document.getElementById("4smallbox10").style.display = "inline-block";
            document.getElementById("4smallbox100").style.display = "inline-block";
            document.getElementById("4smallbox1000").style.display = "inline-block";
        }   

    if (marsEcosystem >= 1 && automaticTrainers2 === 0){
            document.getElementById("mybox34").style.display = "block";
        }

    if (marsEcosystem >=1 && automaticTrainers2 >= 1){
         window.setInterval(function(){
    
    getXP(martianTrainer * 1);
    
    }, 500);
    }         

    if (marsEcosystem >= 1){
        document.getElementById("mybox25").style.display = "block"; 
        document.getElementById("mybox12").style.display = "block";
        document.getElementById("mybox4").style.display = "block";
        document.getElementById("mybox17").style.display = "block";
    }     
};

//End of Pizza Factory Section

//Start of Pizza Converter Section

document.getElementById("mybox25").style.display = "none";

var marsHarvester = 0;
var marsHarvesterCost = Math.floor(25000000 * Math.pow(1.05, marsHarvester)); 
var marsHarvesterCostTrainedMartian = 400 
var marsHarvesterCostTaskmaster = 150 
var marsHarvesterCostOverseer = 25
var marsHarvesterCostTechnician = 10
var marsHarvesterCostMartianMetal = 20
var marsHarvesterCostHarvester = 1
function buyMarsHarvester(){
    var marsHarvesterCost = Math.floor(25000000 * Math.pow(1.05, marsHarvester)); 
    var marsHarvesterCostTrainedMartian = 400 
    var marsHarvesterCostTaskmaster = 150 
    var marsHarvesterCostOverseer = 25
    var marsHarvesterCostTechnician = 10
    var marsHarvesterCostMartianMetal = 20
    var marsHarvesterCostHarvester = 1
    if(moneyMars >= marsHarvesterCost && trainedMartian >= marsHarvesterCostTrainedMartian && harvester >= marsHarvesterCostHarvester && taskmaster >= marsHarvesterCostTaskmaster && overseer >= marsHarvesterCostOverseer && technician >= marsHarvesterCostTechnician && martianMetal >= marsHarvesterCostMartianMetal){                                   
        document.getElementById("mybox26").style.display = "block";
        document.getElementById("mybox13").style.display = "block";
        marsHarvester = marsHarvester + 1;                                  
        moneyMars = moneyMars - marsHarvesterCost;  
        trainedMartian = trainedMartian - marsHarvesterCostTrainedMartian;
        taskmaster = taskmaster - marsHarvesterCostTaskmaster;
        overseer = overseer - marsHarvesterCostOverseer;
        technician = technician - marsHarvesterCostTechnician;
        martianMetal = martianMetal - marsHarvesterCostMartianMetal;
        harvester = harvester - marsHarvesterCostHarvester;                        
        document.getElementById('marsHarvester').innerHTML = marsHarvester;  
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);
        document.getElementById('overseer').innerHTML = addCommas(overseer);
        document.getElementById('technician').innerHTML = addCommas(technician);
        document.getElementById('martianMetal').innerHTML = addCommas(martianMetal);
        document.getElementById('harvester').innerHTML = harvester;
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextMarsHarvesterCost = Math.floor(25000000 * Math.pow(1.05, marsHarvester));       
    document.getElementById('marsHarvesterCost').innerHTML = addCommas(nextMarsHarvesterCost);
    document.getElementById('marsHarvesterCostTT').innerHTML = addCommas(nextMarsHarvesterCost);  

};

window.setInterval(function(){
    
    pizzaClickMars(marsHarvester * 200000 );
    
}, 1000);

function loadHarvester(){
    var marsHarvesterCost = Math.floor(25000000 * Math.pow(1.05, marsHarvester));
    var nextMarsHarvesterCost = Math.floor(25000000 * Math.pow(1.05, marsHarvester));      
    document.getElementById('marsHarvesterCost').innerHTML = addCommas(nextMarsHarvesterCost);  
    document.getElementById('marsHarvesterCostTT').innerHTML = addCommas(nextMarsHarvesterCost);
    if (marsHarvester >= 1){
        document.getElementById("mybox26").style.display = "block";
        document.getElementById("mybox13").style.display = "block";
    }
};

//End of Pizza Converter Section

//Start of Pizza Weather Machine Section

document.getElementById("mybox26").style.display = "none";

var marsExcavator = 0;
var marsExcavatorCost = Math.floor(300000000 * Math.pow(1.05, marsExcavator)); 
var marsExcavatorCostTrainedMartian = 600 
var marsExcavatorCostTaskmaster = 400 
var marsExcavatorCostOverseer = 80
var marsExcavatorCostTechnician = 25
var marsExcavatorCostMartianMetal = 50
var marsExcavatorCostExcavator = 1
function buyMarsExcavator(){
    var marsExcavatorCost = Math.floor(300000000 * Math.pow(1.05, marsExcavator)); 
    var marsExcavatorCostTrainedMartian = 600 
    var marsExcavatorCostTaskmaster = 400 
    var marsExcavatorCostOverseer = 80
    var marsExcavatorCostTechnician = 25
    var marsExcavatorCostMartianMetal = 50
    var marsExcavatorCostExcavator = 1
    if(moneyMars >= marsExcavatorCost && trainedMartian >= marsExcavatorCostTrainedMartian && excavator >= marsExcavatorCostExcavator && taskmaster >= marsExcavatorCostTaskmaster && overseer >= marsExcavatorCostOverseer && technician >= marsExcavatorCostTechnician && martianMetal >= marsExcavatorCostMartianMetal){                                   
        document.getElementById("mybox27").style.display = "block";
        document.getElementById("mybox14").style.display = "block";
        marsExcavator = marsExcavator + 1;                                  
        moneyMars = moneyMars - marsExcavatorCost;  
        trainedMartian = trainedMartian - marsExcavatorCostTrainedMartian;
        taskmaster = taskmaster - marsExcavatorCostTaskmaster;
        overseer = overseer - marsExcavatorCostOverseer;
        technician = technician - marsExcavatorCostTechnician;
        martianMetal = martianMetal - marsExcavatorCostMartianMetal;
        excavator = excavator - marsExcavatorCostExcavator;                        
        document.getElementById('marsExcavator').innerHTML = marsExcavator;  
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);
        document.getElementById('overseer').innerHTML = addCommas(overseer);
        document.getElementById('technician').innerHTML = addCommas(technician);
        document.getElementById('martianMetal').innerHTML = addCommas(martianMetal);
        document.getElementById('excavator').innerHTML = excavator;
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextMarsExcavatorCost = Math.floor(300000000 * Math.pow(1.05, marsExcavator));       
    document.getElementById('marsExcavatorCost').innerHTML = addCommas(nextMarsExcavatorCost); 
    document.getElementById('marsExcavatorCostTT').innerHTML = addCommas(nextMarsExcavatorCost); 
};

window.setInterval(function(){
    
    pizzaClickMars(marsExcavator * 1500000 );
    
}, 1000);

function loadExcavator(){
    var marsExcavatorCost = Math.floor(300000000 * Math.pow(1.05, marsExcavator));
    var nextMarsExcavatorCost = Math.floor(300000000 * Math.pow(1.05, marsExcavator));      
    document.getElementById('marsExcavatorCost').innerHTML = addCommas(nextMarsExcavatorCost);  
    document.getElementById('marsExcavatorCostTT').innerHTML = addCommas(nextMarsExcavatorCost);
    if (marsExcavator >= 1){
        document.getElementById("mybox27").style.display = "block";
        document.getElementById("mybox14").style.display = "block";
    }
};

//End of Pizza Weather Machine Section

//Start of Pizza Super Drill Section

document.getElementById("mybox27").style.display = "none";

var marsExtractor = 0;
var marsExtractorCost = Math.floor(4000000000 * Math.pow(1.05, marsExtractor)); 
var marsExtractorCostTrainedMartian = 850 
var marsExtractorCostTaskmaster = 700 
var marsExtractorCostOverseer = 250
var marsExtractorCostTechnician = 100
var marsExtractorCostMartianMetal = 150
var marsExtractorCostExtractor = 1
function buyMarsExtractor(){
    var marsExtractorCost = Math.floor(4000000000 * Math.pow(1.05, marsExtractor)); 
    var marsExtractorCostTrainedMartian = 850 
    var marsExtractorCostTaskmaster = 700 
    var marsExtractorCostOverseer = 250
    var marsExtractorCostTechnician = 100
    var marsExtractorCostMartianMetal = 150
    var marsExtractorCostExtractor = 1
    if(moneyMars >= marsExtractorCost && trainedMartian >= marsExtractorCostTrainedMartian && extractor >= marsExtractorCostExtractor && taskmaster >= marsExtractorCostTaskmaster && overseer >= marsExtractorCostOverseer && technician >= marsExtractorCostTechnician && martianMetal >= marsExtractorCostMartianMetal){                                   
        document.getElementById("mybox28").style.display = "block";
        document.getElementById("mybox16").style.display = "block";
        marsExtractor = marsExtractor + 1;                                  
        moneyMars = moneyMars - marsExtractorCost;  
        trainedMartian = trainedMartian - marsExtractorCostTrainedMartian;
        taskmaster = taskmaster - marsExtractorCostTaskmaster;
        overseer = overseer - marsExtractorCostOverseer;
        technician = technician - marsExtractorCostTechnician;
        martianMetal = martianMetal - marsExtractorCostMartianMetal;
        extractor = extractor - marsExtractorCostExtractor;                        
        document.getElementById('marsExtractor').innerHTML = marsExtractor;  
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);
        document.getElementById('overseer').innerHTML = addCommas(overseer);
        document.getElementById('technician').innerHTML = addCommas(technician);
        document.getElementById('martianMetal').innerHTML = addCommas(martianMetal);
        document.getElementById('extractor').innerHTML = extractor;
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars); 
        updateColours(); 
    };
    var nextMarsExtractorCost = Math.floor(4000000000 * Math.pow(1.05, marsExtractor));       
    document.getElementById('marsExtractorCost').innerHTML = addCommas(nextMarsExtractorCost); 
    document.getElementById('marsExtractorCostTT').innerHTML = addCommas(nextMarsExtractorCost);  
};

window.setInterval(function(){
    
    pizzaClickMars(marsExtractor * 10000000 );
    
}, 1000);

function loadExtractor(){
    var marsExtractorCost = Math.floor(4000000000 * Math.pow(1.05, marsExtractor));
    var nextMarsExtractorCost = Math.floor(4000000000 * Math.pow(1.05, marsExtractor));      
    document.getElementById('marsExtractorCost').innerHTML = addCommas(nextMarsExtractorCost);  
    document.getElementById('marsExtractorCostTT').innerHTML = addCommas(nextMarsExtractorCost);
    if (marsExtractor >= 1){
        document.getElementById("mybox28").style.display = "block";
        document.getElementById("mybox16").style.display = "block";
    }
};

//End of Pizza Super Drill Section

//Start of Pizza Moon Base Section

document.getElementById("mybox28").style.display = "none";
document.getElementById("spacetravel").style.display = "none";

var marsAtmosphere = 0;
var marsAtmosphereCost = Math.floor(100000000000 * Math.pow(1.05, marsAtmosphere)); 
var marsAtmosphereCostTrainedMartian = 1000
var marsAtmosphereCostTaskmaster = 1000
var marsAtmosphereCostOverseer = 1000
var marsAtmosphereCostTechnician = 500
var marsAtmosphereCostMartianMetal = 1000
var marsAtmosphereCostAtmosphere = 1
function buyMarsAtmosphere(){
    var marsAtmosphereCost = Math.floor(100000000000 * Math.pow(1.05, marsAtmosphere)); 
    var marsAtmosphereCostTrainedMartian = 1000
    var marsAtmosphereCostTaskmaster = 1000
    var marsAtmosphereCostOverseer = 1000
    var marsAtmosphereCostTechnician = 500
    var marsAtmosphereCostMartianMetal = 1000
    var marsAtmosphereCostAtmosphere = 1
    if(moneyMars >= marsAtmosphereCost && trainedMartian >= marsAtmosphereCostTrainedMartian && atmosphere >= marsAtmosphereCostAtmosphere && taskmaster >= marsAtmosphereCostTaskmaster && overseer >= marsAtmosphereCostOverseer && technician >= marsAtmosphereCostTechnician && martianMetal >= marsAtmosphereCostMartianMetal){                                   
        marsAtmosphere = marsAtmosphere + 1;                                  
        moneyMars = moneyMars - marsAtmosphereCost;  
        trainedMartian = trainedMartian - marsAtmosphereCostTrainedMartian;
        taskmaster = taskmaster - marsAtmosphereCostTaskmaster;
        overseer = overseer - marsAtmosphereCostOverseer;
        technician = technician - marsAtmosphereCostTechnician;
        martianMetal = martianMetal - marsAtmosphereCostMartianMetal;
        atmosphere = atmosphere - marsAtmosphereCostAtmosphere;                        
        document.getElementById('marsAtmosphere').innerHTML = marsAtmosphere;  
        document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);
        document.getElementById('overseer').innerHTML = addCommas(overseer);
        document.getElementById('technician').innerHTML = addCommas(technician);
        document.getElementById('martianMetal').innerHTML = addCommas(martianMetal);
        document.getElementById('atmosphere').innerHTML = atmosphere;
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        document.getElementById("spacetravel").style.display = "block";
        updateColours();  
    };
    var nextMarsAtmosphereCost = Math.floor(100000000000 * Math.pow(1.05, marsAtmosphere));       
    document.getElementById('marsAtmosphereCost').innerHTML = addCommas(nextMarsAtmosphereCost);
    document.getElementById('marsAtmosphereCostTT').innerHTML = addCommas(nextMarsAtmosphereCost);  

};

window.setInterval(function(){
    
    pizzaClickMars(marsAtmosphere * 185000000 );
    
}, 1000);

function loadAtmosphere(){
    var marsAtmosphereCost = Math.floor(100000000000 * Math.pow(1.05, marsAtmosphere));
    var nextMarsAtmosphereCost = Math.floor(100000000000 * Math.pow(1.05, marsAtmosphere));      
    document.getElementById('marsAtmosphereCost').innerHTML = addCommas(nextMarsAtmosphereCost);  
    document.getElementById('marsAtmosphereCostTT').innerHTML = addCommas(nextMarsAtmosphereCost);
     if (marsAtmosphere >= 1){
            document.getElementById("spacetravel").style.display = "block";
        } 
};

//End of Pizza Moon Base Section

var backToEarth = 0;
 var backToEarthCost = 1000;
function buyBackToEarth(){

    var backToEarthCost = 1000; 
    if(trainedMartian >= backToEarthCost){
        backToEarth = backToEarth + 1;
        trainedMartian = trainedMartian - backToEarthCost;
        document.getElementById('trainedMartian').innerHTML = trainedMartian; 
        updateColours(); 
        alert("After a long and arduous journey you finally land back on Mother Earth and shed a small tear because you're a baby.");
        saveGameMars();
        window.location.href ="index.html"
    };
};


//=====================================
// Resources for Pizza Makers Section |                                                                                   |
//=====================================

document.getElementById("martiansection").style.display = "none";

var martianHunter = 0;
var martianHunter2 = 0;
var totalMartianHunter = 0;
var martianHunterCost = Math.floor(20 * Math.pow(1.05, totalMartianHunter)); 
function buyMartianHunter(){
    var martianHunterCost = Math.floor(20 * Math.pow(1.05, totalMartianHunter));     
    if(moneyMars >= martianHunterCost){                                   
        martianHunter = martianHunter + 1;   
        totalMartianHunter = totalMartianHunter + 1; 
        martianHunter2 = martianHunter2 + 1;                               
        moneyMars = moneyMars - martianHunterCost;                          
        document.getElementById('martianHunter').innerHTML = addCommas(martianHunter);  
        document.getElementById('totalMartianHunter').innerHTML = addCommas(totalMartianHunter);
        document.getElementById('martianHunter2').innerHTML = addCommas(martianHunter2);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        document.getElementById("martiansection").style.display = "block";
        updateColours(); 
    };
    var nextMartianHunterCost = Math.floor(20 * Math.pow(1.05, totalMartianHunter)); 
    document.getElementById('martianHunterCost').innerHTML = addCommas(martianHunterCost);      
   
};

function loadMartianHunter(){
    var martianHunterCost = Math.floor(20 * Math.pow(1.05, totalMartianHunter));
    var nextMartianHunterCost = Math.floor(20 * Math.pow(1.05, totalMartianHunter));      
    document.getElementById('martianHunterCost').innerHTML = addCommas(nextMartianHunterCost);
    if (martianHunter2 >= 1){
            document.getElementById("martiansection").style.display = "block";
        }   
    if (martianTrainer2 >= 1){
            document.getElementById("mybox18").style.display = "block";
    }    
};

var martianTrainer = 0;
var martianTrainer2 = 0;
var totalMartianTrainer = 0;
var martianTrainerCost = Math.floor(30 * Math.pow(1.0, totalMartianTrainer));
function buyMartianTrainer(){
    var martianTrainerCost = Math.floor(30 * Math.pow(1.0, totalMartianTrainer));     
    if(moneyMars >= martianTrainerCost){
        document.getElementById("mybox18").style.display = "block";                                   
        martianTrainer = martianTrainer + 1;   
        totalMartianTrainer = totalMartianTrainer + 1; 
        martianTrainer2 = martianTrainer2 + 1;                               
        moneyMars = moneyMars - martianTrainerCost;                          
        document.getElementById('martianTrainer').innerHTML = addCommas(martianTrainer);  
        document.getElementById('totalMartianTrainer').innerHTML = addCommas(totalMartianTrainer);
        document.getElementById('martianTrainer2').innerHTML = addCommas(martianTrainer2);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars); 
        updateColours();
    };
    var nextMartianTrainerCost = Math.floor(30 * Math.pow(1.0, totalMartianTrainer));        
};

document.getElementById("smallbox10").style.display = "none";

var martianTrainer = 0;
var martianTrainer2 = 0;
var totalMartianTrainer = 0;

function buyTenMartianTrainer(){
    var tenMartianTrainerCost = Math.floor(300 * Math.pow(1.0, totalMartianTrainer));     
    if(moneyMars >= tenMartianTrainerCost){                                   
        martianTrainer = martianTrainer + 10;   
        totalMartianTrainer = totalMartianTrainer + 10; 
        martianTrainer2 = martianTrainer2 + 10;                               
        moneyMars = moneyMars - tenMartianTrainerCost;                          
        document.getElementById('martianTrainer').innerHTML = addCommas(martianTrainer);  
        document.getElementById('totalMartianTrainer').innerHTML = addCommas(totalMartianTrainer);
        document.getElementById('martianTrainer2').innerHTML = addCommas(martianTrainer2);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours(); 
    };
    var nextMartianTrainerCost = Math.floor(300 * Math.pow(1.0, totalMartianTrainer));
};

document.getElementById("smallbox100").style.display = "none";

var martianTrainer = 0;
var martianTrainer2 = 0;
var totalMartianTrainer = 0;

function buyHundredMartianTrainer(){
    var hundredMartianTrainerCost = Math.floor(3000 * Math.pow(1.0, totalMartianTrainer));     
    if(moneyMars >= hundredMartianTrainerCost){                                   
        martianTrainer = martianTrainer + 100;   
        totalMartianTrainer = totalMartianTrainer + 100; 
        martianTrainer2 = martianTrainer2 + 100;                               
        moneyMars = moneyMars - hundredMartianTrainerCost;                          
        document.getElementById('martianTrainer').innerHTML = addCommas(martianTrainer);  
        document.getElementById('totalMartianTrainer').innerHTML = addCommas(totalMartianTrainer);
        document.getElementById('martianTrainer2').innerHTML = addCommas(martianTrainer2);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours(); 
    };
    var nextMartianTrainerCost = Math.floor(3000 * Math.pow(1.0, totalMartianTrainer));       
};

document.getElementById("smallbox1000").style.display = "none";

var martianTrainer = 0;
var martianTrainer2 = 0;
var totalMartianTrainer = 0;

function buyThousandMartianTrainer(){
    var thousandMartianTrainerCost = Math.floor(30000 * Math.pow(1.0, totalMartianTrainer));     
    if(moneyMars >= thousandMartianTrainerCost){                                   
        martianTrainer = martianTrainer + 1000;   
        totalMartianTrainer = totalMartianTrainer + 1000; 
        martianTrainer2 = martianTrainer2 + 1000;                               
        moneyMars = moneyMars - thousandMartianTrainerCost;                          
        document.getElementById('martianTrainer').innerHTML = addCommas(martianTrainer);  
        document.getElementById('totalMartianTrainer').innerHTML = addCommas(totalMartianTrainer);
        document.getElementById('martianTrainer2').innerHTML = addCommas(martianTrainer2);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours(); 
    };
    var nextMartianTrainerCost = Math.floor(30000 * Math.pow(1.0, totalMartianTrainer));          
};

document.getElementById("mybox2").style.display = "none";

var taskmaster = 0;
var totalTaskmaster = 0;
var taskmasterCost = Math.floor(50 * Math.pow(1.0, totalTaskmaster));
function buyTaskmaster(){
    var taskmasterCost = Math.floor(50 * Math.pow(1.0, totalTaskmaster));     
    if(moneyMars >= taskmasterCost){                                   
        taskmaster = taskmaster + 1;   
        totalTaskmaster = totalTaskmaster + 1;                                
        moneyMars = moneyMars - taskmasterCost;                          
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);  
        document.getElementById('totalTaskmaster').innerHTML = addCommas(totalTaskmaster);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars); 
        updateColours(); 
    };
    var nextTaskmasterCost = Math.floor(50 * Math.pow(1.0, totalTaskmaster));       
};

document.getElementById("1smallbox10").style.display = "none";

var taskmaster = 0;
var totalTaskmaster = 0;

function buyTenTaskmaster(){
    var tenTaskmasterCost = Math.floor(500 * Math.pow(1.0, totalTaskmaster));     
    if(moneyMars >= tenTaskmasterCost){                                   
        taskmaster = taskmaster + 10;   
        totalTaskmaster = totalTaskmaster + 10;                                
        moneyMars = moneyMars - tenTaskmasterCost;                          
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);  
        document.getElementById('totalTaskmaster').innerHTML = addCommas(totalTaskmaster);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextTaskmasterCost = Math.floor(500 * Math.pow(1.0, totalTaskmaster));       
};

document.getElementById("1smallbox100").style.display = "none";

var taskmaster = 0;
var totalTaskmaster = 0;

function buyHundredTaskmaster(){
    var hundredTaskmasterCost = Math.floor(5000 * Math.pow(1.0, totalTaskmaster));     
    if(moneyMars >= hundredTaskmasterCost){                                   
        taskmaster = taskmaster + 100;   
        totalTaskmaster = totalTaskmaster + 100;                                
        moneyMars = moneyMars - hundredTaskmasterCost;                          
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);  
        document.getElementById('totalTaskmaster').innerHTML = addCommas(totalTaskmaster);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextTaskmasterCost = Math.floor(5000 * Math.pow(1.0, totalTaskmaster));       
};

document.getElementById("1smallbox1000").style.display = "none";

var taskmaster = 0;
var totalTaskmaster = 0;

function buyThousandTaskmaster(){
    var thousandTaskmasterCost = Math.floor(50000 * Math.pow(1.0, totalTaskmaster));     
    if(moneyMars >= thousandTaskmasterCost){                                   
        taskmaster = taskmaster + 1000;   
        totalTaskmaster = totalTaskmaster + 1000;                                
        moneyMars = moneyMars - thousandTaskmasterCost;                          
        document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);  
        document.getElementById('totalTaskmaster').innerHTML = addCommas(totalTaskmaster);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars); 
        updateColours(); 
    };
    var nextTaskmasterCost = Math.floor(50000 * Math.pow(1.0, totalTaskmaster));       
};

document.getElementById("mybox3").style.display = "none";

var overseer = 0;
var totalOverseer = 0;
var overseerCost = Math.floor(500 * Math.pow(1.0, totalOverseer));
function buyOverseer(){
    var overseerCost = Math.floor(500 * Math.pow(1.0, totalOverseer));     
    if(moneyMars >= overseerCost){                                   
        overseer = overseer + 1;   
        totalOverseer = totalOverseer + 1;                                
        moneyMars = moneyMars - overseerCost;                          
        document.getElementById('overseer').innerHTML = addCommas(overseer);  
        document.getElementById('totalOverseer').innerHTML = addCommas(totalOverseer);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextOverseerCost = Math.floor(500 * Math.pow(1.0, totalOverseer));        
};

document.getElementById("2smallbox10").style.display = "none";

var overseer = 0;
var totalOverseer = 0;

function buyTenOverseer(){
    var tenOverseerCost = Math.floor(5000 * Math.pow(1.0, totalOverseer));     
    if(moneyMars >= tenOverseerCost){                                   
        overseer = overseer + 10;   
        totalOverseer = totalOverseer + 10;                                
        moneyMars = moneyMars - tenOverseerCost;                          
        document.getElementById('overseer').innerHTML = addCommas(overseer);  
        document.getElementById('totalOverseer').innerHTML = addCommas(totalOverseer);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextOverseerCost = Math.floor(5000 * Math.pow(1.0, totalOverseer));        
};

document.getElementById("2smallbox100").style.display = "none";

var overseer = 0;
var totalOverseer = 0;

function buyHundredOverseer(){
    var hundredOverseerCost = Math.floor(50000 * Math.pow(1.0, totalOverseer));     
    if(moneyMars >= hundredOverseerCost){                                   
        overseer = overseer + 100;   
        totalOverseer = totalOverseer + 100;                                
        moneyMars = moneyMars - hundredOverseerCost;                          
        document.getElementById('overseer').innerHTML = addCommas(overseer);  
        document.getElementById('totalOverseer').innerHTML = addCommas(totalOverseer);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextOverseerCost = Math.floor(50000 * Math.pow(1.0, totalOverseer));        
};

document.getElementById("2smallbox1000").style.display = "none";

var overseer = 0;
var totalOverseer = 0;

function buyThousandOverseer(){
    var thousandOverseerCost = Math.floor(500000 * Math.pow(1.0, totalOverseer));     
    if(moneyMars >= thousandOverseerCost){                                   
        overseer = overseer + 1000;   
        totalOverseer = totalOverseer + 1000;                                
        moneyMars = moneyMars - thousandOverseerCost;                          
        document.getElementById('overseer').innerHTML = addCommas(overseer);  
        document.getElementById('totalOverseer').innerHTML = addCommas(totalOverseer);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextOverseerCost = Math.floor(500000 * Math.pow(1.0, totalOverseer));        
};

document.getElementById("mybox4").style.display = "none";

var technician = 0;
var totalTechnician = 0;
var technicianCost = Math.floor(1000 * Math.pow(1.0, totalTechnician)); 
function buyTechnician(){
    var technicianCost = Math.floor(1000 * Math.pow(1.0, totalTechnician));     
    if(moneyMars >= technicianCost){                                   
        technician = technician + 1;   
        totalTechnician = totalTechnician + 1;                                
        moneyMars = moneyMars - technicianCost;                          
        document.getElementById('technician').innerHTML = addCommas(technician);  
        document.getElementById('totalTechnician').innerHTML = addCommas(totalTechnician);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextTechnicianCost = Math.floor(1000 * Math.pow(1.0, totalTechnician));       
};

document.getElementById("3smallbox10").style.display = "none";

var technician = 0;
var totalTechnician = 0;

function buyTenTechnician(){
    var tenTechnicianCost = Math.floor(10000 * Math.pow(1.0, totalTechnician));     
    if(moneyMars >= tenTechnicianCost){                                   
        technician = technician + 10;   
        totalTechnician = totalTechnician + 10;                                
        moneyMars = moneyMars - tenTechnicianCost;                          
        document.getElementById('technician').innerHTML = addCommas(technician);  
        document.getElementById('totalTechnician').innerHTML = addCommas(totalTechnician);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextTechnicianCost = Math.floor(10000 * Math.pow(1.0, totalTechnician));       
};

document.getElementById("3smallbox100").style.display = "none";

var technician = 0;
var totalTechnician = 0;

function buyHundredTechnician(){
    var hundredTechnicianCost = Math.floor(100000 * Math.pow(1.0, totalTechnician));     
    if(moneyMars >= hundredTechnicianCost){                                   
        technician = technician + 100;   
        totalTechnician = totalTechnician + 100;                                
        moneyMars = moneyMars - hundredTechnicianCost;                          
        document.getElementById('technician').innerHTML = addCommas(technician);  
        document.getElementById('totalTechnician').innerHTML = addCommas(totalTechnician);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars); 
        updateColours(); 
    };
    var nextTechnicianCost = Math.floor(100000 * Math.pow(1.0, totalTechnician));       
};

document.getElementById("3smallbox1000").style.display = "none";

var technician = 0;
var totalTechnician = 0;

function buyThousandTechnician(){
    var thousandTechnicianCost = Math.floor(1000000 * Math.pow(1.0, totalTechnician));     
    if(moneyMars >= thousandTechnicianCost){                                   
        technician = technician + 1000;   
        totalTechnician = totalTechnician + 1000;                                
        moneyMars = moneyMars - thousandTechnicianCost;                          
        document.getElementById('technician').innerHTML = addCommas(technician);  
        document.getElementById('totalTechnician').innerHTML = addCommas(totalTechnician);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextTechnicianCost = Math.floor(1000000 * Math.pow(1.0, totalTechnician));       
};

document.getElementById("mybox6").style.display = "none";

var rover = 0;
var totalRover = 0;
var roverCost = Math.floor(150 * Math.pow(1.0, totalRover));
function buyRover(){
    var roverCost = Math.floor(150 * Math.pow(1.0, totalRover));     
    if(moneyMars >= roverCost){                                   
        rover = rover + 1;   
        totalRover = totalRover + 1;                                
        moneyMars = moneyMars - roverCost;                          
        document.getElementById('rover').innerHTML = rover;  
        document.getElementById('totalRover').innerHTML = totalRover;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextRoverCost = Math.floor(150 * Math.pow(1.0, totalRover));       
    document.getElementById('roverCost').innerHTML = nextRoverCost; 
};

document.getElementById("mybox7").style.display = "none";

var mine = 0;
var totalMine = 0;
var mineCost = Math.floor(500 * Math.pow(1.0, totalMine)); 
function buyMine(){
    var mineCost = Math.floor(500 * Math.pow(1.0, totalMine));     
    if(moneyMars >= mineCost){                                   
        mine = mine + 1;   
        totalMine = totalMine + 1;                                
        moneyMars = moneyMars - mineCost;                          
        document.getElementById('mine').innerHTML = mine;  
        document.getElementById('totalMine').innerHTML = totalMine;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextMineCost = Math.floor(500 * Math.pow(1.0, totalMine));       
    document.getElementById('mineCost').innerHTML = nextMineCost; 
};

document.getElementById("mybox8").style.display = "none";

var park = 0;
var totalPark = 0;
var parkCost = Math.floor(6000 * Math.pow(1.0, totalPark));
function buyPark(){
    var parkCost = Math.floor(6000 * Math.pow(1.0, totalPark));     
    if(moneyMars >= parkCost){                                   
        park = park + 1;   
        totalPark = totalPark + 1;                                
        moneyMars = moneyMars - parkCost;                          
        document.getElementById('park').innerHTML = park;  
        document.getElementById('totalPark').innerHTML = totalPark;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextParkCost = Math.floor(6000 * Math.pow(1.0, totalPark));        
};

document.getElementById("mybox9").style.display = "none";

var brewery = 0;
var totalBrewery = 0;
var breweryCost = Math.floor(30000 * Math.pow(1.0, totalBrewery));
function buyBrewery(){
    var breweryCost = Math.floor(30000 * Math.pow(1.0, totalBrewery));     
    if(moneyMars >= breweryCost){                                   
        brewery = brewery + 1;   
        totalBrewery = totalBrewery + 1;                                
        moneyMars = moneyMars - breweryCost;                          
        document.getElementById('brewery').innerHTML = brewery;  
        document.getElementById('totalBrewery').innerHTML = totalBrewery;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextBreweryCost = Math.floor(30000 * Math.pow(1.0, totalBrewery));       
};

document.getElementById("mybox10").style.display = "none";

var hotel = 0;
var totalHotel = 0;
var hotelCost = Math.floor(200000 * Math.pow(1.0, totalHotel));
function buyHotel(){
    var hotelCost = Math.floor(200000 * Math.pow(1.0, totalHotel));     
    if(moneyMars >= hotelCost){                                   
        hotel = hotel + 1;   
        totalHotel = totalHotel + 1;                                
        moneyMars = moneyMars - hotelCost;                          
        document.getElementById('hotel').innerHTML = hotel;  
        document.getElementById('totalHotel').innerHTML = totalHotel;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextHotelCost = Math.floor(200000 * Math.pow(1.0, totalHotel));       
};

document.getElementById("mybox11").style.display = "none";

var ecosystem = 0;
var totalEcosystem = 0;
var ecosystemCost = Math.floor(700000 * Math.pow(1.0, totalEcosystem));
function buyEcosystem(){
    var ecosystemCost = Math.floor(700000 * Math.pow(1.0, totalEcosystem));     
    if(moneyMars >= ecosystemCost){                                   
        ecosystem = ecosystem + 1;   
        totalEcosystem = totalEcosystem + 1;                                
        moneyMars = moneyMars - ecosystemCost;                          
        document.getElementById('ecosystem').innerHTML = ecosystem;  
        document.getElementById('totalEcosystem').innerHTML = totalEcosystem;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextEcosystemCost = Math.floor(700000 * Math.pow(1.0, totalEcosystem));        
};

document.getElementById("mybox12").style.display = "none";

var harvester = 0;
var totalHarvester = 0;
var harvesterCost = Math.floor(13000000 * Math.pow(1.0, totalHarvester));
function buyHarvester(){
    var harvesterCost = Math.floor(13000000 * Math.pow(1.0, totalHarvester));     
    if(moneyMars >= harvesterCost){                                   
        harvester = harvester + 1;   
        totalHarvester = totalHarvester + 1;                                
        moneyMars = moneyMars - harvesterCost;                          
        document.getElementById('harvester').innerHTML = harvester;  
        document.getElementById('totalHarvester').innerHTML = totalHarvester;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextHarvesterCost = Math.floor(13000000 * Math.pow(1.0, totalHarvester));       
};

document.getElementById("mybox13").style.display = "none";

var excavator = 0;
var totalExcavator = 0;
var excavatorCost = Math.floor(200000000 * Math.pow(1.0, totalExcavator));
function buyExcavator(){
    var excavatorCost = Math.floor(200000000 * Math.pow(1.0, totalExcavator));     
    if(moneyMars >= excavatorCost){                                   
        excavator = excavator + 1;   
        totalExcavator = totalExcavator + 1;                                
        moneyMars = moneyMars - excavatorCost;                          
        document.getElementById('excavator').innerHTML = excavator;  
        document.getElementById('totalExcavator').innerHTML = totalExcavator;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextExcavatorCost = Math.floor(200000000 * Math.pow(1.0, totalExcavator));        
};

document.getElementById("mybox14").style.display = "none";

var extractor = 0;
var totalExtractor = 0;
var extractorCost = Math.floor(1000000000 * Math.pow(1.0, totalExtractor));
function buyExtractor(){
    var extractorCost = Math.floor(1000000000 * Math.pow(1.0, totalExtractor));     
    if(moneyMars >= extractorCost){                                   
        extractor = extractor + 1;   
        totalExtractor = totalExtractor + 1;                                
        moneyMars = moneyMars - extractorCost;                          
        document.getElementById('extractor').innerHTML = extractor;  
        document.getElementById('totalExtractor').innerHTML = totalExtractor;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextExtractorCost = Math.floor(1000000000 * Math.pow(1.0, totalExtractor));        
};

document.getElementById("mybox16").style.display = "none";

var atmosphere = 0;
var totalAtmosphere = 0;
var atmosphereCost = Math.floor(50000000000 * Math.pow(1.0, totalAtmosphere));
function buyAtmosphere(){
    var atmosphereCost = Math.floor(50000000000 * Math.pow(1.0, totalAtmosphere));     
    if(moneyMars >= atmosphereCost){                                   
        atmosphere = atmosphere + 1;   
        totalAtmosphere = totalAtmosphere + 1;                                
        moneyMars = moneyMars - atmosphereCost;                          
        document.getElementById('atmosphere').innerHTML = atmosphere;  
        document.getElementById('totalAtmosphere').innerHTML = totalAtmosphere;  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextAtmosphereCost = Math.floor(50000000000 * Math.pow(1.0, totalAtmosphere));        
};

document.getElementById("mybox17").style.display = "none";

var martianMetal = 0;
var totalMartianMetal = 0;
var martianMetalCost = Math.floor(10000 * Math.pow(1.0, totalMartianMetal));
function buyMartianMetal(){
    var martianMetalCost = Math.floor(10000 * Math.pow(1.0, totalMartianMetal));     
    if(moneyMars >= martianMetalCost){                                   
        martianMetal = martianMetal + 1;   
        totalMartianMetal = totalMartianMetal + 1;                                
        moneyMars = moneyMars - martianMetalCost;                          
        document.getElementById('martianMetal').innerHTML = addCommas(martianMetal);  
        document.getElementById('totalMartianMetal').innerHTML = addCommas(totalMartianMetal);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextMartianMetalCost = Math.floor(10000 * Math.pow(1.0, totalMartianMetal));        
};

document.getElementById("4smallbox10").style.display = "none";

var martianMetal = 0;
var totalMartianMetal = 0;

function buyTenMartianMetal(){
    var tenMartianMetalCost = Math.floor(100000 * Math.pow(1.0, totalMartianMetal));     
    if(moneyMars >= tenMartianMetalCost){                                   
        martianMetal = martianMetal + 10;   
        totalMartianMetal = totalMartianMetal + 10;                                
        moneyMars = moneyMars - tenMartianMetalCost;                          
        document.getElementById('martianMetal').innerHTML = addCommas(martianMetal);  
        document.getElementById('totalMartianMetal').innerHTML = addCommas(totalMartianMetal);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextMartianMetalCost = Math.floor(100000 * Math.pow(1.0, totalMartianMetal));        
};

document.getElementById("4smallbox100").style.display = "none";

var martianMetal = 0;
var totalMartianMetal = 0;

function buyHundredMartianMetal(){
    var hundredMartianMetalCost = Math.floor(1000000 * Math.pow(1.0, totalMartianMetal));     
    if(moneyMars >= hundredMartianMetalCost){                                   
        martianMetal = martianMetal + 100;   
        totalMartianMetal = totalMartianMetal + 100;                                
        moneyMars = moneyMars - hundredMartianMetalCost;                          
        document.getElementById('martianMetal').innerHTML = addCommas(martianMetal);  
        document.getElementById('totalMartianMetal').innerHTML = addCommas(totalMartianMetal);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextMartianMetalCost = Math.floor(1000000 * Math.pow(1.0, totalMartianMetal));        
};

document.getElementById("4smallbox1000").style.display = "none";

var martianMetal = 0;
var totalMartianMetal = 0;

function buyThousandMartianMetal(){
    var thousandMartianMetalCost = Math.floor(10000000 * Math.pow(1.0, totalMartianMetal));     
    if(moneyMars >= thousandMartianMetalCost){                                   
        martianMetal = martianMetal + 1000;   
        totalMartianMetal = totalMartianMetal + 1000;                                
        moneyMars = moneyMars - thousandMartianMetalCost;                          
        document.getElementById('martianMetal').innerHTML = addCommas(martianMetal);  
        document.getElementById('totalMartianMetal').innerHTML = addCommas(totalMartianMetal);  
        document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
        updateColours();  
    };
    var nextMartianMetalCost = Math.floor(10000000 * Math.pow(1.0, totalMartianMetal));        
};


//=======================
// Achievements Section  |                                                                                   
//=======================



//===================
// Upgrades Section  |                                                                                   
//===================

document.getElementById("mybox33").style.display = "none";

var automaticTrainers = 0;
var automaticTrainersCost = 50000;
function buyAutomaticTrainers(){
    var automaticTrainersCost = 50000;
    if(moneyMars >= automaticTrainersCost){
        moneyMars = moneyMars - automaticTrainersCost;
        automaticTrainers = automaticTrainers + 1;
         document.getElementById('automaticTrainers').innerHTML = automaticTrainers;
         document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
         updateColours();
   };
   if (automaticTrainers === 1){
            window.setInterval(function(){
    
    getXP(martianTrainer * 1);
    
    }, 1000);
    }
   if(automaticTrainers === 2){
    confirm("Are you kidding me?")
   }
   if(automaticTrainers === 3){
    confirm("Like, for real.")
   }
   if(automaticTrainers === 4){
    confirm("Is this actually happening again?")
   }
   if(automaticTrainers === 5){
    confirm("Did you not learn anything from last time?")
   }
   if(automaticTrainers === 6){
    confirm("Nothing is ever going to happen.")
   }
   if(automaticTrainers === 7){
    confirm("You might as well just throw the pizzas in the bin.")
   }
   if(automaticTrainers === 8){
    confirm("Take a hint.")
   }
   if(automaticTrainers === 9){
    confirm("What is wrong with you?")
   }
   if(automaticTrainers === 10){
    confirm("Do you have a problem?")
   }
   if(automaticTrainers === 11){
    confirm("Like a mental problem.")
   }
   if(automaticTrainers === 12){
    confirm("Yes, no?")
   }
   if(automaticTrainers === 13){
    confirm("Not going to talk then?")
   }
   if(automaticTrainers === 14){
    confirm("But you're still throwing moneyMars away.")
   }
   if(automaticTrainers === 15){
    confirm("And again.")
   }
   if(automaticTrainers === 16){
    confirm("And again.")
   }
   if(automaticTrainers === 17){
    confirm("You won't like me when I'm angry.")
   }
   if(automaticTrainers === 18){
    confirm("I'm going to count to 3.")
   }
   if(automaticTrainers === 19){
    confirm("1")
   }
   if(automaticTrainers === 20){
    confirm("2")
   }
   if(automaticTrainers === 21){
    confirm("3")
   }
   if(automaticTrainers === 22){
     confirm("You really just let that happen again. Congratulations.") 
     moneyMars = 0;
   }
   if(automaticTrainers === 23){
    confirm("Your perseverance is quite impressive.")  
   }
   if(automaticTrainers === 24){
    confirm("But you're still an idiot.")  
   }
   if(automaticTrainers === 25){
    confirm("I'm ignoring you.")  
   }
   if(automaticTrainers >= 50){
    var win=window.open('http://pizzapresser.com/flappypizza.html', '_blank');
    win.focus(); 
   }

};

document.getElementById("mybox34").style.display = "none";

var automaticTrainers2 = 0;
var automaticTrainers2Cost = 20000000;
function buyAutomaticTrainers2(){
    var automaticTrainers2Cost = 20000000;
    if(moneyMars >= automaticTrainers2Cost){
        moneyMars = moneyMars - automaticTrainers2Cost;
        automaticTrainers2 = automaticTrainers2 + 1;
         document.getElementById('automaticTrainers2').innerHTML = automaticTrainers2;
         document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
         updateColours();
   };
   if (automaticTrainers2 >= 1){
            document.getElementById("mybox34").style.display = "none";
         }
   if (automaticTrainers2 >= 1){
            window.setInterval(function(){
    
    getXP(martianTrainer * 1);
    
}, 500);
    }

};

document.getElementById("mybox35").style.display = "none";

var convenience = 0;
var convenienceCost = 10000;
function buyConvenience(){
    var convenienceCost = 10000;
    if(moneyMars >= convenienceCost){
        moneyMars = moneyMars - convenienceCost;
        convenience = convenience + 1;
         document.getElementById('convenience').innerHTML = convenience;
         document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
         document.getElementById("smallbox10").style.display = "inline-block";
         document.getElementById("smallbox100").style.display = "inline-block";
         document.getElementById("smallbox1000").style.display = "inline-block";
         document.getElementById("1smallbox10").style.display = "inline-block";
         document.getElementById("1smallbox100").style.display = "inline-block";
         document.getElementById("1smallbox1000").style.display = "inline-block";
         updateColours();
         if (convenience >= 1){
            document.getElementById("mybox35").style.display = "none";
         }
    }
};

document.getElementById("mybox36").style.display = "none";

var convenience2 = 0;
var convenience2Cost = 1000000;
function buyConvenience2(){
    var convenience2Cost = 1000000;
    if(moneyMars >= convenience2Cost){
        moneyMars = moneyMars - convenience2Cost;
        convenience2 = convenience2 + 1;
         document.getElementById('convenience2').innerHTML = convenience2;
         document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
         document.getElementById("2smallbox10").style.display = "inline-block";
         document.getElementById("2smallbox100").style.display = "inline-block";
         document.getElementById("2smallbox1000").style.display = "inline-block";
         updateColours();
         if (convenience2 >= 1){
            document.getElementById("mybox36").style.display = "none";
         }
    }
};

document.getElementById("mybox37").style.display = "none";

var convenience3 = 0;
var convenience3Cost = 50000000;
function buyConvenience3(){
    var convenience3Cost = 50000000;
    if(moneyMars >= convenience3Cost){
        moneyMars = moneyMars - convenience3Cost;
        convenience3 = convenience3 + 1;
         document.getElementById('convenience3').innerHTML = convenience3;
         document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
         document.getElementById("3smallbox10").style.display = "inline-block";
         document.getElementById("3smallbox100").style.display = "inline-block";
         document.getElementById("3smallbox1000").style.display = "inline-block";
         document.getElementById("4smallbox10").style.display = "inline-block";
         document.getElementById("4smallbox100").style.display = "inline-block";
         document.getElementById("4smallbox1000").style.display = "inline-block";
         updateColours();
         if (convenience3 >= 1){
            document.getElementById("mybox37").style.display = "none";
         }
    }
};


function saveGameMars(){
    
    localStorage['saveMars'] = btoa(JSON.stringify(pizzaMars));
    localStorage['saveMars1'] = btoa(JSON.stringify(moneyMars));
    localStorage['saveMars2'] = btoa(JSON.stringify(martian));
    localStorage['saveMars3'] = btoa(JSON.stringify(marsRover));
    localStorage['saveMars4'] = btoa(JSON.stringify(marsMine));
    localStorage['saveMars5'] = btoa(JSON.stringify(marsPark));
    localStorage['saveMars6'] = btoa(JSON.stringify(marsBrewery));
    localStorage['saveMars7'] = btoa(JSON.stringify(marsHotel));
    localStorage['saveMars8'] = btoa(JSON.stringify(marsEcosystem));
    localStorage['saveMars9'] = btoa(JSON.stringify(marsHarvester));
    localStorage['saveMars10'] = btoa(JSON.stringify(marsExcavator));
    localStorage['saveMars11'] = btoa(JSON.stringify(trainedMartian));
    localStorage['saveMars13'] = btoa(JSON.stringify(taskmaster));
    localStorage['saveMars14'] = btoa(JSON.stringify(totalTaskmaster));
    localStorage['saveMars15'] = btoa(JSON.stringify(overseer));
    localStorage['saveMars16'] = btoa(JSON.stringify(totalOverseer));
    localStorage['saveMars17'] = btoa(JSON.stringify(technician));
    localStorage['saveMars18'] = btoa(JSON.stringify(totalTechnician));
    localStorage['saveMars21'] = btoa(JSON.stringify(rover));
    localStorage['saveMars22'] = btoa(JSON.stringify(totalRover));
    localStorage['saveMars23'] = btoa(JSON.stringify(mine));
    localStorage['saveMars24'] = btoa(JSON.stringify(totalMine));
    localStorage['saveMars25'] = btoa(JSON.stringify(park));
    localStorage['saveMars26'] = btoa(JSON.stringify(totalPark));
    localStorage['saveMars27'] = btoa(JSON.stringify(brewery));
    localStorage['saveMars28'] = btoa(JSON.stringify(totalBrewery));
    localStorage['saveMars29'] = btoa(JSON.stringify(hotel));
    localStorage['saveMars30'] = btoa(JSON.stringify(totalHotel));
    localStorage['saveMars31'] = btoa(JSON.stringify(ecosystem));
    localStorage['saveMars32'] = btoa(JSON.stringify(totalEcosystem));
    localStorage['saveMars33'] = btoa(JSON.stringify(harvester));
    localStorage['saveMars34'] = btoa(JSON.stringify(totalHarvester));
    localStorage['saveMars35'] = btoa(JSON.stringify(excavator));
    localStorage['saveMars36'] = btoa(JSON.stringify(totalExcavator));
    localStorage['saveMars37'] = btoa(JSON.stringify(martianMetal));
    localStorage['saveMars38'] = btoa(JSON.stringify(totalMartianMetal));
    localStorage['saveMars49'] = btoa(JSON.stringify(extractor));
    localStorage['saveMars50'] = btoa(JSON.stringify(totalExtractor));
    localStorage['saveMars51'] = btoa(JSON.stringify(atmosphere));
    localStorage['saveMars52'] = btoa(JSON.stringify(totalAtmosphere));
    localStorage['saveMars59'] = btoa(JSON.stringify(marsExtractor));
    localStorage['saveMars60'] = btoa(JSON.stringify(marsAtmosphere));
    localStorage['saveMars61'] = btoa(JSON.stringify(capturedMartian));
    localStorage['saveMars62'] = btoa(JSON.stringify(martianHunter));
    localStorage['saveMars63'] = btoa(JSON.stringify(martianTrainer));
    localStorage['saveMars64'] = btoa(JSON.stringify(xpNeededMars));
    localStorage['saveMars65'] = btoa(JSON.stringify(xpMars));
    localStorage['saveMars66'] = btoa(JSON.stringify(martianHunter2));
    localStorage['saveMars67'] = btoa(JSON.stringify(martianTrainer2));
    localStorage['saveMars68'] = btoa(JSON.stringify(totalMartianHunter));
    localStorage['saveMars69'] = btoa(JSON.stringify(totalMartianTrainer));
    localStorage['saveMars70'] = btoa(JSON.stringify(automaticTrainers));
    localStorage['saveMars71'] = btoa(JSON.stringify(automaticTrainers2));
    localStorage['saveMars72'] = btoa(JSON.stringify(convenience));
    localStorage['saveMars73'] = btoa(JSON.stringify(convenience2));
    localStorage['saveMars74'] = btoa(JSON.stringify(convenience3));
    localStorage['saveMars75'] = btoa(JSON.stringify(totalMartianPizza));

}

function loadGameMars() {

    pizzaMars = JSON.parse(atob(localStorage['saveMars']))
    moneyMars = JSON.parse(atob(localStorage['saveMars1']))
    martian = JSON.parse(atob(localStorage['saveMars2']))
    marsRover = JSON.parse(atob(localStorage['saveMars3']))
    marsMine = JSON.parse(atob(localStorage['saveMars4']))
    marsPark = JSON.parse(atob(localStorage['saveMars5']))
    marsBrewery = JSON.parse(atob(localStorage['saveMars6']))
    marsHotel = JSON.parse(atob(localStorage['saveMars7']))
    marsEcosystem = JSON.parse(atob(localStorage['saveMars8']))
    marsHarvester = JSON.parse(atob(localStorage['saveMars9']))
    marsExcavator = JSON.parse(atob(localStorage['saveMars10']))
    trainedMartian = JSON.parse(atob(localStorage['saveMars11']))
    taskmaster = JSON.parse(atob(localStorage['saveMars13']))
    totalTaskmaster = JSON.parse(atob(localStorage['saveMars14']))
    overseer = JSON.parse(atob(localStorage['saveMars15']))
    totalOverseer = JSON.parse(atob(localStorage['saveMars16']))
    technician = JSON.parse(atob(localStorage['saveMars17']))
    totalTechnician = JSON.parse(atob(localStorage['saveMars18']))
    rover = JSON.parse(atob(localStorage['saveMars21']))
    totalRover = JSON.parse(atob(localStorage['saveMars22']))
    mine = JSON.parse(atob(localStorage['saveMars23']))
    totalMine = JSON.parse(atob(localStorage['saveMars24']))
    park = JSON.parse(atob(localStorage['saveMars25']))
    totalPark = JSON.parse(atob(localStorage['saveMars26']))
    brewery = JSON.parse(atob(localStorage['saveMars27']))
    totalBrewery = JSON.parse(atob(localStorage['saveMars28']))
    hotel = JSON.parse(atob(localStorage['saveMars29']))
    totalHotel = JSON.parse(atob(localStorage['saveMars30']))
    ecosystem = JSON.parse(atob(localStorage['saveMars31']))
    totalEcosystem = JSON.parse(atob(localStorage['saveMars32']))
    harvester = JSON.parse(atob(localStorage['saveMars33']))
    totalHarvester = JSON.parse(atob(localStorage['saveMars34']))
    excavator = JSON.parse(atob(localStorage['saveMars35']))
    totalExcavator = JSON.parse(atob(localStorage['saveMars36']))
    martianMetal = JSON.parse(atob(localStorage['saveMars37']))
    totalMartianMetal = JSON.parse(atob(localStorage['saveMars38']))
    extractor = JSON.parse(atob(localStorage['saveMars49']))
    totalExtractor = JSON.parse(atob(localStorage['saveMars50']))
    atmosphere = JSON.parse(atob(localStorage['saveMars51']))
    totalAtmosphere = JSON.parse(atob(localStorage['saveMars52']))
    marsExtractor = JSON.parse(atob(localStorage['saveMars59']))
    marsAtmosphere = JSON.parse(atob(localStorage['saveMars60'])) 
    martianHunter = JSON.parse(atob(localStorage['saveMars62']))
    martianTrainer = JSON.parse(atob(localStorage['saveMars63']))
    xpNeededMars = JSON.parse(atob(localStorage['saveMars64']))
    xpMars = JSON.parse(atob(localStorage['saveMars65']))
    martianHunter2 = JSON.parse(atob(localStorage['saveMars66']))
    totalMartianHunter = JSON.parse(atob(localStorage['saveMars68']))
    totalMartianTrainer = JSON.parse(atob(localStorage['saveMars69']))
    automaticTrainers = JSON.parse(atob(localStorage['saveMars70']))
    automaticTrainers2 = JSON.parse(atob(localStorage['saveMars71']))
    convenience = JSON.parse(atob(localStorage['saveMars72']))
    convenience2 = JSON.parse(atob(localStorage['saveMars73']))
    convenience3 = JSON.parse(atob(localStorage['saveMars74']))
    totalMartianPizza = JSON.parse(atob(localStorage['saveMars75']))
    capturedMartian = JSON.parse(atob(localStorage['saveMars61']))

    document.getElementById('pizzaMars').innerHTML = addCommas(pizzaMars);
    document.getElementById('moneyMars').innerHTML = addCommas(moneyMars);
    document.getElementById('martian').innerHTML = addCommas(martian);
    document.getElementById('marsRover').innerHTML = addCommas(marsRover);
    document.getElementById('marsMine').innerHTML = addCommas(marsMine);
    document.getElementById('marsPark').innerHTML = addCommas(marsPark);
    document.getElementById('marsBrewery').innerHTML = addCommas(marsBrewery);
    document.getElementById('marsHotel').innerHTML = addCommas(marsHotel);
    document.getElementById('marsEcosystem').innerHTML = addCommas(marsEcosystem);
    document.getElementById('marsHarvester').innerHTML = addCommas(marsHarvester);
    document.getElementById('marsExcavator').innerHTML = addCommas(marsExcavator);
    document.getElementById('trainedMartian').innerHTML = addCommas(trainedMartian);
    document.getElementById('taskmaster').innerHTML = addCommas(taskmaster);
    document.getElementById('totalTaskmaster').innerHTML = addCommas(totalTaskmaster);
    document.getElementById('overseer').innerHTML = addCommas(overseer);
    document.getElementById('totalOverseer').innerHTML = addCommas(totalOverseer);
    document.getElementById('technician').innerHTML = addCommas(technician);
    document.getElementById('totalTechnician').innerHTML = addCommas(totalTechnician);
    document.getElementById('rover').innerHTML = addCommas(rover);
    document.getElementById('totalRover').innerHTML = addCommas(totalRover);
    document.getElementById('mine').innerHTML = addCommas(mine);
    document.getElementById('totalMine').innerHTML = addCommas(totalMine);
    document.getElementById('park').innerHTML = addCommas(park);
    document.getElementById('totalPark').innerHTML = addCommas(totalPark);
    document.getElementById('brewery').innerHTML = addCommas(brewery);
    document.getElementById('totalBrewery').innerHTML = addCommas(totalBrewery);
    document.getElementById('hotel').innerHTML = addCommas(hotel);
    document.getElementById('totalHotel').innerHTML = addCommas(totalHotel);
    document.getElementById('ecosystem').innerHTML = addCommas(ecosystem);
    document.getElementById('totalEcosystem').innerHTML = addCommas(totalEcosystem);
    document.getElementById('harvester').innerHTML = addCommas(harvester);
    document.getElementById('totalHarvester').innerHTML = addCommas(totalHarvester);
    document.getElementById('excavator').innerHTML = addCommas(excavator);
    document.getElementById('totalExcavator').innerHTML = addCommas(totalExcavator);
    document.getElementById('martianMetal').innerHTML = addCommas(martianMetal);
    document.getElementById('totalMartianMetal').innerHTML = addCommas(totalMartianMetal);
    document.getElementById('overseer').innerHTML = addCommas(overseer);
    document.getElementById('totalOverseer').innerHTML = addCommas(totalOverseer);
    document.getElementById('extractor').innerHTML = addCommas(extractor);
    document.getElementById('totalExtractor').innerHTML = addCommas(totalExtractor);
    document.getElementById('atmosphere').innerHTML = addCommas(atmosphere);
    document.getElementById('totalAtmosphere').innerHTML = addCommas(totalAtmosphere);
    document.getElementById('marsExtractor').innerHTML = addCommas(marsExtractor);
    document.getElementById('marsAtmosphere').innerHTML = addCommas(marsAtmosphere);
    document.getElementById('capturedMartian').innerHTML = addCommas(capturedMartian);
    document.getElementById('martianHunter').innerHTML = addCommas(martianHunter);
    document.getElementById('martianTrainer').innerHTML = addCommas(martianTrainer);
    document.getElementById('xpNeededMars').innerHTML = addCommas(xpNeededMars);
    document.getElementById('xpMars').innerHTML = addCommas(xpMars);
    document.getElementById('martianHunter2').innerHTML = addCommas(martianHunter2);
    document.getElementById('convenience').innerHTML = addCommas(convenience);
    document.getElementById('convenience2').innerHTML = addCommas(convenience2);
    document.getElementById('convenience3').innerHTML = addCommas(convenience3);
    document.getElementById('totalMartianPizza').innerHTML = addCommas(totalMartianPizza);
    document.getElementById('totalMartianHunter').innerHTML = addCommas(totalMartianHunter);
    document.getElementById('totalMartianTrainer').innerHTML = addCommas(totalMartianTrainer);
    document.getElementById('automaticTrainers').innerHTML = addCommas(automaticTrainers);
    document.getElementById('automaticTrainers2').innerHTML = addCommas(automaticTrainers2);
    martianTrainer2 = JSON.parse(atob(localStorage['saveMars67']))
    document.getElementById('martianTrainer2').innerHTML = addCommas(martianTrainer2);
};

window.setInterval(function(){
    
    saveGameMars();
    
}, 60000);

function deleteGameMars() {
    localStorage.clear();
    location.reload();
}

$(document).ready(function(){

        $("#mybox").hover(function() {//Mouse Enters
            $("#tooltip").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox1").hover(function() {//Mouse Enters
            $("#tooltip1").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip1").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip1").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox2").hover(function() {//Mouse Enters
            $("#tooltip2").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip2").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip2").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox3").hover(function() {//Mouse Enters
            $("#tooltip3").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip3").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip3").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox4").hover(function() {//Mouse Enters
            $("#tooltip4").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip4").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip4").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox5").hover(function() {//Mouse Enters
            $("#tooltip5").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip5").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip5").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox6").hover(function() {//Mouse Enters
            $("#tooltip6").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip6").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip6").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox7").hover(function() {//Mouse Enters
            $("#tooltip7").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip7").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip7").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox8").hover(function() {//Mouse Enters
            $("#tooltip8").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip8").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip8").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox9").hover(function() {//Mouse Enters
            $("#tooltip9").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip9").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip9").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox10").hover(function() {//Mouse Enters
            $("#tooltip10").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip10").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip10").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox11").hover(function() {//Mouse Enters
            $("#tooltip11").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip11").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip11").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox12").hover(function() {//Mouse Enters
            $("#tooltip12").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip12").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip12").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox13").hover(function() {//Mouse Enters
            $("#tooltip13").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip13").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip13").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox14").hover(function() {//Mouse Enters
            $("#tooltip14").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip14").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip14").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox15").hover(function() {//Mouse Enters
            $("#tooltip15").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip15").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip15").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox16").hover(function() {//Mouse Enters
            $("#tooltip16").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip16").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip16").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox17").hover(function() {//Mouse Enters
            $("#tooltip17").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip17").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+15;
            var my = event.pageY+15;
            $("#tooltip17").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox18").hover(function() {//Mouse Enters
            $("#tooltip18").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip18").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip18").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox19").hover(function() {//Mouse Enters
            $("#tooltip19").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip19").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip19").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox20").hover(function() {//Mouse Enters
            $("#tooltip20").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip20").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip20").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox21").hover(function() {//Mouse Enters
            $("#tooltip21").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip21").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip21").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox22").hover(function() {//Mouse Enters
            $("#tooltip22").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip22").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip22").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox23").hover(function() {//Mouse Enters
            $("#tooltip23").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip23").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip23").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox24").hover(function() {//Mouse Enters
            $("#tooltip24").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip24").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip24").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox25").hover(function() {//Mouse Enters
            $("#tooltip25").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip25").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip25").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox26").hover(function() {//Mouse Enters
            $("#tooltip26").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip26").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX+-100;
            var my = event.pageY+30;
            $("#tooltip26").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox27").hover(function() {//Mouse Enters
            $("#tooltip27").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip27").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip27").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox28").hover(function() {//Mouse Enters
            $("#tooltip28").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip28").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip28").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox29").hover(function() {//Mouse Enters
            $("#tooltip29").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip29").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip29").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox30").hover(function() {//Mouse Enters
            $("#tooltip30").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip30").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip30").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox31").hover(function() {//Mouse Enters
            $("#tooltip31").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip31").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip31").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox32").hover(function() {//Mouse Enters
            $("#tooltip32").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip32").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip32").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox33").hover(function() {//Mouse Enters
            $("#tooltip33").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip33").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip33").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox34").hover(function() {//Mouse Enters
            $("#tooltip34").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip34").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip34").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox35").hover(function() {//Mouse Enters
            $("#tooltip35").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip35").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip35").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox36").hover(function() {//Mouse Enters
            $("#tooltip36").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip36").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip36").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox37").hover(function() {//Mouse Enters
            $("#tooltip37").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip37").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip37").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox38").hover(function() {//Mouse Enters
            $("#tooltip38").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip38").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip38").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox39").hover(function() {//Mouse Enters
            $("#tooltip39").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip39").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip39").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox40").hover(function() {//Mouse Enters
            $("#tooltip40").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip40").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip40").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox41").hover(function() {//Mouse Enters
            $("#tooltip41").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip41").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip41").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox42").hover(function() {//Mouse Enters
            $("#tooltip42").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip42").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip42").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox43").hover(function() {//Mouse Enters
            $("#tooltip43").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip43").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip43").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox44").hover(function() {//Mouse Enters
            $("#tooltip44").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip44").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip44").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox45").hover(function() {//Mouse Enters
            $("#tooltip45").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip45").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip45").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox46").hover(function() {//Mouse Enters
            $("#tooltip46").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip46").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip46").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox47").hover(function() {//Mouse Enters
            $("#tooltip47").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip47").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip47").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox48").hover(function() {//Mouse Enters
            $("#tooltip48").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip48").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip48").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox49").hover(function() {//Mouse Enters
            $("#tooltip49").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip49").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip49").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox50").hover(function() {//Mouse Enters
            $("#tooltip50").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip50").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip50").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox51").hover(function() {//Mouse Enters
            $("#tooltip51").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip51").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip51").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox52").hover(function() {//Mouse Enters
            $("#tooltip52").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip52").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip52").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox53").hover(function() {//Mouse Enters
            $("#tooltip53").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip53").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip53").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox54").hover(function() {//Mouse Enters
            $("#tooltip54").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip54").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip54").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox55").hover(function() {//Mouse Enters
            $("#tooltip55").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip55").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip55").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox56").hover(function() {//Mouse Enters
            $("#tooltip56").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip56").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip56").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox57").hover(function() {//Mouse Enters
            $("#tooltip57").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip57").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip57").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox58").hover(function() {//Mouse Enters
            $("#tooltip58").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip58").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip58").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox59").hover(function() {//Mouse Enters
            $("#tooltip59").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip59").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip59").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox60").hover(function() {//Mouse Enters
            $("#tooltip60").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip60").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip60").css("left",mx+"px").css("top",my+"px");
    });
});

$(document).ready(function(){

        $("#mybox61").hover(function() {//Mouse Enters
            $("#tooltip61").css("display","block");
        }, function(){//Mouse Leaves
            $("#tooltip61").css("display","none");
        });
        $(document).mousemove(function(event){
            var mx = event.pageX-100;
            var my = event.pageY+30;
            $("#tooltip61").css("left",mx+"px").css("top",my+"px");
    });
});


$("#pizzapic, #xpStop, #myBox, #myBox1, #myBox2, #myBox3, #myBox4, #myBox5, #myBox6, #myBox7, #myBox8, #myBox9, #myBox10, #myBox11, #myBox12, #myBox13, #myBox14, #myBox15, #myBox16, #myBox17, #myBox18, #myBox19, #myBox20, #myBox21, #myBox22, #myBox23, #myBox24, #myBox25, #myBox26, #myBox27, #myBox28" ).keypress(function(e){
   if(e.keyCode === 13){
       e.preventDefault();
   }
});

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

$('#open').click(function() {
    $('#dialog').dialog('open');

});




