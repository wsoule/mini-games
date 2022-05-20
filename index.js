/* Place your JavaScript in this file */
/**
 * @param max is max number exclusive
 * @param min is min number inclusive
 */
 function getRandomInt(max, min) {
    return Math.floor(Math.random()* (max-min) +min);
  }
  /**
   * 
   */
  function rollOneDie(){
      let i = 0;
      let timedThing = setInterval(()=>{
        ++i;
        const dieNumber = getRandomInt(7,1);
        document.getElementById('dice-view').innerHTML = dieNumber; 
        if(i > 10){clearInterval(timedThing);}
      },75);
  }
  /**
   * 
   */
  function rollTwoDice(){
       let i = 0;
      let timedThing = setInterval(()=>{
        ++i;
        const dieNumber = getRandomInt(13,2);
        document.getElementById('dice-view').innerHTML = dieNumber; 
        if(i > 10){clearInterval(timedThing);}
      },75);
  }
  /**
   * 
   */
  function coinPick(){
    var coinSide = '';
    if(getRandomInt(2,0) === 1){
      coinSide = 'HEADS';
    } else coinSide = 'TAILS';
    document.getElementById('coinSide').innerHTML = coinSide;
  }
  /**
   * 
   */
  function addItem(){
    const itemToAdd = prompt('Item To Add:');
    const liNode = document.createElement('li');
    const textNode = document.createTextNode(itemToAdd);
    liNode.appendChild(textNode);
    document.getElementById('unorderedList').appendChild(liNode);
  }
  /**
   * 
   */
  function pickRandomItem(){
    const max = document.getElementById('unorderedList').getElementsByTagName('li').length
    const itemNumber = getRandomInt(max, 0);
    const listItem = document.getElementById('unorderedList').getElementsByTagName('li');
    alert(listItem[itemNumber].innerText);
  }
  // Begining of dayly planner
  
  //add event function to find times avaliable to add an event
  function addEvent(hoursAvaliable){
    let correctAnswerStart = false;
    let correctAnswerFinish = false;
    console.log(hoursAvaliable);
    console.log(Array.from(hoursAvaliable));
    // while the correct start time answer (a true avaliable time) is false, while loop keeps going
    while(!correctAnswerStart){
      const start = prompt('time start:');
      //if dayArray (times avaliable) includeds prompted answer, splices answer turns correct answer to true
      if (hoursAvaliable.includes(start) || start === null){
        hoursAvaliable.splice(hoursAvaliable.indexOf(start),1);
        console.log(hoursAvaliable.find(element => start));
        correctAnswerStart = true;
      } else alert('please enter correct time');
    }
    /** */
    while(!correctAnswerFinish){
      const finish = prompt('time finish:');
      if (hoursAvaliable.includes(finish) || finish === null){
        hoursAvaliable.splice(hoursAvaliable.indexOf(finish),1);
        correctAnswerFinish = true;
      } else  alert('please enter a correct time');
    }
      console.log('dayArray',hoursAvaliable);
  }
  function main(){
    let hoursAvaliable = [8,9,10];
    document.getElementById('displayTime').innerHTML = hoursAvaliable;
  
  }
  main();
  /* TASK TO DO:
  Array of times
  Turn array into list
  put am and pm on list times
  
  
  let monday = {hoursAvaliable: , hoursUsed: }
  
  */