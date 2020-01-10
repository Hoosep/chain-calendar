import React, { Component } from 'react';
import { Calendar, Icon, Row, Col } from 'antd';
import moment from 'moment';
import { localStorageUtility } from './../Utilities/localstorage';


class CalendarContainer extends Component {
  constructor(props){
    super(props);
    
    let dates = localStorageUtility.getDatesLocalStorage();
    console.log('dates', dates);
    this.state = {
      selectedValue: moment(),
      dates
    };
  }

  handleSelect = selectedValue => {
    const { dates } = this.state;

    console.log('selected', selectedValue);
    localStorageUtility.addDatesLocalStorage('dates', selectedValue);
    if(dates.length === 0){
      this.setState({
        selectedValue,
        dates: [selectedValue]
      });
    } else {
      let noSelectedValue = false;

      const result = dates.reduce((result, item) => {
        let equalDates = moment(item).isSame(selectedValue);
        if(equalDates) noSelectedValue = true;
        else result.push(item);

        return result;
      }, []);
      

      if(noSelectedValue){
        this.setState({
          selectedValue,
          dates: [...result]
        });
      } else {
        this.setState({
          selectedValue,
          dates: [...result, selectedValue]
        });
      }

    }
  }

  getListDates = date => {
    const { dates } = this.state;
    let listData;
    dates.map(item => {
      if(moment(date).isSame(item)){
        listData = [
          { isSame: true }
        ];
      }
    })

    return listData || [];
  }

  renderCellDate = date => {
    const listDates = this.getListDates(date);

    return listDates.map((item, i) => {
      return (
        <Row key={i} type="flex" justify="space-around" align="middle" style={{height: 'inherit'}}>
          <Col>
            <Icon 
              type="close"
              className="icon-close"
              />
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