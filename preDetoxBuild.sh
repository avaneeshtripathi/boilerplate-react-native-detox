rm -rf ./android/app/build/outputs/apk
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
rm -rf android/app/src/main/res/drawable-xxxhdpi && rm -rf android/app/src/main/res/drawable-xxhdpi && rm -rf android/app/src/main/res/drawable-xhdpi && rm -rf android/app/src/main/res/drawable-mdpi && rm -rf android/app/src/main/res/drawable-hdpi
