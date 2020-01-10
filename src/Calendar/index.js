import React, { Component } from 'react';
import { Calendar, Icon, Row, Col } from 'antd';
import moment from 'moment';



class CalendarContainer extends Component {

  state = {
    selectedValue: moment(),
    dates: [],
  };

  handleSelect = selectedValue => {
    // const { dates } = this.state;

    const { dates } = this.state;

    if(dates.length === 0){
      this.setState({
        selectedValue,
        dates: [selectedValue]
      });
    } else {
      /* let result = dates.filter(date => {
        console.log('Date', date);
        console.log('SelectedV', selectedValue);
        let equalDates = moment(date).isSame(selectedValue);
        console.log(equalDates);

        if (equalDates) {
          return false;
        } else {
          return selectedValue;
        }
      }); */
  
      const result = dates.reduce((accumulator, item) => {
        let equalDates = moment(item).isSame(selectedValue);

        if(!equalDates) accumulator.push(selectedValue);

        return accumulator;


      }, []);

      console.log('Result', result);
      this.setState({
        selectedValue,
        dates: [...dates, selectedValue]
      });
      /* this.setState({
        selectedValue,
        dates: [...dates, selectedValue]
      }); */
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