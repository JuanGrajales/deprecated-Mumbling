function accum(s){
  let arr = [];

  // traverse s and add the correct output to the array
  for(let i = 0; i < s.length; i++){
    
    // add first letter in uppercase to array
    arr.push(s[i].toUpperCase());

    // add addtional lowercase letters
    for(let j = 1; j <= i; j++){
      arr.push(s[i].toLowerCase());
    }

    // if its not the end of the string then add "-"
    if(i < s.length-1)
    arr.push("-");
  }

  // return array
  return arr.join("");
}

function testing(){
  console.log(accum("abcd"));    
  console.log(accum("RqaEzty")); 
  console.log(accum("cwAt"));    
}