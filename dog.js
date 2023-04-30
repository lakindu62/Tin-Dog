

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }


    getDogHtml() {

        const { name, avatar, age, bio , hasBeenLiked , hasBeenSwiped } = this

        const likedHtml = hasBeenLiked? `<img class="like-image" src="assets/like-image.png" />` 
                            : hasBeenSwiped ?  `<img class="like-image" src="assets/nope-image.png" />` : ""

        return ` <div class="dog-container" style="background-image: url('${avatar}');">
                ${likedHtml}
                <div class="dogInfo-container">
                    <h1>${name}, ${age}</h1>
                    <p>${bio}</p>
                </div>


            </div>`


    }


}


export default Dog