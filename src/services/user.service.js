// import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { store } from '../store/store'
import {
  socketService,
  // SOCKET_EVENT_USER_UPDATED,
  // SOCKET_EMIT_USER_WATCH,
} from './socket.service'
import { showSuccessMsg } from './event-bus.service'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getEmptyUser,
  saveLocalUser,
  getUsers,
  getById,
  remove,
  update,
  changeScore,
  getGigsByUser,
  updateUser,
  getLoggedInUser,
}

window.userService = userService

function getUsers() {
  // return storageService.query('user')
  return httpService.get(`user`)
}

function getGigsByUser(userId) {
  // return storageService.query('gig', { userId })
  return httpService.get(`gig?userId=${userId}`)
}

function getEmptyUser() {
  return {
    fullname: '',
    username: '',
    password: '',
    imgUrl:
      'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
    score: 0,
    isSeller: false,
    level: 0,
  }
}

function onUserUpdate(user) {
  showSuccessMsg(
    `This user ${user.fullname} just got updated from socket, new score: ${user.score}`
  )
  store.dispatch({ type: 'setWatchedUser', user })
}

function getLoggedInUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

async function getById(userId) {
  console.log('user.service: getById', userId)
  // const user = await storageService.get('user', userId)
  const user = await httpService.get(`user/${userId}`)

  socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
  socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
  socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

  return user
}
function remove(userId) {
  // return storageService.remove('user', userId)
  return httpService.delete(`user/${userId}`)
}

async function update({ _id, score }) {
  // const user = await storageService.get('user', _id)
  console.log('user.service: update', user)
  // let user = getById(_id)
  // user.score = score
  // await storageService.put('user', user)

  user = await httpService.put(`user/${user._id}`, user)
  // Handle case in which admin updates other user's details
  if (getLoggedinUser()._id === user._id) saveLocalUser(user)
  return user
}

async function login(userCred) {
  // const users = await storageService.query('user')
  // const user = users.find((user) => user.username === userCred.username)
  const user = await httpService.post('auth/login', userCred)
  if (user) {
    socketService.login(user._id)
    return saveLocalUser(user)
  }
}
async function signup(user) {
  if (!user.imgUrl)
    user.imgUrl =
      'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
  // const user = await storageService.post('user', user)
  const res = await httpService.post('auth/signup', user)
  console.log(user)
  if (res) {
    socketService.login(res._id)
    return saveLocalUser(res)
  }
}
async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  socketService.logout()
  return await httpService.post('auth/logout')
}

function setLoggedInUser(user) {
  console.log('user.service: setLoggedInUser', user)
  const userToSave = {
    _id: user._id,
    fullname: user.fullname,
    username: user.username,
    imgUrl: user.imgUrl,
    location: user.location,
    isSeller: user.isSeller,
    rate: utilService.getRandomIntInclusive(1.5, 5),
    level: utilService.getRandomIntInclusive(1, 5),
  }
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave))
  return userToSave
}

async function changeScore(by) {
  const user = getLoggedinUser()
  if (!user) throw new Error('Not loggedin')
  user.score = user.score + by || by
  await update(user)
  return user.score
}

function saveLocalUser(user) {
  const userToSave = {
    fullname: user.fullname,
    _id: user._id,
    username: user.username,
    imgUrl: user.imgUrl,
    isSeller: user.isSeller,
    level: utilService.getRandomIntInclusive(1.5, 3.5),
  }
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave))
  return userToSave
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

function updateUser(user) {
  return storageService.put('user', user)
}

function createEmptyUser() {
  const user = {
    fullname: '',
    username: '',
    password: '',
    imgUrl:
      'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
    location: '',
    level: null,
    rate: null,
    isSeller: false,
  }
  return user
}

// ;(async () => {
//   await userService.signup({
//     fullname: 'Puki Norma',
//     username: 'puki',
//     password: '123',
//     score: 10000,
//     isAdmin: false,
//   })
//   await userService.signup({
//     fullname: 'Master Adminov',
//     username: 'admin',
//     password: '123',
//     score: 10000,
//     isAdmin: true,
//   })
//   await userService.signup({
//     fullname: 'Muki G',
//     username: 'muki',
//     password: '123',
//     score: 10000,
//   })
// })()
