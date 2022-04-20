/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KEY_CONFIGS} from './configs.key';
import {encryptAES} from './createConnectToken';
import payME, {LANGUAGES} from 'react-native-payme-sdk';
import ModalDropdown from 'react-native-modal-dropdown';

const PAY_CODE = {
  PAYME: 'PAYME',
  ATM: 'ATM',
  CREDIT: 'CREDIT',
  MANUAL_BANK: 'MANUAL_BANK',
  VN_PAY: 'VN_PAY',
  MOMO: 'MOMO',
  ZALO_PAY: 'ZALO_PAY',
};

const App = () => {
  const [env, setEnv] = React.useState('sandbox');
  const [showEditKey, setShowEditKey] = React.useState(false);
  const [keys, setKeys] = React.useState({
    appId: KEY_CONFIGS[env].appId,
    appToken: KEY_CONFIGS[env].appToken,
    publicKey: KEY_CONFIGS[env].publicKey,
    privateKey: KEY_CONFIGS[env].privateKey,
    secretKey: KEY_CONFIGS[env].secretKey,
    storeId: KEY_CONFIGS[env].storeId,
  });

  const [balancce, setBalance] = useState(0);
  const [showLog, setShowLog] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [userID, setUserID] = useState('0795550300');
  const [phone, setPhone] = useState('0795550300');
  const [language, setLanguage] = useState(LANGUAGES.VIETNAMESE);

  React.useEffect(() => {
    setKeys({
      appId: KEY_CONFIGS[env].appId,
      appToken: KEY_CONFIGS[env].appToken,
      publicKey: KEY_CONFIGS[env].publicKey,
      privateKey: KEY_CONFIGS[env].privateKey,
      secretKey: KEY_CONFIGS[env].secretKey,
      storeId: KEY_CONFIGS[env].storeId,
    });
    setIsLogin(false);
    setBalance(0);
  }, [env]);

  const getWalletInfo = () => {
    payME.getWalletInfo(
      response => {
        console.log('response getWalletInfo', response);
        setBalance(response?.Wallet?.balance ?? 0);
      },
      error => {
        console.log('error getWalletInfo', error);
        setBalance(0);
      },
    );
  };

  const changeLanguage = () => {
    const newLang =
      language === LANGUAGES.VIETNAMESE
        ? LANGUAGES.ENGLISH
        : LANGUAGES.VIETNAMESE;
    setLanguage(newLang);
    payME.setLanguage(newLang);
  };

  const onLogin = () => {
    setIsLogin(false);
    const connectToken = encryptAES(
      JSON.stringify({
        userId: userID,
        phone,
        timestamp: Date.now(),
      }),
      keys.secretKey,
    );
    const configColor = ['#75255b', '#9d455f'];
    payME.init(
      keys.appToken,
      keys.publicKey,
      connectToken,
      keys.privateKey,
      configColor,
      language,
      env.toUpperCase(),
    );
    payME.login(
      response => {
        console.log('response login', response);
        setIsLogin(true);
        getWalletInfo();
      },
      error => {
        console.log('error login', error);
        Alert.alert('login fail', error?.message ?? '');
      },
    );
  };
  const onLogout = () => {
    setIsLogin(false);
    setBalance(0);
  };

  const openWallet = () => {
    payME.openWallet(
      response => {
        console.log('response openWallet', response);
      },
      error => {
        console.log('error, openWallet', error);
        Alert.alert('Erorr openWallet', error.message ?? 'err');
      },
    );
  };

  const openHistory = () => {
    payME.openHistory(
      response => {
        console.log('response openHistory', response);
      },
      error => {
        console.log('error, openHistory', error);
        Alert.alert('Erorr openHistory', error.message ?? 'err');
      },
    );
  };

  const closeSDK = () => payME.close();

  const deposit = (amount = 10000, closeWhenDone = true) => {
    payME.deposit(
      amount,
      closeWhenDone,
      response => {
        console.log('response deposit', response);
      },
      error => {
        console.log('error deposit', error);
      },
    );
  };
  const withdraw = (amount = 10000, closeWhenDone = false) => {
    payME.withdraw(
      null,
      closeWhenDone,
      response => {
        console.log('response withdraw', response);
      },
      error => {
        console.log('error withdraw', error);
      },
    );
  };
  const transfer = (
    amount = 10000,
    description = 'test description',
    closeWhenDone = true,
  ) => {
    payME.transfer(
      amount,
      description,
      closeWhenDone,
      response => {
        console.log('response transfer', response);
      },
      error => {
        console.log('error transfer', error);
      },
    );
  };

  const pay = ({payCode, amount = 10000, showUIResult = true}) => {
    payME.pay(
      amount,
      'note',
      Date.now().toString(),
      Number(keys.storeId),
      null,
      'extraData',
      showUIResult,
      payCode,
      response => {
        console.log('response pay', response);
      },
      error => {
        console.log('error pay', error);
        Alert.alert('Error pay', JSON.stringify(error));
      },
    );

    // const payCode = 'PAYME'; // MANUAL_BANK
    // setTimeout(() => {
    //   closeSDK();
    // }, 5000)
  };

  const getAccountInfo = () => {
    payME.getAccountInfo(
      response => {
        console.log('response getAccountInfo', response);
        Alert.alert('AccountInfo', JSON.stringify(response));
      },
      error => {
        console.log('error getAccountInfo', error);
      },
    );
  };

  const getSupportedServices = () => {
    payME.getSupportedServices(
      response => {
        console.log('response getSupportedServices', response);
        Alert.alert('SupportedServices', JSON.stringify(response));
      },
      error => {
        console.log('error getSupportedServices', error);
      },
    );
  };

  const openService = serviceCode => {
    payME.openService(
      {
        code: serviceCode,
        description: 'Mã ĐT',
      },
      response => {
        console.log('response openService', response);
      },
      error => {
        console.log('error openService', error);
      },
    );
  };

  const openKYC = () => {
    payME.openKYC(
      response => {
        console.log('response openKYC', response);
      },
      error => {
        console.log('error openKYC', error);
      },
    );
  };

  const payQRCode = ({qr = 'qr', payCode = 'ATM', isShowResultUI = true}) => {
    const qrc = `OPENEWALLET|null|PAYMENT|10000|Chuyentien|${Date.now().toString()}|null`;
    payME.payQRCode(
      qrc,
      payCode,
      isShowResultUI,
      response => {
        console.log('response payQRCode', response);
      },
      error => {
        console.log('error payQRCode', error);
      },
    );
  };

  const scanQR = ({payCode}) => {
    payME.scanQR(
      payCode,
      response => {
        console.log('response scanQR', response);
      },
      error => {
        console.log('error scanQR', error);
      },
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView
          style={{flex: 1, zIndex: 1}}
          contentContainerStyle={{padding: 10}}
          bounces={false}>
          <SelectEnv
            env={env}
            setEnv={setEnv}
            showEditKey={showEditKey}
            setShowEditKey={setShowEditKey}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Language:</Text>
            <TouchableOpacity
              onPress={changeLanguage}
              style={{borderWidth: 1, marginLeft: 10, padding: 5}}>
              <Text>{language === LANGUAGES.VIETNAMESE ? 'Vi' : 'En'}</Text>
            </TouchableOpacity>
          </View>
          {showEditKey ? (
            <EditKey
              keys={keys}
              setKeys={setKeys}
              showLog={showLog}
              setShowLog={setShowLog}
            />
          ) : (
            <>
              <Login
                phone={phone}
                setPhone={setPhone}
                userID={userID}
                setUserID={setUserID}
                onLogin={onLogin}
                onLogout={onLogout}
              />
              {isLogin && (
                <FuntionDemo
                  balancce={balancce}
                  getBalance={getWalletInfo}
                  openWallet={openWallet}
                  openHistory={openHistory}
                  deposit={deposit}
                  withdraw={withdraw}
                  transfer={transfer}
                  pay={pay}
                  getAccountInfo={getAccountInfo}
                  getSupportedServices={getSupportedServices}
                  openService={openService}
                  openKYC={openKYC}
                  scanQR={scanQR}
                  payQRCode={payQRCode}
                />
              )}
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const SelectEnv = ({env, setEnv, showEditKey, setShowEditKey}) => {
  return (
    <View
      style={{
        // backgroundColor: 'red',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text>Enviroment</Text>
      <Env env={env} setEnv={setEnv} />
      <TouchableOpacity onPress={() => setShowEditKey(!showEditKey)}>
        <Image
          source={require('./images/settings.png')}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

const Env = ({env, setEnv}) => {
  const [showListEnv, setShowListEnv] = React.useState(false);
  const onPressEnv = value => {
    setShowListEnv(false);
    setEnv(value);
  };
  const listEnv = ['sandbox', 'dev', 'production'];
  return (
    <View
      style={{
        flex: 1,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          flexDirection: 'row',
        }}
        onPress={() => setShowListEnv(true)}>
        <Text style={{marginRight: 5}}>{env}</Text>
        <Image
          source={require('./images/arrow-down.png')}
          style={{width: 20, height: 20}}
        />

        {showListEnv && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              backgroundColor: 'white',
              zIndex: 9,
            }}>
            {listEnv.map(i => (
              <TouchableOpacity
                key={i}
                style={{marginBottom: 10}}
                onPress={() => onPressEnv(i)}>
                <View>
                  <Text>{i}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const EditKey = ({keys, setKeys, showLog, setShowLog}) => {
  const onSetValue = (name, text) => {
    setKeys({...keys, [name]: text});
  };
  const getMultiline = name => {
    const a = ['publicKey', 'privateKey'];
    if (a.includes(name)) {
      return true;
    }
    return false;
  };
  return (
    <View style={{backgroundColor: 'blue', zIndex: -1}}>
      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          paddingVertical: 5,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text>Show Log:</Text>
          <TouchableOpacity
            style={{marginLeft: 5, borderWidth: 1}}
            onPress={() => setShowLog(!showLog)}>
            <Text>{showLog ? 'TRUE' : 'FALSE'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{flex: 1, borderWidth: 1, alignItems: 'center'}}
          onPress={() => console.log('showlog1')}>
          <Text>RESTORE DEFAULT</Text>
        </TouchableOpacity>
      </View>
      {Object.keys(keys).map(i => (
        <BlockEdit
          key={i}
          name={i}
          value={keys[i]}
          setValue={onSetValue}
          multiline={getMultiline(i)}
        />
      ))}
    </View>
  );
};

const BlockEdit = ({name, value, setValue, multiline = false}) => {
  return (
    <View style={{marginVertical: 5}}>
      <Text>{name}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 5,
          backgroundColor: 'white',
          marginTop: 5,
        }}
        value={value}
        onChangeText={text => setValue(name, text)}
        multiline={multiline}
      />
    </View>
  );
};
const Login = ({userID, setUserID, phone, setPhone, onLogin, onLogout}) => {
  return (
    <View style={{zIndex: -1}}>
      <View style={{width: '100%'}}>
        <Text style={{marginBottom: 5}}>UserID</Text>
        <TextInput
          style={{
            padding: 5,
            paddingHorizontal: 10,
            borderWidth: 1,
            width: '100%',
            borderRadius: 5,
            borderColor: 'grey',
          }}
          value={userID}
          onChangeText={text => setUserID(text)}
          placeholder="required"
          keyboardType="numeric"
        />
      </View>

      <View style={{width: '100%'}}>
        <Text style={{marginBottom: 5}}>Phone Number</Text>
        <TextInput
          style={{
            padding: 5,
            paddingHorizontal: 10,
            borderWidth: 1,
            width: '100%',
            borderRadius: 5,
            borderColor: 'grey',
          }}
          value={phone}
          onChangeText={text => setPhone(text)}
          placeholder="required"
          keyboardType="numeric"
        />
      </View>

      <View style={{width: '100%', marginTop: 10, flexDirection: 'row'}}>
        <TouchableOpacity style={styles.btnLogin} onPress={() => onLogin?.()}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnLogin, {marginLeft: 15}]}
          onPress={() => onLogout?.()}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FuntionDemo = ({
  balancce,
  getBalance,
  openWallet,
  openHistory,
  deposit,
  withdraw,
  transfer,
  pay,
  getAccountInfo,
  getSupportedServices,
  openService,
  openKYC,
  scanQR,
  payQRCode,
}) => {
  const [moneyDeposit, setMoneyDeposit] = useState('10000');
  const [moneyWithdraw, setMoneyWithdraw] = useState('10000');
  const [moneyTransfer, setMoneyTransfer] = useState('10000');
  const [moneyPay, setMoneyPay] = useState('10000');
  const [service, setService] = useState('WATE');
  const [payCode, setPayCode] = useState('');

  return (
    <View style={{zIndex: -1}}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#e9e9e9',
          padding: 16,
          marginTop: 15,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>Balance</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 10}}>{`${balancce} đ`}</Text>
            <TouchableOpacity onPress={() => getBalance?.()}>
              <Image
                source={require('./images/refresh.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.btnOpenWallet}
          activeOpacity={0.8}
          onPress={() => openWallet?.()}>
          <Text>OPEN WALLET</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnOpenWallet}
          activeOpacity={0.8}
          onPress={() => openHistory?.()}>
          <Text>OPEN HISTORY</Text>
        </TouchableOpacity>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={styles.btnDeposit}
            activeOpacity={0.8}
            onPress={() => deposit?.(Number(moneyDeposit ?? 0))}>
            <Text>DEPOSIT</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.inputMoney}
            value={moneyDeposit}
            onChangeText={text => setMoneyDeposit(text)}
            placeholder="Nhập số tiền"
            keyboardType="numeric"
            maxLength={9}
          />
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={styles.btnDeposit}
            activeOpacity={0.8}
            onPress={() => withdraw?.(Number(moneyWithdraw ?? 0))}>
            <Text>WITHDRAW</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.inputMoney}
            value={moneyWithdraw}
            onChangeText={text => setMoneyWithdraw(text)}
            placeholder="Nhập số tiền"
            keyboardType="numeric"
            maxLength={9}
          />
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={styles.btnDeposit}
            activeOpacity={0.8}
            onPress={() => transfer?.(Number(moneyTransfer ?? 0))}>
            <Text>TRANSFER</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.inputMoney}
            value={moneyTransfer}
            onChangeText={text => setMoneyTransfer(text)}
            placeholder="Nhập số tiền"
            keyboardType="numeric"
            maxLength={9}
          />
        </View>

        <View
          style={{
            flex: 1,
            marginTop: 15,
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 5,
          }}>
          <ModalDropdown
            options={Object.keys(PAY_CODE).map(item => item)}
            onSelect={(_, value) => setPayCode(value)}
            style={{
              padding: 16,
              width: '100%',
            }}
          />
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={styles.btnDeposit}
            activeOpacity={0.8}
            onPress={() => pay?.({payCode, amount: Number(moneyPay ?? 0)})}>
            <Text>PAY</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.inputMoney}
            value={moneyPay}
            onChangeText={text => setMoneyPay(text)}
            placeholder="Nhập số tiền"
            keyboardType="numeric"
            maxLength={9}
          />
        </View>

        <TouchableOpacity
          style={styles.btnOpenWallet}
          activeOpacity={0.8}
          onPress={() => getAccountInfo?.()}>
          <Text>GET ACCOUNT INFO</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.btnOpenWallet}
          activeOpacity={0.8}
          onPress={() => getListPaymentMethod?.()}
        >
          <Text>GET LIST PAYMENT METHOD</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.btnOpenWallet}
          activeOpacity={0.8}
          onPress={() => getSupportedServices?.()}>
          <Text>GET LIST SERVICES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOpenWallet}
          activeOpacity={0.8}
          onPress={() => openKYC?.()}>
          <Text>OPEN KYC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOpenWallet}
          activeOpacity={0.8}
          onPress={() => scanQR?.({payCode})}>
          <Text>SCANQR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOpenWallet}
          activeOpacity={0.8}
          onPress={() => payQRCode?.({payCode})}>
          <Text>payQRCode</Text>
        </TouchableOpacity>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={styles.btnDeposit}
            activeOpacity={0.8}
            onPress={() => openService?.(service)}>
            <Text>OPEN SERVICE</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.inputMoney}
            value={service}
            onChangeText={text => setService(text)}
          />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    borderColor: 'grey',
  },
  inputPhone: {
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    width: '100%',
    borderRadius: 5,
    borderColor: 'grey',
  },
  btnOpenWallet: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    elevation: 2,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  btnDeposit: {
    width: '30%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  inputMoney: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
    marginLeft: 10,
    backgroundColor: 'white',
  },
  inputToken: {
    width: '100%',
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    backgroundColor: 'white',
    marginTop: 5,
  },
});
