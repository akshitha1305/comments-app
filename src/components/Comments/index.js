import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
// Write your code here

const initialCommentList = [{}]

class Comments extends Component {
  state = {
    name: '',
    textArea: '',
    count: 0,
    commentLists: initialCommentList,
  }

  onChangeInputEl = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeTextAreaEl = event => {
    this.setState({
      textArea: event.target.value,
    })
  }

  onSubmittingComment = event => {
    event.preventDefault()
    const {name, textArea} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      uniqueNo: uuidv4(),
      name,
      textArea,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentLists: [...prevState.commentLists, newComment],
      name: '',
      textArea: '',
      count: prevState.count + 1,
    }))
  }

  deleteItem = id => {
    const {commentLists} = this.state
    const filteredCommentList = commentLists.filter(
      each => each.uniqueNo !== id,
    )
    this.setState({
      commentLists: filteredCommentList,
    })
  }

  isLikedTrue = uniqueNo => {
    this.setState(prevState => ({
      commentLists: prevState.commentLists.map(each => {
        if (uniqueNo === each.uniqueNo) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, textArea, count, commentLists} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <form onSubmit={this.onSubmittingComment}>
          <div className="text-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments-img"
              alt="comments"
            />
            <div className="box-container">
              <p className="labelEl">Say something about 4.0 Technologies</p>
              <br />
              <input
                className="inputEl"
                placeholder="Your Name"
                type="text"
                value={name}
                onChange={this.onChangeInputEl}
              />
              <br />
              <textarea
                className="text-area-el"
                placeholder="Your Comment"
                rows="10"
                cols="45"
                value={textArea}
                onChange={this.onChangeTextAreaEl}
              >
                Hi
              </textarea>
            </div>
          </div>
          <button type="submit" className="add-button">
            Add Comment
          </button>
        </form>
        <hr />
        <p className="comments-heading">
          <span className="countEl">{count}</span> Comments
        </p>
        <ul className="list-elements">
          <CommentItem
            newItem={commentLists}
            isLikedTrue={this.isLikedTrue}
            deleteItem={this.deleteItem}
          />
        </ul>
      </div>
    )
  }
}

export default Comments
