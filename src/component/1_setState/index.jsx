import { Input, InputLabel, Stack, Button } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, substract } from '../../redux/actions/count';

class Index extends Component {
    state = {
        result: 0
    }
    add = (event) => {
        const {result} = this.state
        this.setState(state => ({result:state.result+1}))
    }
    render() {
        return (
            <div>
                <Stack direction='row' spacing={2}>
                    <InputLabel>Result From Redux is: </InputLabel>
                    <Input value={this.props.result}></Input>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <InputLabel>Result From State is: </InputLabel>
                    <Input value={this.state.result}></Input>
                </Stack>
                <Stack direction='row' spacing={2} sx={{ mt: 2, width: 300 }}>
                    <Button onClick={c => this.props.add()} variant='contained' fullWidth>+</Button>
                    <Button onClick={c => this.props.substract()} variant='contained' fullWidth>-</Button>
                    <Button onClick={c => this.add()} variant='contained' fullWidth>+</Button>
                </Stack>
            </div>
        );
    }
}


export default connect(
    state => ({ result: state }),
    { add, substract }
)(Index)
