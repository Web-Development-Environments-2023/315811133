const red_color = 'rgb(116, 20, 20)';
const red_hover_color = 'rgb(99, 30, 30)'

const blue_color = 'rgb(31, 31, 114)';
const blue_hover_color = 'rgb(42, 42, 116)';

const green_color = 'rgb(37, 131, 174)';
const green_hover_color = 'rgb(49, 107, 134)';

function setColor(color){
    if( color === "red"){
        document.documentElement.style.setProperty('--main-color', red_color);
        document.documentElement.style.setProperty('--hover-color', red_hover_color);
    }

    if( color === "blue"){
        document.documentElement.style.setProperty('--main-color', blue_color);
        document.documentElement.style.setProperty('--hover-color', blue_hover_color);
    }

    if( color === "green"){
        document.documentElement.style.setProperty('--main-color', green_color);
        document.documentElement.style.setProperty('--hover-color', green_hover_color);
    }
}