## creating a carouselwith react state

1.  create the caorusel component folder and files jsx and scss - put something in carousel component to show that it is working.
2.  import the carousel component in app.jsx
3.  put the <carousel/> in the app return.
4.  we want to take a set of images and show them one at a time on the page
5.  create img in the component - we are going to need to update the source of the img tag
6.  we are going to use props to get an array of images in this component
7.  we are using imagesArray - so can destructure it in place as imagesArr instead of props.imagesArrr
8.  now as this is a prop we want to import them in the app.jsx folder, add the props to the <carousel/> tag in the return component so that it will pass through to the component. We do it this way as otherwise we could not pass antoher set of images. - keeps component reusable.
9.  the artist object holds the images already so we must create an array of images from this object to pass to the props.
10. in the app function above return-> const galleryImages - [
    artist.strArtistFanart,
    artist.strArtistFanart2,
    artist.strArtistFanart3,
    artist.strArtistFanart4,
    ];
11. Now create the prop on the carousel tag in app.jsx imagesArr = {galleryImages}.
12. now gallery images is passed to our component - clg on the component page to check the import of the images arr console.log(imagesArr) - > array of 4.
13. now in the return of the component put the prop in the source of the image - <img src{imagesArr[0]}/> This references the first immage in the array.
14. now to introduce some state
15. Aim: use state to either show or hide this image on button press.
16. Create the button
17. now we need a function inside the component to handle this button press - use the convention as before and call it handleClick
18. const handleClick = () => {
    console.log("clicked the button");
    }; ---- function to handle the click of the button
