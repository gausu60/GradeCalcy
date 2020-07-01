
function calcy()
{
  document.getElementById('table').style.display='block';
  var eng = document.getElementById('eng').value;
  var hind = document.getElementById('hind').value;
  var mar = document.getElementById('mar').value;
  var sci = document.getElementById('sci').value;
  var mats = document.getElementById('mats').value;
  var ss = document.getElementById('ss').value;
  var grades = "";

  var totalGrades = parseFloat(eng) + parseFloat(hind) + parseFloat(mar) + parseFloat(sci)+parseFloat(mats)+parseFloat(ss);

  var perc = (totalGrades/600) * 100;

  if(perc <= 100  && perc >= 75){
    grades = 'O';
  }else if(perc <= 75  && perc >= 60){
     grades = 'A';
  }else if(perc <= 59.9  && perc >= 45){
     grades = 'B';
  }
  else if(perc<=44.9 && perc>=40)
  {
    grades = 'C';
  }
  else if(perc<=39.9 && perc>=35)
  {
    grades = 'D';
  }
  else{
     grades = 'F';
  }

  if(perc >= 39.5){
    document.getElementById('showData').innerHTML = ` Out of 600 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. `
    var pass = document.getElementById('status').innerHTML = `Congrugulation ! Your are Pass`
  }
  else{
    document.getElementById('showData').innerHTML = ` Out of 600 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. `
    var fail = document.getElementById('status').innerHTML = `Sorry ! Your are Fail`
  }
  document.getElementById('engmarks').innerHTML=eng;
  document.getElementById('hindmarks').innerHTML=hind;
  document.getElementById('marmarks').innerHTML=mar;
  document.getElementById('scimarks').innerHTML=sci;
  document.getElementById('mathsmarks').innerHTML=mats;
  document.getElementById('ssmarks').innerHTML=ss;
  document.getElementById('total').innerHTML=totalGrades;
  document.getElementById('percentage').innerHTML=perc+'%';
  document.getElementById('grade').innerHTML=grades;
  if(perc >= 39.5){
    document.getElementById('result').innerHTML= document.getElementById('status').innerHTML = `Congrugulation ! Your are Pass`;
  }
  else{
    document.getElementById('result').innerHTML= document.getElementById('status').innerHTML = `Sorry ! Your are Fail`;

  }
  
  
}
