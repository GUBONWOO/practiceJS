//callback

// const a = (callback) => {
//   setTimeout(() => {
//     console.log(1);
//     callback();
//   }, 1000);
// };
// const b = (callback) => {
//   setTimeout(() => {
//     console.log(2);
//     callback();
//   }, 1000);
// };
// const c = () => console.log(3);

// a(() => {
//   b(() => {
//     c();
//   });
// });

//Promise

// const a = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve();
//     }, 1000);
//   });
// };

// const b = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(2);
//       resolve();
//     }, 1000);
//   });
// };

// const c = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(3);
//       resolve();
//     }, 1000);
//   });
// };
// const d = () => console.log(4);

// a().then(b).then(c).then(d);

//Async await

// const a = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve();
//     }, 1000);
//   });
// };
// const b = () => console.log(2);

// const wrap = async () => {
//   await a();
//   b();
// };

// wrap();

//Resolve, Reject

// const delayAdd = (index, cb, errorCb) => {
//   setTimeout(() => {
//     if (index > 10) {
//       errorCb(`${index}는 10보다 클 수 없습니다.`);
//       return;
//     }
//     console.log(index);
//     cb(index + 1);
//   }, 1000);
// };
// delayAdd(
//   11,
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

const delayAdd = (index) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      if (index > 10) {
        reject(`${index}는 10보다 클 수 없습니다.`);
        return;
      }
      console.log(index);
      reslove(index + 1);
    }, 1000);
  });
};
delayAdd(2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const wrap = async () => {
  const res = await delayAdd(2);
  console.log(res);
};
wrap();
