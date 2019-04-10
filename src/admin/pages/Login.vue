 <template lang='pug'>
   .wrapper
    .login
      .container
        .login__title Autorization
        .login__cross
          .login__cross-icon
        form.login-form(action="")
        .form__row
          label.form__block
            .form__block-title Login
            input.form__input(
              type='text',
              name='login',
              placeholder='Terminator_2000',
              required=''
              v-model="login"
            )
            .form__img
              .form__icon
        .form__row
          label.form__block
              .form__block-title Password
              input.form__input(
                type='password',
                name='password',
                placeholder='*****',
                required=''
                v-model="pass"
              )
              .form__img
                .form__icon-key
        .form__btn
          input.form__button(
            id="send" type="submit" value='Send'
            @click="submit"
          )
 </template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data () {
    return {
      login: '',
      pass: ''
    }
  },
  computed: {},
  methods: {
    submit() {
      axios.post('https://webdev-api.loftschool.com/login', {
        name: this.login,
        password: this.pass
      })
      .then((data) => {
        let result = data.data;
        window.localStorage.setItem('lftoken', result.token);
        window.localStorage.setItem('lfttl', result.ttl);

        this.$router.push({path: '/'});
      })
      .catch(console.error);
    }
  },
  components: {}
}
</script>


 <style lang='pcss' scoped>
  @import "../../styles/mixins.pcss";

  .wrapper {
    background-image: url('../../images/content/MountainBaloon.jpg');
    background-size: cover;
    position: absolute;
    top: 0;
    left:0;
    height: 100%;
    width: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
  }
  .wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../../images/content/bg-filter.png');
    z-index: 1;
  }
  .login {
    display: flex;
    align-self: center;
    z-index: 2;
    width: 32%;
    max-width: 563px;
    max-height: 517px;
    background-color: white;
    padding: 60px 0px 60px;
    position: relative;
  }
  .container {
    width: 73%;
  }
  .login__title {
    font-size: 36px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: center;
    color: #414c63;
    margin-bottom: 30px;
  }
  .login__cross {
    width: 19px;
    height: 19px;
    position: absolute;
    top: 30px;
    right: 5%;
  }
  .login__cross-icon {
    height: 100%;
    width: 100%;
    background: svg-load('../../images/icons/remove.svg',  fill= #414c63, height=100%, width=100%);
    background-repeat: no-repeat;
  }
  .form__row {
    margin-bottom: 40px;
    width: 100%;
    border-bottom: solid 2px #414c63;
  }
  .form__block {
    position: relative;
    padding-left: 15%;
  }
  .form__block-title {
    opacity: 0.3;
    font-family: OpenSans;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: left;
    color: rgba(65, 76, 99, 0.3);
    margin-left: 12%;
    margin-bottom: 20px;
  }
  .form__input {
    padding-bottom: 14px;
    margin-left: 12%;
    @include placeholder {
      font-size: 18px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 2.67;
      letter-spacing: normal;
      text-align: left;
      color: #414c63;

    }
  }
  .form__img {
    width: 27px;
    height: 30px;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: -7px;
  }
  .form__icon {
    height: 100%;
    width: 100%;
    background: svg-load('../../images/icons/user.svg',  fill= #c9ccd3, height=100%, width=100%);
    background-repeat: no-repeat;
  }
  .form__icon-key {
    height: 100%;
    width: 100%;
    background: url('../../images/content/key.png');
    background-repeat: no-repeat;
  }
  .form__btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .form__button {
      padding: 30px 115px;
      background: linear-gradient(to left, #5500f2, #8900ef );
      color: white;
      border-radius: 35px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      align-self: center;

    }
 </style>
