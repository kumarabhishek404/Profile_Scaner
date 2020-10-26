console.log("Tut 55");

const data = [
    {
        name: "Abhishek Kumar",
        age: "18",
        city: "Kolkata",
        language: "JavaScript",
        framework: "Sass",
        image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: "saurabh",
        age: "28",
        city: "Kolkata",
        language: "JavaScript",
        framework: "Sass",
        image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: "Ankit",
        age: "18",
        city: "Kolkata",
        language: "JavaScript",
        framework: "Sass",
        image: "https://images.pexels.com/photos/185725/pexels-photo-185725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "Anoop",
        age: "18",
        city: "Kolkata",
        language: "JavaScript",
        framework: "Sass",
        image: "https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: "Akash",
        age: "12",
        city: "Kolkata",
        language: "JavaScript",
        framework: "Sass",
        image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
]

// CV Iterators

function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex<profiles.length ? 
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    }
}

const candidate = cvIterator(data)
nextCV();

// Button listener for next profile
const next = document.getElementById("next");
next.addEventListener('click', nextCV)


function nextCV(){
    const currentCandidate = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
        image.innerHTML = `<img src="${currentCandidate.image}" style="width: 300px; height: 200px; object-fit: cover; text-align: center;">`

        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
        <li class="list-group-item">uses ${currentCandidate.framework}</li>
        </ul>`;
    }
    else{
        alert("End of the Candidate")
        window.location.reload();
    }
}
