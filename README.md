# React Native Pixabay search

App that allows a user to perform an image search.
The app should allow the user to input a text query and display all the images for that query in a scrollable list.
Clicking on an image should bring the user to a detail page which displays that image along with some additional
information. The data source is the Pixabay API.

## Screenshots
| Search screen                                                                                                                                                         | Details screen                                                                                                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <img width="758" alt="Screenshot 2022-11-27 at 07 34 35" src="https://user-images.githubusercontent.com/33732531/204119450-4d66a878-2dd4-408e-b049-70cc706923f7.png"> | <img width="761" alt="Screenshot 2022-11-27 at 07 34 55" src="https://user-images.githubusercontent.com/33732531/204119453-90faf796-1dfc-4c26-be78-3b19c3da6cdf.png"> |

## Video
https://user-images.githubusercontent.com/33732531/204121627-695b8db5-2d6a-4327-825c-3bfb6ce0b696.mov



## Basic setup
1. Put .env file to the root
2. Make sure you have all the environment set up https://reactnative.dev/docs/environment-setup
3. Run `yarn`

### iOS launch
1. install Pods: `cd ios && pod install && cd ..`
2. run iOS simulator with `yarn ios`

### Android launch
1. run Android emulator with `yarn android`
