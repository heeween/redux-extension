import React, { Component } from 'react';
import qs from 'querystring-es3'
const datas = [
    { id: '01', title: '消息1', content: 'hello react' },
    { id: '02', title: '消息2', content: 'hello vue' },
    { id: '03', title: '消息3', content: 'hello js' }
]
class Index extends Component {
    render() {

        // // get data from link with search
        //  const searchObj = qs.decode(this.props.location.search.slice(1))
        // const dataObj = datas.find((params) => {
        //     return params.id === searchObj.id
        // })

        // get data from link with state
        // const { id } = this.props.location.state || {}
        const {id} = this.props.match.params
        const dataObj = datas.find((params) => {
            return params.id === id
        }) || {}

        return (
            <div>
                <ul>
                    <li>ID:{dataObj.id}</li>
                    <li>Content:{dataObj.content}</li>
                </ul>
            </div>
        );
    }
}

export default Index;
