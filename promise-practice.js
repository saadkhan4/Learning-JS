// const firstPromise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("It's resolved");
//     }, 3000);
// })

// firstPromise.then((response) => {
//     console.log("It's response",response);

// })

// const orderPizza = new Promise((resolve, reject) => {
//     let pizzaShopOpen = false;

//     setTimeout(() => {
//        if (pizzaShopOpen) {
//         resolve("It's open");

//        } else {
//         reject("It's closed");
//        }
//     }, 2000);
// })

// orderPizza
//     .then((message) => {
//     console.log("Success",message);
//     })
//     .catch((error) => {
//         console.log("Failure", error);
//     })

// const brewCoffee = new Promise((resolve, reject) =>{
//     let hasBean = true;

//     setTimeout(() => {
//         if (hasBean) {
//           resolve("Coffee is ready.");
//         } else {
//           reject("Out of beans.");
//         }
//     }, 2000);
// })

// brewCoffee
//     .then((success) => {
//     console.log("Success",success);
//     })
//     .catch((failure) => {
//     console.log("Failure",failure);

// })

// const wifiOn = new Promise((resolve, reject) => {
//     let checkConnection = true;

//     setTimeout(() => {
//         if (checkConnection) {
//             resolve("Wi-Fi is on.")
//         } else {
//             reject("Wi-Fi is off.");
//        }
//     }, 2000);
// })

// wifiOn
//     .then((success) => {
//     console.log("Success",success);
//     })
//     .catch((failure) => {
//     console.log("Failure",failure);
// })

// const batteryLevel = new Promise((resolve, reject) => {
//     let checkBattery = 5;

//     setTimeout(() => {
//         if (checkBattery > 30) {
//             resolve("Battery is OK.");
//         } else {
//             reject("Low battery.")
//        }
//     }, 3000);
// })

// batteryLevel
//     .then((success) => {
//     console.log("Success",success);
//     })
//     .catch((failure) => {
//         console.log("Failure", failure);
// })

// const startDownload = new Promise((resolve, reject) => {
//     let downloadFile = true;
//     let fileFound = false;

//     setTimeout(() => {
//         if (downloadFile === true && fileFound === true) {
//             resolve("Download Started")
//         } else {
//             reject("File not found.")
//         }
//     }, 2000);
// })

// startDownload
//     .then((success) => {
//         console.log("success",success);
//     })
//     .catch((failure) => {
//     console.log("Failure",failure);

// })

// const foodDelivery = new Promise((resolve, reject) => {
//     let isOrdered = false;
//     let isRestaurant = true;

//     setTimeout(() => {
//         if (isOrdered || isRestaurant) {
//           resolve("Order Accepted");
//         } else {
//           reject("Order Rejected");
//         }
//     }, 2000);
// })

// async function trackOrder() {
//     try {
//         const message = await foodDelivery;
//         console.log("Success",message);
//     } catch (error){
//         console.log("Failure",error);
//     }
// }

// trackOrder();

// const unlockPhone = new Promise((resolve, reject) => {
//     let hasFingerprint = true;
//     let hasPIN = true;

//     setTimeout(() => {
//         if (hasFingerprint === true && hasPIN === true) {
//             resolve("Phone Unlocked");
//         } else {
//             reject("Access Denied");
//         }
//     }, 2000);
// })

// async function security() {
//     try {
//         const message = await unlockPhone;
//         console.log("Message: ",message);
//     } catch (error) {
//         console.log("Error: ",error);

//     }
// }
// security();

// const classEntry = new Promise((resolve, reject) => {
//     let isStudent = true;
//     let hasValidID = true;

//     setTimeout(() => {
//         if (isStudent === true && hasValidID === false) {
//             resolve("Welcome to class");
//         } else {
//             reject("Entry denied. Show your ID.")
//         }
//     }, 3000);
// })

// async function checkID() {
//     try {
//         const message = await classEntry;
//         console.log("Message",message);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// checkID();

// const checkBattery = new Promise((resolve, reject) => {
//     let batteryLevel = 19;

//     setTimeout(() => {
//         if (batteryLevel > 20) {
//             resolve("Laptop is starting.")
//         } else {
//             reject("Battery too low. Please charge.")
//         }
//     }, 2000);
// })

// async function bootLaptop() {
//     try {
//         const message = await checkBattery;
//         console.log("Message",message);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// bootLaptop();

// const BurgerShopOpen = new Promise((resolve, reject) => {
//     let shopOpen = true;
//     setTimeout(() => {
//        if(shopOpen){
//            resolve("Burger shop is open.");
//        } else {
//            reject("Burger shop is closed.")
//        }
//     }, 2000);
// })

// BurgerShopOpen
//     .then(success => {
//     console.log("Success",success);
//     })
//     .catch(failure => {
//         console.log("Failure",failure);
//     })

