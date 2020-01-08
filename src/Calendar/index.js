import React, { Component } from 'react';
import { Calendar, Badge } from 'antd';
import moment from 'moment';

function getListData(value) {
  let listData;
  // switch (value.date()) {
  //   case 8:
  //     listData = [
  //       { type: 'warning', content: 'This is warning event.' },
  //     ];
  //     break;
  //   case 10:
  //     listData = [
  //       { type: 'warning', content: 'This is warning event.' },
  //     ];
  //     break;
  //   case 15:
  //     listData = [
  //       { type: 'warning', content: 'This is warning event' },
  //     ];
  //     break;
  //   default:
  // }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}



class CalendarContainer extends Component {

  state = {
    selectedValue: moment(),
    dates: [],
  };

  handleSelect = selectedValue => {
    const { dates } = this.state;

    this.setState({
      selectedValue,
      dates: [...dates, selectedValue]
    });
  }
  
  render(){
    const { selectedValue } = this.state;
    console.log(this.state);
    return (
      <Calendar value={selectedValue} onSelect={this.handleSelect} dateCellRender={dateCellRender} />
    )
  }
}

export default CalendarContainer;