19. now attach the function to the button element <button onClick={handleClick}>Toggle Image</button>
20. This now works as in react we dont need the eventlistener or dom element
21. state is a method from react so we first need to import it
22. import { useState } from "react"; in the component
23. useState is a function method
24. const Carousel = ({ imagesArr }) => {
    useState(false); - false is the default state
25. now we need to setup the state
26. const [showImage, setShowImage] = useState(false); showImage is a boolean of true or false on whether we want to show the image, setShowImage is the function.
27. now because we want the button click to update the state and the function name to do this is setShowImage, in the handleClick function we tell the function onclick what the state should change to.
28. const handleClick = () => {
    console.log("clicked the button");
    setShowImage(true);
    };
29. this now means the state will change to true on click, but wht happens if its alreasdy true and we want to hide it.
30. replace the above with.
    if (showImage === true) {

           setShowImage(false);

         } else {

           setShowImage(true);

         }

31. the above can be simplified to setShowImage(!showImage); - This is exactly the same. ! will give you the opposite of the following variable / value. so if its the opposite then change it.,
32. now we need to show or hide the image depending on this condition. so we can add a condition statement inside the return - {showImage && (
    <img src={imagesArr[0]} alt="" className="carousel__image" />
    )} - The ampersand says that if showImage is true - return this image, if showImage is false stop. && is not and - it is a condition in which if the left is truthy then do / check the bit on the right . if falsy stop. as such the image is not shown if the value of show image is false.
33. finished state for button click to show image or not :
    component:
    import "./Carousel.scss";
    import { useState } from "react";

const Carousel = ({ imagesArr }) => {
const [showImage, setShowImage] = useState(false);

const handleClick = () => {
setShowImage(!showImage);
};

return (

<div className="carousel">
<button onClick={handleClick}>Toggle Image</button>
{showImage && (
<img src={imagesArr[0]} alt="" className="carousel__image" />
)}
</div>
);
};

export default Carousel;
in app:
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav/Nav";
import Button from "./components/Button/Button";
import ArtistTile from "./components/ArtistTile/ArtistTile";
import AlbumTiles from "./components/AlbumTiles/AlbumTiles";

import albums from "./data/albums";
import artist from "./data/artist";
import Carousel from "./components/Carousel/Carousel";
const App = () => {
const user = {
firstName: "John",
lastName: "Doe",
};

const currentHour = new Date().getHours();
let greetingImg = sunrise;
let greetingTime = "Morning!";

if (currentHour >= 12) {
greetingImg = sun;
greetingTime = "Afternoon!";
}

if (currentHour >= 18) {
greetingImg = moon;
greetingTime = "Evening!";
}

// Filter
const filteredAlbums = albums
.filter((album) => album.strAlbumThumb)
.slice(0, 9);

// Sort
const highestRating = albums
.filter((album) => album.intScore)
.sort((a, b) => b.intScore - a.intScore)
.slice(0, 9);

// creating the array of images to use
const galleryImages = [
artist.strArtistFanart,
artist.strArtistFanart2,
artist.strArtistFanart3,
artist.strArtistFanart4,
];

return (
<>

<div className="app">
<Nav />
rafc
<header className="greeting">
<img src={greetingImg} className="greeting__img" alt={greetingTime} />
<h1 className="greeting__heading">
Good {greetingTime} <br /> {user.firstName} {user.lastName}
</h1>
</header>
<section className="button-section">
<Button buttonText={"Lets Go"} isSecondary={true} />
<Button buttonText={"Explore"} />
</section>
<section className="discover">
<h2>Discover</h2>
<ArtistTile
            imgSrc={artist.strArtistThumb}
            title={artist.strArtist}
            text={artist.strBiographyEN}
          />
</section>
<section className="gallery">
<h2 className="gallery_heading">Gallery</h2>
<Carousel imagesArr={galleryImages} />
</section>
<section className="discography">
<h2 className="discography__heading">Discography</h2>

          <div className="all-albums">
            <AlbumTiles title="Albums" albumsArr={filteredAlbums} />
          </div>

          <div className="highest-rated">
            <AlbumTiles title="Highest Rated" albumsArr={highestRating} />
          </div>
        </section>
      </div>
    </>

);
};

export default App;

34. now to create a counter state, we can incrememnt (add to) or decrement (take away) a number value and show it on the screen. state can hold any value.
35. create the state to use - const [counter, setCounter] = useState(0);
36. now we need to reference the variable in our returned display to actually show it on screen so in the return set <p>count is {counter}</p> this will show the value of counter.
37. now we need two functions to increment or decrement the counter variable. so create functions of const handleIncrement = () => {
    console.log("adding to the counter")
    };
    const handleDecrement = () => {
    console.log("adding to the counter");
    };
38. add the functions to the buttons in the return to actually be run, <button onClick={handleIncrement}>Increment</button>

    <button onClick={handleDecrement}>Decrement</button>

39. now we need to actually put in that we want the variable of counter to change when the increment functions are caused.
40. const handleIncrement = () => {
    console.log("adding to the counter");
    setCounter(counter + 1);
    };
    const handleDecrement = () => {
    console.log("adding to the counter");
    setCounter(counter - 1);
    };
41. we must use setcounter() or the component does not know to rerender despite the counter variable changing. ie if we did just counter += 1 the counter variable would change but the component on screen would not change. so we must use setcounter to tell the component to rerender. ALWAYS USE THE FUNCTION IN THE SETSTATE VARIABLE DECLARATION OR IT WILL NOT CHANGE.
42. INSIDE setCounter() we always pass in a value. if we wanted to pass in the return of a function we would have to set a variable = the return of a function value. then use that variable inside set counter. ie const valuetopass = calculmyvalue() setcounter(valuetopass)
43. code to this point : import "./Carousel.scss";
    import { useState } from "react";

const Carousel = ({ imagesArr }) => {
// create a state- the variable coutner is the value. setcounter is the function to update counter, use state(0) sets the counter default to 0.
const [counter, setCounter] = useState(0);
// we must call set coutner to change the value or the component wont rerender.

const handleIncrement = () => {
console.log("adding to the counter");
setCounter(counter + 1);
};
const handleDecrement = () => {
console.log("adding to the counter");
setCounter(counter - 1);
};

return (

<div className="carousel">
<p>count is: {counter}</p>

      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>
    </div>

);
};

export default Carousel;

44. Now we want to be able to scroll through our images on click depending on whether its left arrow or right arrow.
45. We want the counter to change the image on the screen, so instead of having <img src={imagesArr[0]}> we set it to <img src={imagesArr[counter]}> this now means if counter changes the index of the image changes and as such renders a different image.
46. finished carousel code -
    import "./Carousel.scss";
    import { useState } from "react";
    import leftArrow from "../../assets/images/left-arrow.png";
    import rightArrow from "../../assets/images/right-arrow.png";

const Carousel = ({ imagesArr }) => {
const [counter, setCounter] = useState(0);
// if the counter is going to go above the last image then we need to loop back to 0.
const handleIncrement = () => {
// this will not loop back to imageArr image at index 0 if we loop past the last 1.
if (counter >= imagesArr.length - 1) {
setCounter(0);
} else {
setCounter(counter + 1);
}
};

const handleDecrement = () => {
console.log("working");
if (counter > 0) {
setCounter(counter - 1);
} else {
setCounter(imagesArr.length - 1);
}
};

return (

<div className="carousel">
<img
src={leftArrow}
// arrow left is just the arrow css styling of an arrow button.
className="carousel**arrow carousel**arrow--left"
onClick={handleDecrement}
alt=""
/>

      <img src={imagesArr[counter]} className="carousel__image" alt="" />

      <img
        src={rightArrow}
        className="carousel__arrow carousel__arrow--right"
        onClick={handleIncrement}
        alt=""
      />
    </div>

);
};

export default Carousel;
