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

const classEntry = new Promise((resolve, reject) => {
    let isStudent = true;
    let hasValidID = true;

    setTimeout(() => {
        if (isStudent === true && hasValidID === false) {
            resolve("Welcome to class");
        } else {
            reject("Entry denied. Show your ID.")
        }
    }, 3000);
})

async function checkID() {
    try {
        const message = await classEntry;
        console.log("Message",message);
    } catch (error) {
        console.log("Error",error);
    }
}

checkID();