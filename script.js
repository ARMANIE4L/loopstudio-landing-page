document.addEventListener("DOMContentLoaded", function () {
        let navbarContainerMain = document.querySelector("#navbarContainerMain")
        let navbarContainer = document.querySelector("#navbarContainer")
        let navbarToggle = document.querySelector(".navbar-toggler")
        let navItems = document.querySelector(".collapse").innerHTML
        let navbarBrand = document.querySelector(".navbar-brand").innerHTML


        

    // TARGET THE NAVBAR EXPANSION
    navbarContainerMain.style.display = "none";

    navbarToggle.addEventListener("click", function () {
        

        navbarContainerMain.style.display = "block";
        
        navbarContainerMain.style.cssText = 'width: 100%; height: 100vh; position: absolute; left: 0; top: 0;';
        navbarContainerMain.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        navbarContainer.innerHTML = '<div id="loopCont"> <p>loopstudios</p> <img src="./images/icon-close.svg" id="closeIcon"></div>' + navItems;
        navbarContainer.style.cssText = 'position: absolute; left: 0; top: 0;  height: 100vh; width: 60%; color: white;';
    });

    //TARGHET THE CLOSE ICON
    navbarContainer.addEventListener("click", function (event) {
        if (event.target.id === 'closeIcon') {
            navbarContainer.style.display = (navbarContainer.style.display === 'none') ? 'block' : 'none';
            navbarContainerMain.style.display = (navbarContainerMain.style.display === 'none') ? 'block' : 'none';
        }

        
    })
    
    navbarContainerMain.addEventListener("click", function (event) {
        if (event.target.id !== navbarContainer) {
            navbarContainer.style.display = (navbarContainer.style.display === 'none') ? 'block' : 'none';
            navbarContainerMain.style.display = (navbarContainerMain.style.display === 'none') ? 'block' : 'none';
        }
    })

})

