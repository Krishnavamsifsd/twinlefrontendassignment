import React, { useState } from 'react'

const brands = [
  'bb Combo',
  'Fresho',
  'Gopalan Organic',
  'Hoovu Fresh',
  'Organic',
  'USA',
  'Brand1',
  'Brand2',
  'Brand3',
  'Brand4',
  'Brand5',
  'Brand6',

];

const seasons = ["Summer Fruits", "Summer Veggies", "Winter Fruits", "Winter Veggies"];

const SideBar = ({products , onSort}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBrandCheckboxChange = (event) => {
    const brandName = event.target.value;
    if (event.target.checked) {
      setSelectedBrands([...selectedBrands, brandName]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    }
  };

  const handleSeasonCheckboxChange = (event) => {
    const seasonName = event.target.value;
    if (event.target.checked) {
      setSelectedSeasons([...selectedSeasons, seasonName]);
    } else {
      setSelectedSeasons(selectedSeasons.filter((season) => season !== seasonName));
    }
  };

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryCounts = products.reduce((acc, product) => {
    const { main_category } = product;
    if (acc[main_category]) {
      acc[main_category]++;
    } else {
      acc[main_category] = 1;
    }
    return acc;
  }, {});

  const handleSortChange = (event) => {
    onSort(event.target.value);
  };


  return (
    <div style={{maxHeight: '90vh', overflowY: 'scroll', position:'fixed',marginTop:'65px', backgroundColor:'#e4e6eb',padding:'5px'}}>
      <h2>Categories</h2>
      <ul style={{ listStyle: 'none' }}>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <li key={category}>
            {category} ({count})
          </li>
        ))}
      </ul>
      <div>
      
      <label htmlFor="sort-select"><h2>Sort by:</h2> </label>
          <select id="sort-select" onChange={handleSortChange} >
            <option value="">Select</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
          
      </div>
      <h2>Brands</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type='search' value={searchTerm} onChange={handleSearch} style={{ flex: '1', marginRight: '10px', padding: '5px' }}/>
      </div>
      <ul style={{ maxHeight: '200px', overflowY: 'scroll', listStyle:'none'}}>
        {filteredBrands.map((brand) => (
          <li key={brand}>
            <label>
              <input
                type='checkbox'
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={handleBrandCheckboxChange}
              />
              {brand}
            </label>
          </li>
        ))}
      </ul>
      <h2>Seasonal</h2>
      <ul style={{listStyle:'none'}}>
        {seasons.map((season) => (
          <li key={season}>
            <label>
              <input
                type='checkbox'
                value={season}
                checked={selectedSeasons.includes(season)}
                onChange={handleSeasonCheckboxChange}
              />
              {season}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
