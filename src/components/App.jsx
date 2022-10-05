import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';

const axios = require('axios');

// const api_key = '29432159-064ba5645d6ae7f18ff2bb6d2';

export class App extends React.Component {
  state = {
    picture: '',
    page: 1,
  };

  LoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log(this.state.page);
  };

  handleFormSubmit = picture => {
    this.setState({ picture });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictureName={this.state.picture} page={this.state.page} />
        <Button LoadMore={this.LoadMore} />
      </div>
    );
  }
}
