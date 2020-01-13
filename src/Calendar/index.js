import React, { Component } from 'react';
import { Calendar, Icon, Row, Col } from 'antd';
import moment from 'moment';
import { localStorageUtility } from './../Utilities/localstorage';


class CalendarContainer extends Component {
  constructor(props){
    super(props);
    
    let dates = localStorageUtility.getDatesLocalStorage();

    this.state = {
      selectedValue: moment(),
      dates
    };
  }

  handleSelect = selectedValue => {
    const { dates } = this.state;
    
    let formatSelected = selectedValue.format('YYYY-MM-DD');
    localStorageUtility.addDatesLocalStorage('dates', formatSelected);
    if(dates.length === 0){
      this.setState({
        selectedValue,
        dates: [formatSelected]
      });
    } else {
      let noSelectedValue = false;

      const result = dates.reduce((result, item) => {
        let equalDates = moment(item).isSame(formatSelected);
        
        if(equalDates) noSelectedValue = true;
        else result.push(item);

        return result;
      }, []);
      
      console.log('result', result);
      if(noSelectedValue){
        this.setState({
          selectedValue,
          dates: [...result]
        });
      } else {
        this.setState({
          selectedValue,
          dates: [...result, formatSelected]
        });
      }

    }
  }

  getListDates = date => {
    const { dates } = this.state;
    let listData;
    dates.forEach(item => {
      let formatDate = moment(date).format('YYYY-MM-DD');

      if(formatDate === item){
        listData = [
          { isSame: true }
        ];
      }
    });

    return listData || [];
  }

  renderCellDate = date => {
    
    const listDates = this.getListDates(date);
    
    return listDates.map((item, i) => {
      return (
        <Row key={i} type="flex" justify="space-around" align="middle" style={{height: 'inherit'}}>
          <Col xs={24}>
            <ul class="variations">
              <li>
                <span class="close blades black"></span>
              </li>
            </ul>
          </Col>
        </Row>
      )
    })
  }
  
  render(){
    const { selectedValue } = this.state;

    return (
      <Calendar value={selectedValue} onSelect={this.handleSelect} dateCellRender={this.renderCellDate} />
    )
  }
}

export default CalendarContainer;