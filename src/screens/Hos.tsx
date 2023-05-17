import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles/Hos';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const Hos = ({navigation}) => {
  const [activeStyle, setActiveStyle] = useState(0);
  const dutyArr = [
    'Off Duty',
    'On Duty',
    'Yard Move',
    'Driving',
    'Slepper',
    'Off Duty Driving',
  ];
  const color = ['#E57C23', '#C07F00', '#E57C23'];
  const newColor = ['#99627A', '#99627A', '#99627A'];
  const activeColor = ['#263A29', '#D21312', '#C07F00'];
  const dutiesColor = ['#6DA9E4', '#070A52', '#ED2B2A'];
  const rangeColor = ['#FC4F00', '#F79540', '#FFD95A'];

  return (
    <>
      <ScrollView>
        <View style={styles.mainWrapper}>
          <View style={styles.headerWrapper}>
            <View style={styles.back}>
              <Icon
                name="angle-left"
                size={50}
                color="white"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
            <View style={styles.innerWrapper}>
              <Icon2 name="back-in-time" size={40} color="white" />
            </View>
            <View>
              <Text style={{fontSize: 20, color: 'white'}}>HOS </Text>
            </View>
          </View>
          <View style={styles.mainContent}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.btn}>
              <View style={styles.left}>
                <Text
                  style={styles.buttonText}
                  onPress={() => navigation.navigate('Home')}>
                  Driver
                </Text>
              </View>
              <View style={styles.right}>
                <Text
                  style={styles.buttonText}
                  onPress={() => navigation.navigate('Home')}>
                  XYZ
                </Text>
              </View>
            </LinearGradient>
            <View style={styles.coDriver}>
              <LinearGradient colors={color} style={styles.DriverBtn}>
                <View style={styles.coDriverleft}>
                  <Text style={styles.buttonText}>Co-Driver</Text>
                </View>
                <View style={styles.coDriverRight}>
                  <View style={styles.upper}>
                    <Text style={styles.buttonText}>XYZ</Text>
                  </View>
                  <View style={styles.lower}>
                    <Text style={styles.from}>From</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.from}>To</Text>
                    <TextInput style={styles.input} />
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.details}>
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.btn}>
                <View style={styles.left}>
                  <Text
                    style={styles.buttonText}
                    onPress={() => navigation.navigate('Home')}>
                    Vechicle e id
                  </Text>
                </View>
                <View style={styles.right}>
                  <Text
                    style={styles.buttonText}
                    onPress={() => navigation.navigate('Home')}>
                    123445567
                  </Text>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.dutyStatusWrapper}>
              <View style={styles.duty}>
                <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={styles.dutyBtn}>
                  <Text style={styles.buttonText}>Duty Status</Text>
                </LinearGradient>
              </View>
              <View style={styles.dutiesWrapper}>
                {dutyArr.map((item, index) => {
                  return (
                    <LinearGradient
                      colors={activeStyle === index ? activeColor : newColor}
                      style={styles.dutiesBtn}>
                      <Text style={styles.buttonText}>{item}</Text>
                    </LinearGradient>
                  );
                })}
              </View>
            </View>
            <View style={styles.location}>
              <View style={styles.loactionLeft}>
                <Text style={styles.locationText}>Location</Text>
                <Text style={styles.locationText}>Date</Text>
                <Text style={styles.locationText}>Time</Text>
              </View>
              <View style={styles.locationMiddle}>
                <Text style={styles.locationText}>: </Text>
                <Text style={styles.locationText}>: </Text>
                <Text style={styles.locationText}>: </Text>
              </View>
              <View style={styles.loactionRight}>
                <Text style={styles.locationText}>XYZ</Text>
                <Text style={styles.locationText}>XYZ</Text>
                <Text style={styles.locationText}>XYZ</Text>
              </View>
            </View>
            <View style={styles.onDutyWrapper}>
              <View style={styles.onDutyLeft}>
                <Text style={{fontSize: 20, color: 'black'}}>On Duty Time</Text>
              </View>
              <View style={styles.onDutyMiddle}>
                <LinearGradient
                  colors={dutiesColor}
                  style={styles.middleOne}
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1.0}}
                  locations={[0, 0.5, 0.6]}>
                  <Text style={{fontSize: 20, color: 'white'}}>00</Text>
                </LinearGradient>
                <LinearGradient
                  colors={dutiesColor}
                  style={styles.middleOne}
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1.0}}
                  locations={[0, 0.5, 0.6]}>
                  <Text style={{fontSize: 20, color: 'white'}}>00</Text>
                </LinearGradient>
                <LinearGradient
                  colors={dutiesColor}
                  style={styles.middleOne}
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1.0}}
                  locations={[0, 0.5, 0.6]}>
                  <Text style={{fontSize: 20, color: 'white'}}>00</Text>
                </LinearGradient>
              </View>
              <View style={styles.onDutyRight}>
                <View style={styles.rangeWrapper}>
                  <LinearGradient
                    colors={rangeColor}
                    style={styles.range}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0.2}}></LinearGradient>
                  <Text style={{color: 'white', paddingLeft: 20}}>
                    {' '}
                    7:32:45 left{' '}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.onDutyWrapper}>
              <View style={styles.onDutyLeft}>
                <Text style={{fontSize: 20, color: 'black'}}>Drive Time</Text>
              </View>
              <View style={styles.onDutyMiddle}>
                <LinearGradient
                  colors={dutiesColor}
                  style={styles.middleOne}
                  start={{x: 0.5, y: 0.4}}
                  end={{x: 0.5, y: 1.0}}
                  locations={[0, 0.5, 0.6]}>
                  <Text style={{fontSize: 20, color: 'white'}}>00</Text>
                </LinearGradient>
                <LinearGradient
                  colors={dutiesColor}
                  style={styles.middleOne}
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1.0}}
                  locations={[0, 0.5, 0.6]}>
                  <Text style={{fontSize: 20, color: 'white'}}>00</Text>
                </LinearGradient>
                <LinearGradient
                  colors={dutiesColor}
                  style={styles.middleOne}
                  start={{x: 0.5, y: -0.8}}
                  end={{x: 0.5, y: 1.0}}
                  locations={[0, 0.5, 0.6]}>
                  <Text style={{fontSize: 20, color: 'white'}}>00</Text>
                </LinearGradient>
              </View>
              <View style={styles.onDutyRight}>
                <View style={styles.rangeWrapper}>
                  <LinearGradient
                    colors={rangeColor}
                    style={styles.rangeDrive}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0.2}}></LinearGradient>
                  <Text style={{color: 'white', paddingLeft: 20}}>
                    {' '}
                    7:32:45 left{' '}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.onDutyWrapper}>
              <View style={styles.onDutyLeft}>
                <Text style={{fontSize: 20, color: 'black'}}>Shift Time</Text>
              </View>
              <View style={styles.onDutyMiddle}>
                <LinearGradient
                  colors={['#E57C23', '#E57C23', '#E57C23']}
                  style={styles.middleOne}
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1.0}}
                  locations={[0, 0.5, 0.6]}>
                  <Text style={{fontSize: 20, color: 'white'}}>00</Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#E57C23', '#E57C23', '#E57C23']}
                  style={styles.middleOne}
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1.0}}
                  locations={[0, 0.5, 0.6]}>
                  <Text style={{fontSize: 20, color: 'white'}}>00</Text>
                </LinearGradient>
                <LinearGradient
                  colors={['#E57C23', '#E57C23', '#E57C23']}
                  style={styles.middleOne}
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1.0}}
                  locations={[0, 0.5, 0.6]}>
                  <Text style={{fontSize: 20, color: 'white'}}>00</Text>
                </LinearGradient>
              </View>
              <View style={styles.onDutyRight}>
                <View style={styles.rangeWrapper}>
                  <LinearGradient
                    colors={rangeColor}
                    style={styles.shifRange}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0.2}}>
                    <Text style={{color: 'white', paddingLeft: 20}}>
                      7:32:45 left
                    </Text>
                  </LinearGradient>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Hos;
