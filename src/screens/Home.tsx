import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from '../styles/Home';
const Home = ({navigation}) => {


  const countries = ['xyz', 'tusd'];
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const questions = ['PASS', 'FAIL', 'N/A'];
  const [active, setActive] = useState(0);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Create the formatted date and time string
  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
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
                onPress={() => navigation.navigate('Hos')}
              />
            </View>
            <View style={styles.innerWrapper}>
              <Icon name="user" size={40} color="white" />
            </View>
            <View>
              <Text style={{fontSize: 20, color: 'white'}}>Post Trip </Text>
              <Text style={{fontSize: 20, color: 'white'}}>Inspection </Text>
            </View>
          </View>
          <View style={styles.mainContent}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.btn}>
              <Text
                style={styles.buttonText}>
                Truck Details
              </Text>
            </LinearGradient>
            <View style={styles.vin}>
              <Text>VIN</Text>
              <TextInput value="123748584844" style={styles.input} />
            </View>
            <View style={styles.vin}>
              <Text>Truck Unit Number</Text>
              <TextInput value="123748584844" style={styles.input} />
            </View>
            <View style={styles.vin}>
              <Text>Truck Plate Number</Text>
              <TextInput value="123748584844" style={styles.input} />
            </View>
            <View style={styles.vin}>
              <Text>Truck Plate Jurisdiction State</Text>
              <DropDownPicker
                open={open1}
                value={value}
                items={items}
                setOpen={setOpen1}
                setValue={setValue}
                setItems={setItems}
                // maxHeight={30}
                style={styles.picker1}
                placeholder="438947398479272"
              />
            </View>
            <View style={styles.vin}>
              <Text>Inspection Date & Time</Text>
              <View style={styles.date}>
                <View style={styles.left}>
                  <Icon
                    name="calendar"
                    size={20}
                    onPress={() => setOpen(true)}
                  />
                  <Text style={{marginLeft: 10}}>{formattedDate} </Text>
                </View>
                <View style={styles.right}>
                  <Icon2
                    name="time-outline"
                    size={20}
                    onPress={() => setOpen(true)}
                  />
                  <Text style={{marginLeft: 10}}>{formattedTime} </Text>
                </View>
              </View>
            </View>
            <View style={styles.vin}>
              <Text>Odometer</Text>
              <TextInput value="123748584844" style={styles.input} />
            </View>

            <View style={styles.vin}>
              <Text>Inspection Location</Text>
              <View style={styles.location}>
                <View style={styles.city}>
                  <Text>City</Text>
                  <View style={styles.cityDrop}>
                    <DropDownPicker
                      open={open1}
                      value={value}
                      items={items}
                      setOpen={setOpen1}
                      setValue={setValue}
                      setItems={setItems}
                      placeholder="City"
                      style={styles.picker}
                    />
                  </View>
                </View>
                <View style={styles.state}>
                  <Text>State</Text>
                  <View style={styles.cityDrop}>
                    <DropDownPicker
                      open={open1}
                      value={value}
                      items={items}
                      setOpen={setOpen1}
                      setValue={setValue}
                      setItems={setItems}
                      placeholder="State"
                      style={styles.picker}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.checkList}>
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.btn}>
                <Text style={styles.buttonText}>Inspection Checklist</Text>
              </LinearGradient>
            </View>
            <View style={styles.category}>
              <Text style={styles.buttonText}> Category</Text>
            </View>

            <View>
              <View style={styles.question}>
                <Text style={{marginTop: 10}}>Questions</Text>
              </View>
              <View style={styles.qstn}>
                {questions.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={[
                        index === 0 ? styles.btnWrapper : '',
                        index === 1 ? styles.wrong : '',
                        index === 2 ? styles.na : '',
                      ]}
                      key={index}>
                      <Text>{item} </Text>
                    </TouchableOpacity>
                  );
                })}
                <Icon name="camera" size={25} />
              </View>
            </View>
            <View>
              <View style={styles.question}>
                <Text style={{marginTop: 10}}>Questions</Text>
              </View>
              <View style={styles.qstn}>
                {questions.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={[
                        index === 0 ? styles.btnWrapper : '',
                        index === 1 ? styles.wrong : '',
                        index === 2 ? styles.na : '',
                      ]}
                      key={index}>
                      <Text>{item} </Text>
                    </TouchableOpacity>
                  );
                })}
                <Icon name="camera" size={25} />
              </View>
            </View>
            <View>
              <View style={styles.question}>
                <Text style={{marginTop: 10}}>Questions</Text>
              </View>
              <View style={styles.qstn}>
                {questions.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={[
                        index === 0 ? styles.btnWrapper : '',
                        index === 1 ? styles.wrong : '',
                        index === 2 ? styles.na : '',
                      ]}
                      key={index}>
                      <Text>{item} </Text>
                    </TouchableOpacity>
                  );
                })}
                <Text> ....</Text>
              </View>
            </View>
            <View>
              <View style={styles.question}>
                <Text style={{marginTop: 10}}>Questions</Text>
              </View>
              <View style={styles.qstn}>
                {questions.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={[
                        index === 0 ? styles.btnWrapper : '',
                        index === 1 ? styles.wrong : '',
                        index === 2 ? styles.na : '',
                      ]}
                      key={index}>
                      <Text>{item} </Text>
                    </TouchableOpacity>
                  );
                })}
                <Icon name="camera" size={25} />
              </View>
            </View>
            <View style={styles.checkList}>
              <LinearGradient
                colors={['red', 'green', 'orange']}
                style={styles.sign}>
                <Text style={styles.signText}>Sign</Text>
              </LinearGradient>
            </View>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;


