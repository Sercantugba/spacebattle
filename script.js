class US_Ship{
    constructor(hull,firepower,accuracy){
    this.hull=hull;
    this.firepower=firepower;
    this.accuracy=accuracy;
    }
    attack=()=>
    {
        for(let i=currentAlien;i<6;i++)
        {
            console.log("US is attacking alien ship " +(i+1));
            
            if(Math.random()<=Aliens[i].accuracy)
            {
                console.log("%c U.S attacked alien " +(i+1)  +"successfully","font-size:15px;background:blue;");
                if(this.hull_calc(i)<=0)
                {
                console.log("%c Hooray!!!Alien ship" +(i+1) +" is destroyed","font-size:20px;color:red;");
                if(this.retreat()==1)
                {
                    console.log("%c Players went for retreat","font-size:20px;color:blue;")
                    return;
                }
                if(i===5)
                alert("Horay!!!! U.S army Won")
                }
                else i--;        
                }else{
                console.log("%c Alien ship " +(i+ 1) +" is going to attack"); 
                Aliens[i].attack(i);
                return;
            }
        }

    }
    retreat(){
        let action = "";
        action = prompt("Players need retreat", "Yes or No");   
        try{
            if(action.toLowerCase()=="yes")
            return 1;
            else
            return 0;
        }
        catch(err)
        {
            console.log("Please press yes or no");
        }
       
    }
    hull_calc(i){
        Aliens[i].hull=Aliens[i].hull-Aliens[i].firepower;
        return Aliens[i].hull;
    }
    
}
class Alien_Ship{
    constructor() {
    this.hull=Math.floor(Math.random()*3)+3;
    this.firepower=Math.floor(Math.random()*2)+2;
    this.accuracy=((Math.floor(Math.random() * 3) + 6) )/10;
    }
    attack(Aliegnno)
    {
     if(Math.random()<=us_Ship.accuracy)
        {
            console.log("%c Alien " +Aliegnno+ " attacked U.S successfully","font-size:15px;background:blue;");
        if(this.hull_calc()<=0)
            {
            console.log("%c U.S ship is destroyed","font-size:20px;color:red;");
            alert("U.S Army Lost")
            return;
            }
            else this.attack(Aliegnno);
        }else
        {
            currentAlien=Aliegnno;
            us_Ship.attack();
        }
   }
    hull_calc(){
        this.hull=this.hull-this.firepower;
        return this.hull;
    }
}
const Alien1= new Alien_Ship();
const Alien2= new Alien_Ship();
const Alien3= new Alien_Ship();
const Alien4= new Alien_Ship();
const Alien5= new Alien_Ship();
const Alien6= new Alien_Ship();
let Aliens=[Alien1,Alien2,Alien3,Alien4,Alien5,Alien6];
var currentAlien=0;
const us_Ship=new US_Ship(20,5,0.7);
 alert("War is starting....");
us_Ship.attack();










// objects to give my program information
// let myShip = {
//     name: 'USS Schwarzenegger',
//     hull: 20,
//     firepower: 5,
//     accuracy: .7,
// };

// let alienShips = {
//     name: 'Halo',
//     hull: '' ,
//     firepower: '' ,
//     accuracy: '' ,
// };

// // functions to be called later when implementing games logic

// let random = (min, max) => {
//     return Math.floor(Math.random() * (max - min))  + min
// };

// let alienAttack = () => {
//         return alienShips.firepower = random(2,5);
// };


// let alienAccuracy = () => {
//     return alienShips.accuracy = random(.6,.8);
// };

// let alienHealth = () => {
//        return alienShips.hull = random(3,7);
// };

// let battle = () => {
//    return myShip.firepower - alienHealth();
// };

// let battleTwo = () => {
//    return myShip.hull - alienAttack();
// }

// // variables to be called later when implementing games logic

// let deadShips = [];
// let hit = Math.random();
// let gamePlay = prompt('What action would you like to take?');


// // while loops utitizing nested conditionals to iterate the games logic 

