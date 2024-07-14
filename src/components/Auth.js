import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': 'Arial, sans-serif',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'backgroundColor': '#f0f0f0'
  },
  'container': {
    'backgroundColor': 'white',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'borderRadius': '10px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }],
    'textAlign': 'center'
  },
  'input': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '5px'
  },
  'button': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'color': 'green',
    'backgroundColor': 'white',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'green' }],
    'borderRadius': '5px',
    'cursor': 'pointer'
  },
  'links': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'link': {
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'color': 'black',
    'textDecoration': 'none'
  }
});
