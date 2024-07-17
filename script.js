//your JS code here. If required.
const handleClick=()=>{
  let input=document.getElementById("text").value;

let value=document.getElementById("delay").value;
  console.log("input",input);
  console.log("value",value)
  setTimeout(()=>{
    document.getElementById("output").textContent=`${input}`

  },parseInt(value))
}
document.getElementById("btn").addEventListener("click",handleClick);