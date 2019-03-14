import React from 'react';
import ProductHero from '../../views/ProductHero.jsx';
import ProductHowItWorks from '../../views/ProductHowItWorks.jsx';
import AppFooter from '../../views/AppFooter.jsx';
import AppAppBar from '../../views/AppAppBar.jsx';
import '../../css/style.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <AppAppBar />
          <ProductHero />
          <ProductHowItWorks />
          <AppFooter />
        </React.Fragment>
      </div>
    );
  }
}

export default Home;
