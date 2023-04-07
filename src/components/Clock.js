
import './Clock.css';
import {Component} from "react";

class Clock extends Component{

    constructor(props) {
        super(props);

        let date = new Date();

        this.state = {
            hour: date.getHours() % 12,
            minute: date.getMinutes(),
            second: date.getSeconds(),
            isAm: date.getHours() < 12,
            input: false
        }
    }

    timePasses = () => {
        // if now it is in inputting state, just return and do not let time pass
        if(this.state.input){
            return;
        }

        let date = new Date(2023, 4, 7,
            this.state.isAm ? this.state.hour : this.state.hour % 12 + 12, this.state.minute, this.state.second);

        date = new Date(date.getTime() + 1000);

        this.setState({
            hour: date.getHours() % 12,
            minute: date.getMinutes(),
            second: date.getSeconds(),
            isAm: date.getHours() < 12,
            input: false
        });
    }

    componentDidMount() {
        this.myInterval = setInterval(() => this.timePasses(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }


    render(){
        return (
            <div className="container">
                <div>
                    <h2>London Clock</h2>
                </div>
                <div className="clk">
                    <input type="text" value={this.state.hour < 10 ? '0' + this.state.hour : this.state.hour}
                           onClick={() => {
                               this.setState({input: true});
                           }}
                           onChange={(event) => {
                               this.setState({hour: Number(event.target.value)});
                           }}
                           onKeyDown={(event) => {
                               if(event.key === 'Enter'){
                                   this.setState({input: false});
                               }
                           }} />
                    :
                    <input type="text" value={this.state.minute < 10 ? '0' + this.state.minute : this.state.minute}
                           onClick={() => {
                               this.setState({input: true});
                           }}
                           onChange={(event) => {
                               this.setState({minute: Number(event.target.value)});
                           }}
                           onKeyDown={(event) => {
                               if(event.key === 'Enter'){
                                   this.setState({input: false});
                               }
                           }} />
                    :
                    <input type="text" value={this.state.second < 10 ? '0' + this.state.second : this.state.second}
                           onClick={() => {
                               this.setState({input: true});
                           }}
                           onChange={(event) => {
                               this.setState({second: Number(event.target.value)});
                           }}
                           onKeyDown={(event) => {
                               if(event.key === 'Enter'){
                                   this.setState({input: false});
                               }
                           }} />
                    <label> {this.state.isAm ? 'AM' : 'PM'}</label>
                </div>
            </div>
        )
    }


}

export default Clock