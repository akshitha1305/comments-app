// Write your code here
import './index.css'

const CommentItem = props => {
  const {newItem, deleteItem, isLikedTrue} = props
  const {name, textArea, uniqueNo, date, isLiked} = newItem

  const nameLogo = name[0]
  console.log(nameLogo)

  const onClickLikeButt = () => {
    isLikedTrue(uniqueNo)
  }
  const likeButton = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onclickDeleteButt = () => {
    deleteItem(uniqueNo)
  }

  return (
    <li>
      <div className="list-item">
        <p className="name-logo amber">{nameLogo} </p>
        <div>
          <p className="name">
            {name} <span className="timeEl"> {date}</span>
          </p>
          <p className="comment-description">{textArea}</p>
        </div>
      </div>
      <br />
      <div className="img-buttons">
        <img
          src={likeButton}
          alt="like"
          className="button"
          onClick={onClickLikeButt}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          onClick={onclickDeleteButt}
          className="button"
        />
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
