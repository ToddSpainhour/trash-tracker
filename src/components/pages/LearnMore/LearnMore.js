import React from 'react';

import Auth from '../Auth/Auth';

import './LearnMore.scss';

class LearnMore extends React.Component {
  render() {
    return (
      <div className="LearnMore col-12">
          <h1 className="page-header">Learn More</h1>
          <div>
            <h3 className="section-title">Landfills</h3>
            <p>From ancient humans discarding broken tools to you or me tossing out our sandwich wrapper, everyone has created trash
               in their lives, but unlike our ancestors, the amount of trash we produce today vastly outweighs those that came before us.
               The United States Environmental Protection Agency (EPA) says that in 2018, 292.4 million tons of solid waste was produced,
               which comes out to 4.9 pounds per person. Do you even know where your trash goes when you throw it away?
            </p>
          </div>

          <div>
            <h3 className="section-title">Recycling</h3>
            <p>Instead of sending everything to a landfill, some items can be recycled and turned into something new.
               Like shoes, a toothbrush, and even carry-on luggage made from plastic bottles, or even a skateboard from discarded fishing nets.
               Even though recycling is a vital part to addressing excess waste, it’s only one option available.
               We can also reduce the trash we produce by buying less, or finding ways to reuse items that we already have.
               Combining Reduce, Reuse, and Recycle in our daily routines can make a positive impact.
            </p>
          </div>

          <div>
            <h3 className="section-title">What can I do to help?</h3>
             <p>Simply thinking about how much you throw out and what items you can recycle is a step in the right direction.
                Learn more about the choices you make, then take an active role in the future by making small decisions daily.
              </p>
          </div>

          <Auth />
      </div>
    );
  }
}

export default LearnMore;
