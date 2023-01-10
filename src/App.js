import React from 'react';
import { Calender } from '@syncfusion/ej2-rcalendars';
import { DatePicker } from '@syncfusion/ej2-react-calendars';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <div>
        <CalenderComponent></CalenderComponent>
        <DatePickerComponent></DatePickerComponent>
        <RichTextEditor></RichTextEditor>
      </div>
    );
  }
}

export default App;
