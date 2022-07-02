function displayNoneBlock() {
    let x = document.getElementById("hide-me")
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}

function visibleHiddenVisible() {
    const x = document.getElementById('hide-me');
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}