// const baking = new Promise((resolve, reject) => {
//     let ovenOn = true;
//     let temperature = 180;

//     setTimeout(() => {
//         if (ovenOn === true && temperature >= 180) {
//             resolve("Cake is baking");
//         } else {
//             reject("Cannot bake cake. Please check the temperature of oven.")
//         }
//     }, 2000);
// })

// baking
//     .then(success => {
//     console.log("Success",success);
//     })
//     .catch(failure => {
//         console.log("failure", failure);
// })

// const bookingRide = new Promise((resolve, reject) => {
//     let driverAvailable = true;
//     let locationEnabled = true;

//     setTimeout(() => {
//         if (driverAvailable === true && locationEnabled === false) {
//             resolve("Ride confirmed. Driver is on the way!")
//         } else {
//             reject("Booking failed. Please check driver or location settings.");
//         }
//     }, 2000);
// })

// async function startBooking() {
//     try {
//         const message = await bookingRide;
//         console.log("Success",message);
//     } catch (error) {
//         console.log("Failure",error);
//     }
// }

// startBooking();

// const pizzaShopOpen = new Promise((resolve, reject) => {
//     let shopOpen = true;
//     setTimeout(() => {
//         if (shopOpen) {
//             resolve("Pizza shop is open now.")
//         } else {
//             reject("Pizza shop is closed now.")
//         }
//     }, 3000);
// })

// pizzaShopOpen.
//     then(success => {
//     console.log("Success",success);
//     })
//     .catch(Failure => {
//         console.log("Failure",failure);
// })

// const delivery = new Promise((resolve, reject) => {
//     let packageArrived = true;
//     setTimeout(() => {
//         if (packageArrived) {
//            resolve("Your Package has arrived.")
//         } else {
//             reject("Delivery rejected.")
//        }
//     }, 2000);
// })

// delivery.
//     then(success => {
//     console.log("Success",success);
//     })
//     .catch(failure => {
//     console.log("Failure",failure);
// })

// const charge = new Promise((resolve, reject) => {
//     let batteryLevel = 100;
//     let charging = true;

//     setTimeout(() => {
//         if (charging === true && batteryLevel >= 100){
//         resolve("Battery Fully charged.")
//         } else {
//             reject("Battery is still charging.");
//        }
//     }, 3000);
// })

// async function details() {
//     try {
//     const message = await charge;
//     console.log("Message",message);

//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// details();

// const OrderFood = new Promise((resolve, reject) => {
//     let giveOrder = true;
//     let isOrdered = false;

//     setTimeout(() => {
//         if (giveOrder == true || isOrdered == false) {
//             resolve("Order received.")
//         } else {
//             reject("restaurant closed")
//         }
//     }, 2000);
// })

// async function food() {
//     try {
//         const message = await OrderFood;
//         console.log("Success",message);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }
// food()

// const boot = new Promise((resolve, reject) => {
//     let computerBoot = true;
//     setTimeout(() => {
//         if (computerBoot) {
//            resolve("Computer booted up.")
//         } else {
//             reject("No power source.")
//        }
//     }, 3000);
// })

// async function source() {
//     try {
//         const message = await boot;
//         console.log("Success",message);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }

// source();

// const login = new Promise((resolve, reject) => {
//     let username = "Admin";
//     let password = "1234";

//     setTimeout(() => {
//         if (username === "Admin" && password === "1234") {
//             resolve("Login Successful");
//         } else {
//             reject("Invalid Credentials");
//        }
//     }, 1000);
// })

// login.
//     then(success => {
//     console.log("Success",success);
//     })
//     .catch(failure => {
//     console.log("Failure",failure);
//     })

// const checkInternet = new Promise((resolve, reject) => {
//     let isConnected = true;
//     setTimeout(() => {
//         if (isConnected) {
//            resolve("Internet is connected.")
//         } else {
//             reject("Internet is disconnected.")
//        }
//     }, 2000);
// })

// async function check() {
//     try{
//         const message = await checkInternet;
//         console.log("Success",message);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }
// check();

// const login = new Promise((resolve, reject) => {
//     let username = "Admin";
//     let password = "1234";

//     setTimeout(() => {
//         if (username === "Admin" && password === "1234") {
//             resolve("Welcome user")
//         } else {
//             reject("Access denied")
//        }
//     }, 2000);
// })

// login.
//     then(success => {
//     console.log("Success",success);
//     })
//     .catch(failure => {
//     console.log("Failure",failure);
// })

const shopOpen = new Promise((resolve, reject) => {
  let pizzaShopOpen = true;
  setTimeout(() => {
    if (pizzaShopOpen) {
      resolve("It's open");
    } else {
      reject("It's closed");
    }
  }, 2000);
});

async function check() {
  try {
    const data = await shopOpen;
    console.log("Success", data);
  } catch (error) {
    console.log("Failure", error);
  }
}

check();
