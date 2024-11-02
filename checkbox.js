const profileimage = document.getElementById("profileimage");
const checkbox = document.getElementById("checkbox");
console.log(profileimage)
console.log(checkbox)


checkbox.addEventListener('change', function(){
    console.log(checkbox.checked)
    if (checkbox.checked){
        profileimage.src = "./kid profile image.png"
    }else{
        profileimage.src = "./profile image.png"

    }
}
);
 