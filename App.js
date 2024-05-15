import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Linking } from 'react-native';

const VCard = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

 const handleSubmit = () => {
    const name = formValues.name;
    const email = formValues.email;
    const message = formValues.message;
  };

  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.coverContainer}>
        <Image source={require('./2.jpg')} style={styles.cover} />
      </View>

      <View style={styles.profileContainer}>
        <Image source={require('./1.jpg')} style={styles.profilePic} />
        <Text style={styles.name}>Cjane Flores</Text>
        <Text style={styles.aboutMe}>
          I am one of the students at Global Reciprocal Colleges. I write stories on Wattpad as a hobby; I'm an avid reader and book collector also. I like to photograph the natural and beautiful surroundings.
        </Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.touchable} onPress={() => openURL('https://www.wattpad.com/user/MsBloodyKnight')}>
            <Image source={require('./15.jpg')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={() => openURL('https://www.instagram.com/itscjane/?hl=en')}>
            <Image source={require('./16.jpg')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={() => openURL('https://www.facebook.com/cjane.flores.1')}>
            <Image source={require('./17.jpg')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.emailContainer}>
          <TouchableOpacity style={styles.touchable} onPress={() => console.log('Click!')}>
            <Image source={require('./11.jpg')} style={styles.email} />
            <Text style={styles.email1}>florescjane@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={() => console.log('Click!')}>
            <Image source={require('./12.jpg')} style={styles.email} />
            <Text style={styles.email2}>0977-7373-689</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.servicesContainer}>
          <Text style={styles.services}>SERVICES</Text>
        </View>
        <View style={styles.serviceContainer}>
          <TouchableOpacity style={styles.touchable} onPress={() => console.log('Click!')}>
            <Image source={require('./13.jpg')} style={styles.service} />
            <Text style={styles.service0}>Photography</Text>
            <Text style={styles.service1}>
              Our photography services offer to highlight the beauty in every picture and preserve memories by meticulously and passionately capturing timeless moments.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={() => console.log('Click!')}>
            <Image source={require('./14.jpg')} style={styles.service} />
            <Text style={styles.service2}>Web Design</Text>
            <Text style={styles.service3}>
              Our site design services blend creativity and practicality to create digital experiences that fascinate and inspire, elevating your online presence.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.galleryContainer}>
          <Text style={styles.gallery}>GALLERY</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image source={require('./3.jpg')} style={styles.picture} />
          <Image source={require('./4.jpg')} style={styles.picture} />
        </View>
        <View style={styles.picture1Container}>
          <Image source={require('./5.jpg')} style={styles.picture1} />
          <Image source={require('./6.jpg')} style={styles.picture1} />
        </View>

        <View style={styles.productContainer}>
          <Text style={styles.product}>PRODUCTS</Text>
        </View>
        <View style={styles.bookContainer}>
          <Image source={require('./7.jpg')} style={styles.book} />
          <Image source={require('./8.jpg')} style={styles.book} />
        </View>
        <View style={styles.book1Container}>
          <Image source={require('./9.jpg')} style={styles.book1} />
          <Image source={require('./10.jpg')} style={styles.book1} />
        </View>

        <View style={styles.businesshourContainer}>
          <Text style={styles.businesshour}>BUSINESS HOURS</Text>
        </View>
        <View style={styles.bhContainer}>
          <Text style={styles.bh}>MONDAY: 8:00 - 4:30</Text>
          <Text style={styles.bh}>TUESDAY: 8:00 - 4:30</Text>
          <Text style={styles.bh}>WEDNESDAY: 8:00 - 4:30</Text>
          <Text style={styles.bh}>THURSDAY: 8:00 - 4:30</Text>
          <Text style={styles.bh}>FRIDAY: 8:00 - 4:30</Text>
          <Text style={styles.bh}>SATURDAY: 8:00 - 4:30</Text>
        </View>

        <View style={styles.contactContainer}>
          <Text style={styles.contact}>CONTACT US</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Name"
              onChangeText={(text) => setFormValues({ ...formValues, name: text })}
              value={formValues.name}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              onChangeText={(text) => setFormValues({ ...formValues, email: text })}
              value={formValues.email}
            />
            <TextInput
              style={styles.msg}
              multiline={true}
              placeholder="Enter Your Message"
              onChangeText={(text) => setFormValues({ ...formValues, message: text })}
              value={formValues.message}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
              <Text style={styles.sendButtonText}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  touchable: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    borderRadius: 50,
    marginRight: 9,
  },
  coverContainer: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    marginTop: -50,
  },
  cover: {
    width: '100%',
    height: '90%',
    borderWidth: 3,
    borderColor: 'brown',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 50,
    marginTop: -70,
    borderWidth: 3,
    borderColor: 'brown',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: -50,
    fontFamily: 'Times New Roman',
  },
  aboutMe: {
    marginTop: 15,
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    paddingVertical: 2,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  email: {
    marginStart: 70,
    width: 25,
    height: 25,
  },
  email1: {
    width: 160,
    height: 40,
    fontSize: 16,
    marginStart: 15,
    fontFamily: 'Times New Roman',
  },
  email2: {
    width: 130,
    height: 30,
    fontSize: 16,
    fontFamily: 'Times New Roman',
    marginStart: 30,
  },
  servicesContainer: {
    marginTop: 70,
  },
   services: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  serviceContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 20,
  },
  service: {
    marginStart:70,
    width: 30,
    height: 30,
    marginTop: 10,
  },
  service0: {
    width: 125,
    height: 110,
    fontSize: 16,
    marginStart:50,
    fontFamily: 'Times New Roman',
    color: 'brown',
  },
  service1: {
    width: 125,
    height: 110,
    fontSize: 12,
    marginLeft: 30,
    marginTop: -75,
    fontFamily: 'Times New Roman',
  },
  service2: {
    width: 125,
    height: 110,
    fontSize: 16,
    fontFamily: 'Times New Roman',
    marginStart: 50,
    color: 'brown',
  },
  service3: {
    width: 125,
    height: 110,
    fontSize: 12,
    marginLeft:30,
    marginTop: -75,
    fontFamily: 'Times New Roman',
  },
  gallery: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    marginTop: 50,
  },
  pictureContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 9,
  },
  picture: {
    width: 130,
    height: 130,
    marginHorizontal: 3,
    marginTop: 5, 
    borderRadius: 5,
  },
  picture1Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 9, 
  },
  picture1: {
    width: 130,
    height: 130,
    marginHorizontal: 3, 
    marginTop: 5,
    borderRadius: 5, 
  },
  product: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    marginTop: 30,
  }, 
  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 9, 
  },
  book: {
    width: 130,
    height: 130,
    marginHorizontal: 3,
    marginTop: 5, 
    borderRadius: 3,
  },
  book1Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 9, 
  },
  book1: {
    width: 130,
    height: 130,
    marginHorizontal: 3, 
    marginTop: 5,
    borderRadius: 3,
  },
  businesshourContainer: {
    marginTop: 10,
  },
   businesshour: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    marginTop: 50,
  },
  bhContainer: {
    marginTop: 10,
    width: 200,
    height: 190,
  },
   bh: {
    fontSize: 15,
    fontFamily: 'Times New Roman',
    backgroundColor: 'white', 
    shadowColor: 'silver',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 3,
  },
  contactContainer: {
    marginTop: -40,
  },
   contact: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  infoContainer: {
    marginTop: 10,
    padding: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -25,
  },
  input: {
    padding: 10,
    margin: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    borderWidth: 2, 
    borderColor: 'black', 
  },
  msg: {
    padding: 5,
    margin: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    borderWidth: 2, 
    borderColor: 'black', 
  },
  sendButton: {
    padding: 10,
    width: '40%',
    marginButtom: 30,
    borderRadius: 5,
    backgroundColor: 'brown',
  },
  sendButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default VCard;
