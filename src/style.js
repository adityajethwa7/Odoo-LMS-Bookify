import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // style.css
  ':root': {
    'fontFamily': 'Arial, sans-serif'
  },
  '#app': {
    'maxWidth': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'form': {
    'display': 'flex',
    'flexDirection': 'column'
  },
  'label': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'input': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '4px'
  },
  'login-btn': {
    'backgroundColor': '#4CAF50',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '4px',
    'cursor': 'pointer',
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'p': {
    'cursor': 'pointer',
    'color': 'blue',
    'textDecoration': 'underline',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  }
});
