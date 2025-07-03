let generateImageForm = document.getElementById('generate-image-form')
let formInput = document.getElementById('input-value')
let imageContainerText = document.getElementById('imageContainerText')
let imageGenerated = document.getElementById('generated-image')
let imageContainer = document.getElementById('images-visible')

async function fetchImages(category) {
    try {
        let response = await fetch('https://api.picogen.io/v1/job/generate')
        if (!response.ok){
            throw new Error ('Unable to fetch the data')
        }
        imageContainerText.innerText = 'Below is y generated images:';
        imageContainer.style.display = 'block';
        imageGenerated.src = response.url;
        console.log(response.url)
    } catch (error) {
        console.log(error)
    }
}

generateImageForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let enteredText = formInput.value;
    if(enteredText !== ""){
        fetchImages(enteredText)
    }else{
        imageContainerText.innerHTML = 'Input field can not be empty!';
    }
})