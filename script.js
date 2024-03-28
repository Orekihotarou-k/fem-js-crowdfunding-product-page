// - Make a selection of which pledge to make
// - See an updated progress bar and total money raised based on their pledge total after confirming a pledge
// - See the number of total backers increment by one after confirming a pledge
// - Toggle whether or not the product is bookmarked

// select elements
const selectionOverlay = document.querySelector(".main-container") 
const selectionContainer = document.querySelector(".selection-container")
// const selectionDescToggle = document.querySelectorAll(".selection-desc")
const activeSelection = document.querySelectorAll(".active-selection")
const closeSelection = document.querySelector(".close-selection")



// select back reward buttons
const backReward = document.querySelectorAll(".back-reward-button")

// create eventlistener to open the selections container when the reward button is clicked
backReward.forEach(button => {
    button.addEventListener("click", toggleSelections)
})

function toggleSelections() {
    selectionOverlay.classList.toggle("selection-active")
    selectionContainer.classList.toggle("activated")
    window.scroll({
        top: 0,
        behavior: "smooth"
      });

    closeSelection.addEventListener("click", () => {
        selectionOverlay.classList.remove("selection-active")
        selectionContainer.classList.remove("activated")
    }) 
}

// add eventlistener to toggle selected state of the selection elements 

const selectedItems = document.querySelectorAll(".selection-item")

    selectedItems.forEach(itemSelected => {
        itemSelected.addEventListener("click", () => {
            const activeSelection = itemSelected.parentElement
            const itemSelectIcon = itemSelected.parentElement.querySelector(".item-select")
            activeSelection.classList.toggle("selected-item--checked")
            activeSelection.classList.toggle("active-selection--toggled")
            itemSelectIcon.classList.toggle("selected")

        })
    })

// show the success modal only if the custom pledge input has a numerical value

const confirmationButton = document.querySelectorAll(".confirmation-button")

confirmationButton.forEach(confirmation => {
    confirmation.addEventListener("click", toggleSuccess)
})

const successModal = document.querySelector(".success-container")

function toggleSuccess() {

    successModal.classList.toggle("activated")
    selectionContainer.style.visibility = "hidden"
}


//  Increase the total number of backers by one after confirming a pledge
const confirmPledge = document.querySelector(".confirm-pledge")

confirmPledge.addEventListener("click", finalisePledge)

function finalisePledge() {
    const backers = document.querySelector(".backers")
    const amountRaised = document.querySelector(".amount-raised")
    backerValue = parseInt(backers.innerHTML)
    
    // increase the total number of backers 
    backers.innerHTML = backerValue + 1

    // add the backed amount to the total backed amount
    customPledge = document.querySelectorAll(".custom-pledge")
    customPledge.forEach(pledge => {
        customPledgeValue = pledge.value
        customPledgeNumber = parseInt(customPledgeValue)

        // get the total backed number
        const amountRaised = document.querySelector(".amount-raised")

        // add the custom value to the total amount raised and remove the comma
        amountRaisedTotal = parseInt(amountRaised.textContent.replace(/,/g, ""))

        // console.log(typeof(amountRaisedTotal))
        // console.log(typeof(customPledgeValue))
        totalPledge = amountRaisedTotal + customPledgeNumber

        if (customPledgeNumber === "") {
            console.log("error")
        }

        amountRaised.innerHTML = totalPledge  
        
        // increase the width of the progress bar
        // const progressBar = document.querySelector(".progress-bar")
        // setTimeout(() => {
        //     progressBar.style.width = "89.914%" + parseFloat(customPledgeNumber/1000)
        //     console.log("something's up")  
        // }, 500);
        
    })

    successModal.classList.remove("activated")
    selectionOverlay.classList.remove("selection-active")
}

// add event listener to the bookmark button
const bookmark = document.querySelector(".bookmark-button")

bookmark.addEventListener("click", () => {
    bookmark.textContent = "Bookmarked"
    bookmark.classList.toggle("bookmarked")
})


