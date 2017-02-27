import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { OverviewContainer } from '../src/containers/Overview/OverviewContainer';

describe('Container: <OverviewContainer/>', function () {

  it('should have props for balanceHistory', function () {
    const wrapper = shallow(<OverviewContainer/>);
    expect(wrapper.props().balanceHistory).to.be.defined;
  });

  it('it should have className of .table-container', function () {
    const wrapper = shallow(<OverviewContainer/>);
    // console.log(wrapper.debug());
    expect(wrapper.find(<div className=".table-container" />).exists());
  });

});

