console.log("Tut 55");

const data = [
    {
        name: "Abhishek Kumar",
        age: "18",
        city: "Kolkata",
        language: "JavaScript",
        framework: "Sass",
        image: "https://instagram.fdel5-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/83130577_515127015788692_8476706495800366033_n.jpg?_nc_ht=instagram.fdel5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ESiotOVPYZIAX_WudA-&oh=c025586ae6aed35a71f8399fe6047104&oe=5F4A7D61"
    },
    {
        name: "saurabh",
        age: "28",
        city: "Kolkata",
        language: "JavaScript",
        framework: "Sass",
        image: "https://instagram.fdel5-1.fna.fbcdn.net/v/t51.2885-15/e15/c0.0.1079.1079a/s480x480/74345481_2421921051188835_4026636079591667522_n.jpg?_nc_ht=instagram.fdel5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=ukvmLlRbwtkAX--WXAW&oh=fc73f754cf79a7c960ce15e77246f1bb&oe=5F4AF9F5"
    },
    {
        name: "Ankit",
        age: "18",
        city: "Kolkata",
        language: "JavaScript",
        framework: "Sass",
        image: "https://instagram.fdel5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c113.0.854.854a/s640x640/72428711_754775384984193_1332530063681477775_n.jpg?_nc_ht=instagram.fdel5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=CDfxJPAh1WcAX8EVEt6&oh=29dd72c8dbbdbf8f273a25cd7a7ce9b8&oe=5F4AFB6F"
    },
    {
        name: "Anoop",
        age: "18",
        city: "Kolkata",
        language: "JavaScript",
        framework: "Sass",
        image: "https://instagram.fdel5-1.fna.fbcdn.net/v/t51.2885-15/e35/109300674_325366395158541_8486482353756455835_n.jpg?_nc_ht=instagram.fdel5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=U5TqsIUUS5cAX-SdxLx&oh=92bda69f276a58c540c8a21bf2ae8e26&oe=5F4C428A"
    },
    {
        name: "Akash",
        age: "12",
        city: "Kolkata",
        language: "JavaScript",
        framework: "Sass",
        image: "https://instagram.fdel5-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/30079523_241815269700294_4241246755594698752_n.jpg?_nc_ht=instagram.fdel5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Y7AeKixsOhUAX_jKm0k&oh=ffd4f1362168dcd6ea6a2e8cbd3e20ef&oe=5F48CE9C"
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