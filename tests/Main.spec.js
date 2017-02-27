import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Main from '../src/components/Main';
// import MiniOverviewContainer from '../containers/Overview/MiniOverviewContainer';
// import DepositWithdrawContainer from '../containers/Overview/DepositWithdrawContainer';

describe('Component: <Main/>', function () {

  it('it should have main-controller classname', function () {
    const wrapper = shallow(<Main/>);
    // console.log(wrapper.debug());
    expect(wrapper.contains(<div className="main-container" />));
  });



});

