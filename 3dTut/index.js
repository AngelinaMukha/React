class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Let's play </h1>
                <Machine 
                    s1="💎"
                    s2="🌼"
                    s3="🐣"    
                />
                <Machine 
                    s1="🌼"
                    s2="🌼"
                    s3="🌼"    
                />
                <Machine 
                    s1="🐣"
                    s2="🌼"
                    s3="🐣"    
                />
                <Friend
                    name="Eleton"
                    hobbies={['Piano', 'Singning', 'Dancing']}
                />
                <Friend
                    name="Bella"
                    hobbies={['Drawing', 'Dancing']}
                />
            </div>
        );
    }
}
ReactDOM.render(<App/>,  document.getElementById('root'))