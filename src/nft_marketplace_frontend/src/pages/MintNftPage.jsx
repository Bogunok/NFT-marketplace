/* Сторінка мінту NFT: Інтерфейс для створення нових NFT (якщо це передбачено функціоналом вашого бекенду).*/

import React, { useState } from 'react';
import '../styles/mintNftPage.css';

function MintNftPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [asset, setAsset] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAssetChange = (event) => {
    setAsset(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Minting NFT with data:', { name, description, asset });
    // For now, let's just show a message
    alert('NFT minting initiated (this is a placeholder)');
  };

  return (
    <div className="mint-nft-page">
      <h1>Mint New NFT</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="asset">Asset (Image, Audio, Video):</label>
          <input
            type="file"
            id="asset"
            onChange={handleAssetChange}
            required
          />
        </div>
        <button type="submit">Mint NFT</button>
      </form>
    </div>
  );
}

export default MintNftPage;