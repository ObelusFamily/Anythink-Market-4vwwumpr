import React, { useState } from 'react';
import logo from '../../imgs/logo.png';
import agent from '../../agent';

const Banner = (props) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const onSearchChange = (event) => {
    props.onSearchFilter(
      event.target.value,
      (page) => agent.Items.byTitle(event.target.value),
      agent.Items.byTitle(event.target.value),
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part" onClick={() => setSearchVisible(true)}>
            get
          </span>
          {searchVisible && (
            <form>
              <input
                type="text"
                id="search-box"
                className="w-[250px]"
                placeholder="What is it that you truly desire?"
                name="term"
                onChange={onSearchChange}
              />
            </form>
          )}

          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
