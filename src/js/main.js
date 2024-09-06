let maxLife = 24;
let life = 0;

document.addEventListener('DOMContentLoaded', function() {
    setLife(24);

    const save = {
        characterName: 'Hello World'
    }
    localStorage.setItem("hero", JSON.stringify(save));

    // CORS POLOCY :(
    const file = "./data/save.json";
    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json"
      });
    fetch(file, {headers})
        .then((res) => {
            console.dir(res);

            return res.text();
        })
        .then((text) => {
            console.log('gnoufff');

            console.log(text);
        })
        .catch((e) => console.error(e));
  
    const interval = setInterval(() => {
        console.log("gnagna");
            setLife(--life);
            if(life == 0) {
                clearInterval(interval);
            }
        }, 1000);
 }, false);

function setLife(newLife) {
    life = newLife;
    const percentLife = 100*life/maxLife;
    const healthBar = document.getElementById('health-bar');
    healthBar.innerText = life + '/' + maxLife;
    healthBar.style.backgroundImage = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) " + percentLife + "%, rgba(255,255,255,1) "+ percentLife + "%, rgba(255,255,255,1) 100%)";
}