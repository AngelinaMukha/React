function getNum(){
    return Math.floor(Math.random()*10+1);
}
class NumPicker extends React.Component{
    render(){
        const num= getNum();
        let msg;
        if(num === 7){
            msg=
            <div>
                <h2>CONGRATS YOU WIN!</h2>
                <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/16/74/2c/16742c78-deb5-1632-6133-f0f232716473/source/512x512bb.jpg"/>
            </div>
        }else{
            msg= <p>Sorry, you Loose</p>
        }
        return (
            <div>
                <h1>Your number is: {num}</h1>  
                {msg}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker/>,  document.getElementById('root'));
