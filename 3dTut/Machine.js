class Machine extends React.Component{
    render(){
        console.log(this.props);
        const props = this.props;
        const {s1,s2,s3}=this.props;
        let result = (s1===s2 && s2===s3) ? "You WON!":"you lose";
            return (
                <div>
                    <p>{this.props.s1}  {this.props.s2} {this.props.s3}</p>
                    <h3>{result}</h3>
                </div>
            );
    }
}
