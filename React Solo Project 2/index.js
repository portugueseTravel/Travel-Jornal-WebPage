let destinos =[
    {
        iD: 1,
        country: "SCOTLAND",
        googleMapLink: "https://www.bing.com/maps?q=glenfinnan+viaduct+scotland&FORM=HDRSC6&cp=56.876232%7E-5.431795&lvl=16.0",
        location:"Glenfinnan Viaduct",
        dayInit: 12,
        dayEnd:18,
        year:2022, 
        month:"Oct",
        about:"The Glenfinnan Viaduct is a railway viaduct on the West Highland Line in Glenfinnan, Inverness-shire, Scotland, built from 1897 to 1901. Located at the top of Loch Shiel in the West Scottish Highlands, the viaduct overlooks the Glenfinnan Monument and the waters of Loch Shiel.",
        iconPath:"./location2.png",
        imgPath:"./scotland.jpg"
    },

    {
        iD: 2,
        country: "MAURITANIA",
        googleMapLink: "https://www.google.pt/maps?hl=en&gl=pt&um=1&ie=UTF-8&fb=1&sa=X&ftid=0xc29af4a332827e9:0x6119f948d60aa88f",
        location:"Iron Train",
        dayInit: 8,
        dayEnd:18,
        year:2023, 
        month:"Mar",
        about:"The Mauritania Railway is the national railway of Mauritania. Construction of the line began in 1960, with its opening in 1963.It consists of a single, 704-kilometre (437 mi) railway line linking the iron mining centre of Zouérat with the port of Nouadhibou",
        iconPath:"./location2.png",
        imgPath:"./mauritania.jpg"
    },

    {
        iD: 3,
        country: "SINGAPURE",
        googleMapLink: "https://www.bing.com/maps?q=SINGAPURE&FORM=HDRSC6&cp=1.318586%7E103.841743&lvl=10.6",
        location:"Marina Bay",
        dayInit: 12,
        dayEnd:16,
        year:2022, 
        month:"Fev",
        about:"Singapore, officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Strait of Malacca to the west, the Singapore Strait to the south along with the Riau Islands in Indonesia, the South China Sea to the east, and the Straits of Johor along with the State of Johor in Malaysia to the north. ",
        iconPath:"./location2.png",
        imgPath:"./singapure.jpg"
    }
]







function Header(){
    return (
        <div className="header--background">
            <img src = "./world2.png"  className="header--icon"></img>
            <h1 className = "header--text">my travel journal.</h1>
        </div>
    )
}

function Body(props){
    return(
        <section className= "body--background">
            <img src= {props.imgPath} className="body--img"></img>
            <div className="body--text">
                <img src={props.iconPath} className="body--icon"></img>
                <span className= "body--countryText">{props.country}</span>
                <a className="body--linkText" href= {props.googleMapLink} >View on Google Maps</a>
                <h1 className="body--placeText">{props.location}</h1>
                <h2 className="body--dataText">{props.dayInit} {props.month}, {props.year} - {props.dayEnd} {props.month}, {props.year}</h2>
                <h3 className="body--commentText"> {props.about}</h3>
            <div className="body--line">
                <hr display="block" color="black" />
            </div>

                </div>
                
        </section>
        
    )
}

function App (){
    const destenyElements = destinos.map(element =>{
        return( <Body 
                    key={element.iD}
                    {...element}
                />
        )
    })
        return (        
            <div className="web--structure">
                <Header />
                <section className="destinyList">
                    {destenyElements}
                </section>
            </div>)
}
   


ReactDOM.render(<App />, document.getElementById("root"));