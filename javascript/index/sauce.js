var sauces = ["eye.html", "interaction.html", "wheel.html"]
option = sauces[Math.floor(Math.random() * sauces.length)];
document.getElementById("sauce").href = option;
