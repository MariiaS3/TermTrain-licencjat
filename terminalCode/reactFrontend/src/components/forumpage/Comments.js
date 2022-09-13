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

        const LIST_LIKE_URL = "http://localhost:8080/api/user/get-like/" + id[0];
        let res = await axios.post(LIST_LIKE_URL, id[0]);

           for(let i=0;i<response.data.length;i++){ 
            const result = await addLike({
                idComment: response.data[i].id,
                user: id[0],
                likes: false,
                dislikes: false
            })
        }

        res = await axios.post(LIST_LIKE_URL, id[0]);
        this.setState({ listLikes: res.data, comment: response.data, id: id_com.split("/")[id_com.split("/").length - 1] })
    }

    onLikeButtonClick = async (id_com, i) => {
        const id = this.props.propsToken.split(':')[0];

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
        this.setState({ listLikes: res.data, comment: response.data })
    };

    onDisLikeButtonClick = async (id_com, i) => {

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
       
        this.setState({ listLikes: res.data, comment: response.data })
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
                    idUser: id[0],
                    forumNumber: this.state.id,
                }, this.state.id);


                const QUIZ_API_BASE_URL = "http://localhost:8080/api/forum/" + this.state.id + "/comment";
                const response = await axios.get(QUIZ_API_BASE_URL);
                const LIST_LIKE_URL = "http://localhost:8080/api/user/get-like/" + id[0];
                const res = await axios.post(LIST_LIKE_URL, id[0]);

                this.setState({ comment: response.data, listLikes: res.data });
            }
        }
        const styleAdd = {
            height: '30px',
            width: '150px',
            marginBottom: '10px',
            marginTop: '10px',
            fontSize: '15px',
            borderRadius: '5px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
            backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #CAFFE3 10%, #97a7eb 100%)'
        }
        let i = 0;
        return (
            <div className="comment">
                <div className="comment-input" suppressContentEditableWarning contentEditable spellCheck={false} onInput={(e) => this.setState({ describ: e.currentTarget.outerText })} >{""}</div>
                <div id="dodaj">
                    <Button variant="contained" className="btnMenu" style={styleAdd} onClick={e => handleSubmit(e)}>Dodaj</Button>
                </div>
                <div id="comment">
                    {this.state.comment.map(com => {
                        if (com.forumNumber.toString() === this.state.id) {
                            let res =   this.state.listLikes.map(like => {
                                if (com.id === like.idComment) {
                                        return <div key={uuidv4()}>
                                            <li id="com"  >
                                                <span >{com.describe.split("\n").map(d =>{
                                                    return <li>{d}</li>
                                                })}</span>
                                                <div >
                                                    <button
                                                        className={"like-button " + (like.likes ? "liked" : "")}
                                                        onClick={() => this.onLikeButtonClick(com.id, like.id)} >
                                                        {"Like"} | {com.like}
                                                    </button>
                                                    <button
                                                        className={"dislike-button " + (like.dislikes ? "disliked" : "")}
                                                        onClick={() => this.onDisLikeButtonClick(com.id, like.id)} >
                                                        {"Dislike"} | {com.disLike}
                                                    </button>
                                                </div>
                                            </li>

                                        </div>
                                    }
                                })

                                return res
                        }
                    })}
                </div>
            </div>
        )
    }
}


export default Comments 