import React, { useEffect } from 'react';
import logo from './logo.svg';
// import socketIOClient from "socket.io-client";
// ES6 import or TypeScript
import { io } from "socket.io-client";
import queryString from 'query-string'




const SERVER = "http://127.0.0.1:5000";


const App = () => {

  useEffect(() => {

    const { token, to } = queryString.parse(window.location.search)
    // const socket = io(SERVER,{
    //   query: {
    //     token
    //   }
    // });
    const socket = io(SERVER, {
        secure: true,
        transports: ['websocket'],
        query: {
            token
          }
      });

    // const socket = socketIOClient(SERVER, { name: 'Qasim' })
    socket.on('RECEIVE_MESSAGE', data => {
      console.log('message received is ', data)
    })

    socket.on('USER_CONNECTED', data => {
      console.log('new user connected with data', data)
    })

    socket.on('TYPING_START', () => {
      console.log('Started typing')
    })
    
    socket.on('TYPING_END', () => {
      console.log('Typing end')
    })

    if(to){
      setTimeout(() => {
        socket.emit('TYPING_START', { recieverId: to })
        setTimeout(() => {
          socket.emit('TYPING_END', { recieverId: to })
          socket.emit('SEND_MESSAGE', { recieverId: to , message: 'hello Qasim I am fine' })
        }, 3000)
      }, 5000)
    }

    socket.on('USER_DISCONNECTED', data => {
      console.log('user disconencted', data)
    })
    

    return () => {
      socket.disconnect()
      socket.close()
    }


  }, [])
  return (
    <div>
        Hellow owrodl
      </div>
  )
}

export default App