//Used for testing

const amount = 2;

const getPack = (num) => {
    return(
        <div>
            <link rel="preload" as="image" href={"./img/head" + num + ".png"}/>
            <link rel="preload" as="image" href={"./img/body" + num + ".png"}/>
            <link rel="preload" as="image" href={"./img/hand" + num + ".png"}/>
            <link rel="preload" as="image" href={"./img/leg" + num + ".png"}/>
        </div>
    );
};

const getTexturePacks = () =>{
    return(
        <div>
            test
        </div>
    )
};

class Preloader extends React.Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}

const showElements = () => {
    let img = new Image();
    img.src = "./img/leg3.png";
    img.onload = function () {
        console.log("Ok")
    };
    return(
        <div>

        </div>
    )
};

ReactDOM.render(
    <Preloader/>,
    document.getElementById('misc')
);
