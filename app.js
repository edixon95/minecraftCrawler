// // Selecting all elements used

const playScreen = document.querySelector('#mainScreen')
const turnLeftButton = document.querySelector('#turnLeft')
const moveForwardButton = document.querySelector('#moveForward')
const turnRightButton = document.querySelector('#turnRight')

const playerThoughtBox = document.querySelector('#playerThoughts')
const enemyStatus = document.querySelector('#enemyData')
const playerHealth = document.querySelector('#playerHealth')
const enemyHealth = document.querySelector('#enemyHealth')

const theEnemy = document.querySelector('#enemyShow')

// // Start game

const startGame = () => {
    playerPosition = 0
    playerDirection = 0
    playerStats.health = 10
    enemyTypes.health = 10
    playerHealth.textContent = `Health: ${playerStats.health}`
    enemyStatus.textContent = "No enemies"
    enemyHealth.textContent = "No enemy data"
    moveForwardButton.textContent = "Forward"
    turnLeftButton.textContent = "Turn left"
    turnRightButton.textContent = "Turn right"
    showCamera()
}

// // Starting player position

let playerPosition = 0
let playerDirection = 0

// // Movement controls, turning

const turnRight = () => {
    playerDirection++
    if(playerDirection == 4){
        playerDirection = 0
    }
    showCamera()
}

const turnLeft = () => {
    playerDirection--
    if(playerDirection == -1){
        playerDirection = 3
    }
    showCamera()
}

// // Directional awareness and forward movement

const moveForward = () => {
    if(playerDirection == 0){
        playerPosition+=5
    }
    else if(playerDirection == 1){
        playerPosition++
    }
    else if(playerDirection == 2){
        playerPosition-=5
    }
    else{
        playerPosition--
    }
    showCamera()
    battleCheck()
}

// // Out of bounds check

const isPlayerLeaving = () => {
    if(playerPosition == 0 && playerDirection == 2) {
        playerThoughtBox.textContent = "I can't leave now."
    }
    else if(playerPosition == 0 && playerDirection == 3 || playerPosition == 0 && playerDirection == 1){
        rollComment()
    }
    else if(playerPosition == 2 && playerDirection == 1 || playerPosition == 2 && playerDirection == 2 || playerPosition == 2 && playerDirection == 3){
        rollComment()
    }
    else if(playerPosition == 4 && playerDirection == 3 || playerPosition == 4 && playerDirection == 1 || playerPosition == 4 && playerDirection == 2){
        rollComment()
    }
    else if(playerPosition == 5 && playerDirection == 3 || playerPosition == 5 && playerDirection == 0){
        rollComment()
    }
    else if(playerPosition == 6 && playerDirection == 2){
        rollComment()
    }
    else if(playerPosition == 7 && playerDirection == 0 || playerPosition == 7 && playerDirection == 1){
        rollComment()
    }
    else if(playerPosition == 9 && playerDirection == 1 || playerPosition == 9 && playerDirection == 3){
        rollComment()
    }
    else if(playerPosition == 11 && playerDirection == 3 || playerPosition == 11 && playerDirection == 1){
        rollComment()
    }
    else if(playerPosition == 13 && playerDirection == 2 || playerPosition == 13 && playerDirection == 3){
        rollComment()
    }
    else if(playerPosition == 14 && playerDirection == 1 || playerPosition == 14 && playerDirection == 0){
        rollComment()
    }
    else if(playerPosition == 16 && playerDirection == 3){
        rollComment()
    }
    else if(playerPosition == 17 && playerDirection == 0 || playerPosition == 17 && playerDirection == 2){
        rollComment()
    }
    else if(playerPosition == 18 && playerDirection == 1){
        rollComment()
    }
    else if(playerPosition == 20 && playerDirection == 0 || playerPosition == 20 && playerDirection == 2 || playerPosition == 20 && playerDirection == 3){
        rollComment()
    }
    else if(playerPosition == 21 && playerDirection == 0 || playerPosition == 21 && playerDirection == 1){
        rollComment()
    }
    else if(playerPosition == 23 && playerDirection == 0 || playerPosition == 23 && playerDirection == 3){
        rollComment()
    }
    else if(playerPosition == 24 && playerDirection == 0 || playerPosition == 24 && playerDirection == 1 || playerPosition == 24 && playerDirection == 2){
        rollComment()
    }
    else{
        moveForward()
    }
}

// Out of bounds remarks

const rollComment = () => {
    let wittyRemark = Math.ceil(Math.random()*10)
    playerThoughtBox.textContent = boundComment[wittyRemark]
    console.log(wittyRemark)
}

const boundComment = [
    "",
    "I can't do that",
    "That's a wall",
    "Can you walk through walls?",
    "Nope",
    "Not happening",
    "*Sigh*",
    "It worked! Just kidding",
    "It's so dark down here",
    "The walls are cold",
    "Time for a rest!",
]

// // Take position and direction values and use their number to search object values

