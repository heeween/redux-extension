import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Input, InputLabel, Stack, Button } from '@mui/material';


// export default class Demo extends Component {
//     state = {
//         result: 0
//     }
//     add = (event) => {
//         this.setState(state=>({result:state+1}))
//     }
//     unmount = (params) => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     componentDidMount() {
//         // clearInterval(this.timer)
//     }
//     componentDidMount() {
//         this.timer = setInterval(() => {

//             this.setState(state =>({result:state.result+1}))
//         }, 1000);
//     }
//     render() {
//         return (
//             <div>
//                 <Stack direction='row' spacing={2}>
//                     <InputLabel>Result From State is: </InputLabel>
//                     <Input value={this.state.result}></Input>
//                 </Stack>
//                 <Stack direction='row' spacing={2} sx={{ mt: 2, width: 300 }}>
//                     <Button onClick={c => this.add()} variant='contained' fullWidth>+</Button>
//                     <Button onClick={c => this.unmount()} variant='contained' fullWidth>unmount</Button>
//                 </Stack>
//             </div >
//         );
//     }
// }

export default function Demo() {
    const [result, setResult] = React.useState(0)
    const [name, setName] = React.useState('Yanwen')
    const myRef = React.useRef()
    React.useEffect((params) => {
        const timer = setInterval(() => {
            setResult((preResult) => preResult + 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])
    function add() {
        // 1 first way
        // setResult(result+1)
        // 2 second way to refreash state
        setResult((preResult) => preResult + 1)
    }
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function outputValueOfInput(params) {
        console.log(myRef.current.value);
        // setName('jack')
    }
    function nameInputValueChange(event) {
        setName(event.target.value)
    }
    return (
        <div>
            <Stack direction='row' spacing={2}>
                <InputLabel>Result From State is: </InputLabel>
                <Input value={result}></Input>
            </Stack>
            <Stack direction='row' spacing={2} sx={{ mt: 2, width: 300 }}>
                <Button onClick={add} variant='contained' fullWidth>+</Button>
            </Stack>
            <Stack direction='row' spacing={2}>
                <InputLabel>My Name is: </InputLabel>
                <Input inputRef={myRef} value={name} onChange={nameInputValueChange}></Input>
            </Stack>
            <Stack direction='row' spacing={2} sx={{ mt: 2, width: 300 }}>
                <Button onClick={outputValueOfInput} variant='contained' fullWidth>log input value</Button>
                <Button onClick={unmount} variant='contained' fullWidth>unmount</Button>
            </Stack>
        </div >
    );
}
