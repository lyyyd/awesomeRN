/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Index from './src_01_StyleSheet';
// import Index from './src_02_Flexbox/FlexDirection'
// import Index from './src_02_Flexbox/JustifyContent';
// import Index from './src_02_Flexbox/AlignItems';
// import Index from './src_02_Flexbox/Flex';
// import Index from './src_03_Dimensions';
// import Index from './src_04_Alert_Button';
// import Index from './src_05_Switch_StatusBar';
// import Index from './src_06_ActivityIndicator';
// import Index from './src_07_Image';
// import Index from './src_08_TextInput';
// import Index from './src_09_Touchable';
import Index from './src_10_ScrollView';
// import Index from './src_11_SectionList'
// import Index from './src_12_FlatList'
// import Index from './src_13_Animated'
// import Index from './src_14_WebView/WebViewURI'
// import Index from './src_14_WebView/WebViewHTML'
// import Index from './src_15_Picker'
// import Index from './src_16_Swiper'
// import Index from './src_17_AsyncStorage'
// import Index from './src_18_Geolocation'
// import Index from './src_19_Camera'
// import Index from './src_20_ImagePicker'
// import Index from './src_21_Loading'
// import Index from './src_22_StackNavigator'
// import Index from './src_23_BottomTab'
// import Index from './src_24_DrawerNavigator'
// import Index from './src_25_MaterailTopTabNavigator'
// import Index from './src_26_NestingNavigation'
// import Index from './src_27_PassingParameters'
// import Index from './src_28_API'
// import Index from './src_29_project'

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Index />
          {/* <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
