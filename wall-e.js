const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.

let positionX = 0;
function moveRobot() {
    
    positionX += 10;
    robot.style.transform = `translateX'${positionX}px'`;
}

robot.addEventListener('click', moveRobot)
