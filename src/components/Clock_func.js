// import {useState} from "react";
// import './Clock.css';
//
// function Clock(){
//
//     const initialTime = new Date();
//     let initialHour = initialTime.toLocaleTimeString('en-GB',
//         {hour12: true, hour: '2-digit', timeZone: 'Europe/London' }).slice(0,2);
//     let initialMinute = initialTime.toLocaleTimeString('en-GB',
//         {minute: '2-digit', timeZone: 'Europe/London' });
//     if(initialMinute.length === 1){
//         initialMinute = '0' + initialMinute;
//     }
//     let initialSecond = initialTime.toLocaleTimeString('en-GB',
//         {second: '2-digit', timeZone: 'Europe/London' });
//     if(initialSecond.length === 1){
//         initialSecond = '0' + initialSecond;
//     }
//     let initialAmpm = initialTime.toLocaleTimeString('en-GB',
//         {hour12: true, timeZone: 'Europe/London' }).slice(-2).toUpperCase();
//
//     const [hour, setHour] = useState(initialHour);
//     const [minute, setMinute] = useState(initialMinute);
//     const [second, setSecond] = useState(initialSecond);
//     const [ampm, setAmpm] = useState(initialAmpm);
//
//     const [date, setDate] = useState([initialHour, initialMinute, initialSecond, initialAmpm]);
//
//
//     var myInterval;
//
//     // myInterval = setInterval(() => {
//     //     let newHour = new Date().toLocaleTimeString('en-GB',
//     //         {hour12: true, hour: '2-digit', timeZone: 'Europe/London' }).slice(0,2);
//     //     let newMinute = new Date().toLocaleTimeString('en-GB',
//     //         {minute: '2-digit', timeZone: 'Europe/London' });
//     //     let newSecond = new Date().toLocaleTimeString('en-GB',
//     //         {second: '2-digit', timeZone: 'Europe/London' });
//     //     if(newMinute.length === 1){
//     //         newMinute = '0' + newMinute;
//     //     }
//     //     if(newSecond.length === 1){
//     //         newSecond = '0' + newSecond;
//     //     }
//     //     let newAmpm = new Date().toLocaleTimeString('en-GB',
//     //         {hour12: true, timeZone: 'Europe/London' }).slice(-2).toUpperCase();
//     //
//     //     // setHour(newHour);
//     //     // console.log(myInterval);
//     //     //
//     //     // setMinute(newMinute);
//     //     // console.log(myInterval);
//     //     //
//     //     // setSecond(newSecond);
//     //     // console.log(myInterval);
//     //     //
//     //     // setAmpm(newAmpm);
//     //     // console.log(myInterval);
//     //
//     //     console.log("first"+myInterval);
//     //     clearInterval(myInterval);
//     //     setDate([newHour, newMinute, newSecond, newAmpm]);
//     //     console.log("second"+myInterval);
//     //
//     // }, 1000);
//
//
//     var ns;
//     var nm;
//     var nh;
//     var nap;
//
//     myInterval = setInterval(() =>{
//         ns = Number(date[2]) + 1;
//         nm = Number(date[1]);
//         nh = Number(date[0]);
//         nap = ampm;
//         if(ns == 60){
//             ns = 0;
//             nm++;
//             if(nm==60){
//                 nm = 0;
//                 nh++;
//                 if(nh==12){
//                     nh=0;
//                     nap= ampm=='AM' ? 'PM' : 'AM';
//                 }
//             }
//         }
//
//         if(nh < 10){
//             nh = '0'+nh;
//         }
//
//         if(nm < 10){
//             nm = '0'+nm;
//         }
//
//         if(ns < 10){
//             ns = '0'+ns;
//         }
//
//         // setHour(nh);
//         // setMinute(nm);
//         // setSecond(ns);
//         // setAmpm(nap);
//         clearInterval(myInterval);
//         setDate([nh,nm,ns,nap])
//     }, 1000);
//
//
//     return (
//         <div className="container">
//             <div>
//                 <h2>London Clock</h2>
//             </div>
//             <div className="clk">
//                 <input id="hour"
//                        value={date[0]}
//                        onChange={event => {
//                            let inputHour = event.target.value;
//                            clearInterval(myInterval);
//                            setDate([inputHour, date[1], date[2], date[3]]);
//                        }} />
//                 :
//                 <input id="minute"
//                        value={date[1]}
//                        onChange={event => {
//                            let inputMinute = event.target.value;
//                            clearInterval(myInterval);
//                            clearInterval()
//                            setDate([date[0], inputMinute, date[2], date[3]]);
//                        }} />
//                 :
//                 <input id="second"
//                        value={date[2]}
//                        onChange={event => {
//                            let inputSecond = event.target.value;
//                            clearInterval(myInterval);
//                            setDate([date[0], date[1], inputSecond, date[3]]);
//                        }} />
//                 <span> {date[3]}</span>
//             </div>
//         </div>
//     )
// }
//
// export default Clock