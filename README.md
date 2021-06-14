# choco-kanban

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# Manual Android Build
 - Make Sure you Have JDK and Android SDK Installed
 - Copy your keystore to project's root directory

### Step 1: Build the app
```bash
yarn build
```

### Step 2: Create Android Project
```bash
yarn cap add android
```

### Step 3: Copy Keystore
Copy your keystore manually to `android/app/keytore_filename.keystore`
```bash
# OR if using windows Run this command
yarn copy:ks
```

### Step 4: Set Gradle Variables
Append file `android/gradle.properties`
```bash
# Manual
MYAPP_RELEASE_STORE_FILE=<keytore_filename.keystore>
MYAPP_RELEASE_KEY_ALIAS=<alias>
MYAPP_RELEASE_STORE_PASSWORD=<password>
MYAPP_RELEASE_KEY_PASSWORD=<password>
# Or if using windows Run this command
yarn env:apk
```

### Step 5: Android Release Config
Add this data to `android/app/build.gradle`
```java
android {
    defaultConfig {
        ...
    }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
```

### Step 6: Generate Android Resources
```bash
yarn gen:res
```

### Step 6: Build 
```bash
yarn build:apk
```
