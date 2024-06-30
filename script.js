var option = prompt("1. Automatic\n2. URL");

if(option) {
  if(option == '1'){
     window.open(`https://bypass.city/bypass?bypass=${location.href}`)
  } else if(option == "0") {
    let p = prompt("URL: ");
    if(p.includes("https://")){
      window.open(`https://bypass.city/bypass?bypass=${p}`)
    } else {
      alert("Re run it but use HTTPS")
    }
  } else if(option == null) {
    alert("Re Run it but put a fucking option")
} else if(option == ""){
    alert("Do not leave it blank stupid"); document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/HpE4ox4.jpg')"; document.body.style.backgroundRepeat = "no-repeat";document.body.style.backgroundSize = "auto";
  }
  else {
    alert("Re run it but only include numbers")
  } 
