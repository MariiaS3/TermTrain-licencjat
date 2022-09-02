import React from "react";

import axios from "axios";

import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";


class AnswerListItem extends React.Component {

    state = {
        textValue: "",
        corect: false,
        quest: [],
    };

    async componentDidMount() {
        const QUIZ_API_BASE_URL = 'http://localhost:8080/api/question/' + this.props.id + '/answer';
        const response = await axios.get(QUIZ_API_BASE_URL);
        this.setState({ quest: response.data });

    }
    answerClick = (isCorect) => {
        this.setState({
            corect: isCorect
        })
    }

    handleRadioChange = (e, isCorect) => {
        this.setState({ checkedOptionValue: e.target.value });
        this.answerClick(isCorect)
    }

    render() {
        const style = {
            height: '35px',
            width: '150px',
            marginTop: '40px',
            fontSize: '18px',
            borderRadius: '10px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
            backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
        }

        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FormControl >
                    <RadioGroup>
                        {this.state.quest.map(quiz => (
                            <div key={quiz.id} style={{ marginLeft: '15px', marginTop: '10px' }}>
                                <FormControlLabel value={quiz.text} control={<Radio color='success' />} onChange={(e) => this.handleRadioChange(e, quiz.corect)} />
                                <label style={{ color: "#0B1F64", fontSize: "21px" }}  >{quiz.text}</label>
                            </div>
                        ))}
                    </RadioGroup>
                </FormControl>

                <Button variant="contained" className="btnMenu" style={style} onClick={() => this.props.answerClickProps(this.state.corect)} >Next</Button>
            </div >
        )
    }
}

export default AnswerListItem


