export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  debounce,
  randomPastTime,
  saveToStorage,
  loadFromStorage,
  getRandomOwners,
}

function makeId(length = 6) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function getRandomOwners() {
  const owners = [
    {
      _id: 'u101',
      fullname: 'Shuki Cohen',
      imgUrl: '/src/assets/images/avatar.png',
      level: 'basic',
      rate: 4,
    },
    {
      _id: 'u102',
      fullname: 'Chen Cohen',
      imgUrl: '/src/assets/images/avatar.png',
      level: 'intermediate',
      rate: 2,
    },
    {
      _id: 'u103',
      fullname: 'Kobi Cohen',
      imgUrl: '/src/assets/images/avatar.png',
      level: 'advanced',
      rate: 5,
    },
    {
      _id: 'u104',
      fullname: 'Yuval Cohen',
      imgUrl: '/src/assets/images/avatar.png',
      level: 'basic',
      rate: 2,
    },
    {
      _id: 'u105',
      fullname: 'Leon Cohen',
      imgUrl: '/src/assets/images/avatar.png',
      level: 'intermediate',
      rate: 1,
    },
  ]
  const randomOwner = owners[Math.floor(Math.random() * owners.length)]
  return randomOwner
}
function makeLorem(size = 100) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function randomPastTime() {
  const HOUR = 1000 * 60 * 60
  const DAY = 1000 * 60 * 60 * 24
  const WEEK = 1000 * 60 * 60 * 24 * 7

  const pastTime = getRandomIntInclusive(HOUR, WEEK)
  return Date.now() - pastTime
}

function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}
