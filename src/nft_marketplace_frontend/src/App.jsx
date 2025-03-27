// import { html, render } from 'lit-html';
// // import { nft_marketplace_backend } from '../../nft_marketplace_backend';
// import logo from './logo2.svg';

// class App {
//   constructor() {
//     this.greeting = '';
//     this.render();
//   }

//   async handleSubmit(e) {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     this.greeting = await nft_marketplace_backend.greet(name);
//     this.render();
//   }

//   render() {
//     const body = html`
//       <main>
//         <img src="${logo}" alt="DFINITY logo" />
//         <br /><br />
//         <form id="greeting-form">
//           <label for="name">Enter your name: &nbsp;</label>
//           <input id="name" alt="Name" type="text" />
//           <button type="submit">Click Me!</button>
//         </form>
//         <section id="greeting">${this.greeting}</section>
//       </main>
//     `;
//     render(body, document.getElementById('root'));

//     document
//       .getElementById('greeting-form')
//       .addEventListener('submit', (e) => this.handleSubmit(e));
//   }
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NftListingsPage from './pages/NftListingsPage';
import NftDetailsPage from './pages/NftDetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import MintNftPage from './pages/MintNftPage';
import SellNftPage from './pages/SellNftPage';
import BuyNftPage from './pages/BuyNftPage';
import TradeNftPage from './pages/TradeNftPage';
import ConnectWalletPage from './pages/ConnectWalletPage';
import NavigationBar from './components/NavigationBar';
import NavBar from './components/NavBar'
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
      <NavigationBar />
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nfts" element={<NftListingsPage />} />
          <Route path="/nft/:id" element={<NftDetailsPage />} /> :id - це параметр для ідентифікатора NFT
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/mint" element={<MintNftPage />} />
          <Route path="/sell" element={<SellNftPage />} />
          <Route path="/buy/:id" element={<BuyNftPage />} /> :id - це параметр для ідентифікатора NFT
          <Route path="/trade/:id" element={<TradeNftPage />} /> :id - це параметр для ідентифікатора NFT
          <Route path="/connect-wallet" element={<ConnectWalletPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;