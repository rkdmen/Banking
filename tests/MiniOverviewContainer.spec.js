import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import { MiniOverviewContainer } from '../src/containers/Overview/MiniOverviewContainer';
// import MiniOverviewContainer from '../containers/Overview/MiniOverviewContainer';
// import DepositWithdrawContainer from '../containers/Overview/DepositWithdrawContainer';

describe('Container: <MiniOverviewContainer/>', function () {

  it('it should have classname of .miniOverview', function () {
    const wrapper = shallow(<MiniOverviewContainer/>);
    // console.log(wrapper.debug());
    expect(wrapper.contains(<div className="miniOverview" />));
  });



});

