import { storageService } from "./async-storage.service.js";
import { httpService } from "./http.service.js";
import { utilService } from "./util.service.js";
import { userService } from "./user.service.js";

const STORAGE_KEY = "order";

export const ordersService = {
  query,
  save,
  remove,
  getEmptyOrders,
  addOrdersMsg,
  getById,
  saveOrder,
};
window.cs = ordersService;

async function query(
  filterBy = {
    title: "",
  }
) {
  // return httpService.get(STORAGE_KEY, filterBy)
  var orders = await storageService.query(STORAGE_KEY);

  const { ownerId } = filterBy;
  if (ownerId) {
    orders = orders.filter((order) => {
      return order.owner._id === ownerId;
    });
  }

  // if (!orders.length && !ownerId) orders = _createOrders()

  return orders;
}

async function remove(orderId) {
  await storageService.remove(STORAGE_KEY, orderId);
  //   return httpService.delete(`orders/${ordersId}`);
}
async function save(order) {
  var savedOrder;
  const loggedInUser = userService.getLoggedInUser();
  if (!loggedInUser) {
    return console.log("logged in user");
  } else {
    order.status = "pending";
    order.boughtAt = Date.now();
    order.buyer = loggedInUser;
    savedOrder = await storageService.post(STORAGE_KEY, order);
  }
  console.log("savedOrder");
  return savedOrder;
}

async function saveOrder(order) {
  console.log("order", order._id);
  var savedOrder;
  console.log("order", order);
  if (order._id) {
    savedOrder = await storageService.put(STORAGE_KEY, order);
  } else {
    // Later, owner is set by the backend
    order.owner = userService.getLoggedinUser();
    // order._id = utilService.makeId()
    savedOrder = await storageService.post(STORAGE_KEY, order);
  }
  return savedOrder;
}

function getById(orderId) {
  return storageService.get(STORAGE_KEY, orderId);
}

async function addOrdersMsg(ordersId, txt) {
  const savedMsg = await httpService.post(`orders/${ordersId}/msg`, { txt });
  return savedMsg;
}

function getEmptyOrders() {
  return {
    fullName,
    _id,
    imgUrl: null,
  };
}

function _createOrder(title, images, categories, daysToDeliver, rate) {
  return {
    title,
    price: utilService.getRandomIntInclusive(5, 200),
    images,
    rate,
    daysToDeliver,
    owner: utilService.getRandomOwners(),
    categories,
    status: "pending",
    boughtAt: Date.now(),
    buyer: userService.getLoggedInUser(),
  };
}

function _createOrders() {
  const orders = [
    _createOrder(
      "I will create soccer pitch for you so you can play soccer with your friends",
      [
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1680008847/user1/img1_hc4qok.png",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1680008858/user1/img7_mqbyac.png",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1680008856/user1/img6_j5v239.png",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1680008855/user1/img5_awr6af.png",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1680008853/user1/img4_udwrru.png",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1680008851/user1/img3_jvwdgd.png",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1680008849/user1/img2_buznmr.png",
      ],
      ["wordpress", "digital marketing"],
      3,
      2.5
    ),
    _createOrder(
      "I will create logo for your company so you can be more professional",
      [
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925741/cld-sample-5.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925741/cld-sample-4.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925740/cld-sample-3.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925740/cld-sample-2.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925739/cld-sample.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1680008851/user1/img3_jvwdgd.png",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1680008851/user1/img3_jvwdgd.png",
      ],
      ['data entry", "graphic', "voice over"],
      3,
      4.5
    ),
    _createOrder(
      "I will create website for your company so you can be more professional",
      [
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925731/samples/landscapes/landscape-panorama.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925730/samples/animals/kitten-playing.gif",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925720/samples/food/pot-mussels.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925724/samples/landscapes/architecture-signs.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925739/cld-sample.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925725/samples/landscapes/beach-boat.jpg",
      ],
      ["digital", "wordpress"],
      3,
      3.5
    ),
    _createOrder(
      "I will create animals for your self so you can be more happy",
      [
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925730/samples/animals/kitten-playing.gif",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925724/samples/animals/three-dogs.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925739/cld-sample.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925727/samples/imagecon-group.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925725/samples/people/bicycle.jpg",
        "https://res.cloudinary.com/dzcangpqd/image/upload/v1679925722/samples/ecommerce/shoes.png",
      ],
      ["website design"],
      1,
      2.5
    ),
  ];
  storageService.postMany(STORAGE_KEY, orders);
  return orders;
}