// while (deadShips.length < [5] && myShip.hull > 0) {
//     if (gamePlay.toLowerCase() === 'attack' && hit <= .8) {
//         console.log('%c spacebattle', 'font-size:40px');
//         console.log('%c You are attacking an alien!', 'font-size:10px; color:green;');
//         console.log ('%c You hit the alien!','font-size:10px; color:red;' );
//         console.log('%c You have done 5 damage!', 'font-size:13px; color:grey;'); 
//         battle();
//     } if (battle() <= 0) {
//         console.log(`%c You destroyed the alien`, 'font-size:14px; color:green;');
//         deadShips.push(alienShips);
//         prompt('Attack or Retreat?');
//     }  if (battle() > 0 && hit > alienAccuracy()) {
//         console.log(`%c Alien has ${battle()} hull remaining!`, 'font-size:9px; font-style: italic; border: 1px solid red;');
//         prompt('Attack or Retreat?'); 
//     }   if (battle() > 0 && hit <= alienAccuracy()) {
//         console.log(`%c Alien has ${battle()} hull remaining!`, 'font-size:9px; font-style: italic; border: 1px solid red;' );
//         battleTwo();
//         console.log('%c You have been hit!', 'font-size: 11px; font-style:bold; color: red;');
//     }  if (battleTwo() > 0) {
//         console.log(`%c You have ${battleTwo()} hull remaining`, 'font-size:9px; font-style: italic; border: 1px solid green;');
//         prompt('Attack again or Retreat?');
//     }  if (battleTwo() <= 0) {
//         console.log('%c You were destroyed!', 'font-size:13px; font-style: bold; color: red;');
//         prompt('You lost! enter attack to begin again or retreat to leave the game!');
//     }  if (deadShips.length == [5]) {
//         alert('YOU WON! CONGRATULATIONS, YOU HAVE SUCCESSFULLY SAVED EARTH!');
//     }  if (gamePlay.toLowerCase() === 'retreat') {
//         console.log('Maybe you will save earth next time?!');
//     }
// };
















/* Pseudo Code 
Title: Space Battle => USS vs Aliens
*/ 
//user object
// const USS = {
//     hull: 20,
//     firepower: 5,
//     accuracy: .7
// }

// //function that me get 0-max parameter
// let getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max));
// }

// //class and constructor for alien objects
// class alien {
//     constructor(name){
//         this.hull = (getRandomInt(4) + 3);
//         this.firepower = (getRandomInt(3) + 2);
//         this.accuracy = ((getRandomInt(3) + 6) * .1);
//     }
// }

// //aliens
// const alien1 = new alien;
// const alien2 = new alien;
// const alien3 = new alien;
// const alien4 = new alien;
// const alien5 = new alien;
// const alien6 = new alien;

// //array for aliens
// let currentAlien = [" ", alien1, alien2, alien3, alien4, alien5, alien6];
// let i = 1; //counter
 
// //The alien's attack
// let alienAttack = () => {
//     if (currentAlien[i].accuracy >= Math.round(10*Math.random(0,1))/10) {
//         console.log(`%c Alien ship ${i} has attacked you!`,`color: red`);
//         console.log(`%c It has dealt ${currentAlien[i].firepower} damage!`, `font-style: italic; background: azure; border: 1px solid grey`);
//         USS.hull -= currentAlien[i].firepower;

//         if (USS.hull <= 0){
//             console.log(`%c You have lost!`,`font-style: italic`)
//         }
//         else {
//             console.log(`%c You have ${USS.hull} HP remaining!`,`font-style: italic`);
//         }
//     }

//     else{
//         console.log(`%c The alien's attack missed!`,`border: 1px solid grey`);
//     }
// }

// let fight = () => {

//     if (i === currentAlien.length){
//         console.log(`%c Congrats! You won!`,`color:green; font-size:30px`);
//     } // only here to console/log "you win!" if you press the fight button again after you win already

//     while (currentAlien[i].hull > 0){
//         if ( USS.hull > 0){
//             if (USS.accuracy >= Math.round(10*Math.random(0,1))/10 ){
//                 console.log(`Your attack hit Alien ship ${i}!`);
//                 console.log(`%c You dealt ${USS.firepower} damage!`,`font-style: italic; background: azure; border: 1px solid grey`);
//                 currentAlien[i].hull -= USS.firepower;

//                 if (currentAlien[i].hull <= 0){
//                     console.log(`%c Alien ship ${i} has been destroyed!`,`color:green`);

//                     i += 1; // iterator to go to next alien, breaks

//                     if (i === currentAlien.length){
//                         console.log(`%c Congrats! You won!`,`color:green; font-size:30px`);
//                     } // presents "you win!" after killing the last alien

//                     break;
//                 }
//                 else {
//                     console.log(`%c Alien ship ${i} now has ${currentAlien[i].hull} HP`,`font-style: italic`);
//                     alienAttack();
//                 };
//             }

//             else{
//                 console.log(`%c Your attack missed!`,`border: 1px solid grey`);

//                 alienAttack();
//             }

//         }
//     }
// }

// //begin game button func
// let beginGame = () => {
//     i = 1;
//     console.log(`%c spacebattle`,`font-size:40px`);
//     console.log(`You are fighting an alien!`);
// }

// //refresh game button func
// let reset = () => {
//     location.reload();
// }