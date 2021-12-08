var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "IMG_8921.jpg", "IMG_8665.PNG", "852e9de8-d804-44cf-a213-674b01d95cc5.JPG", "IMG_8489.jpg"];
var names = ["Family Book","Oscar Singla", "Yasmin Singla", "Shruti Singla", "Satinder Singla"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
