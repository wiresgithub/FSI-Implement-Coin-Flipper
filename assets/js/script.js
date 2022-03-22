// TODO: Declare any global variables we need
let count = {
    heads: 0,
    tails: 0
}

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    document.querySelector('#flip').addEventListener('click', function(e){
    // Determine flip outcome
        function handleFlip(result){
            console.log(result)
            count[result]++
            let img = document.querySelector('img')
            img.src = `assets/images/penny-${result}.jpg`
            img.alt = `${result}`
            let message = document.querySelector('.message-container')
            message.textContent = `You flipped ${result}!`
            let total = count.heads + count.tails
            document.querySelector(`#${result}`).textContent=count.heads
            document.querySelector('#heads-percent').textContent=Math.round(count.heads/total*100)+'%'
            document.querySelector('#tails-percent').textContent=Math.round(count.tails/total*100)+'%'
        }
    if (Math.random() < .5){
        handleFlip('heads')
    } else{
        handleFlip('tails')
    }
})

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
document.querySelector('#clear').addEventListener('click', function(e){
    console.log('cleared the scoreboard')
    count.heads=0
    count.tails=0
    document.querySelector('#heads').textContent=0
    document.querySelector('#heads-percent').textContent='0%'
    document.querySelector('#tails').textContent=0
    document.querySelector('#tails-percent').textContent='0%'
    document.querySelector('.message-container').textContent="Let's Get Rolling"
})
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})