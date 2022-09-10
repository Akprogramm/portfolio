console.log("hello");


let leftside=document.getElementById("leftside");

leftside.addEventListener("click",function(){

let ttt1=document.getElementById("nav");
// let ttt2=document.getElementById("about");
let ttt3=document.getElementById("skills");
let ttt4=document.getElementById("contact");

ttt1.classList.toggle("whitemode");
// ttt2.classList.toggle("whitemode");
ttt3.classList.toggle("whitemode");
ttt4.classList.toggle("whitemode");

if(ttt1.classList.contains("whitemode")){
    console.log("yes it contains");
    document.getElementById("home").style.backgroundImage="url('white.jpg')";
    document.getElementById("my1").classList.toggle("tempi");
    document.getElementById("my2").style.backgroundColor="white";
    document.getElementById("my1").style.color="black";
    document.getElementById("my1").classList.toggle("free");
    document.getElementById("my2").style.color="cyan";
    document.getElementById("about").classList.toggle("tempimg");
    document.getElementById("nav").style.color="black";
    document.getElementById("nav").style.borderTop="2px solid cyan";
    document.getElementById("nav").style.borderBottom="2px solid cyan";
    document.getElementById("unique1").style.color="grey";
    document.getElementById("unique2").style.color="grey";
    document.getElementById("unique3").style.color="grey";
    document.getElementById("unique4").style.color="grey";
    document.getElementById("text1").style.color="grey";
    document.getElementById("skills").classList.toggle("temp");
    // document.getElementById("skills").style.backgroundImage="url('white.jpg')";
    document.getElementById("contact").classList.toggle("tempi");

}
else{
    console.log("no");
    document.getElementById("home").style.backgroundImage="url('26b5CM.webp')";
    document.getElementById("my1").classList.toggle("tempi");
    document.getElementById("my1").style.backgroundColor="black";
    document.getElementById("my2").style.backgroundColor="black";
    document.getElementById("my1").style.color="cyan";
    document.getElementById("my1").classList.toggle("free");
    document.getElementById("my2").style.color="cyan";
    document.getElementById("about").classList.toggle("tempimg");
    document.getElementById("nav").style.color="cyan";
    document.getElementById("nav").style.borderBottom="none";
    document.getElementById("unique1").style.color="cyan";
    document.getElementById("unique2").style.color="cyan";
    document.getElementById("unique3").style.color="cyan";
    document.getElementById("unique4").style.color="cyan";
    document.getElementById("text1").style.color="white";
    document.getElementById("skills").classList.toggle("temp");
    // document.getElementById("skills").style.backgroundImage="none";
    document.getElementById("contact").classList.toggle("tempi");
    document.getElementById("nav").style.borderTop="0";
    // document.getElementById("nav").style.borderBottom="0";
}
})





let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{

    let rightside = document.getElementById("rightside");

    if(!rightside.classList.contains("comeback"))
    {
        rightside.classList.add("comeback");
        btn.innerHTML=`<i class="fa-sharp fa-solid fa-xmark"></i>`;
    }
    else{
        rightside.classList.remove("comeback");
        btn.innerHTML=`<i class="fa-solid fa-bars"></i>`;
    }
    // rightside.classList.toggle("comeback");
    
})

let num=Math.floor(Math.random()*5);
console.log(num);

let send=document.getElementById("senddata");

send.addEventListener('click',()=>{

    let ele=document.createElement("div");
    ele.setAttribute("id","ele1");
    ele.setAttribute("class","classele1");
    // ele.classList.add("classele1");
    ele.innerText="Message: Your message hass been sent successfully";

  if(document.getElementById("id1").value!=="" && document.getElementById("id2").value!=="" && document.getElementById("id3").value!=="" && document.getElementById("id4").value!=="" && document.getElementById("id5").value!==""){
    let formid=document.getElementById("formid");
    formid.appendChild(ele);
    console.log(document.getElementById("id1").value);

    document.getElementById("id1").value=null;
    document.getElementById("id2").value=null;
    document.getElementById("id3").value=null;
    document.getElementById("id4").value=null;
    document.getElementById("id5").value=null;
    // console.log("send");

    setTimeout(() => {
        document.getElementById("ele1").remove();
     }, 3000);

  }
  else{
    ele.setAttribute("class","classred");
    ele.innerText="Message: fill all the details and try again";
    let formid=document.getElementById("formid");
    formid.appendChild(ele);

    setTimeout(() => {
        document.getElementById("ele1").remove();
     }, 1000);

  }
   

    
})
