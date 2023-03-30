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
};
window.cs = ordersService;

async function query() {
  // return httpService.get(STORAGE_KEY, filterBy)

  var orders = await storageService.query(STORAGE_KEY);
  if (!orders.length) orders = _createGigs();
  //   if (filterBy.txt) {
  //     const regex = new RegExp(filterBy.txt, "i");
  //     orders = orders.filter(
  //       (orders) => regex.test(orders.vendor) || regex.test(orders.description)
  //     );
  //   }
  //   if (filterBy.price) {
  //     orders = orders.filter((orders) => orders.price <= filterBy.price);
  //   }
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

function _createGig(title, images, categories, daysToDeliver, rate) {
  return {
    title,
    price: utilService.getRandomIntInclusive(5, 200),
    images,
    rate,
    daysToDeliver,
    owner: utilService.getRandomOwners(),
    categories,
  };
}

function _createGigs() {
  const gigs = [
    _createGig(
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
    _createGig(
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
    _createGig(
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
    _createGig(
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
  storageService.postMany(STORAGE_KEY, gigs);
  return gigs;
}
