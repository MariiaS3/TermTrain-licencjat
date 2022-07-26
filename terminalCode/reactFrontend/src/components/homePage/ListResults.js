import axios from "axios";
import React from "react"

import { v4 as uuidv4 } from "uuid";

export default class ListResults extends React.Component {

    state = {
        results: [],
    }

    async componentDidMount() {
        const id = (this.props.propsToken).split(':')
        const LIST_RESULTS_URL = "http://localhost:8080/api/user/get-results/" + `${id[0]}`;
        const res = await axios.post(LIST_RESULTS_URL, id[0])
        this.setState({ results: res.data })
        console.log(this.state.results)
    }

    render() {
        return (
            <ul className="resultList">
                {this.state.results.map(result => (
                    <li key={uuidv4()} id="resultList">
                        <p>{result.id_quiz}</p>
                        <p>{result.result}</p>
                        <p>{result.data}</p>
                    </li>
                )
                )}
            </ul>
        )
    }
}