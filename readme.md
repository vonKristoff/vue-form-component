# vue-forms-and-inputs

Working prototype for handling forms in Vue.

The idea is that you should be able to deploy this repo as a form component that handles its own errors, and can communicate between Vue apps of other JS app code via its Global Event Bus.

Rather than the use of inline `v-model` on input elements, each input is a configurable component that makes its behaviour easier to define and manipulate.

### Features
* Form and Error Classes
* Custom Inputs 
* Global Event Bus
* Plug-n-play