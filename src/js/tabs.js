// const tabs = (() => {
//   const tabs = ['Home', 'Menu', 'Contact'];
//   let current = 'Home';
//   const init = () => {
//     try {
//       console.log('lsjnd');
//       return {
//         ok: 'Tabs generated!',
//       };
//     } catch (error) {
//       return { error: error.message };
//     }
//   }

//   const change = (tab = '') => {
//     try {
//       if (typeof tab !== 'string') throw new TypeError('Tab must be string');
//       if (!tabs.includes(tab)) throw new RangeError('Tab incorrect. Must be Home | Menu | Contact');

//       return {
//         ok: 'Tab Changed!',
//       };
//     } catch (error) {
//       return { error: error.message };
//     }
//   }
//   return {
//     init,
//     change
//   }
// })();

// export default tabs;