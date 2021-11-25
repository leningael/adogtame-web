document.addEventListener("DOMContentLoaded", function (){
    applyCurrentTheme();
    document.getElementById("darkbutton").onclick = function (){
        document.body.classList.toggle("dark-theme");
        let theme = "light";
        if(document.body.classList.contains("dark-theme")){
            theme = "dark";
        }
        document.getElementById("darkicon").setAttribute("src", `${img_path}/btn${theme}.svg`);
        setCookie("theme", theme, 30);
    }
});

function applyCurrentTheme(){
    const currentTheme = getCookie("theme");
    if(currentTheme === "dark"){
        document.body.classList.toggle("dark-theme");
        document.getElementById("darkicon").setAttribute("src", `${img_path}/btndark.svg`);
    }else{
        document.getElementById("darkicon").setAttribute("src", `${img_path}/btnlight.svg`)
    }
}
