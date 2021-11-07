class Machine extends React.Component{
    render(){
        console.log(this.props);
        const props = this.props;
        const {s1,s2,s3}=this.props;
        const colors={fontSize: '20px', backgroundColor: 'purple'};
        let isWinner = s1===s2 && s2===s3;
            return (
                <div className="Machine">
                    <p style={colors}>
                        {s1}  {s2} {s3}
                    </p>
                    <p className={isWinner ? 'win':'lose'}>{isWinner ? 'Winner!' : 'Loser!'}</p>
                </div>
            );
    }
}
