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
      fullname: 'vividstore',
      imgUrl:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680026371/7e725954-a185-416c-9d73-cae11b4ec8ed_imsvrp.webp',
      level: 4,
    },
    {
      _id: 'u102',
      fullname: 'frederickkessie',
      imgUrl:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680026375/ig7e8qcr6ozvri62f4or_zharyr.jpg',
      level: 2,
      rate: 2,
    },
    {
      _id: 'u103',
      fullname: 'winny_writer',
      imgUrl:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680026368/3688cc9a-f364-40dc-a53a-b5d64cf5d9a0_xbhwtc.webp',
      level: 5,
      rate: 5,
    },
    {
      _id: 'u104',
      fullname: 'rashin07', 
      imgUrl:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680026368/petval-2_j7jzcv.webp',
      level: 1,
      rate: 2,
    },
    {
      _id: 'u105',
      fullname: 'usamatanveerw4',
      imgUrl:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680024290/1C0FFFF2-4EBD-4DB8-A69A-6CAC1E0FD058_rtawds.webp',
      level: 2,
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
