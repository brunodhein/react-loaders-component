# React Loaders component by Bruno Dhein
# :warning: This component uses typescript
## The idea
* Create an React component with an collection of cool loaders made with css animations

## What is in the package?
* The package contains an simple react application with typescript where the main page is the loader itself,
you can use it to have an preview of it working

## How i use it?
* The first thing to do of course is download all it dependencies using

```console
npm install
```

* Them when everything is up just do

```console
npm start
```

You should see something like in this gif:
![loader gif](https://github.com/brunodhein/react-loaders-component/blob/master/src/assets/loader-example.gif) 
* The component has 3 functions: **Loader**, **ShowLoader** and **HideLoader**\
![functions image](https://github.com/brunodhein/react-loaders-component/blob/master/src/assets/functions.png)
and (for now) 3 properties: **id**, **title** and **type**\
![props image](https://github.com/brunodhein/react-loaders-component/blob/master/src/assets/loaderprops.png)
* The **id** is used with the Show and Hide functions when you want to show and hide
an specific Loader (if you have more than one in an page).\
![render image](https://github.com/brunodhein/react-loaders-component/blob/master/src/assets/loaderrender.png)
putting the id to show or hide the loader by id is simple, just pass the id as an argument of the function:
```javascript
ShowLoader('idExample')
HideLoader('idExample')
```
* The **title** is basically to show an message inside an h1 tag like in the first image.
And finally the **type** property (for now there's only one type) that is what let us change how will look
the loader\
* To change or add colors you musto go in the styles.css file in the root of the loader component, there's, in it begnning this:\
![colors vars image](https://github.com/brunodhein/react-loaders-component/blob/master/src/assets/colorvars.png)\
and you can put new colors by just doing this: 
```css
:root {
  --my-color-var: #0000; //<- change here
  ...other colors
}
```
## How i can contribute?
* Liked the project and want to add your own creations to it? Them just do an **pull request!**
Or if you found an bug or have any sugestion tell me, so we can turn this into an awsome and
useful component.
