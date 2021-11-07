class Machine extends React.Component{
    static defaultProps={
            s1: '🐣',
            s2: '🐣',
            s3: '🐣'
    }
    render(){
        console.log(this.props);
        const props = this.props;
        const {s1,s2,s3}=this.props;
        let result = (s1===s2 && s2===s3) ? "You WON!":"you lose";
            return (
                <div>
                    <p>{s1}  {s2} {s3}</p>
                    <h3>{result}</h3>
                </div>
            );
    }
}
