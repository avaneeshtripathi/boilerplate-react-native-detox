# boilerplate-react-native-detox

###### 1. Initialise React Native and do necessary setup for typescript etc if needed (or consider an already ready app)

`npx react-native init boilerplate-react-native-detox --template react-native-template-typescript`

---

###### 2. Setup Detox

Note: Issues that may occur:

-   Installing Detox (postinstall script may fail)
    ```
    export DETOX_DISABLE_POSTINSTALL=true
    ```

1. Install Dependencies
   a. Install the latest version of Homebrew
   b. Install Node.js

    ```
    brew update && brew install node
    ```

    c. Install applesimutils

    ```
    brew tap wix/brew
    brew install applesimutils
    ```

    d. Install Detox command line tools (detox-cli)

    ```
    npm install -g detox-cli
    ```

2. Add Detox to your project
   a. Install detox

    ```
    yarn add detox -D
    ```

    b. Add Detox config to package.json

    ```
    "detox": {
        "configurations": {
            "android.emu.debug": {
                "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
                "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
                "type": "android.emulator",
                "device": {
                    "avdName": "Nexus_6_API_27"
                }
            }
        },
        "test-runner": "jest"
    }
    ```

3. Make configuration changes for detox to work
   a. Add Detox dependency to an Android project. In your root buildscript (i.e. build.gradle), register both google() and detox as repository lookup points in all projects:

    ```
    // Note: add the 'allproject' section if it doesn't exist
    allprojects {
        repositories {
            // ...
            google()
            maven {
                // All of Detox' artifacts are provided via the npm module
                url "$rootDir/../node_modules/detox/Detox-android"
            }
        }
    }
    ```

    In your app's buildscript (i.e. app/build.gradle) add this in dependencies section:

    ```
    dependencies {
        // ...
        androidTestImplementation('com.wix:detox:+') { transitive = true }
        androidTestImplementation 'junit:junit:4.12'
    }
    ```

    In your app's buildscript (i.e. app/build.gradle) add this to the defaultConfig subsection:

    ```
    android {
        // ...
        defaultConfig {
            // ...
            testBuildType System.getProperty('testBuildType', 'debug')  // This will later be used to control the test apk build type
            testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'
        }
    }
    ```

    Please be aware that the minSdkVersion in app's build.gadle needs to be at least 18.

    b. Add Kotlin. If your project does not already support Kotlin, add the Kotlin Gradle-plugin to your classpath in the root build-script (i.e.android/build.gradle):

    ```
    buildscript {
        // ...
        ext: {
            // ...
            kotlinVersion: "1.3.0"
        }

        dependencies: {
            // ...
            classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"
        }
    }
    ```

    c. Create Android Test class. Add the file android/app/src/androidTest/java/com/[your.package]/DetoxTest.java and fill as in:

    ```
    package com.example;

    import com.wix.detox.Detox;

    import org.junit.Rule;
    import org.junit.Test;
    import org.junit.runner.RunWith;

    import androidx.test.ext.junit.runners.AndroidJUnit4;
    import androidx.test.filters.LargeTest;
    import androidx.test.rule.ActivityTestRule;

    @RunWith(AndroidJUnit4.class)
    @LargeTest
    public class DetoxTest {

        @Rule
        public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(MainActivity.class, false, false);

        @Test
        public void runDetoxTests() {
            Detox.runTests(mActivityRule);
        }
    }
    ```

    Don't forget to change the package name to your project's.

4. Build and Run the tests:

```
detox init -r jest
detox build
detox test
```