const showCamera = () => {
    const refreshCamera = cameraViews[playerPosition].camera[playerDirection]
    playScreen.src = refreshCamera.image
    console.log (`position: ${playerPosition} direction: ${playerDirection}`)
}

// // Location images

const cameraViews = [
    {
        id: 1,
        camera: [
            {
                image: `./img/p1n.png`
            },
            {
                image: `./img/p1e.png`
            },
            {
                image: `./img/p1s.png`
            },
            {
                image: `./img/p1w.png`
            },
        ]
    },
    {
        id: 2,
        camera: [
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
        ]
    },
    {
        id: 3,
        camera: [
            {
                image: `./img/p3n.png`
            },
            {
                image: `./img/p3e.png`
            },
            {
                image: `./img/p3s.png`
            },
            {
                image: `./img/p3w.png`
            },
        ]
    },
    {
        id: 4,
        camera: [
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
        ]
    },
    {
        id: 5,
        camera: [
            {
                image: `./img/p5n.png`
            },
            {
                image: `./img/p5e.png`
            },
            {
                image: `./img/p5s.png`
            },
            {
                image: `./img/p5w.png`
            },
        ]
    },
    {
        id: 6,
        camera: [
            {
                image: `./img/p6n.png`
            },
            {
                image: `./img/p6e.png`
            },
            {
                image: `./img/p6s.png`
            },
            {
                image: `./img/p6w.png`
            },
        ]
    },
    {
        id: 7,
        camera: [
            {
                image: `./img/p7n.png`
            },
            {
                image: `./img/p7e.png`
            },
            {
                image: `./img/p7s.png`
            },
            {
                image: `./img/p7w.png`
            },
        ]
    },
    {
        id: 8,
        camera: [
            {
                image: `./img/p8n.png`
            },
            {
                image: `./img/p8e.png`
            },
            {
                image: `./img/p8s.png`
            },
            {
                image: `./img/p8w.png`
            },
        ]
    },
    {
        id: 9,
        camera: [
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
        ]
    },
    {
        id: 10,
        camera: [
            {
                image: `./img/p10n.png`
            },
            {
                image: `./img/p10e.png`
            },
            {
                image: `./img/p10s.png`
            },
            {
                image: `./img/p10w.png`
            }
        ]
    },
    {
        id: 11,
        camera: [
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            }
        ]
    },
    {
        id: 12,
        camera: [
            {
                image: `./img/p12n.png`
            },
            {
                image: `./img/p12e.png`
            },
            {
                image: `./img/p12s.png`
            },
            {
                image: `./img/p12w.png`
            }
        ]
    },
    {
        id: 13,
        camera: [
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            }
        ]
    },
    {
        id: 14,
        camera: [
            {
                image: `./img/p14n.png`
            },
            {
                image: `./img/p14e.png`
            },
            {
                image: `./img/p14s.png`
            },
            {
                image: `./img/p14w.png`
            }
        ]
    },
    {
        id: 15,
        camera: [
            {
                image: `./img/p15n.png`
            },
            {
                image: `./img/p15e.png`
            },
            {
                image: `./img/p15s.png`
            },
            {
                image: `./img/p15w.png`
            }
        ]
    },
    {
        id: 16,
        camera: [
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            }
        ]
    },
    {
        id: 17,
        camera: [
            {
                image: `./img/p17n.png`
            },
            {
                image: `./img/p17e.png`
            },
            {
                image: `./img/p17s.png`
            },
            {
                image: `./img/p17w.png`
            }
        ]
    },
    {
        id: 18,
        camera: [
            {
                image: `./img/p18n.png`
            },
            {
                image: `./img/p18e.png`
            },
            {
                image: `./img/p18s.png`
            },
            {
                image: `./img/p18w.png`
            }
        ]
    },
    {
        id: 19,
        camera: [
            {
                image: `./img/p19n.png`
            },
            {
                image: `./img/p19e.png`
            },
            {
                image: `./img/p19s.png`
            },
            {
                image: `./img/p19w.png`
            }
        ]
    },
    {
        id: 20,
        camera: [
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            }
        ]
    },
    {
        id: 21,
        camera: [
            {
                image: `./img/p21n.png`
            },
            {
                image: `./img/p21e.png`
            },
            {
                image: `./img/p21s.png`
            },
            {
                image: `./img/p21w.png`
            }
        ]
    },
    {
        id: 22,
        camera: [
            {
                image: `./img/p22n.png`
            },
            {
                image: `./img/p22e.png`
            },
            {
                image: `./img/p22s.png`
            },
            {
                image: `./img/p22w.png`
            }
        ]
    },
    {
        id: 23,
        camera: [
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            },
            {
                image: ``
            }
        ]
    },
    {
        id: 24,
        camera: [
            {
                image: `./img/p24n.png`
            },
            {
                image: `./img/p24e.png`
            },
            {
                image: `./img/p24s.png`
            },
            {
                image: `./img/p24w.png`
            }
        ]
    },
    {
        id: 25,
        camera: [
            {
                image: `./img/p25n.png`
            },
            {
                image: `./img/p25e.png`
            },
            {
                image: `./img/p25s.png`
            },
            {
                image: `./img/p25w.png`
            }
        ]
    }
]

