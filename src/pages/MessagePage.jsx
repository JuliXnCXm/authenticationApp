import React from 'react'
import Message from '../components/Message'
const MessagePage = () => {
  const [counter , setCounter] = React.useState(6);

  React.useEffect(() => {
    counter > 0 && setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    if (counter === 0) {
      window.location.href = '/';
    }
  }, [counter])

  return (
    <>
        <div>
            <Message error={true}/>
            <div className='text'>
              <h2>Error while authenticating</h2>
              <p>If you`re already registered login otherwise sign up first</p>
            </div>
            <p>you will be redirected in {counter} seconds</p>
        </div>
    </>
  )
}

export default MessagePage