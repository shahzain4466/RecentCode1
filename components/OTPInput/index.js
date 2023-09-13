import React, { Component } from 'react';
import { View } from 'react-native';
import InputField from '../InputField';
import styles from './styles';

const inputAccessoryViewID = 'OTPInput';

export default class OTPInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeDigOne: '',
      codeDigOneFocus: false,
      codeDigTwo: '',
      codeDigTwoFocus: false,
      codeDigThree: '',
      codeDigThreeFocus: false,
      codeDigFour: '',
      codeDigFourFocus: false,
    };
  }

  componentDidMount() {
    if (this.fieldCodeDigOne) this.fieldCodeDigOne.focus();
  }

  getCode = () => {
    const { codeDigOne, codeDigTwo, codeDigThree, codeDigFour } = this.state;
    return codeDigOne + codeDigTwo + codeDigThree + codeDigFour;
  };

  resetCode = () => {
    this.setState({
      codeDigOne: '',
      codeDigOneFocus: false,
      codeDigTwo: '',
      codeDigTwoFocus: false,
      codeDigThree: '',
      codeDigThreeFocus: false,
      codeDigFour: '',
      codeDigFourFocus: false,
    });
  };

  render() {
    const { codeDigOne, codeDigTwo, codeDigThree, codeDigFour } = this.state;
    const {
      onComplete = () => { },
      onChangeText = () => { },
      otpError,
      value = '',
    } = this.props;

    const containerStyle = otpError
      ? styles.errorCodeContainerStyle
      : value?.length == 4
        ? styles.verifyCodeContainerStyle
        : styles.verifyCodeContainerUncheckedStyle;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: "100%",
        }}>
        <InputField
          fieldRef={(ref) => (this.fieldCodeDigOne = ref)}
          hideLabel={true}
          onParentPress={() => {
            if (this.fieldCodeDigOne) this.fieldCodeDigOne.focus();
          }}
          value={codeDigOne}
          containerStyle={containerStyle}
          customInputStyle={styles.inputBox}
          autoCapitalize={'none'}
          autoFocus={true}
          placeholder={'-'}
          caretHidden={true}
          keyboardType={'numeric'}
          onChangeText={(text) => {
            if (text?.length <= 1)
              this.setState({ codeDigOne: text }, () => {
                onChangeText(text);
                if (this.fieldCodeDigTwo) this.fieldCodeDigTwo.focus();
              });
          }}
          onFocus={(event) => {
            this.setState(
              {
                codeDigOne: '',
                codeDigTwo: '',
                codeDigThree: '',
                codeDigFour: '',
                codeDigOneFocus: true,
              },
              () => {
                onChangeText('');
              },
            );
          }}
          onKeyPress={(event) => {
            if (event.key == 'Backspace') {
              this.setState({ codeDigOne: '' }, () => {
                onChangeText('');
              });
            } else if (/^[0-9]/g.test(event.key)) {
              // if (this.fieldCodeDigTwo) this.fieldCodeDigTwo.focus()
            }
          }}
          inputAccessoryViewID={inputAccessoryViewID}
        />
        <InputField
          fieldRef={(ref) => (this.fieldCodeDigTwo = ref)}
          onParentPress={() => {
            if (this.fieldCodeDigTwo) this.fieldCodeDigTwo.focus();
          }}
          value={codeDigTwo}
          hideLabel={true}
          containerStyle={containerStyle}
          customInputStyle={styles.inputBox}
          autoCapitalize={'none'}
          placeholder={'-'}
          caretHidden={true}
          keyboardType={'numeric'}
          onChangeText={(text) => {
            if (text?.length < 2)
              this.setState({ codeDigTwo: text }, () => {
                onChangeText(codeDigOne + text);
                if (this.fieldCodeDigThree) this.fieldCodeDigThree.focus();
              });
          }}
          onFocus={() => {
            if (codeDigOne == '')
              if (this.fieldCodeDigOne) this.fieldCodeDigOne.focus();
            this.setState(
              { codeDigTwo: '', codeDigThree: '', codeDigFour: '' },
              () => {
                onChangeText(`${codeDigOne}`);
              },
            );
          }}
          onKeyPress={(event) => {
            if (event.key == 'Backspace') {
              this.setState({ codeDigTwo: '' }, () => {
                onChangeText(`${codeDigOne}`);
              });
              if (this.fieldCodeDigOne) this.fieldCodeDigOne.focus();
            } else if (/^[0-9]/g.test(event.key)) {
              // if (this.fieldCodeDigThree) this.fieldCodeDigThree.focus()
            }
          }}
          inputAccessoryViewID={inputAccessoryViewID}
        />
        <InputField
          fieldRef={(ref) => (this.fieldCodeDigThree = ref)}
          onParentPress={() => {
            if (this.fieldCodeDigThree) this.fieldCodeDigThree.focus();
          }}
          value={codeDigThree}
          hideLabel={true}
          containerStyle={containerStyle}
          customInputStyle={styles.inputBox}
          autoCapitalize={'none'}
          placeholder={'-'}
          caretHidden={true}
          keyboardType={'numeric'}
          onChangeText={(text) => {
            if (text?.length < 2)
              this.setState({ codeDigThree: text }, () => {
                onChangeText(codeDigOne + codeDigTwo + text);
                if (this.fieldCodeDigFour) this.fieldCodeDigFour.focus();
              });
          }}
          onFocus={() => {
            if (codeDigTwo == '')
              if (this.fieldCodeDigTwo) this.fieldCodeDigTwo.focus();
            this.setState({ codeDigThree: '', codeDigFour: '' }, () => {
              onChangeText(`${codeDigOne}${codeDigTwo}`);
            });
          }}
          onKeyPress={(event) => {
            if (event.key == 'Backspace') {
              this.setState({ codeDigThree: '' }, () => {
                onChangeText(`${codeDigOne}${codeDigTwo}`);
              });
              if (this.fieldCodeDigTwo) this.fieldCodeDigTwo.focus();
            } else if (/^[0-9]/g.test(event.key)) {
              // if (this.fieldCodeDigFour) this.fieldCodeDigFour.focus()
            }
          }}
          inputAccessoryViewID={inputAccessoryViewID}
        />
        <InputField
          fieldRef={(ref) => (this.fieldCodeDigFour = ref)}
          onParentPress={() => {
            if (this.fieldCodeDigFour) this.fieldCodeDigFour.focus();
          }}
          value={codeDigFour}
          hideLabel={true}
          containerStyle={containerStyle}
          customInputStyle={styles.inputBox}
          autoCapitalize={'none'}
          placeholder={'-'}
          caretHidden={true}
          keyboardType={'numeric'}
          onChangeText={(text) => {
            if (text?.length < 2)
              this.setState({ codeDigFour: text }, () => {
                let value = `${codeDigOne}${codeDigTwo}${codeDigThree}${text}`;
                onChangeText(value);
                onComplete(value);
              });
          }}
          onFocus={() => {
            if (codeDigThree == '')
              if (this.fieldCodeDigThree) this.fieldCodeDigThree.focus();
            this.setState({ codeDigFour: '' }, () => {
              onChangeText(`${codeDigOne}${codeDigTwo}${codeDigThree}`);
            });
          }}
          onKeyPress={(event) => {
            if (event.key == 'Backspace') {
              this.setState({ codeDigFour: '' }, () => {
                onChangeText(`${codeDigOne}${codeDigTwo}${codeDigThree}`);
              });
              if (this.fieldCodeDigThree) this.fieldCodeDigThree.focus();
            } else if (/^[0-9]/g.test(event.key)) {
              // Keyboard.dismiss()
            }
          }}
          inputAccessoryViewID={inputAccessoryViewID}
        />
      </View>
    );
  }
}