//
// // combat stuff
//

// Step battle checker

const battleCheck = () => {
    let playerFunCheck = Math.ceil(Math.random()*10)
    playerFunCheck
    if(playerFunCheck == 3){
        moveForwardButton.textContent = "Attack"
        moveForwardButton.removeEventListener("click", isPlayerLeaving)
        moveForwardButton.addEventListener("click", doBattle)
        enemyStatus.textContent = "In battle"
        playerThoughtBox.textContent = "Ah! An enemy!"
        enemyHealth.textContent = `Enemy health: ${enemyTypes.health}`
        theEnemy.classList.remove('hidden')
        turnLeftButton.removeEventListener("click", turnLeft)
        turnLeftButton.addEventListener("click", doHeal)
        turnLeftButton.textContent = "Heal"
        turnRightButton.removeEventListener("click", turnRight)
        turnRightButton.addEventListener("click", doParry)
        turnRightButton.textContent = "Parry"
    }
    console.log(playerFunCheck)
}

// Player attack

const playerAttack = () => {
    let damageMulti = Math.ceil(Math.random()*2)
    let finalHit = playerStats.damage+damageMulti
    let missCheck = Math.ceil(Math.random()*10)
    if(missCheck > 2){
    enemyTypes.health -= finalHit
    playerThoughtBox.textContent = `I dealt ${finalHit} damage`
    enemyHealth.textContent = `Enemy health: ${enemyTypes.health}`
    }
    else{
    playerThoughtBox.textContent = "I missed"
    }
}

const playerHeal = () => {
    playerStats.health = 10
    playerThoughtBox.textContent = "Ah, much better."
}

const playerParry = () => {
    enemyTypes.health -= playerStats.damage
    playerThoughtBox.textContent = `I dealt ${playerStats.damage} damage`
    enemyHealth.textContent = `Enemy health: ${enemyTypes.health}`
    let missCheck = Math.ceil(Math.random()*10)
    if(missCheck > 8){
        playerStats.health -= enemyTypes.damage
        enemyStatus.textContent = `Enemy dealt ${enemyTypes.damage} damage` 
    }
    else{
        enemyStatus.textContent = "Enemy missed"
    }
}


// Enemy Attack

const enemyAttack = () => {
    let missCheck = Math.ceil(Math.random()*10)
    if(missCheck > 2){
    playerStats.health -= enemyTypes.damage
    enemyStatus.textContent = `Enemy dealt ${enemyTypes.damage}`
    playerHealth.textContent = `Health: ${playerStats.health}`
    }
    else{
        enemyStatus.textContent = "Enemy missed"
    }
}

const deathCheckEnemy = () => {
    if(enemyTypes.health <= 0){
    moveForwardButton.textContent = "Forward"
    moveForwardButton.removeEventListener("click", doBattle)
    moveForwardButton.addEventListener("click", isPlayerLeaving)
    turnLeftButton.removeEventListener("click", doHeal)
    turnLeftButton.addEventListener("click", turnLeft)
    turnLeftButton.textContent = "Turn left"
    turnRightButton.removeEventListener("click", doParry)
    turnRightButton.addEventListener("click", turnRight)
    turnRightButton.textContent = "Turn right"
    enemyStatus.textContent = "Enemy dead"
    enemyHealth.textContent = "No enemy data"
    playerThoughtBox.textContent = "I have slain the beast!"
    enemyTypes.health = 10
    theEnemy.classList.add('hidden')
    }
}

const deathCheckPlayer = () => {
    if(playerStats.health <= 0){
        playerThoughtBox.textContent = "I died"
        moveForwardButton.removeEventListener("click", doBattle)
        moveForwardButton.addEventListener("click", isPlayerLeaving)
        turnLeftButton.removeEventListener("click", doHeal)
        turnRightButton.removeEventListener("click", doParry)
        turnLeftButton.addEventListener("click", turnLeft)
        turnRightButton.addEventListener("click", turnRight)
        enemyStatus.textContent = "No enemies"
        enemyHealth.textContent = "No enemy data"
        theEnemy.classList.add('hidden')
        startGame()
    }
}

// Player object

const playerStats = {
        health: 10,
        damage: 1,
        xp: 0
    }

// Battle sequences
const doBattle = () => {
    playerAttack()
    deathCheckEnemy()
    enemyAttack()
    deathCheckPlayer()
}

const doHeal = () => {
    playerHeal()
    deathCheckEnemy()
    enemyAttack()
    deathCheckPlayer()
}

const doParry = () => {
    playerParry()
    deathCheckEnemy()
    deathCheckPlayer()
}



// // Enemy objects

const enemyTypes = {
        id: 1,
        model: ``,
        health: 10,
        damage: 1,
    }

startGame()

turnLeftButton.addEventListener("click", turnLeft)
moveForwardButton.addEventListener("click", isPlayerLeaving)
turnRightButton.addEventListener("click", turnRight)