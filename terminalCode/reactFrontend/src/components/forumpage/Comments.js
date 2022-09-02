import React from "react"
import { v4 as uuidv4 } from "uuid";
import "./forum.css"
import { Button } from "@mui/material";
import axios from "axios";

async function addLike(credentials) {
    return axios.post('http://localhost:8080/api/user/add-like', credentials)
}

async function createComments(credentials, id) {
    return axios.post('http://localhost:8080/api/forum/' + id + '/comment', credentials)
}

class Comments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            describ: "",
            like: 100,
            id: "",
            comment: [],
            listLikes: [],
        }
    }
    async componentDidMount() {
        const id_com = (window.location).href
        const FORUM_API_BASE_URL = "http://localhost:8080/api/forum/" + id_com.split("/")[id_com.split("/").length - 1] + "/comment";
        const response = await axios.get(FORUM_API_BASE_URL);

        const id = (this.props.propsToken).split(':')
        let comment = response.data
        for(let i=0;i< comment.length;i++){
            const result = await addLike({
                idComment: comment[i].id,
                user: id[0],
                likes: false,
                dislikes: false
            })
        }
        const LIST_LIKE_URL = "http://localhost:8080/api/user/get-like/" + id[0];
        const res = await axios.post(LIST_LIKE_URL, id[0]);
        this.setState({ listLikes: res.data, comment: response.data, id: id_com.split("/")[id_com.split("/").length - 1] })
    }

    onLikeButtonClick = async (id_com,i) => {

        const id = this.props.propsToken.split(':')[0];
        console.log(i + " "+ this.state.listLikes[i].likes)
     
            const result = await addLike({
                idComment: id_com,
                user: id,
                likes: true,
                dislikes: false
            })
    
        
        const LIST_LIKE_URL = "http://localhost:8080/api/user/get-like/" + id[0];
        const res = await axios.post(LIST_LIKE_URL, id[0]);
        console.log(res.data)
        const FORUM_API_BASE_URL = "http://localhost:8080/api/forum/" + this.state.id + "/comment";
        const response = await axios.get(FORUM_API_BASE_URL);
        this.setState({ listLikes: res.data, comment: response.data})
    };

    onDisLikeButtonClick = async (id_com,i) => {

        const id = this.props.propsToken.split(':')[0];
       
            const result = await addLike({
                idComment: id_com,
                user: id,
                likes: false,
                dislikes: true
            })
       
        const LIST_LIKE_URL = "http://localhost:8080/api/user/get-like/" + id[0];
        const res = await axios.post(LIST_LIKE_URL, id[0]);
        const FORUM_API_BASE_URL = "http://localhost:8080/api/forum/" + this.state.id + "/comment";
        const response = await axios.get(FORUM_API_BASE_URL);
        this.setState({ listLikes: res.data, comment: response.data})
    };

    render() {
        const handleSubmit = async (e) => {
            e.preventDefault();
            const id = this.props.propsToken.split(':');

            if (this.state.describ !== "") {
                const newCom = await createComments({
                    describe: this.state.describ,
                    disLike: 0,
                    like: 0,
                }, this.state.id);
                let comment_id =newCom.data.id;
                const result = await addLike({
                    idComment: comment_id,
                    user: id[0],
                    likes: false,
                    dislikes: false
                })

                const QUIZ_API_BASE_URL = "http://localhost:8080/api/forum/" + this.state.id + "/comment";
                const response = await axios.get(QUIZ_API_BASE_URL);
                const LIST_LIKE_URL = "http://localhost:8080/api/user/get-like/" + id[0];
                const res = await axios.post(LIST_LIKE_URL, id[0]);
                console.log(res.data)

                this.setState({ comment: response.data , listLikes:res.data});
            }
        }
        const styleAdd = {
            height: '25px',
            width: '150px',
            marginBottom: '10px',
            marginTop: '10px',
            fontSize: '15px',
            borderRadius: '5px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
            backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
        }
        let i = 0;
        return (
            <div className="comment">
                <div className="comment-input" suppressContentEditableWarning contentEditable spellCheck={false} onInput={(e) => this.setState({ describ: e.currentTarget.outerText })} >{""}</div>
                <div id="dodaj">
                    <Button type="submit" style={styleAdd} onClick={e => handleSubmit(e)}>Dodaj</Button>
                </div>
                <div id="comment">
                    {this.state.comment.map(com => {
                      
                        if(com){
                        if (com.id == this.state.listLikes[i].idComment) {
                            i = i + 1;
                    
                            return <div key={uuidv4()}>
                                <li id="com"  >
                                    <span  >{com.describe}</span>
                                    <div >
                                        <button
                                            className={"like-button " + (this.state.listLikes[i-1].likes ? "liked" : "")}
                                            onClick={() => this.onLikeButtonClick(com.id, i-1)} >
                                            {"Like"} | {com.like}
                                        </button>
                                        <button
                                            className={"dislike-button " + (this.state.listLikes[i-1].dislikes ? "disliked" : "")}
                                            onClick={() => this.onDisLikeButtonClick(com.id,i-1)} >
                                            {"Dislike"} | {com.disLike}
                                        </button>
                                    </div>
                                </li>

                            </div>
                        }}
                    })}
                </div>
            </div>
        )
    }
}

export default Comments