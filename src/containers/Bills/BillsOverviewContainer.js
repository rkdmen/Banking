import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Grid} from 'semantic-ui-react'
import Bills from '../../components/Bills/Bills'
import ScheduleBillContainer from './ScheduleBillContainer';
import BillsAddPayeeContainer from './BillsAddPayeeContainer';
import { toTop } from '../../helper/helper';
import { getBalance } from '../../actions/actions';

class BillsOverviewContainer extends Component {
  constructor(props) {
    super(props);
   }

  componentDidMount() {
    this.props.getBalance();
  }

  render() {
    return (
      <Container className='BillsOverviewContainer'>
        <h1>Bills</h1>
        <p style={{margin:'5px', minWidth:'70px'}} className='bold'>Checking Balance: ${!this.props.totalBalance?'':this.props.totalBalance}</p>
        <Grid stretched stackable>
          <Grid.Column width={3}>
            <ScheduleBillContainer />
          </Grid.Column>
          <Grid.Column width={13}>
            <BillsAddPayeeContainer />
            {
              !this.props.billsData?'Loading...':
              this.props.billsData.map((item, idx)=>{
                return (
                    <div key={idx}>
                      <Bills
                        type={item.type}
                        acc={item.acc}
                        dueBalance={item.balance}
                      />
                    </div>
                )
              })
            }
          </Grid.Column>
        </Grid>
        <div onClick={toTop} className='circleDiv'>Top</div>
      </Container>
      )
  }
}

BillsOverviewContainer.propTypes = {
    billsData: React.PropTypes.array,
    totalBalance: React.PropTypes.number,
    getBalance: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    billsData:state.reducer.billsData,
    totalBalance: state.reducer.balanceData.totalBalance
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBalance }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BillsOverviewContainer)
