import React from 'react';
import recycleGraphic from '../../../images/recycle-logo.svg';

import './LearnMore.scss';

class LearnMore extends React.Component {
  render() {
    return (
      <div className="LearnMore col-12">
          <h1 class="page-header">Donec magna lacus</h1>
          <p>Aliquam semper diam vel gravida porttitor. In nisi mi, elementum sit amet dui ac, cursus rhoncus lectus. Fusce id elit viverra, vulputate dui ut, faucibus magna.
            In ex leo, dictum vitae posuere sed, cursus vehicula nisl. Nulla semper nisi quis est auctor tincidunt. Quisque nibh ligula, tempus eget gravida rhoncus, maximus nec felis.
            Fusce eu magna semper, pharetra mauris sed, venenatis sapien. Proin at ex malesuada, pretium urna ac, viverra nisl. Vivamus nec efficitur enim, et semper felis.</p>
          <div>
            <h3 class="section-title">Quisque a laoreet</h3>
            <img src= { recycleGraphic } alt="recycle logo"></img>
            <p>Nulla quis ipsum tellus. In tempor viverra nulla, et aliquam nulla. Vestibulum blandit tellus vel lacus porttitor placerat. Donec varius enim arcu, non lobortis purus efficitur at.
              Mauris rhoncus id enim non ullamcorper. Maecenas varius tincidunt purus, non gravida lorem. Curabitur varius ex vitae sodales elementum.</p>
          </div>

          <div>
            <h3 class="section-title">Nulla accumsan</h3>
            <img src= { recycleGraphic } alt="recycle logo"></img>
            <p>Mauris pretium vestibulum laoreet. Suspendisse euismod in tellus at blandit. Duis iaculis ex nisl, a tristique dolor semper sit amet. Nullam eget blandit purus, et lacinia neque.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec efficitur vulputate eros, nec sollicitudin lectus malesuada vel.</p>
          </div>

          <div>
            <h3 class="section-title">Phasellus aliquam nisl sed</h3>
            <img src= { recycleGraphic } alt="recycle logo"></img>
            <p>Mauris pretium vestibulum laoreet. Suspendisse euismod in tellus at blandit. Duis iaculis ex nisl, a tristique dolor semper sit amet. Nullam eget blandit purus, et lacinia neque.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec efficitur vulputate eros, nec sollicitudin lectus malesuada vel.</p>
          </div>

          <div>
            <h3 class="section-title">Et hendrerit libero ante</h3>
            <img src= { recycleGraphic } alt="recycle logo"></img>
            <p>Mauris pretium vestibulum laoreet. Suspendisse euismod in tellus at blandit. Duis iaculis ex nisl, a tristique dolor semper sit amet. Nullam eget blandit purus, et lacinia neque.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec efficitur vulputate eros, nec sollicitudin lectus malesuada vel.</p>
          </div>

          <div>
            <h3 class="section-title">Nam in imperdiet augue</h3>
            <img src= { recycleGraphic } alt="recycle logo"></img>
            <p>Mauris pretium vestibulum laoreet. Suspendisse euismod in tellus at blandit. Duis iaculis ex nisl, a tristique dolor semper sit amet. Nullam eget blandit purus, et lacinia neque.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec efficitur vulputate eros, nec sollicitudin lectus malesuada vel.</p>
          </div>
      </div>
    );
  }
}

export default LearnMore;
