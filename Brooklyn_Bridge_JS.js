//for (var i = 0; i <)

// $(window).load( function () {
//     populate();
//     //document.getElementById("toManhattan")
// });

$(window).on("load", function () {
    populate();
    finishDrawing();
    var toManhattan = document.getElementById("toManhattan")
    var toBrooklyn = document.getElementById("toBrooklyn")
    //console.log($(toManhattan).getBoundingClientRect())
});


//temporary element to populate the bridge with people
function populate () {
    var svgns = "http://www.w3.org/2000/svg", container = document.getElementById("canvas");
  
    for (var i = 0; i < 200; i++){
        var person = document.createElementNS(svgns, 'circle');
        person.setAttributeNS(null, 'r', 5) 
        if (i % 2 == 0) {
            //to Brooklyn
            person.setAttributeNS(null, 'fill', "burgundy");

        }
        else {
            //to Manhattan
            person.setAttributeNS(null, 'fill', "green");

        }
    }

};


//This is the method to finish all the Brooklyn Bridge Drawings not doable by hand i.e. lines on the road
function finishDrawing () {
    var svgns = "http://www.w3.org/2000/svg", container = document.getElementById("canvas");
    
    for (var x = 110; x < 1090; x += 50){
        var rect1 = document.createElementNS(svgns, 'rect');
        var rect2 = document.createElementNS(svgns, 'rect');
        rect1.setAttributeNS(null, 'x', x);
        rect2.setAttributeNS(null, 'x', x);
        rect1.setAttributeNS(null, 'y', 145);
        rect2.setAttributeNS(null, 'y', 445);
        rect1.setAttributeNS(null, 'height', 10);
        rect2.setAttributeNS(null, 'height', 10);
        rect1.setAttributeNS(null, 'width', 30);
        rect2.setAttributeNS(null, 'width', 30);
        rect1.setAttributeNS(null, 'fill', "yellow");
        rect2.setAttributeNS(null, 'fill', "yellow");
        container.appendChild(rect1);
        container.appendChild(rect2);
    }




    var pillar1 = document.createElementNS(svgns, 'rect');
    var pillar2 = document.createElementNS(svgns, 'rect');
    pillar1.setAttributeNS(null, 'x', 300);
    pillar1.setAttributeNS(null, 'y', 50);
    pillar1.setAttributeNS(null, 'width', 100);
    pillar1.setAttributeNS(null, 'height', 500);
    pillar1.setAttributeNS(null, 'rx', 15);
    pillar1.setAttributeNS(null, 'ry', 15);
    pillar2.setAttributeNS(null, 'x', 800);
    pillar2.setAttributeNS(null, 'y', 50);
    pillar2.setAttributeNS(null, 'width', 100);
    pillar2.setAttributeNS(null, 'height', 500);
    pillar2.setAttributeNS(null, 'rx', 15);
    pillar2.setAttributeNS(null, 'ry', 15);
    container.appendChild(pillar1);
    container.appendChild(pillar2);
    

};
