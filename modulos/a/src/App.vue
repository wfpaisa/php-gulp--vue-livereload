<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify </span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!-- {{ message }} -->
      <hello>Bob</hello>
      <hello-world />
    </v-content>
  </v-app>
</template>

<script>

// El componente no es exportado desde el mismo entonces 
// hay que declararlo en `components` para poderlo utilizar
import HelloWorld from './components/HelloWorld'; 

// El componente es exportado con el nombre `hello` 
// por ende no es necesario declarlo en `componentes` 
import Hello from './components/Hello';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data () {
    return {
     message: 'Message tex' 
    }
  }
}
</script>
