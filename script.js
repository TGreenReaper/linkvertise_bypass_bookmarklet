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
  } else {
    alert("Re run it but only include numbers")
  } else if(option == null) {
    alert("Re Run it but put a fucking option")
}
