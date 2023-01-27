export default function LeaderBoardPage(props) {
  return (
    <div className='body-container'>
      {[].concat(Object.values(props.users))
        .sort((a, b) => Object.keys(a.answers).length + a.questions.length < Object.keys(b.answers).length + b.questions.length ? 1 : -1)
        .map((user) => (
          <div key={user.id} className='user-card'>
            <div className='user-card-left'>
              <img src={user.avatarURL} alt={user.id}></img>
              <div>{user.id}</div>
            </div>
            <div className='user-card-right'>
              <div className='user-card-right-header'>
                {`Score: ${user.questions.length + Object.keys(user.answers).length}`}
              </div>
              <hr />
              <div className='user-card-right-body'>
                <div>{`${user.questions.length} ${user.questions.length > 1 ? 'questions' : 'question'} asked`}</div>
                <div>{`${Object.keys(user.answers).length} ${Object.keys(user.answers).length > 1 ? 'questions' : 'question'} answered`}</div>
              </div>
            </div>
          </div>
      ))}
    </div>
  )
}